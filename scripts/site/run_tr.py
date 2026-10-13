import sys,re,os,json
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import importlib,translate as T
importlib.reload(T)
ROOT=T.ROOT
pages=['talent','companies','recruitment-selection','community-jobboard','employer-branding','impact','about','faq','terms','privacy','pager','jobboard']
PAGE_PATHS={'/talent','/companies','/impact','/blog','/about','/faq','/jobboard','/pager','/privacy','/terms','/companies/recruitment-selection','/companies/community-jobboard','/companies/employer-branding'}
def _enlink(m):
    attr,val=m.group(1),m.group(2)
    base=re.split(r'[#?]',val,1)[0]
    rest=val[len(base):]
    if val.startswith('/en') and (len(val)==3 or val[3] in '/#?'): return m.group(0)
    if base=='/' : return f'{attr}="/en{rest}"'
    if base in PAGE_PATHS or base.startswith('/blog/'): return f'{attr}="/en{base}{rest}"'
    return m.group(0)
def relink(s):
    s=s.replace('<span class="lang"><b>NL</b><a href="/en" hreflang="en" aria-label="English version">EN</a></span>','<span class="lang"><a href="/" hreflang="nl" aria-label="Nederlandse versie">NL</a><b>EN</b></span>')
    s=re.sub(r'(href|action)="(/[^"]*)"',_enlink,s)
    s=s.replace('<html lang="nl">','<html lang="en">')
    for a,b in (('Stap 1 van 2','Step 1 of 2'),('Stap 2 van 2','Step 2 of 2'),('Versturen…','Sending…'),('4.000+','4,000+'),('data-suffix="+">4.000','data-suffix="+">4,000')):
        s=s.replace(a,b)
    s=s.replace('Bedrijven &#9662;','Companies &#9662;').replace('Word lid van de pool','Join the talent pool').replace('Word lid van de talentpool','Join the talent pool').replace('Over ons','About')
    for a,b in (('Veelgestelde vragen | VOIDS','FAQ | VOIDS'),('Algemene voorwaarden | VOIDS','Terms and conditions | VOIDS'),('Privacybeleid | VOIDS','Privacy policy | VOIDS'),
        ('Werving &amp; selectie | VOIDS concept','Recruitment &amp; selection | VOIDS concept'),('Vacatures adverteren | VOIDS concept','Advertise vacancies | VOIDS concept'),
        ('Advies &amp; employer branding | VOIDS concept','Advice &amp; employer branding | VOIDS concept'),
        ('<h3 class="anton">Vacatures adverteren.</h3>','<h3 class="anton">Advertise vacancies.</h3>'),
        ('AMBITIEUS TALENT.','AMBITIOUS TALENT.'),("'\\u00c9\\u00c9N MATCH.'","'ONE MATCH.'"),('<em>ÉÉN MATCH.</em>','<em>ONE MATCH.</em>'),('AMBITIEUZE BEDRIJVEN.','AMBITIOUS COMPANIES.'),
        ('4,000+ studenten krijgen nieuwe vacatures direct in WhatsApp.','4,000+ students get new vacancies straight in WhatsApp.'),
        ('4.000+ studenten krijgen nieuwe vacatures direct in WhatsApp.','4,000+ students get new vacancies straight in WhatsApp.')):
        s=s.replace(a,b)
    for a,b in (("toLocaleString('nl-NL')","toLocaleString('en-US')"),('€ 1.732','€ 1,732'),('€ 2.078','€ 2,078'),('€ 14,99','€ 14.99'),("o.textContent=h+'u'","o.textContent=h+'h'"),(">20u<",">20h<")):
        s=s.replace(a,b)
    return s
def fix_words(h):
    import re,html as H
    def rebuild(m):
        tag,attrs,inner=m.group(1),m.group(2),m.group(3)
        al=re.search(r'aria-label="([^"]*)"',attrs)
        if not al: return m.group(0)
        label=H.unescape(al.group(1))
        plain=H.unescape(re.sub(r'<[^>]+>','',inner))
        norm=lambda x:re.sub(r'\s+',' ',x).strip()
        hl=len(re.findall(r'class="w hl"',inner))
        if 'class="vq' in attrs and not hl:
            hl=5 if 'matched our request' in label else (9 if 'never have come across' in label else 0)
            if hl: plain=''
        if norm(plain)==norm(label): return m.group(0)
        words=label.split()
        spans=[]
        for i,w in enumerate(words):
            cls='w hl' if hl and i>=len(words)-hl else 'w'
            spans.append(f'<span class="{cls}" aria-hidden="true">{H.escape(w,quote=False)}</span>')
        return f'<{tag}{attrs}>'+' '.join(spans)+f'</{tag}>'
    return re.sub(r'<(p|blockquote)((?=[^>]*class="(?:reveal|vq)[^"]*")[^>]*)>(.*?)</\1>',rebuild,h,flags=re.S)

def run(srcpath,outpath,verbose=True):
    src=open(srcpath,encoding='utf-8').read()
    src=re.sub(r'<!--seo-->.*?<!--/seo-->\n?','',src,flags=re.S)  # rebuilt by finalize.py
    src=re.sub(r'<!--k-home-menu-->.*?<!--/k-home-menu-->','',src,flags=re.S)
    src=re.sub(r'<!--k-footer-->.*?<!--/k-footer-->','',src,flags=re.S)
    src=re.sub(r'<!--k-header-->.*?<!--/k-header-->','<div id="k-header"></div>',src,flags=re.S)
    T.leftovers.clear()
    out=T.translate_html(src)
    out=relink(out)
    out=fix_words(out)
    out=out.replace('We connect highly educated young talent with ambitious organisations.</p>','We connect highly educated <em>young talent</em> with ambitious organisations.</p>')
    out=out.replace('<h1 class="k-h1">JOIN THE TALENT POOL.</h1>','<h1 class="k-h1">JOIN THE <span class="k-accent">TALENT POOL.</span></h1>')
    open(outpath,'w',encoding='utf-8').write(out)
    return list(dict.fromkeys(T.leftovers))
if __name__=='__main__':
    tot=0
    for p in pages:
        lo=run(f'{ROOT}/public/site/{p}.html',f'{ROOT}/public/site/en/{p}.html')
        print('==',p,len(lo)); tot+=len(lo)
        for l in lo[:60]: print('   ',l)
    lo=run(f'{ROOT}/public/site/index.html',f'{ROOT}/public/site/en/home.html')
    print('== home',len(lo))
    for l in lo[:60]: print('   ',l)
