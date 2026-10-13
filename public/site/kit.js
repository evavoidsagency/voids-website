/* VOIDS concept kit: injects header/footer and wires small effects.
   Usage on a page: <link rel="stylesheet" href="/site/kit.css"> ... <div id="k-header"></div> ... <div id="k-footer"></div> <script src="/site/kit.js"></script>
   Hooks: [data-reveal] fade-up on scroll, [data-words] word-by-word text reveal, [data-count="4000" data-suffix="+"] count-up,
   .k-photo.px img parallax, .k-tabs/.k-panel tabs (data-tab / data-panel). */
(function(){
  var EN=document.documentElement.lang==='en';
  /* clean URLs: NL at /talent, EN at /en/talent (the pages themselves live in public/site/) */
  var P=EN?'/en':'';
  function U(name){return (P+'/'+name)||'/'}
  var HOME=EN?'/en':'/';
  var L=EN?{talent:'Talent',companies:'Companies',impact:'Impact',about:'About',blog:'Blog',jobboard:'Jobs',s1:'Recruitment & selection',s2:'Advertise vacancies',s3:'Partnerships',contact:'Contact',pool:'Join the talent pool',tag:'We connect highly-educated talent with ambitious organisations.',menu:'Menu',more:'More',faq:'FAQ',terms:'Terms',privacy:'Privacy',stay:'Stay in the loop',news:'Job alerts & community updates.',vac:'This week\'s vacancies',copy:'© 2026 VOIDS.agency, Amsterdam',wa:'WhatsApp'}:{talent:'Talent',companies:'Bedrijven',impact:'Impact',about:'Over ons',blog:'Blog',jobboard:'Jobs',s1:'Werving & selectie',s2:'Vacatures adverteren',s3:'Partnerships',contact:'Contact',pool:'Word lid van de talentpool',tag:'Wij verbinden hoogopgeleid talent aan ambitieuze organisaties.',menu:'Menu',more:'Meer',faq:'FAQ',terms:'Voorwaarden',privacy:'Privacy',stay:'Blijf op de hoogte',news:'Vacaturemeldingen en community-updates via WhatsApp',vac:'Vacatures van deze week',copy:'© 2026 VOIDS.agency, Amsterdam',wa:'WhatsApp'};
  var NAV=[['talent',L.talent,U('talent')],['companies',L.companies,U('companies')],['impact',L.impact,U('impact')],['about',L.about,U('about')],['blog',L.blog,U('blog')],['jobboard',L.jobboard,U('jobboard')]];
  var SERV=[[L.s1,U('companies/recruitment-selection')],[L.s2,U('companies/community-jobboard')],[L.s3,U('companies/partnerships')]];
  var path=location.pathname;
  function counterpart(){var h=location.hash||'';if(EN){return (path.replace(/^\/en\/?/,'/')||'/')+h}return (path==='/'?'/en':'/en'+path)+h}
  var cur=document.body.getAttribute('data-nav')||'';
  var nav=NAV.map(function(n){
    if(n[0]==='companies'){return '<span class="k-dd"><a href="'+n[2]+'" class="'+(cur==='companies'?'on':'')+'">'+n[1]+' &#9662;</a><span class="k-dd-menu">'+SERV.map(function(s){return '<a href="'+s[1]+'">'+s[0]+'</a>'}).join('')+'</span></span>';}
    return '<a href="'+n[2]+'" class="'+(cur===n[0]?'on':'')+'">'+n[1]+'</a>';
  }).join('');
  var WA_ICON='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"/></svg>';
  var other=counterpart();
  var langPill=EN?'<span class="k-lang"><a href="'+other+'">NL</a><b>EN</b></span>':'<span class="k-lang"><b>NL</b><a href="'+other+'">EN</a></span>';
  var mnav='<div class="k-mnav" id="k-mnav"><nav aria-label="Menu">'+NAV.map(function(n){
    var sub=n[0]==='companies'?'<div class="k-mn-sub">'+SERV.map(function(s){return '<a href="'+s[1]+'">'+s[0]+'</a>'}).join('')+'</div>':'';
    return '<a class="k-mn'+(cur===n[0]?' on':'')+'" href="'+n[2]+'">'+n[1]+'</a>'+sub}).join('')+'</nav><div class="k-mn-cta"><a class="k-btn" href="'+U('pager')+'">'+L.pool+'</a><a class="k-btn ghost" href="'+U('about')+'#contact">'+L.contact+'</a><a class="k-mn-wa" href="https://linktr.ee/voidscommunity" target="_blank" rel="noopener">'+WA_ICON+L.wa+'</a></div></div>';
  var hd=document.getElementById('k-header');
  if(hd){hd.outerHTML='<header class="k-header" id="kh"><a class="k-logo" href="'+HOME+'"><img src="/logo.svg" alt="VOIDS"></a><nav class="k-nav">'+nav+'</nav><span class="k-sp"></span>'+langPill+'<a class="k-wa" href="https://linktr.ee/voidscommunity" target="_blank" rel="noopener">'+WA_ICON+L.wa+'</a><a class="k-hbtn" href="'+U('about')+'#contact">'+L.contact+'</a><a class="k-hbtn p" href="'+U('pager')+'">'+L.pool+'</a><button class="k-burger" type="button" aria-label="Menu" aria-expanded="false" aria-controls="k-mnav"><span class="k-bars" aria-hidden="true"><i></i><i></i></span></button>'+mnav+'</header>';}
  (function(){
    var h=document.getElementById('kh'),b=h&&h.querySelector('.k-burger');if(!b)return;
    function set(open){h.classList.toggle('open',open);b.setAttribute('aria-expanded',open?'true':'false');document.documentElement.classList.toggle('k-lock',open)}
    b.addEventListener('click',function(){set(!h.classList.contains('open'))});
    h.addEventListener('click',function(e){if(e.target.closest('.k-mnav a'))set(false)});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
    addEventListener('resize',function(){if(innerWidth>960)set(false)});
  })();
  var ft=document.getElementById('k-footer');
  if(ft){ft.outerHTML='<footer class="k-footer"><div class="k-wrap"><div><a class="k-logo" href="'+HOME+'" style="padding:0"><img src="/logo.svg" alt="VOIDS" style="height:24px;filter:brightness(0) invert(1)"></a><p>'+L.tag+'</p></div><div><h4>'+L.menu+'</h4>'+NAV.map(function(n){return '<a href="'+n[2]+'">'+n[1]+'</a>'}).join('')+'</div><div><h4>'+L.more+'</h4><a href="'+U('faq')+'">'+L.faq+'</a><a href="'+U('terms')+'">'+L.terms+'</a><a href="'+U('privacy')+'">'+L.privacy+'</a></div><div><h4>'+L.stay+'</h4><a href="https://linktr.ee/voidscommunity" target="_blank" rel="noopener" style="padding:0">'+L.news+'</a><a href="https://linktr.ee/voidsagency" target="_blank" rel="noopener" style="padding:0;margin-top:8px">'+L.vac+' &rarr;</a><div class="k-soc"><a href="https://www.linkedin.com/company/voidsagency" target="_blank" rel="noopener">LinkedIn</a><a href="https://www.instagram.com/voids_agency/" target="_blank" rel="noopener">Instagram</a><a href="https://www.tiktok.com/@voidstalentagency" target="_blank" rel="noopener">TikTok</a></div></div><div class="k-base"><span>'+L.copy+'</span><span>contact@voids.agency</span></div></div></footer>';}
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // reveal
  var rv=[].slice.call(document.querySelectorAll('[data-reveal]'));
  if('IntersectionObserver' in window&&!reduce){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});rv.forEach(function(el,i){el.style.transitionDelay=(el.getAttribute('data-delay')||0)+'ms';io.observe(el)})}else{rv.forEach(function(el){el.classList.add('in')})}
  // words
  var ws=[].slice.call(document.querySelectorAll('[data-words]'));
  ws.forEach(function(el){if(el.querySelector('.w'))return;var t=el.textContent.trim();el.setAttribute('aria-label',t);el.innerHTML=t.split(/\s+/).map(function(w){return '<span class="w" aria-hidden="true">'+w+'</span>'}).join(' ')});
  // count up
  var cs=[].slice.call(document.querySelectorAll('[data-count]'));
  function fmt(n){return n>=1000?n.toLocaleString(EN?'en-US':'nl-NL'):String(n)}
  cs.forEach(function(el){var to=+el.getAttribute('data-count'),suf=el.getAttribute('data-suffix')||'';el.textContent=fmt(reduce?to:0)+suf;if(reduce)return;var done=false;var o=new IntersectionObserver(function(es){if(es[0].isIntersecting&&!done){done=true;var t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1100),e=1-Math.pow(1-p,3);el.textContent=fmt(Math.round(to*e))+suf;if(p<1)requestAnimationFrame(f)})(t0)}},{threshold:.4});o.observe(el)});
  // tabs
  [].slice.call(document.querySelectorAll('.k-tabs')).forEach(function(tabs){var scope=tabs.parentNode;var btns=[].slice.call(tabs.querySelectorAll('button'));btns.forEach(function(b){b.addEventListener('click',function(){btns.forEach(function(x){x.classList.toggle('on',x===b)});[].slice.call(scope.querySelectorAll('.k-panel')).forEach(function(p){p.classList.toggle('on',p.getAttribute('data-panel')===b.getAttribute('data-tab'))})})})});
  // scroll loop
  var px=[].slice.call(document.querySelectorAll('.k-photo.px img'));
  function tick(){var H2=innerHeight;
    px.forEach(function(img){var b=img.parentNode.getBoundingClientRect();if(b.bottom<-50||b.top>H2+50)return;var d=(b.top+b.height/2-H2/2)/H2;var lim=b.height*.09;img.style.transform='translateY('+Math.max(-lim,Math.min(lim,-d*40))+'px)'});
    ws.forEach(function(el){var r=el.getBoundingClientRect(),p=Math.max(0,Math.min(1,(H2*.9-r.top)/(H2*.36)));if(r.top<H2*.5)p=1;var w=el.children,n=Math.round(p*w.length);for(var i=0;i<w.length;i++)w[i].classList.toggle('on',reduce||i<n)})}
  var q=false;function on2(){if(!q){q=true;requestAnimationFrame(function(){q=false;tick()})}}
  addEventListener('scroll',on2,{passive:true});addEventListener('resize',on2);tick();
  // soft join nudge: once per session after ~30% scroll, dismissible, never blocks content
  (function(){
    var gone=false;try{gone=sessionStorage.getItem('voidsNudge')==='1'}catch(e){}
    if(gone)return;
    var n=document.createElement('aside');n.className='k-nudge';n.setAttribute('aria-label',EN?'Join the community':'Sluit je aan bij de community');
    n.style.cssText='position:fixed;left:20px;bottom:20px;z-index:60;width:min(340px,calc(100vw - 40px));display:flex;gap:14px;align-items:flex-start;padding:16px 34px 16px 14px;border-radius:18px;background:#fff;box-shadow:0 22px 50px -18px rgba(20,8,90,.45);transform:translateY(24px);opacity:0;pointer-events:none;transition:transform .5s cubic-bezier(.2,.8,.2,1),opacity .4s;font-family:Inter,sans-serif';
    n.innerHTML='<svg viewBox="0 0 24 24" width="38" height="38" aria-hidden="true" style="flex:none"><circle cx="12" cy="12" r="12" fill="#25D366"/><path fill="#fff" d="M12 5.5c-3.6 0-6.5 2.9-6.5 6.5 0 1.15.3 2.24.87 3.2L5.5 18.5l3.42-.85c.93.5 1.98.77 3.08.77 3.6 0 6.5-2.9 6.5-6.5s-2.9-6.42-6.5-6.42z"/></svg><div><b style="display:block;font-size:14.5px;line-height:1.35;margin-bottom:3px">'+(EN?'Never miss a vacancy':'Mis geen enkele vacature')+'</b><p class="k-nudge-p" style="font-size:13px;line-height:1.5;color:#2b2b2b;margin:0 0 10px">'+(EN?'4,000+ students get new vacancies straight in WhatsApp.':'4.000+ studenten krijgen nieuwe vacatures direct in WhatsApp.')+'</p><a href="https://linktr.ee/voidscommunity" target="_blank" rel="noopener" style="display:inline-block;padding:9px 14px;border-radius:9px;background:#3a0ca3;color:#fff;font-weight:600;font-size:13px;text-decoration:none">'+(EN?'Join':'Sluit je aan')+'</a></div><button type="button" aria-label="Sluiten" style="position:absolute;top:6px;right:8px;border:0;background:none;font-size:20px;line-height:1;color:#5c5c5c;cursor:pointer;padding:4px 6px">&times;</button>';
    document.body.appendChild(n);
    var shown=false;
    function hide(){n.style.opacity=0;n.style.transform='translateY(24px)';n.style.pointerEvents='none';gone=true;try{sessionStorage.setItem('voidsNudge','1')}catch(e){}}
    n.querySelector('button').addEventListener('click',hide);n.querySelector('a').addEventListener('click',hide);
    addEventListener('scroll',function(){if(shown||gone)return;var p=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);if(p>0.3){shown=true;setTimeout(function(){if(!gone){n.style.opacity=1;n.style.transform='none';n.style.pointerEvents='auto'}},400)}},{passive:true});
  })();
})();

/* photo strips: duplicate once so the loop is seamless */
(function(){document.querySelectorAll('.k-strip-in').forEach(function(t){var kids=[].slice.call(t.children);kids.forEach(function(f){var c=f.cloneNode(true);c.setAttribute('aria-hidden','true');var im=c.querySelector('img');if(im)im.setAttribute('alt','');t.appendChild(c)});t.classList.add('loop')})})();

/* section heads: snap the intro text to the nearest column line of the content below it */
(function(){
  function snap(){
    var heads=[].slice.call(document.querySelectorAll('.k-head'));
    heads.forEach(function(h){h.style.gridTemplateColumns='';h.style.columnGap='';var i0=h.querySelector(':scope>.k-lead,:scope>.k-p');if(i0){i0.style.removeProperty('padding-top');i0.style.removeProperty('align-self');i0.style.gridColumn='';i0.style.gridRow='';i0.style.removeProperty('column-count');i0.style.removeProperty('max-width');i0.style.removeProperty('column-gap');i0.style.removeProperty('font-size');i0.style.removeProperty('text-wrap');i0.style.removeProperty('white-space')}});
    if(innerWidth<=960)return;
    heads.forEach(function(h){
      var intro=h.querySelector(':scope>.k-lead,:scope>.k-p');if(!intro)return;
      var nx=h.nextElementSibling;while(nx&&(!nx.offsetHeight||getComputedStyle(nx).position==='absolute'))nx=nx.nextElementSibling;if(!nx)return;
      var hr=h.getBoundingClientRect(),W=hr.width;if(W<600)return;
      var edges=[],list=[nx].concat([].slice.call(nx.querySelectorAll('*')).slice(0,60));
      list.forEach(function(e){
        var r=e.getBoundingClientRect();
        if(r.width<90||r.height<60||r.width>W*.82)return;
        var cs=getComputedStyle(e);var vis=cs.backgroundColor!=='rgba(0, 0, 0, 0)'||e.tagName==='IMG'||e.tagName==='FIGURE'||cs.borderRadius!=='0px';
        if(!vis&&e!==nx)return;
        edges.push(r.left-hr.left);
      });
      var h2t=h.querySelector(':scope>.k-h2'),hRight=0;
      if(h2t){var rg=document.createRange();rg.selectNodeContents(h2t);hRight=rg.getBoundingClientRect().right-hr.left}
      var cands=edges.filter(function(x){var f=x/W;return f>=.33&&f<=.75}).sort(function(a,b){return a-b}).filter(function(x,i,arr){return i===0||x-arr[i-1]>8});
      var il0=h.querySelector(':scope>.k-lead,:scope>.k-p'),best=null;
      function fits(x){h.style.gridTemplateColumns=Math.round(x)+'px minmax(0,1fr)';h.style.columnGap='0px';var lh=parseFloat(getComputedStyle(il0).lineHeight)||28;return il0.getBoundingClientRect().height<=lh*5.2}
      var pref=cands.filter(function(x){return x>=hRight+40});
      var order=pref.concat(cands.filter(function(x){return pref.indexOf(x)<0}));
      for(var q=0;q<order.length;q++){if(fits(order[q])){best=order[q];break}}
      if(best!==null&&(W-best)<W*0.36)best=null;
      if(best===null){h.style.gridTemplateColumns='minmax(0,1fr)';h.style.columnGap='0px';il0.style.gridColumn='1';il0.style.gridRow='3';il0.style.setProperty('padding-top','16px','important');il0.style.setProperty('max-width','none','important');var lh2=parseFloat(getComputedStyle(il0).lineHeight)||28;if(il0.getBoundingClientRect().height>lh2*5.5){il0.style.setProperty('max-width','none','important');il0.style.setProperty('column-count','2','important');il0.style.setProperty('column-gap','clamp(32px,4vw,64px)','important')}return}
      h.style.gridTemplateColumns=Math.round(best)+'px minmax(0,1fr)';h.style.columnGap='0px';
      (function(){var lh=parseFloat(getComputedStyle(il0).lineHeight)||28;var ln=Math.round(il0.getBoundingClientRect().height/lh);if(ln<=2&&W-best>640){il0.style.setProperty('font-size','clamp(19px,1.55vw,23px)','important')}else{il0.style.removeProperty('font-size')}il0.style.setProperty('text-wrap','pretty','important');il0.style.setProperty('max-width','none','important');il0.style.setProperty('white-space','nowrap','important');if(il0.scrollWidth>il0.clientWidth+1){var ok=false;[19,18,17].forEach(function(px){if(!ok){il0.style.setProperty('font-size',px+'px','important');if(il0.scrollWidth<=il0.clientWidth+1)ok=true}});if(!ok){il0.style.removeProperty('white-space');il0.style.removeProperty('font-size')}}})();
      var h2=h.querySelector(':scope>.k-h2');if(h2){intro.style.setProperty('padding-top','0px','important');intro.style.removeProperty('align-self');var hh2=h2.getBoundingClientRect().height,ih2=intro.getBoundingClientRect().height;if(ih2<=hh2+2){intro.style.setProperty('align-self','center','important')}else{intro.style.setProperty('padding-top','4px','important')}}
    });
  }
  var t;function later(){clearTimeout(t);t=setTimeout(snap,60)}
  addEventListener('load',function(){snap();setTimeout(snap,600)});addEventListener('resize',later);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(snap);
  snap();
})();

/* USP ticker: duplicate once for a seamless loop */
(function(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.querySelectorAll('.k-usp ul').forEach(function(u){[].slice.call(u.children).forEach(function(li){var c=li.cloneNode(true);c.setAttribute('aria-hidden','true');u.appendChild(c)})})})();
