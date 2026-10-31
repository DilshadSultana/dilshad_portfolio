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
  const script=document.createElement('script');script.src='script.js';
  script.onerror=()=>{document.body.insertAdjacentText('afterbegin','Could not load the portfolio script.');};
  document.body.append(script);
})();
