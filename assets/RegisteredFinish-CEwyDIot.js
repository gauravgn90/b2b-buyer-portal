import{B as c,a7 as p,a8 as B,a3 as u,bs as R,C as k,a as A,k as w,N as T}from"./react-setup-B89zJiq4.js";import"../index.CgW3dhwJ.js";import{x as I,j as e,B as l,$ as E}from"./mui-5MYSBV5R.js";import{r as C}from"./reactVendor-BAhb8EbJ.js";import{u as y}from"./lang-BFcXlKUT.js";import{s as v}from"./config-DywBMq9e.js";import{n}from"./eStyled-BQSmO2oX.js";const z=t=>c.post("/api/v2/bc/customers",p.B2BRest,t),H=t=>c.post("/api/v2/bc/customers/subscribers",p.B2BRest,t),N=t=>c.post("/api/v2/extra-fields/company/validate",p.B2BRest,{...t,storeHash:B}),$=t=>c.post("/api/v2/extra-fields/user/validate",p.B2BRest,{...t,storeHash:B});function L(t){const{activeStep:o,handleBack:i,handleNext:d,handleFinish:x}=t,s=y(),a=I();return e.jsx(l,{children:o===v.length?e.jsx(l,{sx:{display:"flex",flexDirection:"row-reverse",pt:2},children:e.jsx(u,{variant:"contained",onClick:()=>x(),children:s("global.button.finish")})}):e.jsxs(l,{sx:{display:"flex",flexDirection:"row-reverse",pt:2},children:[e.jsx(u,{variant:"contained",onClick:d,sx:{backgroundColor:a.palette.primary.main},children:o===v.length-1?s("global.button.submit"):s("global.button.next")}),o!==0&&e.jsx(u,{variant:"contained",onClick:i,sx:{backgroundColor:a.palette.primary.main,mr:1},children:s("global.button.back")})]})})}const g=n("p")(()=>({margin:"2rem auto"})),G=n("h3")(()=>({margin:"1rem 0",display:"flex",justifyContent:"center",fontSize:"34px",fontWeight:"400"})),J=n("h4")(()=>({marginBottom:"20px"})),K=n("div")({display:"flex",flexDirection:"row",alignItems:"center"});n("div")(()=>({cursor:"pointer",color:"#1976d2",borderBottom:"1px solid #1976d2"}));const Q=n("div")(t=>{const{isMobile:o=!1}=t;return o?{}:{padding:"20px 40px"}}),V=n("div")({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"});function X(t){const{activeStep:o,handleFinish:i,isBCToB2B:d=!1}=t,{state:x}=C.useContext(R),s=y(),{state:{portalStyle:{backgroundColor:a="#FEF9F5"}}}=C.useContext(k),[F]=A(),m=w(a),{accountType:b,submitSuccess:j,isAutoApproval:h,storeName:r}=x,f=T.get("blockPendingAccountOrderCreation")&&!h,S=()=>{if(b==="1")return h?e.jsx(g,{children:s("global.registerFinish.autoApproved.tip",{storeName:r!=null?r:""})}):e.jsxs(e.Fragment,{children:[f&&e.jsx(E,{severity:"warning",variant:"filled",sx:{margin:"auto",borderRadius:"4px",padding:"6px 16px",maxWidth:"820px"},children:s("global.registerFinish.blockPendingAccountOrderCreation.tip")}),e.jsx(g,{children:s(f?"global.registerFinish.notAutoApproved.warningTip":"global.registerFinish.notAutoApproved.tip")})]});if(b==="2")return e.jsx(g,{children:s("global.registerFinish.bcSuccess.tip",{storeName:r!=null?r:""})})};return e.jsx(l,{sx:d?{pl:2,pr:2,mt:2,"& p":{color:m},width:F?"100%":"537px",boxShadow:"0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)",borderRadius:"4px",background:"#FFFFFF",padding:"0 0.8rem 1rem 0.8rem"}:{mt:2,"& p":{color:m}},children:j&&e.jsxs(e.Fragment,{children:[S(),e.jsx(L,{activeStep:o,handleFinish:i})]})})}export{J as I,L as R,K as T,N as a,X as b,z as c,Q as d,V as e,G as f,H as s,$ as v};
