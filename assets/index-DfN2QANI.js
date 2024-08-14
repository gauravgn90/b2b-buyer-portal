import{j as T,B as pe}from"./mui-5MYSBV5R.js";import{r as x}from"./reactVendor-BAhb8EbJ.js";import{u as Fe}from"./form-Bvi8lP6x.js";import{u as be}from"./lang-BFcXlKUT.js";import{t as W}from"./lodashEs-Ck10JMnh.js";import{B as $,$ as Y,a0 as he,a1 as we,j as ge,u as A,p as ye,C as Be,a as Ne,a2 as Ee,W as O,k as G,a3 as xe,a4 as Pe,a5 as V,N as Ce,a6 as Ie}from"./react-setup-B89zJiq4.js";import{B as ve}from"./B3CustomForm-DjrjSYXN.js";import"../index.CgW3dhwJ.js";import{c as Me,a as Ae}from"./users-BdTCmaEu.js";import{d as c,g as Se}from"./config-DywBMq9e.js";import{b as _e}from"./b3Logger-CMQiGC3f.js";import{v as qe}from"./validatorRules-CTaxO-S2.js";import{u as Le}from"./router-BbCjXwHs.js";import"./eReact-DeS39u1B.js";import"./intl-CIPMD0ue.js";import"./eCache-BQInSoPa.js";import"./eStyled-BQSmO2oX.js";import"./redux-B-shcavw.js";import"./toolkit-CHPG993j.js";import"./muiIcon-Du0m7JKT.js";import"./dateFns-CE3kB2v1.js";import"./dropzone-CHkuoC7V.js";const Ue=e=>"mutation{\n  updateAccountSettings (\n    updateData: ".concat(Y(e),"\n  ){\n    result {\n      email\n    },\n  }\n}"),Re=e=>"mutation{\n  updateCustomerAccountSettings (\n    updateData: ".concat(Y(e),"\n  ){\n    result {\n      email\n    },\n  }\n}"),Te=e=>"{\n  accountSettings (\n    companyId: ".concat(e.companyId,"\n  ){\n    firstName,\n    lastName,\n    company,\n    phoneNumber,\n    email,\n    formFields {\n      name,\n      value\n    },\n    extraFields {\n      fieldName,\n      fieldValue,\n    }\n    role,\n    companyRoleId,\n    companyRoleName,\n  }\n}"),Oe=()=>"{\n  customerAccountSettings {\n    firstName,\n    lastName,\n    company,\n    phoneNumber,\n    email,\n    formFields {\n      name,\n      value\n    },\n  }\n}",Ve=e=>$.graphqlB2B({query:Ue(e)}),$e=e=>$.graphqlB2B({query:Re(e)}),je=e=>$.graphqlB2B({query:Te(e)}),Je=()=>$.graphqlB2B({query:Oe()}),ke=()=>[{name:"currentPassword",label:"Current Password",idLang:"accountSettings.form.currentPassword"},{name:"password",label:"Password",idLang:"accountSettings.form.password"},{name:"confirmPassword",label:"Confirm Password",idLang:"accountSettings.form.confirmPassword"}],De=(e,o)=>{const m=[{name:"company",label:o("accountSettings.form.company"),required:!1,default:"",fieldType:"text",xs:e,variant:"filled",size:"small"},{name:"role",label:o("accountSettings.form.role"),required:!1,default:"",fieldType:"dropdown",options:[{label:o("accountSettings.form.admin"),value:0},{label:o("accountSettings.form.seniorBuyer"),value:1},{label:o("accountSettings.form.juniorBuyer"),value:2},{label:o("accountSettings.form.superAdmin"),value:3}],xs:e,variant:"filled",size:"small"}],t=ke().map(r=>({name:r.name,label:r.label,required:!1,default:"",fieldType:"password",xs:e,variant:"filled",size:"small",idLang:r.idLang}));return{accountB2BFormFields:m,passwordModified:t}};function ze(e){const o={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e,mode:"cors",credentials:"include"};return fetch("".concat(he,"/account.php?action=update_account"),o).then(m=>{if(!m.ok)throw new Error("Network response was not ok");return m.text()}).then(m=>m)}const Ge=()=>{const e=we.get("XSRF-TOKEN");if(e)return decodeURIComponent(e)};function He(e,o){return new Promise((m,t)=>{const{email:r,confirmPassword:s,newPassword:a,currentPassword:f}=e,n=o.filter(p=>p.required&&p.custom)||[],d=new URLSearchParams,l=Ge()||"";d.append("FormField[1][1]",r),d.append("FormField[1][24]",f),d.append("FormField[1][2]",a),d.append("FormField[1][3]",s),d.append("authenticity_token",l),n.length&&n.forEach(p=>{var w,P;if((w=p.name)!=null&&w.includes("_")){const u=(P=p.name)==null?void 0:P.split("_")[1],{formFields:S}=e,_=S.find(C=>C.name===p.bcLabel).value;if(p.type==="date"){const C=_.split("-");if(!_&&C.length!==3)return;const[j,J,k]=C;d.append("FormFieldYear[1][".concat(u,"]"),j),d.append("FormFieldMonth[1][".concat(u,"]"),J),d.append("FormFieldDay[1][".concat(u,"]"),k)}else d.append("FormField[1][".concat(u,"]"),_)}});const b=d.toString();ze(b).then(p=>{const w=p.includes("alertBox--error");m(!w)}).catch(p=>{_e.error("Error:",p),t()})})}const Q=qe(["email"]),Ke=(e,o,m,t)=>{const r=(e==null?void 0:e.extraFields)||[];return o.forEach(s=>{const a=s;c((s==null?void 0:s.name)||"")==="first_name"&&(a.default=e.firstName),c((s==null?void 0:s.name)||"")==="last_name"&&(a.default=e.lastName),c((s==null?void 0:s.name)||"")==="phone"&&(a.default=e.phoneNumber),c((s==null?void 0:s.name)||"")==="email"&&(a.default=e.email,a.validate=Q)}),r.length>0&&r.forEach(s=>{const a=s,f=o.find(n=>c((n==null?void 0:n.name)||"")===a.fieldName);f&&(f.default=a.fieldValue)}),m.forEach(s=>{const a=s;s.name==="role"?(a.default=e.companyRoleName,a.disabled=!0):s.name==="company"&&(a.default=e.company,a.disabled=!0)}),t.forEach(s=>{const a=((e==null?void 0:e.formFields)||[]).find(n=>n.name===s.bcLabel),f=s;a&&(f.default=a.value)}),[...o,...m,...t]},Xe=(e,o,m)=>(o.forEach(t=>{const r=t;c((t==null?void 0:t.name)||"")==="first_name"&&(r.default=e.firstName),c((t==null?void 0:t.name)||"")==="last_name"&&(r.default=e.lastName),c((t==null?void 0:t.name)||"")==="phone"&&(r.default=e.phoneNumber),c((t==null?void 0:t.name)||"")==="email"&&(r.default=e.email,r.validate=Q),c((t==null?void 0:t.name)||"")==="company"&&(r.default=e.company)}),m.forEach(t=>{const r=((e==null?void 0:e.formFields)||[]).find(a=>a.name===t.bcLabel),s=t;r&&(s.default=r.value)}),[...o,...m]),We=(e,o,m,t)=>{const r=(o==null?void 0:o.extraFields)||[],s={};s.formFields=[];let a=!0,f=!0,n=!1;return Object.keys(e).forEach(d=>{m.forEach(l=>{if(d===l.name&&(f=!1,c(l.name)==="first_name"&&(o.firstName!==e[l.name]&&(a=!1),s.firstName=e[l.name]),c(l.name)==="last_name"&&(o.lastName!==e[l.name]&&(a=!1),s.lastName=e[l.name]),c(l.name)==="phone"&&(o.phoneNumber!==e[l.name]&&(a=!1),s.phoneNumber=e[l.name]),c(l.name)==="email"&&(o.email!==e[l.name]&&(a=!1),s.email=e[l.name]),l.custom)){const b=r.find(p=>p.fieldName===c((l==null?void 0:l.name)||""));(b==null?void 0:b.fieldValue)!==e[l.name]&&(n=!0)}}),n&&(a=!1),f&&t.forEach(l=>{var b;if(l.fieldId===d&&(s!=null&&s.formFields)){const{name:p}=l;s.formFields.push({name:(l==null?void 0:l.bcLabel)||"",value:e[d]}),f=!1;const w=((o==null?void 0:o.formFields)||[]).find(P=>P.name===l.bcLabel);w&&JSON.stringify(w.value)!==JSON.stringify(e[d])&&(a=!1),!((b=o==null?void 0:o.formFields)!=null&&b.length)&&p&&e[p]&&(a=!1)}}),f&&(d==="password"?(s.newPassword=e[d],e[d]&&(a=!1)):s[d]=e[d]),f=!0}),delete s.company,delete s.role,{isEdit:!a,param:s}},Ye=(e,o,m,t)=>{const r={};r.formFields=[];let s=!0,a=!0;return Object.keys(e).forEach(f=>{m.forEach(n=>{f===n.name&&(a=!1,c(n.name)==="first_name"&&(o.firstName!==e[n.name]&&(s=!1),r.firstName=e[n.name]),c(n.name)==="last_name"&&(o.lastName!==e[n.name]&&(s=!1),r.lastName=e[n.name]),c(n.name)==="phone"&&(o.phoneNumber!==e[n.name]&&(s=!1),r.phoneNumber=e[n.name]),c(n.name)==="email"&&(o.email!==e[n.name]&&(s=!1),r.email=e[n.name]),c(n.name)==="company"&&(o.company!==e[n.name]&&(s=!1),r.company=e[n.name]))}),a&&t.forEach(n=>{if(n.fieldId===f&&(r!=null&&r.formFields)){r.formFields.push({name:(n==null?void 0:n.bcLabel)||"",value:e[f]}),a=!1;const d=((o==null?void 0:o.formFields)||[]).find(l=>l.name===n.bcLabel);d&&JSON.stringify(d.value)!==JSON.stringify(e[f])&&(s=!1)}}),a&&(f==="password"?(r.newPassword=e[f],e[f]&&(s=!1)):r[f]=e[f]),a=!0}),{isEdit:!s,param:r}};function ys(){const{control:e,handleSubmit:o,getValues:m,formState:{errors:t},setValue:r,setError:s}=Fe({mode:"onSubmit"}),[a,f]=ge("sf-isFinshUpdate",!1,sessionStorage),n=A(ye),d=A(({company:i})=>i.companyInfo.id),l=A(({company:i})=>i.customer),b=A(({company:i})=>i.customer.role),p=A(({b2bFeatures:i})=>i.masqueradeCompany.id),w=A(({b2bFeatures:i})=>i.masqueradeCompany.isAgenting),{state:{portalStyle:{backgroundColor:P="#FEF9F5"}}}=x.useContext(Be),u=be(),[S]=Ne(),_=Le(),[C,j]=x.useState([]),[J,k]=x.useState([]),[H,Z]=x.useState([]),[ee,q]=x.useState(!1),[se,oe]=x.useState({}),[ae,re]=x.useState(!1),[ne,le]=x.useState(""),K=b===3&&w?p:+d,g=!n||b===3&&!w;x.useEffect(()=>{(async()=>{try{q(!0);const B=await Pe(g?1:2),N=g?Je:je,h=g?{}:{companyId:K},L=g?"customerAccountSettings":"accountSettings",{[L]:I}=await N(h),v=Se(B.accountFormFields||[]),{accountB2BFormFields:F,passwordModified:D}=De(12,u),M=((v==null?void 0:v.contactInformation)||[]).filter(E=>E.fieldId!=="field_email_marketing_newsletter"),U=JSON.parse(JSON.stringify(M));U.forEach(E=>{const y=E;y.fieldId==="field_first_name"&&(y.label=u("accountSettings.form.firstName")),y.fieldId==="field_last_name"&&(y.label=u("accountSettings.form.lastName")),y.fieldId==="field_email"&&(y.label=u("accountSettings.form.email")),y.fieldId==="field_phone_number"&&(y.label=u("accountSettings.form.phoneNumber"))});const{additionalInformation:z=[]}=v,me=g?Xe(I,U,z):Ke(I,U,F,z),ue=JSON.parse(JSON.stringify(D)).map(E=>{const y=E;return y.label=u(E.idLang),E}),X=[...me,...ue],R=X.find(E=>E.name==="role");R!=null&&R.fieldType&&(R.fieldType="text"),j(X),le(I.email),oe(I),k(M),Z(z)}finally{a&&(V.success(u("accountSettings.notification.detailsUpdated")),f(!1)),q(!1),re(!0)}})()},[]);const te=async i=>{if(l.emailAddress===W(i))return!0;const B={email:i,channelId:Ie},{isValid:N}=g?await Me(B):await Ae(B);return N||s("email",{type:"custom",message:u("accountSettings.notification.emailExists")}),N},ie=i=>i.password!==i.confirmPassword?(s("confirmPassword",{type:"manual",message:u("global.registerComplete.passwordMatchPrompt")}),s("password",{type:"manual",message:u("global.registerComplete.passwordMatchPrompt")}),!1):!0,fe=i=>i.email!==l.emailAddress&&!i.currentPassword?(V.error(u("accountSettings.notification.updateEmailPassword")),!1):!0,de=i=>{let B=[];const N=C.filter(h=>h.custom&&h.groupId===1);return N.length>0&&(B=N.map(h=>({fieldName:c((h==null?void 0:h.name)||""),fieldValue:i[h.name]}))),B},ce=()=>{o(async i=>{q(!0);try{const B=await te(i.email),N=fe(i),h=ie(i);let L=[];g||(L=de(i));const I=g?Ye:We;if(B&&N&&h){const{isEdit:v,param:F}=I(i,se,J,H);if(v){g||(F.companyId=K,F.extraFields=L);const D=g?$e:Ve;if((F.newPassword&&F.currentPassword||ne!==F.email)&&!await He(F,H)){V.error(u("accountSettings.notification.passwordNotMatch"));return}const M={...F,currentPassword:F.currentPassword};F.newPassword===""&&F.confirmPassword===""&&(delete M.newPassword,delete M.confirmPassword),await D(M)}else{V.success(u("accountSettings.notification.noEdits"));return}i.password&&i.currentPassword||l.emailAddress!==W(i.email)?_("/login?loginFlag=3"):(Ce.clear(),f(!0),window.location.reload())}}finally{q(!1)}})()};return T.jsx(Ee,{isSpinning:ee,background:P,children:T.jsxs(pe,{sx:{width:"".concat(S?"100%":"35%"),minHeight:"".concat(S?"800px":"300px"),"& input, & .MuiFormControl-root .MuiTextField-root, & .MuiSelect-select.MuiSelect-filled, & .MuiTextField-root .MuiInputBase-multiline":{bgcolor:O("#FFFFFF",.87),borderRadius:"4px",borderBottomLeftRadius:"0",borderBottomRightRadius:"0"},"& .MuiButtonBase-root.MuiCheckbox-root:not(.Mui-checked), & .MuiRadio-root:not(.Mui-checked)":{color:O(G(P),.6)},"& .MuiTypography-root.MuiTypography-body1.MuiFormControlLabel-label, & .MuiFormControl-root .MuiFormLabel-root:not(.Mui-focused)":{color:O(G(P),.87)},"& .MuiInputLabel-root.MuiInputLabel-formControl:not(.Mui-focused)":{color:O(G("#FFFFFF"),.6)}},children:[T.jsx(ve,{formFields:C,errors:t,control:e,getValues:m,setValue:r}),T.jsx(xe,{sx:{mt:"28px",mb:"".concat(S?"20px":"0"),width:"100%",visibility:"".concat(ae?"visible":"hidden")},onClick:ce,variant:"contained",children:u("accountSettings.button.saveUpdates")})]})})}export{ys as default};
