import os
import re,json,html,sys,os,glob
from html.parser import HTMLParser
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','..'))
SP=os.path.dirname(os.path.abspath(__file__))+'/'
def norm(t):
    t=html.unescape(t)
    for a,b in (('’',"'"),('‘',"'"),('“','"'),('”','"'),(' ',' '),('→','->'),('–','-'),('—','-')): t=t.replace(a,b)
    t=re.sub(r'\s+',' ',t).strip().lower()
    return t
pairs={}
for nl,en in json.load(open(SP+'pairs.json')):
    pairs[norm(nl)]=en
extra=json.load(open(SP+'extra.json')) if os.path.exists(SP+'extra.json') else {}
for k,v in extra.items(): pairs[norm(k)]=v

VOID={'br','img','input','meta','link','hr','source','area','base','col','embed','param','track','wbr'}
INLINE={'b','strong','em','i','span','a','u','small','sup','sub','mark'}
class Node:
    def __init__(s,tag=None,attrs=None,text=None): s.tag=tag;s.attrs=attrs or [];s.children=[];s.text=text;s.raw_open=None
class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=False); s.root=Node('#root'); s.stack=[s.root]
    def handle_starttag(s,tag,attrs):
        n=Node(tag,attrs); s.stack[-1].children.append(n)
        if tag not in VOID: s.stack.append(n)
    def handle_startendtag(s,tag,attrs):
        s.stack[-1].children.append(Node(tag,attrs))
    def handle_endtag(s,tag):
        for i in range(len(s.stack)-1,0,-1):
            if s.stack[i].tag==tag:
                del s.stack[i:]; break
    def _add(s,t):
        ch=s.stack[-1].children
        if ch and ch[-1].tag is None: ch[-1].text+=t
        else: ch.append(Node(text=t))
    def handle_data(s,d): s._add(d)
    def handle_entityref(s,n): s._add('&%s;'%n)
    def handle_charref(s,n): s._add('&#%s;'%n)
    def handle_comment(s,d): s.stack[-1].children.append(Node('#comment',text=d))
    def handle_decl(s,d): s.stack[-1].children.append(Node('#decl',text=d))
def ser(n):
    if n.tag is None: return n.text
    if n.tag=='#comment': return '<!--%s-->'%n.text
    if n.tag=='#decl': return '<!%s>'%n.text
    if n.tag=='#root': return ''.join(ser(c) for c in n.children)
    a=''.join(' %s'%k if v is None else ' %s="%s"'%(k,v.replace('"','&quot;')) for k,v in n.attrs)
    if n.tag in VOID: return '<%s%s>'%(n.tag,a)
    return '<%s%s>%s</%s>'%(n.tag,a,''.join(ser(c) for c in n.children),n.tag)
def plain(n):
    if n.tag is None: return n.text
    if n.tag=='br': return ' '
    if n.tag in ('script','style'): return ''
    return ''.join(plain(c) for c in n.children)
def esc(t): return t.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;')
leftovers=[]; matched=0
DUTCH=re.compile(r"\b(de|het|een|van|voor|en|je|jouw|jullie|wij|we|met|bij|op|naar|niet|ook|aan|zijn|wordt|worden|dat|die|dit|als|maar|om|uit|over|tot|per|geen|dan|onze|kunnen|meer|alle|elk|elke|nog)\b",re.I)
def tr_text(raw,is_block_leaf):
    global matched
    k=norm(raw)
    if not k or not re.search(r'[a-zA-Z]',k): return None
    if k in pairs:
        matched+=1; return pairs[k]
    # trailing arrow variants
    for suf in (' ->',' →'):
        pass
    return None
def walk(n,path=''):
    global matched
    if n.tag in ('script','style','#comment','#decl'): return
    # attributes
    if n.tag:
        new=[]
        for k,v in n.attrs:
            if k in ('alt','aria-label','title','placeholder','content') and v:
                t=tr_text(v,True)
                if t is not None: v=t
                elif DUTCH.search(norm(v)) or re.search(r'[a-z]',norm(v)) and k=='alt' and norm(v) not in ('',): leftovers.append('ATTR '+k+': '+norm(v))
            new.append((k,v))
        n.attrs=new
    # word-span paragraphs (scroll reveal): rebuild spans from the English sentence
    spans=[c for c in n.children if c.tag=='span' and any(k=='class' and v and 'w' in v.split() for k,v in c.attrs)]
    if spans and all((c in spans) or (c.tag is None and not norm(c.text)) for c in n.children):
        full=' '.join(plain(c) for c in spans)
        en=tr_text(full,True)
        if en is not None:
            n.children=[]
            for i,w in enumerate(en.split()):
                if i: n.children.append(Node(text=' '))
                sp=Node('span',[('class','w'),('aria-hidden','true')]); sp.children=[Node(text=esc(w))]; n.children.append(sp)
        return
    # element with mixed content: try whole-element match
    kids=n.children
    has_inline=any(c.tag in INLINE or c.tag=='br' for c in kids)
    has_text=any(c.tag is None and norm(c.text) for c in kids)
    if n.tag not in (None,'#root') and has_text and has_inline:
        full=plain(n)
        en=tr_text(full,True)
        if en is not None:
            lead=re.match(r'\s*',full).group(0); trail=re.search(r'\s*$',full).group(0)
            br=any(c.tag=='br' for c in kids)
            body=esc(en)
            body=body.replace('\n','<br>') if br else body.replace('\n',' ')
            n.children=[Node(text=lead+body+trail)]
            return
    for c in kids:
        if c.tag is None:
            t=tr_text(c.text,False)
            if t is not None:
                lead=re.match(r'\s*',c.text).group(0); trail=re.search(r'\s*$',c.text).group(0)
                c.text=lead+esc(t).replace('\n',' ')+trail
            elif norm(c.text) and DUTCH.search(norm(c.text)) and len(norm(c.text).split())>=1:
                leftovers.append(norm(c.text))
        else: walk(c)
def translate_html(src,self_path=None):
    p=P(); p.feed(src); p.close()
    walk(p.root)
    out=ser(p.root)
    return out
if __name__=='__main__':
    pass
