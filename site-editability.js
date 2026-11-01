/* Optional content-and-font editor layer. This never alters your research/profile JSON.
   Original markup / CSS / images remain untouched unless a CMS field changes. */
(async () => {
  'use strict';
  if (location.protocol === 'file:') return; // Offline preview retains original source exactly.
  const current=window.PORTFOLIO_EDIT_TEXT || {};
  let mapping;
  try {
    const resp=await fetch('site-edit-map.json',{cache:'no-cache'});
    if(!resp.ok) return;
    mapping=await resp.json();
  } catch(error) { console.warn('Editor mapping unavailable',error); return; }
  const getNodes=selector=>{
    try {return [...document.querySelectorAll(selector)];}
    catch(_){return [];}
  };
  const replaceDirect=(el,index,newText)=>{
    const nodes=[...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE && n.textContent.trim());
    const node=nodes[index]; if(!node)return;
    const original=node.nodeValue;
    const lead=(original.match(/^\s*/)||[''])[0];
    const tail=(original.match(/\s*$/)||[''])[0];
    node.nodeValue=lead+newText+tail;
  };
  for(const [section,entries] of Object.entries(mapping.textMappings||{})){
    const values=current[section];
    if(!values || typeof values!=='object')continue;
    for(const item of entries){
      const value=values[item.key];
      if(typeof value!=='string')continue;
      const el=document.querySelector(item.selector);
      if(!el)continue;
      if(item.mode==='whole')el.textContent=value;
      else if(item.mode.startsWith('direct'))replaceDirect(el,Number(item.mode.slice(6)),value);
      else if(item.mode.startsWith('attr:'))el.setAttribute(item.mode.slice(5),value);
    }
  }
  const meta=current.metadata||{};
  if(typeof meta.browserTitle==='string')document.title=meta.browserTitle;
  for(const [key,selector] of Object.entries({description:'meta[name="description"]',socialTitle:'meta[property="og:title"]',socialDescription:'meta[property="og:description"]'})){
    if(typeof meta[key]==='string')document.querySelector(selector)?.setAttribute('content',meta[key]);
  }
  const FAMILIES={
    'Georgia':'Georgia, "Times New Roman", serif',
    'Times New Roman':'"Times New Roman", Times, serif',
    'Arial':'Arial, Helvetica, sans-serif',
    'Inter':'Inter, Arial, sans-serif',
    'Verdana':'Verdana, Geneva, sans-serif',
    'Tahoma':'Tahoma, Geneva, sans-serif',
    'Trebuchet MS':'"Trebuchet MS", Helvetica, sans-serif',
    'Palatino Linotype':'"Palatino Linotype", "Book Antiqua", Palatino, serif',
    'Garamond':'Garamond, Georgia, serif',
    'Cambria':'Cambria, Georgia, serif',
    'Helvetica':'Helvetica, Arial, sans-serif'
  };
  const WEIGHTS={'Normal':'400','Bold':'700','Light':'300','Medium':'500','Semi-bold':'600','Extra-bold':'800'};
  const sizeOK=v=>/^(?:\d+(?:\.\d+)?)(?:px|rem|em|%|vw|vh)$/.test(v);
  const spaceOK=v=>/^-?\d+(?:\.\d+)?(?:px|rem|em)$/.test(v);
  const colorOK=v=>/^#[0-9a-fA-F]{3,8}$/.test(v) || /^(?:black|white|navy|green|gray|grey|red|blue|inherit|currentColor)$/.test(v);
  const fontRows=window.PORTFOLIO_EDIT_FONTS?.styles;
  const applyFontStyles=()=>{
    if(!Array.isArray(fontRows))return;
    for(const rule of fontRows){
      if(!rule || typeof rule!=='object')continue;
      const selector=mapping.fontSelectors?.[rule.target];
      if(!selector)continue;
      for(const el of getNodes(selector)){
        if(FAMILIES[rule.fontFamily])el.style.fontFamily=FAMILIES[rule.fontFamily];
        if(sizeOK(String(rule.fontSize||'').trim()))el.style.fontSize=rule.fontSize.trim();
        if(WEIGHTS[rule.fontWeight])el.style.fontWeight=WEIGHTS[rule.fontWeight];
        if(/^\d+(?:\.\d+)?$/.test(String(rule.lineHeight||'').trim()))el.style.lineHeight=String(rule.lineHeight).trim();
        if(spaceOK(String(rule.letterSpacing||'').trim()))el.style.letterSpacing=String(rule.letterSpacing).trim();
        if(colorOK(String(rule.color||'').trim()))el.style.color=rule.color.trim();
      }
    }
  };
  applyFontStyles();
  // Newly filtered project cards and newly opened project popups stay editable too.
  if(Array.isArray(fontRows) && fontRows.length && 'MutationObserver' in window){
    for(const id of ['project-grid','project-filters','dialog-content']){
      const node=document.getElementById(id);
      if(node)new MutationObserver(applyFontStyles).observe(node,{childList:true});
    }
  }
})();
