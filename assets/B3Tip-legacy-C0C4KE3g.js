System.register(["./mui-legacy-BDTphHaF.js","./react-setup-legacy-Bwwh9_Jr.js","./reactVendor-legacy-CtYIj4Ma.js","./eReact-legacy-BRtOBtIF.js","./intl-legacy-DG3cM9-L.js","./eCache-legacy-BoIqTPuc.js","./eStyled-legacy-D59194a7.js","./redux-legacy-Dls004SH.js","./toolkit-legacy-6OFItfV5.js","./lodashEs-legacy-Da1qF4L1.js","../index-legacy.BPYbSXo1.js","./lang-legacy-C2M9M2Og.js","./router-legacy-CCJEjNy7.js","./muiIcon-legacy-BXgwC5sb.js","./dateFns-legacy-DV9BM4UY.js","./dropzone-legacy-B_7NAEdu.js","./b3Logger-legacy-C5y5ZQF8.js"],(function(l,e){"use strict";var s,n,t,i,a,o;return{setters:[l=>{s=l.j,n=l.B,t=l.q,i=l.$,a=l.aa},l=>{o=l.a},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){function e({msg:l,onClose:e}){const n=l.jsx?l.jsx:()=>s.jsx("span",{children:l.msg});return s.jsxs(i,{sx:{width:"320px",alignItems:"center",'& button[title="Close"]':{display:l.isClose?"block":"none"},mb:"5px","& .MuiAlert-message":{overflow:"unset"}},variant:"filled",severity:l.type,onClose:()=>l.isClose&&e(l.id),children:[l.title&&s.jsx(a,{children:l.title}),s.jsx(n,{})]},l.id)}l("default",(function({handleItemClose:l,vertical:i="bottom",horizontal:a="right",msgs:c=[],handleAllClose:r}){const[u]=o();return c&&c.length?s.jsx(n,{children:c.length>0?c.map(((o,c)=>s.jsx(t,{open:!!o?.id,autoHideDuration:o?.time||5e3,onClose:(l,e)=>r(o.id,e),disableWindowBlurListener:!0,anchorOrigin:{vertical:i,horizontal:a},sx:{top:24+10*c+c*(u?80:90)+"px !important",width:"320px",height:"auto"},children:s.jsx(n,{sx:{display:"flex"},children:s.jsx(e,{msg:o,onClose:l})})},o.id))):null}):null}))}}}));
