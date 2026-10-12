const fs=require('fs'),path=require('path'),ts=require(path.resolve(__dirname,'../../node_modules/typescript'));
const root=path.resolve(__dirname,'../..');
const LANG=process.argv[2]||'nl'; const EN=LANG==='en'; const PFX=EN?'/en':''; const OUT=EN?'/public/site/en':'/public/site';
const src=fs.readFileSync(root+'/lib/content/blog-posts.ts','utf8');
const js=ts.transpileModule(src,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:'ES2020'}}).outputText;
const m={exports:{}};new Function('module','exports','require',js)(m,m.exports,()=>({}));
const posts=m.exports.BLOG_POSTS;
/* photo variety: interleave the older mariselle shots with the Herengracht shoot */
const MAR=[1,2,3,4,5,6,8,9,10,11].map(n=>'/photography/mariselle-'+n+'.jpg');
const HG=['03','12','05','10','00','14','11','13','02','17','04','21','01','18','20','15','08','09','16','19','07'].map(n=>'/photography/hg-'+n+'.jpg');
const POOL=[];for(let i=0;i<Math.max(MAR.length,HG.length);i++){if(HG[i])POOL.push(HG[i]);if(MAR[i])POOL.push(MAR[i]);}
posts.forEach((p,i)=>{p.photo=POOL[i%POOL.length]});
const PORT=['07','08','09','15','16','19','20'].map(n=>'/photography/hg-'+n+'.jpg');
const POS={'hg-16':'50% 92%','hg-09':'50% 62%','hg-08':'50% 18%','hg-05':'50% 20%','hg-15':'50% 25%'};
const posOf=ph=>{const k=ph.replace('/photography/','').replace('.jpg','');return POS[k]||(PORT.includes(ph)?'50% 30%':'50% 40%')};
console.log(posts.length,'posts');
fs.writeFileSync(path.join(__dirname,'blogmeta_'+LANG+'.json'),JSON.stringify(posts.map(p=>({slug:p.slug,title:(p.metaTitle&&p.metaTitle[LANG])||p.title[LANG],description:(p.metaDescription&&p.metaDescription[LANG])||p.excerpt[LANG],photo:p.photo,published:p.published||'',updated:p.updated||p.published||'',sources:(p.sources||[]).map(x=>({title:x.title,url:x.url,publisher:x.publisher}))})),null,1));
const inl=t=>t.replace(/\[(\d+)\]/g,'<sup><a href="#bron-$1" style="text-decoration:none">[$1]</a></sup>');
const fmtD=iso=>new Date(iso+'T12:00:00').toLocaleDateString(EN?'en-GB':'nl-NL',{day:'numeric',month:'long',year:'numeric'});
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const AUD=EN?{bedrijf:'For companies',talent:'For talent',beide:'For everyone'}:{bedrijf:'Voor bedrijven',talent:'Voor talent',beide:'Voor iedereen'};
const LEGAL=EN?"This article is general information, not legal, tax or financial advice. Rules change and your situation may differ: check the current rules with an official source or a qualified advisor before relying on it.":"Dit artikel is algemene informatie, geen juridisch, fiscaal of financieel advies. Regels wijzigen en je situatie kan afwijken: check de actuele regels bij een officiële bron (bijv. Rijksoverheid, Belastingdienst, Juridisch Loket) of raadpleeg een adviseur voordat je erop vertrouwt.";
const CTA=EN?{bedrijf:["ADDING A JUNIOR TO YOUR TEAM?","We're happy to think along. Tell us what you're looking for and we'll work out together what fits."],talent:["LOOKING FOR A ROLE THAT FITS YOU?","Join the WhatsApp community and get matching opportunities straight in your app."],beide:["WANT TO TALK FURTHER?","Whether you're a company or looking for your next step, we're happy to think along."]}:{bedrijf:["EEN JUNIOR ERBIJ IN JE TEAM?","We denken graag met je mee. Vertel ons waar je naar op zoek bent, dan kijken we samen wat past."],talent:["OP ZOEK NAAR EEN ROL DIE BIJ JE PAST?","Sluit je aan bij onze WhatsApp-community en ontvang passende kansen direct in je app."],beide:["ZIN OM VERDER TE PRATEN?","Of je nu een bedrijf bent of op zoek naar je volgende stap: we denken graag met je mee."]};
const head=(t,nav)=>`<!doctype html><html lang="${LANG}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(t)}</title><link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/site/kit.css"><style>
.b-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
.b-card{display:flex;flex-direction:column;text-decoration:none;border-radius:20px;background:#fff;overflow:hidden;transition:transform .25s}
.b-card:hover{transform:translateY(-4px)}
.b-card .ph{aspect-ratio:4/3;overflow:hidden}.b-card .ph img{width:100%;height:100%;object-fit:cover;transition:transform .6s}.b-card:hover .ph img{transform:scale(1.05)}
.b-card .tx{display:flex;flex-direction:column;flex:1;padding:22px 24px 24px}
.b-card h3{font-size:17.1px;line-height:1.3;font-weight:600;letter-spacing:-.01em;margin:12px 0 10px}
.b-card p{font-size:14.5px;line-height:1.6;color:var(--soft);margin-bottom:16px}
.b-card .more{margin-top:auto;font-size:13.5px;font-weight:600;color:var(--purple)}
.b-tags{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.b-tag{padding:4px 10px;border-radius:6px;background:var(--purple-100);color:var(--purple);font-size:11.5px;font-weight:700}.b-tag.sky{background:var(--blue-100);color:var(--blue-700)}
.b-art{display:grid;grid-template-columns:minmax(0,740px) 280px;gap:72px;justify-content:center;align-items:start}
.b-side{position:sticky;top:96px;display:grid;gap:14px}
.b-art-hero{display:grid;grid-template-columns:1.2fr .8fr;gap:56px;align-items:center}
.b-rel{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.b-rel a{display:flex;gap:14px;align-items:center;padding:16px;border-radius:16px;background:#fff;text-decoration:none;font-weight:600;font-size:15px;line-height:1.35}
.b-rel img{width:72px;height:72px;border-radius:12px;object-fit:cover;flex:none}
@media(max-width:960px){.b-grid,.b-rel{grid-template-columns:1fr}.b-art,.b-art-hero{grid-template-columns:1fr;gap:32px}.b-side{position:static}}
</style></head><body data-nav="${nav}"><div id="k-header"></div>`;
const foot='<div id="k-footer"></div><script src="/site/kit.js"></script></body></html>';
const rel=(p)=>{const o=posts.filter(x=>x.slug!==p.slug);const same=o.filter(x=>x.aud===p.aud||x.aud==='beide'||p.aud==='beide');return same.slice(0,3)};
// list
const filt=`<div class="k-tabs" id="bt"><button class="on" data-f="alle">${EN?'All':'Alle'}</button><button data-f="bedrijf">${AUD.bedrijf}</button><button data-f="talent">${AUD.talent}</button></div>`;
fs.writeFileSync(path.join(__dirname,'blogmap_'+LANG+'.json'),JSON.stringify(posts.map(p=>({slug:p.slug,title:p.title[LANG],photo:p.photo,pos:posOf(p.photo),read:p.read?p.read[LANG]:'',aud:p.aud}))));
const seen={};const vary=(ph)=>{const n=seen[ph]=(seen[ph]||0);seen[ph]=n+1;const flip=n===1||n===3,zoom=n===2||n===3?1.25:1;const tf=(flip||zoom>1)?`transform:${flip?'scaleX(-1) ':''}scale(${zoom});`:'';return ` style="object-position:${posOf(ph)};${tf}"`};
const cards=posts.map(p=>`<a class="b-card" data-aud="${p.aud}" href="${PFX}/blog/${p.slug}"><div class="ph"><img src="${p.photo}" alt="" loading="lazy"${vary(p.photo)}></div><div class="tx"><div class="b-tags"><span class="b-tag${p.aud==='talent'?' sky':''}">${esc(p.tag[LANG])}</span><span class="b-tag">${AUD[p.aud]}</span></div><h3>${esc(p.title[LANG])}</h3><p>${esc(p.excerpt[LANG])}</p><span class="more">${esc(p.read[LANG])} ${EN?'Read more →':'Lees meer →'}</span></div></a>`).join('\n');
fs.writeFileSync(root+OUT+'/blog.html',head('Blog | VOIDS','blog')+`
<section class="k-hero solo k-lav"><div class="k-wrap"><div><div class="k-eyebrow">Blog</div><h1 class="k-h1">${EN?'SMART TAKES ON JUNIOR TALENT.':'KENNIS OVER JUNIOR TALENT.'}</h1><p class="k-lead">${EN?'Practical guides for companies and students, from “what is a working student?” to smart hiring.':'Praktische gidsen voor bedrijven en studenten, van “wat is een werkstudent?” tot slim werven.'}</p></div></div></section>
<section class="k-sec tight k-beige"><div class="k-wrap">${filt}<div class="b-grid" id="bg">${cards}</div></div></section>
<script>(function(){var b=document.querySelectorAll('#bt button'),c=document.querySelectorAll('#bg .b-card');b.forEach(function(x){x.addEventListener('click',function(){b.forEach(function(y){y.classList.toggle('on',y===x)});var f=x.getAttribute('data-f');c.forEach(function(k){var a=k.getAttribute('data-aud');k.style.display=(f==='alle'||a===f||a==='beide')?'':'none'})})})})();</script>
`+foot);
fs.mkdirSync(root+OUT+'/blog',{recursive:true});
let n=0;
for(const p of posts){
  const body=p.body[LANG].map(b=>{let h='';if(b.h2)h+=`<h2>${esc(b.h2)}</h2>`;if(b.p)h+=`<p>${inl(esc(b.p))}</p>`;if(b.ul)h+=`<ul>${b.ul.map(li=>`<li>${inl(esc(li))}</li>`).join('')}</ul>`;return h}).join('\n');
  const [ct,cs]=CTA[p.aud];
  const srcHtml=(p.sources&&p.sources.length)?`<h2 style="margin-top:44px">${EN?'Sources':'Bronnen'}</h2><ol style="font-size:14.5px;line-height:1.6">${p.sources.map((x,i)=>`<li id="bron-${i+1}">${esc(x.publisher)}${x.year?' ('+esc(x.year)+')':''}: <a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.title)}</a>, ${EN?'accessed':'geraadpleegd'} ${fmtD(x.accessed)}.</li>`).join('')}</ol>`:'';
  const intNote=p.commercialInterest?`<p style="font-size:13px;color:var(--muted);margin-top:22px">${EN?'Transparency: VOIDS connects working students with organisations and therefore has an interest in this topic. We back up facts with sources and connect research and trends to our own experience from practice.':'Transparantie: VOIDS bemiddelt tussen werkstudenten en organisaties en heeft dus een belang bij dit onderwerp. We onderbouwen feiten met bronnen en koppelen onderzoek en trends aan onze eigen ervaringen uit de praktijk.'}</p>`:'';
  const dates=`<span style="margin-left:16px">${EN?'Published':'Gepubliceerd'} ${fmtD(p.published||'2026-08-09')}</span>${p.updated?`<span style="margin-left:16px">${EN?'Updated':'Bijgewerkt'} ${fmtD(p.updated)}</span>`:''}`;
  const rl=rel(p).map(r=>`<a href="${PFX}/blog/${r.slug}"><img src="${r.photo}" alt=""><span>${esc(r.title[LANG])}</span></a>`).join('');
  const html=head(((p.metaTitle&&p.metaTitle[LANG])||p.title[LANG])+' | VOIDS','blog').replace('href="/site/kit.css"','href="/site/kit.css"')+`
<section class="k-hero k-lav"><div class="k-wrap b-art-hero"><div><a class="k-go" href="${PFX}/blog" style="font-size:14px">${EN?'← Back to blog':'← Terug naar blog'}</a><div class="b-tags" style="margin-top:22px"><span class="b-tag${p.aud==='talent'?' sky':''}">${esc(p.tag[LANG])}</span><span class="b-tag">${AUD[p.aud]}</span><span class="k-muted" style="font-size:13px">${esc(p.read[LANG])}${dates}</span></div><h1 class="k-h2" style="margin-top:16px;font-size:clamp(26.6px,3.4vw,50px)">${esc(p.title[LANG].toUpperCase())}</h1><p class="k-lead" style="margin-top:18px">${esc(p.excerpt[LANG])}</p></div><div class="k-photo r54"><img src="${p.photo}" alt=""></div></div></section>
<section class="k-sec tight k-beige"><div class="k-wrap"><div class="b-art"><article class="k-prose">${p.legalTopic?`<div class="k-note" style="margin-bottom:34px">${esc(LEGAL)}</div>`:''}${body}${srcHtml}${intNote}</article>
<aside class="b-side"><div class="k-tile"><div class="k-h3">${esc(ct)}</div><p class="k-p">${esc(cs)}</p><div class="k-tile-foot"><a class="k-btn" href="${p.aud==='talent'?'https://linktr.ee/voidscommunity':PFX+'/about#contact'}">${p.aud==='talent'?'Join WhatsApp':(EN?"Let's get to know each other":'Laten we kennismaken')}</a></div></div></aside></div></div></section>
<section class="k-sec tight k-white"><div class="k-wrap"><div class="k-eyebrow" style="margin-bottom:22px">${EN?'ALSO WORTH READING':'OOK INTERESSANT'}</div><div class="b-rel">${rl}</div></div></section>
`+foot;
  fs.writeFileSync(root+OUT+`/blog/${p.slug}`,html);n++;
}
console.log('wrote',n,'articles + list');
