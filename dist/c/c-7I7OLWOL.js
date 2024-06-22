import{b as x,c as v}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-2MNI46CX.js";import{i as D}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XVMSE7D6.js";import{d as f,f as g,q as m,w as O}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-3GVO5LHG.js";import{b as T,c as w}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-XYBU5ZH7.js";import{a as B}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-RQHQGLHW.js";import{a as l,d as C}from"https://st-p.rmcdn.net/aab27dd3/dist/c/c-QHP3NFJY.js";var K,L,H,V,z,P=l(()=>{"use strict";K="listStyle",L="ordered-key",H="default-list-style",V={"unordered-list-item":{element:"li"},"ordered-list-item":{element:"li"}},z={"unordered-list-item":{label:"Unordered list",style:`
      .unordered-list-item {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      .unordered-list-item div[data-offset-key]:before,
      .unordered-list-item > li:before {
        white-space: nowrap;
        content: "\u2022\\00a0";
      }
    `},"ordered-list-item":{label:"Ordered list",style:`
      .ordered-list-item {
        padding: 0;
        margin: 0;
        list-style-type: none;
      }

      .ordered-list-item div[data-offset-key]:before,
      .ordered-list-item > li:before {
        white-space: nowrap;
        counter-increment: ${L};
        content: counter(${L})".";
      }
    `}}});function p(t){let e=t,r=[],o=[];function i(n){let y=e;e=n,r.forEach(({update:a,options:d})=>{(!d||!d.shouldUpdate||!d.shouldUpdate(y,n))&&a()}),o.forEach(a=>{a&&typeof a=="function"&&a(n)})}function S(n){let y=j();return(n?.hookType==="layout"?s.useLayoutEffect:s.useEffect)(()=>{let c={options:n,update:y};return r.push(c),()=>{k(r,c)}},[]),[e,i]}function U(){return e}function $(n){return o.push(n),()=>{k(o,n)}}return[S,i,U,$]}function j(){let[,t]=(0,s.useState)({});return(0,s.useCallback)(()=>{t({})},[])}function k(t,e){let r=t.indexOf(e);r!==-1&&t.splice(r,1)}var s,b=l(()=>{"use strict";s=C(B())});var q,G,u,J,Q,M,X,Y,N,ee,te,F=l(()=>{"use strict";b();v();[q,G,u]=p({global:[],project:[]}),[J,Q,M]=p({global:[],project:[]}),[X,Y,N]=p({global:[],project:[]}),[ee]=p({}),te=({fontFamily:t,fontWeight:e,fontStyle:r})=>`${t}_${e}_${r}`;x("styleStore",{getTextStylesStore:u,getLinkStylesStore:M,getListStylesStore:N})});var ie,h,R,ae,le,pe,de,E=l(()=>{"use strict";w();O();F();ie="textStyle",h=["fontSize","lineHeight","letterSpacing","textIndent","paddingLeft","paddingTop","paddingRight","paddingBottom","width","minWidth"],R=(t,e)=>{if(e){if(h.includes(t)&&!isNaN(Number(e)))return`${e}px`;if(t==="color"){let{r,g:o,b:i,a:S}=g(String(e));return`rgba(${r}, ${o}, ${i}, ${S})`}return e}},ae=(t,e)=>{if(e){if(h.includes(t))return parseInt(String(e));if(t==="color"){let{r,g:o,b:i}=m(String(e));return f({r,g:o,b:i,a:1})}return e}},le=(t,e=!1)=>Object.keys(t).reduce((r,o)=>t[o]?`${r}${T(o)}: ${R(o,t[o])}${e?" !important":""}; `:r,""),pe=()=>{let e=u()||window.ServerData&&window.ServerData.mags&&window.ServerData.mags.mag&&window.ServerData.mags.mag.textStyles;return e?[...e.project||[],...e.global||[]].reduce((r,o)=>(Object.assign(r,{[o.name]:{element:o.tag}}),r),{}):{}},de=(t,e)=>t?e?parseFloat(String(t)):parseInt(String(t)):0});var fe,ge,I=l(()=>{"use strict";D();fe="LINK",ge={name:"link-1",label:"Default Link Style",style:{link:{textColor:"0080FF64",color:"0080FF64",type:"Solid",size:1,padding:0},hover:{textColor:"0080FF64",color:"0080FF64",type:"None",size:1,padding:0},current:{textColor:"0080FF64",color:"0080FF64",type:"None",size:1,padding:0}}}});export{p as a,b,q as c,G as d,u as e,J as f,Q as g,M as h,X as i,Y as j,N as k,ee as l,te as m,F as n,ie as o,ae as p,le as q,pe as r,de as s,E as t,K as u,L as v,H as w,V as x,z as y,P as z,fe as A,ge as B,I as C};
