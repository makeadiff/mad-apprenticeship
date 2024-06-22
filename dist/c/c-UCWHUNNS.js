import{a as lt,b as Bt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-4MPLDZWV.js";import{B as N,C as Ut,c as J,d as Q,f as Z,g as tt,i as et,j as ot,n as It,q as g,t as Dt,v as k,w as $,y as nt,z as it}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-7I7OLWOL.js";import{b as G,c as Pt,d as j,f as K,g as U}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-EYCFSEYW.js";import{i as B}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XVMSE7D6.js";import{c as V,f as Y,i as q,p as X,w as R}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-3GVO5LHG.js";import{a as Nt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-2ECMWVPA.js";import{a as rt,c as Ct}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XYBU5ZH7.js";import{a as st,b as Rt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XJMDX53R.js";import{a as vt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-NDMKEPX2.js";import{C as L,E as I}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-OM2EU7QX.js";import{a as W}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RQHQGLHW.js";import{a as m,b as D}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RAPBUJGJ.js";import{b as E,c as Tt}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XISRCAED.js";import{a as h,d as P}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var at,ct,Wt,O,pt=h(()=>{"use strict";D();at=({userId:t})=>m.get(`/api/list-styles/global/${t}`),ct=({projectId:t})=>m.get(`/api/list-styles/project/${t}`),Wt=({userId:t,styles:n})=>m.put(`/api/list-styles/global/${t}`,{styles:n}),O=({projectId:t,styles:n})=>m.put(`/api/list-styles/project/${t}`,{styles:n})});var yt,dt,Vt,A,St=h(()=>{"use strict";D();yt=({userId:t})=>m.get(`/api/link-styles/global/${t}`),dt=({projectId:t})=>m.get(`/api/link-styles/project/${t}`),Vt=({userId:t,styles:n})=>m.put(`/api/link-styles/global/${t}`,{styles:n}),A=({projectId:t,styles:n})=>m.put(`/api/link-styles/project/${t}`,{styles:n})});var mt,gt,Xt,z,ft=h(()=>{"use strict";D();mt=({userId:t})=>m.get(`/api/text-styles/global/${t}`),gt=({projectId:t})=>m.get(`/api/text-styles/project/${t}`),Xt=({userId:t,styles:n})=>m.put(`/api/text-styles/global/${t}`,{styles:n}),z=({projectId:t,styles:n})=>m.put(`/api/text-styles/project/${t}`,{styles:n})});function H(){return Ot.map(t=>({...t,name:`style-${lt()}`}))}var Ot,te,ut=h(()=>{"use strict";Bt();U();Ot=[{label:"H1",tag:"h1",cssProperties:{color:"22222264",fontFamily:"Roboto",fontStyle:"normal",textAlign:"left",fontSize:48,fontWeight:700,letterSpacing:0,lineHeight:60,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"H2",tag:"h2",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:24,fontWeight:400,letterSpacing:0,lineHeight:30,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Text",tag:"p",cssProperties:{color:"22222264",fontFamily:"Georgia",fontStyle:"normal",textAlign:"left",fontSize:18,fontWeight:400,letterSpacing:0,lineHeight:23,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}},{label:"Caption",tag:"p",cssProperties:{color:"22222232",fontFamily:"Georgia",fontStyle:"italic",textAlign:"left",fontSize:14,lineHeight:18,letterSpacing:0,fontWeight:400,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}}];te=[{label:"List item",cssProperties:{color:"22222264",fontFamily:j.fontFamily,fontStyle:j.fontStyle,textAlign:"left",fontSize:j.fontSize,fontWeight:Number(j.fontWeight),letterSpacing:0,lineHeight:j.lineHeight,paddingRight:0,paddingLeft:0,width:26}}]});var _,xt=h(()=>{"use strict";R();_=(t,n)=>t?`${t}${V(typeof n=="number"?n:100)}`:""});var M,ht,kt,$t=h(()=>{"use strict";Ct();U();B();R();Tt();xt();M=(t,n)=>{let i=l=>{switch(l){case"none":return"None";case"dotted":return"Dotted";case"dashed":return"Dashed";case"solid":return"Solid";default:break}},o=l=>n?`${n}-${l}`:l,p=typeof t[o("color")]<"u"?t[o("color")]:t.color,s=typeof t[o("opacity")]<"u"?t[o("opacity")]:t.opacity,y=typeof t[o("u-color")]<"u"?t[o("u-color")]:t["u-color"],f=typeof t[o("u-opacity")]<"u"?t[o("u-opacity")]:t["u-opacity"],x=typeof t[o("u-size")]<"u"?t[o("u-size")]:t["u-size"],d=typeof t[o("u-offset")]<"u"?t[o("u-offset")]:t["u-offset"],w=typeof t[o("u-style")]<"u"?t[o("u-style")]:t["u-style"];return{textColor:_(String(p==="inherit"?t.color:p),Number(s==="inherit"?t.opacity:s)),color:_(String(y==="inherit"?t["u-color"]:y),Number(f==="inherit"?t["u-opacity"]:f)),size:Number(x==="inherit"?t["u-size"]:x),padding:Number(d==="inherit"?t["u-offset"]:d),type:i(w)}},ht=t=>t.map(i=>{let{_name:o,_caption:p}=i,s=M(i),y=M(i,"hover"),f=M(i,"current");return{name:o,label:p,style:{link:s,hover:y,current:f}}}),kt=t=>{let n=["none",0,"baseline"],i=["opacity"];return t.map(o=>{let{_name:p,_caption:s,tag:y,_sort:f,...x}=o,d=Object.keys(x).reduce((l,c)=>{let a=rt(c),r=x[c];if(i.includes(c)||n.includes(r))return{...l};if(a==="textAlign"&&r==="start")r="left";else if(a==="color"){let e=Number(x.opacity),S=e>0?parseFloat((e/100).toFixed(2)):1,u=X(String(r),S);r=q(u)}else a.includes("padding")?r=Number(r):a==="fontWeight"&&r==="normal"&&(r=j.fontWeight);return{...l,[a]:r}},{});return d.paddingLeft=d.paddingLeft||0,d.paddingRight=d.paddingRight||0,d.paddingTop=d.paddingTop||0,d.paddingBottom=d.paddingBottom||0,{name:p,label:s,tag:y||E.AVAILABLE_TEXT_TAGS[0],cssProperties:d}})}});var C,bt=h(()=>{"use strict";Pt();it();U();C={...G,...nt,...K}});function zt(t){if(!t)return L("div",{style:{width:"100%"}});let n=(0,wt.useMemo)(()=>T(t),[t.type,t.size,t.color,t.padding]);return L("div",{style:{...n,width:"100%"}})}var wt,T,Le,Lt=h(()=>{"use strict";wt=P(W());R();B();I();T=t=>{let{type:n="None",color:i="00000064",size:o=1,padding:p=0}=t||{},{r:s,g:y,b:f,a:x}=Y(i),d=`rgba(${s}, ${y}, ${f}, ${x})`,w="repeat-x",l=o+p,c=l>0?"0 100%":`0 ${100+l}%`,a={textDecoration:"none",paddingBottom:Math.max(0,l)};switch(n){case"Solid":return{...a,background:`linear-gradient(to right, ${d} 0%, ${d} 100%) ${c}/1px ${o}px ${w}`};case"Dotted":return{...a,background:`linear-gradient(to right, ${d} 0%, ${d} 50%, transparent 50%, transparent 100%) ${c}/${o*2}px ${o}px ${w}`};case"Dashed":return{...a,background:`linear-gradient(to right, ${d} 0%, ${d} 66.6666%, transparent 66.6666%, transparent 100%) ${c}/${o*3}px ${o}px ${w}`};default:return{...a,background:"none"}}};Le=zt});function jt({mode:t}){let[n,i]=J(),[o,p]=Z(),[s,y]=et();(0,b.useEffect)(()=>{if(t==="constructor"){let l=[],c=[],a=[];if(!n.project.length){let e=window.ServerData.textStyles,S=H();if(!e||!e.project||!e.project.length){let u=window.ServerData?.editParams?.paragraph_styles;u&&u.length&&(S=kt(u))}l=e?.project&&e?.project.length?e.project:S,i({global:e?.global||[],project:l})}if(!o.project.length){let e=window.ServerData.linkStyles,S=[N];if(!e||!e.project||!e.project.length){let u=window.ServerData.editParams&&window.ServerData.editParams.link_styles;u&&u.length&&(S=ht(u))}c=e?.project&&e.project.length?e.project:S,p({global:e?.global||[],project:c})}if(!s.project.length){let e=window.ServerData.listStyles;a=e?.project&&e?.project.length?e.project:[],y({global:e?.global||[],project:a})}let r=[];l.length&&!(0,v.default)(l,window.ServerData.textStyles?.project||[])&&r.push(z({styles:l,projectId:window.ServerData.projectId})),c.length&&!(0,v.default)(c,window.ServerData.linkStyles?.project||[])&&r.push(A({styles:c,projectId:window.ServerData.projectId})),a.length&&!(0,v.default)(a,window.ServerData.listStyles?.project||[])&&r.push(O({styles:a,projectId:window.ServerData.projectId})),r.length&&Promise.all(r)}if(t==="viewer"||t==="screenshoter"){let l=t==="viewer",c=l?window.ServerData?.mags?.mag?.textStyles||window.RM?.viewerRouter?.mag?.textStyles:window.ServerData?.mag?.textStyles;c&&i({global:c?.global?.length?c.global:[],project:c?.project?.length?c.project:[]});let a=l?window.ServerData?.mags?.mag?.linkStyles||window.RM?.viewerRouter?.mag?.linkStyles:window.ServerData?.mag?.linkStyles;a&&p({global:a?.global?.length?a.global:[],project:a?.project?.length?a.project:[]});let r=l?window.ServerData?.mags?.mag?.listStyles||window.RM?.viewerRouter?.mag?.listStyles:window.ServerData?.mag?.listStyles;r&&y({global:r?.global?.length?r.global:[],project:r?.project?.length?r.project:[]})}},[]);let f=(0,b.useMemo)(()=>Object.keys(C).map(c=>C[c].style).join(" "),[C]),x=(0,b.useMemo)(()=>{let l=r=>{let e=Mt(r.cssProperties);return`${e.textAlign}`==="justify"&&(e.whiteSpace="normal"),` .${r.name} { ${g(e)} } `},c=n.global.map(l),a=n.project.map(l);return[...c,...a].join(" ")},[n]),d=(0,b.useMemo)(()=>{let l=e=>{let S={...e.cssProperties};return typeof S.width=="number"&&(S.minWidth=S.width),S.lineHeight&&delete S.lineHeight,`
        .${e.name}-preview {
          ${g(e.cssProperties)}
        }
        .${e.name}.edit-mode .editor-block-wrapper {
          display: ${!e.listPosition||e.listPosition==="inside"?"block":"flex"};
        }
        .${e.name}.edit-mode .editor-block-wrapper:before, .${e.name}.edit-mode div[data-offset-key]:before {
          display: inline-block;
          ${g(S)}
          ${!e.listPosition||e.listPosition==="inside"?"line-height: 1;":""}
          ${e.baselineShift?`transform: translateY(${e.baselineShift}px);`:""}
        }
        .${e.name}.view-mode {
          display: ${!e.listPosition||e.listPosition==="inside"?"list-item":"flex"};
        }
        .${e.name}.view-mode:before {
          display: inline-block;
          ${g(S)}
          ${!e.listPosition||e.listPosition==="inside"?"line-height: 1;":""}
          ${e.baselineShift?`transform: translateY(${e.baselineShift}px);`:""}
        }

        .unordered-list-item.${e.name}.edit-mode div[data-offset-key]:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }
        .unordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode div[data-offset-key]:before {
          counter-increment: ${k};
          content: counter(${k})".";
          display: ${!e.listPosition||e.listPosition==="inside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .ordered-list-item.${e.name}.edit-mode .editor-block-wrapper:before {
          counter-increment: ${k};
          content: counter(${k})".";
          display: ${e.listPosition&&e.listPosition==="outside"?"inline-block":"none"};
          white-space: nowrap;
        }

        .unordered-list-item .${e.name}.view-mode:before {
          content: "${e.markerContent||"\u2022"}\\00a0";
        }`},c=`
      .${$}.edit-mode .editor-block-wrapper {
        display: flex;
      }
      .${$}.view-mode {
        display: flex;
      }
      .${$}.view-mode:before {
        display: inline-block;
      }

      .unordered-list-item.${$}.edit-mode .editor-block-wrapper:before {
        content: "\u2022\\00a0";
        display: inline-block;
      }
      .unordered-list-item.${$}.edit-mode div[data-offset-key]:before {
        content: "\u2022\\00a0";
        display: none;
      }

      .ordered-list-item.${$}.edit-mode .editor-block-wrapper:before {
        counter-increment: ${k};
        content: counter(${k})".";
        display: inline-block;
        white-space: nowrap;
      }
      .ordered-list-item.${$}.edit-mode div[data-offset-key]:before {
        counter-increment: ${k};
        content: counter(${k})".";
        display: none;
        white-space: nowrap;
      }

      .unordered-list-item .${$}.view-mode:before {
        content: "\u2022\\00a0";
      }`,a=s.global.map(l),r=s.project.map(l);return[c,...a,...r].join(" ")},[s]),w=(0,b.useMemo)(()=>{let l=r=>{let e=r.style?.link?`
        .${r.name} {
          ${g(T(r.style.link))}
          ${g({color:r.style.link.textColor})}
        }

        .${r.name} * {
          ${g({color:r.style.link.textColor})}
        }`:"",S=r.style?.hover?`
        .${r.name} .hover, .${r.name}:hover {
          ${g(T(r.style.hover))}
          ${g({color:r.style.hover.textColor},!0)}
        }

        .${r.name} .hover *, .${r.name}:hover * {
            ${g({color:r.style.hover.textColor},!0)}
        }`:"",u=r.style?.current?`
        .${r.name}.current {
          ${g(T(r.style.current))}
          ${g({color:r.style.current.textColor})}
        }

        .${r.name}.current * {
          ${g({color:r.style.current.textColor})}
        }`:"";return`
        ${e}
        ${S}
        ${u}
      `},c=o.global.map(l),a=o.project.map(l);return[...c,...a].join(" ")},[o]);return L(_t,{blockStyles:f,textStyleSheet:x,linkStyleSheet:w,listStyleSheet:d})}var b,v,F,Ht,_t,Mt,Ke,Ve,Ft=h(()=>{"use strict";b=P(W()),v=P(Nt()),F=P(vt());Rt();pt();St();ft();ut();$t();Ut();It();bt();Dt();Lt();B();it();I();Ht=async()=>{let t=window.RM.constructorRouter.mag.get("_id"),n=window.RM.constructorRouter.mag.get("user")._id;if(!t||!n)throw new Error("Cannot load text styles");let[{data:i},{data:o},{data:p},{data:s},{data:y},{data:f}]=await Promise.all([gt({projectId:t}),mt({userId:n}),dt({projectId:t}),yt({userId:n}),ct({projectId:t}),at({userId:n})]);return{textStyles:{global:o&&o.length?o:[],project:i&&i.length?i:H()},linkStyles:{global:s&&s.length?s:[],project:p&&p.length?p:[N]},listStyles:{global:f&&f.length?f:[],project:y&&y.length?y:[]}}},_t=(0,b.memo)(t=>L("style",{dangerouslySetInnerHTML:{__html:st(`
          ${t.blockStyles}
          ${t.textStyleSheet}
          ${t.linkStyleSheet}
          ${t.listStyleSheet}
        `)}}),(t,n)=>(0,v.default)(t,n)),Mt=t=>Object.keys(t).reduce((n,i)=>{let o=t[i];return typeof o=="string"&&`${o}`.includes("(")&&!String(o).includes(")")&&(o=`${o})`),o&&i==="opacity"&&parseInt(String(o))>1&&(o=parseInt(`${o}`)/100),{...n,[i]:o}},{});Ke=t=>{let n="text-global-styles",i=document.querySelector(`#${n}`);i?F.default.render(L(jt,{mode:t}),i):(i=document.createElement("div"),i.id=n,document.body.appendChild(i),F.default.render(L(jt,{mode:t}),i))},Ve=async({newTextStyles:t,newLinkStyles:n,newListStyles:i})=>{let o=await Ht();if(t&&t.length){let p=t.filter(s=>!o.textStyles.project.some(y=>y.name===s.name));if(p.length){let s=[...o.textStyles.project,...p];Q({global:o.textStyles.global,project:s}),z({styles:s,projectId:window.ServerData.projectId})}}if(i&&i.length){let p=i.filter(s=>!o.listStyles.project.some(y=>y.name===s.name));if(p.length){let s=[...o.listStyles.project,...p];ot({global:o.listStyles.global,project:s}),O({styles:s,projectId:window.ServerData.projectId})}}if(n&&n.length){let p=n.filter(s=>!o.linkStyles.project.some(y=>y.name===s.name));if(p.length){let s=[...o.linkStyles.project,...p];tt({global:o.linkStyles.global,project:s}),A({styles:s,projectId:window.ServerData.projectId})}}}});export{Xt as a,z as b,ft as c,Wt as d,O as e,pt as f,Vt as g,A as h,St as i,_ as j,xt as k,ht as l,kt as m,$t as n,Le as o,Lt as p,Ht as q,jt as r,Ke as s,Ve as t,Ft as u};
