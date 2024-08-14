import{g}from"./dateFns-CE3kB2v1.js";import"./react-setup-B89zJiq4.js";import"../index.CgW3dhwJ.js";import{v as f}from"./validatorRules-CTaxO-S2.js";const x=(e,n=14)=>e?e.replace(/[^\x00-\xff]/gi,"aa").length*n/2:null,h=(e,n=14)=>{const a=document.body.clientWidth,o=a<=750,l=500,t=a+16-98,i=o?t:l,d=x(e,n);return d!==null?Math.ceil(d/i):1},T="yyyy-MM-dd",A=["register.step.account","register.step.details","register.step.finish"],v=["text","multiline","number","dropdown"],b={encode(e){return window.btoa(encodeURIComponent(e))},decode(e){return decodeURIComponent(window.atob(e))}},c={text:["text","number","password","multiline"],checkbox:["checkbox"],dropdown:["dropdown"],radio:["radio"],date:["date"]},w=e=>{var a,o,l,t,i,d;let n={};if(c.text.includes(e.fieldType)&&(n={minlength:e.minlength||null,maxLength:e.maxLength||+e.maximumLength||null,min:e.min||null,max:e.max||+e.maximumValue||null,rows:((a=e==null?void 0:e.options)==null?void 0:a.rows)||e.numberOfRows||null},n!=null&&n.max&&(n.validate=f(["max"],{max:n==null?void 0:n.max})),e.fieldType==="password"&&(n.validate=f(["password"])),((e==null?void 0:e.fieldName)==="email"||(e==null?void 0:e.fieldName)==="phone")&&(n.validate=f([e.fieldName])),(e.fieldType==="number"||e.fieldType==="text"&&e.type==="integer")&&(n.validate=f(["number"]))),c.checkbox.includes(e.fieldType)&&(n={default:e.default||[],options:((o=e.options)==null?void 0:o.items)||null}),c.dropdown.includes(e.fieldType)){const r=[];(l=e.options)!=null&&l.helperLabel&&r.push({label:e.options.helperLabel,value:""});const s=[...r,...((t=e.options)==null?void 0:t.items)||[]];e.listOfValue&&e.listOfValue.forEach(u=>s.push({label:u,value:u})),n={default:e.default||"",options:s||null}}return c.radio.includes(e.fieldType)&&(n={default:e.default||"",options:((i=e.options)==null?void 0:i.items)||[]}),n!=null&&n.options&&(n==null||n.options.forEach(r=>{const s=r;r.value&&(s.value=r.label)})),e.fieldId==="field_country"&&(n.default=((d=e.valueConfigs)==null?void 0:d.default)||n.default),n},y=["country","state","email"],E=["field_country","field_address_1","field_city","field_state","field_zip_code"],L={1:"contactInformation",2:"additionalInformation",3:"businessDetails",4:"address",5:"password"},F=e=>y.includes(e)?e:b.decode(e),N=e=>y.includes(e)?e:b.encode(e),m=e=>e==="countryCode"?"country":e==="stateOrProvince"?"state":e,p=e=>{const n={id:e.id||e.fieldName,name:m(e.name)||N(e.fieldName),label:e.label||e.labelName,required:e.required||e.isRequired,default:e.default||e.defaultValue||"",fieldType:e.fieldType,xs:12,visible:(e==null?void 0:e.visible)||!1,custom:(e==null?void 0:e.custom)||!1,bcLabel:e.label||"",type:e.type||""},a=e;typeof e.fieldType=="number"&&(a.fieldType=v[e.fieldType],n.fieldType=e.fieldType);const o=w(e);return{...n,...o}},R=e=>e.replace(/_(\w)/g,(n,a)=>a.toUpperCase()),I=e=>{const n={};return e.forEach(a=>{var t,i;const o=L[a.groupId];(t=n[o])!=null&&t.length||(n[o]=[]);let l={};if((i=a.valueConfigs)!=null&&i.id?l=p(a.valueConfigs):l=p(a),l.required=a.isRequired,l.id=a.id,l.fieldId=a.fieldId,l.groupId=a.groupId,l.groupName=a.groupName,l.visible=a.visible,l.label=a.labelName,l.custom=l.custom||(a==null?void 0:a.custom),l.variant="filled",l.fieldType==="date"&&!l.default&&(l.default=g(new Date,T)),l.name==="country"&&(l.replaceOptions={label:"countryName",value:"countryCode"}),l.name==="state"&&(l.replaceOptions={label:"stateName",value:"stateName"}),a.fieldId==="field_confirm_password"&&(l.name="confirmPassword"),l.fieldType==="files"&&(l.filesLimit=3,l.maxFileSize=10485760,l.default=[]),l.fieldType==="checkbox"&&!l.options&&(l.label="",l.options=[{label:a.labelName,value:a.labelName}]),l.fieldType==="text"&&l.type==="integer"&&(l.fieldType="number"),l.label.length>0){let d=25;const r=document.body.clientWidth<=750;let s=h(l.label,16);l.fieldType==="multiline"&&(d=0),l.fieldType==="dropdown"&&(d=0,s>1&&(s+=r?1.4:2),l.fieldId==="field_state"&&(s-=r?0:.8));const u=s===1?"".concat(d,"px"):"".concat(d/16+(s-1),"rem");s>0&&(l.extraPadding={paddingTop:u})}n[o].push(l)}),n},O=e=>{if(e!=null&&e.length){const n=e?e.filter(o=>!!o.visible||!!o.custom&&!!o.isRequired):[];return n?I(n):{}}return{}},k=e=>[{name:"companyAttachments",label:e("register.label.companyAttachments"),default:[],fieldType:"file",required:!1,xs:12,filesLimit:3,maxFileSize:10485760}],M={2:"register.emailValidate.alreadyExitsBC",3:"global.emailValidate.multipleCustomer",4:"global.emailValidate.companyUsed",5:"global.emailValidate.alreadyExits",6:"global.emailValidate.usedSuperAdmin"};export{b as B,E as b,k as c,F as d,M as e,O as g,A as s,R as t};
