(() => {
  'use strict';
  const d = window.PORTFOLIO_DATA;
  if (!d) { document.body.insertAdjacentText('afterbegin', 'Portfolio data is missing. Please restore content.js.'); return; }
  const $ = id => document.getElementById(id);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const attr = esc;
  const safeUrl = value => {let x=String(value||'').trim();if(x.startsWith('/assets/uploads/'))x=x.slice(1);return /^(https?:\/\/|mailto:|\.\/|\/|assets\/)/i.test(x)?esc(x):'';};
  const fill = (id, value) => { const el=$(id); if(el) el.textContent=value||''; };
  fill('brand-name', d.name); fill('hero-kicker',d.eyebrow); fill('hero-headline',d.headline); fill('hero-description',d.heroDescription); fill('hero-role-label',d.heroRoleLabel||'Energy Science & Engineering · KUET · Bangladesh'); fill('hero-availability',d.availability); fill('about-lead',d.aboutLead); fill('education-degree',d.education.degree); fill('education-school',d.education.school); fill('education-period',d.education.period); fill('education-cgpa',d.education.cgpa); fill('education-recent',d.education.recentGpa); fill('contact-availability',d.availability);
  document.title = `${d.name} — Academic Portfolio`;
  const parts = (d.name || '').trim().split(/\s+/).filter(Boolean);
  if(parts.length){const last=parts.pop(); $('hero-title').innerHTML = `${esc(parts.join(' ')||last)}<br><em>${parts.length?esc(last):''}${parts.length&&!last.endsWith('.')?'.':''}</em>`;}
  document.querySelectorAll('.wordmark-mark, .monogram-art>span, .footer-name strong').forEach(el => el.textContent=d.initials||'DS');
  fill('hero-role',d.role); const portrait=$('hero-portrait'); if(portrait && safeUrl(d.heroImage)) portrait.src=safeUrl(d.heroImage);
  $('about-copy').innerHTML=d.about.map(p=>`<p>${esc(p)}</p>`).join('');
  $('stats-grid').innerHTML=d.stats.map(s=>`<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('');
  $('course-grid').innerHTML=d.education.courses.map(s=>`<span>${esc(s)}</span>`).join('');
  $('interests-list').innerHTML=d.interests.map((s,i)=>`<a class="interest-row" href="#projects"><span class="interest-number">0${i+1}</span><h3>${esc(s.name)}</h3><p>${esc(s.detail)}</p><span class="interest-arrow" aria-hidden="true">↗</span></a>`).join('');
  const filters=['All work','Research','Thesis','Simulation','Project'];
  let selectedFilter='All work';
  function renderProjects(){
    $('project-filters').innerHTML=filters.map(f=>`<button type="button" class="filter-button ${f===selectedFilter?'active':''}" data-filter="${attr(f)}" aria-pressed="${f===selectedFilter}">${esc(f)}</button>`).join('');
    const projects = d.projects.filter(p=>selectedFilter==='All work'||p.kind===selectedFilter);
    $('project-grid').innerHTML=projects.map((p,i)=>{
      const cls=p.featured?'feature-card':'small-card';
      const graphic=p.visual||'cycle';
      const uploadedImage=safeUrl(p.image);
      return `<button type="button" class="project-card ${cls}" data-project-id="${attr(p.id)}" aria-label="Read about ${attr(p.title)}">
        <div class="project-card-top"><span>${esc(p.number)} / ${esc(p.kind)}</span><span class="card-arrow">↗</span></div>
        <div class="project-graphic graphic-${attr(graphic)}" aria-hidden="true">${uploadedImage?`<img class="project-photo" src="${uploadedImage}" alt="" loading="lazy">`: ''}<span class="graphic-ring one"></span><span class="graphic-ring two"></span><span class="graphic-cross"></span><span class="graphic-identifier">${esc(p.number)} — ${esc(p.topic)}</span></div>
        <div class="project-card-body"><div class="project-tags"><span>${esc(p.topic)}</span><span>${esc(p.year)}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="project-card-bottom"><span class="project-metric">${esc(p.metric)}</span><span>${esc(p.metricLabel)}</span><span class="view-detail">Explore →</span></div></div>
      </button>`;
    }).join('');
  }
  function openProject(id){
    const p=d.projects.find(x=>x.id===id); if(!p)return;
    $('dialog-content').innerHTML=`<p class="section-eyebrow">${esc(p.kind)} / ${esc(p.year)} / ${esc(p.topic)}</p><h2 id="dialog-title">${esc(p.title)}</h2><p class="dialog-summary">${esc(p.summary)}</p>${safeUrl(p.image)?`<img class="dialog-project-image" src="${safeUrl(p.image)}" alt="Visual documentation for ${attr(p.title)}" loading="lazy">`: ''}<div class="dialog-divider"></div><div class="dialog-section"><span>01 / Approach</span><p>${esc(p.approach)}</p></div><div class="dialog-section"><span>02 / Outcome</span><p>${esc(p.outcome)}</p></div><div class="dialog-section"><span>03 / Tools and methods</span><div class="dialog-tags">${p.tools.map(t=>`<span>${esc(t)}</span>`).join('')}</div></div>${safeUrl(p.link)?`<a class="button button-dark" target="_blank" rel="noopener noreferrer" href="${safeUrl(p.link)}">Open project document ↗</a>`:''}`;
    const dialog=$('project-dialog');
    if(typeof dialog.showModal==='function')dialog.showModal(); else dialog.setAttribute('open','');
    document.body.classList.add('dialog-open');
  }
  renderProjects();
  $('project-filters').addEventListener('click', e => {const b=e.target.closest('[data-filter]'); if(!b)return; selectedFilter=b.dataset.filter; renderProjects();});
  $('project-grid').addEventListener('click',e=>{const b=e.target.closest('[data-project-id]');if(b)openProject(b.dataset.projectId);});
  const dialog=$('project-dialog');
  const closeDialog=()=>{dialog.close?.();dialog.removeAttribute('open');document.body.classList.remove('dialog-open');};
  $('dialog-close').addEventListener('click',closeDialog);
  dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog();});
  dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
  $('publication-list').innerHTML=d.publications.map((p,i)=>`<article class="publication-row"><div class="publication-num">0${i+1}</div><div><p class="publication-type">${esc(p.type)} · ${esc(p.year)}</p><h3>${esc(p.title)}</h3><p class="publication-note">${esc(p.note)}</p>${safeUrl(p.link)?`<a class="publication-resource" href="${safeUrl(p.link)}" target="_blank" rel="noopener noreferrer">View document ↗</a>`:''}</div><span class="status-pill">${esc(p.status)}</span></article>`).join('');
  $('experience-list').innerHTML=d.experience.map(x=>`<article class="experience-item"><div class="experience-year">${esc(x.year)}</div><h3>${esc(x.role)}</h3><strong>${esc(x.place)}</strong><p>${esc(x.description)}</p></article>`).join('');
  $('training-list').innerHTML=d.training.map(x=>`<article class="training-item"><span>${esc(x.year)} · ${esc(x.detail)}</span><h3>${esc(x.name)}</h3><p>${esc(x.source)}</p></article>`).join('');
  $('skills-grid').innerHTML=d.skills.map((x,i)=>`<div class="skill-group"><span>0${i+1} / ${esc(x.group)}</span><h3>${esc(x.group)}</h3><div class="skill-pills">${x.items.map(s=>`<span>${esc(s)}</span>`).join('')}</div></div>`).join('');
  $('recognition-grid').innerHTML=d.recognition.map((x,i)=>`<div class="recognition-card"><span class="recognition-num">0${i+1} <i>✳</i></span><h3>${esc(x.title)}</h3><p>${esc(x.detail)}</p><span class="recognition-year">${esc(x.year)}</span></div>`).join('');
  const links=[{label:'Email',url:d.email?`mailto:${d.email}`:''},{label:'Academic portfolio (Google Sites)',url:d.previousPortfolio},{label:'LinkedIn',url:d.linkedIn},{label:'GitHub',url:d.github},{label:'Academic CV',url:d.cvUrl}].filter(x=>x.url);
  $('contact-links').innerHTML=links.map(l=>`<a href="${safeUrl(l.url)}" ${/^https?:/i.test(l.url)?'target="_blank" rel="noopener noreferrer"':''}>${esc(l.label)} <span aria-hidden="true">↗</span></a>`).join('');
  $('email-link').href=d.email?`mailto:${d.email}`:d.previousPortfolio||'#contact';
  if(!d.email) $('email-link').textContent='View my academic profile ↗';
  const nav=$('site-nav'), menu=$('menu-toggle');
  menu.addEventListener('click',()=>{const show=nav.classList.toggle('is-open'); menu.classList.toggle('is-open',show);menu.setAttribute('aria-expanded',String(show));menu.setAttribute('aria-label',show?'Close navigation':'Open navigation');});
  nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');menu.classList.remove('is-open');menu.setAttribute('aria-expanded','false');}});
  function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight; $('reading-progress').style.width=total>0?`${Math.min(100,(scrollY/total)*100)}%`:'0%';}
  window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
  if('IntersectionObserver'in window){const ob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('appeared');ob.unobserve(e.target);}}),{threshold:.08});document.querySelectorAll('.section-heading, .project-card, .stat, .recognition-card, .experience-item').forEach(el=>{el.classList.add('reveal');ob.observe(el);});}
})();
