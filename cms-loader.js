/* Public-site content loader. The editor modifies data/*.json on GitHub.
   Local file previews retain content.js as a fallback, so no setup is needed. */
(async function loadPortfolio(){
  const sections=['profile','education','interests','projects','publications','experience','training','skills','recognition'];
  const data=window.PORTFOLIO_DATA||{};
  if (location.protocol!=='file:') {
    try {
      const results=await Promise.all(sections.map(async section=>{
        const r=await fetch(`data/${section}.json`,{cache:'no-cache'});
        if(!r.ok) throw new Error(`${section}: HTTP ${r.status}`);
        return [section,await r.json()];
      }));
      for(const [key,value] of results){
        if(key==='profile') Object.assign(data,value);
        else data[key]=value;
      }
    }catch(err){console.warn('Could not load online CMS content; showing built-in preview data.',err);}
  }
  data.projects=(data.projects||[]).map((p,index)=>({
    ...p,
    id:`project-${index+1}`,
    number:String(index+1).padStart(2,'0'),
    tools:Array.isArray(p.tools)?p.tools:[]
  }));
  window.PORTFOLIO_DATA=data;
  // Additional presentation copy is independent from your existing academic data.
  // Missing editor files never prevent existing profile/research data from loading.
  const textSections=['home','about','education','research','projects','publications','experience','skills','achievements','contact','footer','accessibility','interface','metadata'];
  window.PORTFOLIO_EDIT_TEXT={};
  window.PORTFOLIO_EDIT_FONTS={styles:[]};
  if(location.protocol!=='file:') {
    await Promise.all(textSections.map(async key=>{
      try {
        const response=await fetch(`data/site-${key}.json`,{cache:'no-cache'});
        if(response.ok) window.PORTFOLIO_EDIT_TEXT[key]=await response.json();
      }catch(error){ console.warn('Optional wording file unavailable:',key,error); }
    }));
    try {
      const fonts=await fetch('data/site-fonts.json',{cache:'no-cache'});
      if(fonts.ok) window.PORTFOLIO_EDIT_FONTS=await fonts.json();
    }catch(error){console.warn('Optional font settings unavailable',error);}
  }
  const script=document.createElement('script');script.src='script.js';
  // The editor runs after the original site renderer so text is never overwritten.
  script.onload=()=>{ const extra=document.createElement('script');extra.src='site-editability.js';document.body.append(extra); };
  script.onerror=()=>{document.body.insertAdjacentText('afterbegin','Could not load the portfolio script.');};
  document.body.append(script);
})();
