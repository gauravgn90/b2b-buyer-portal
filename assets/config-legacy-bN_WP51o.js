System.register(["./dateFns-legacy-DV9BM4UY.js","./react-setup-legacy-Bwwh9_Jr.js","../index-legacy.BPYbSXo1.js","./validatorRules-legacy-DhhIqtMN.js"],(function(e,l){"use strict";var t,i;return{setters:[e=>{t=e.g},null,null,e=>{i=e.v}],execute:function(){e("s",["register.step.account","register.step.details","register.step.finish"]);const l=["text","multiline","number","dropdown"],a=e("B",{encode:e=>window.btoa(encodeURIComponent(e)),decode:e=>decodeURIComponent(window.atob(e))}),d={text:["text","number","password","multiline"],checkbox:["checkbox"],dropdown:["dropdown"],radio:["radio"],date:["date"]},n=["country","state","email"],o=(e("b",["field_country","field_address_1","field_city","field_state","field_zip_code"]),{1:"contactInformation",2:"additionalInformation",3:"businessDetails",4:"address",5:"password"}),s=(e("d",(e=>n.includes(e)?e:a.decode(e))),e=>n.includes(e)?e:a.encode(e)),u=e=>{const t={id:e.id||e.fieldName,name:(a=e.name,("countryCode"===a?"country":"stateOrProvince"===a?"state":a)||s(e.fieldName)),label:e.label||e.labelName,required:e.required||e.isRequired,default:e.default||e.defaultValue||"",fieldType:e.fieldType,xs:12,visible:e?.visible||!1,custom:e?.custom||!1,bcLabel:e.label||"",type:e.type||""};var a;const n=e;"number"==typeof e.fieldType&&(n.fieldType=l[e.fieldType],t.fieldType=e.fieldType);const o=(e=>{let l={};if(d.text.includes(e.fieldType)&&(l={minlength:e.minlength||null,maxLength:e.maxLength||+e.maximumLength||null,min:e.min||null,max:e.max||+e.maximumValue||null,rows:e?.options?.rows||e.numberOfRows||null},l?.max&&(l.validate=i(["max"],{max:l?.max})),"password"===e.fieldType&&(l.validate=i(["password"])),"email"!==e?.fieldName&&"phone"!==e?.fieldName||(l.validate=i([e.fieldName])),("number"===e.fieldType||"text"===e.fieldType&&"integer"===e.type)&&(l.validate=i(["number"]))),d.checkbox.includes(e.fieldType)&&(l={default:e.default||[],options:e.options?.items||null}),d.dropdown.includes(e.fieldType)){const t=[];e.options?.helperLabel&&t.push({label:e.options.helperLabel,value:""});const i=[...t,...e.options?.items||[]];e.listOfValue&&e.listOfValue.forEach((e=>i.push({label:e,value:e}))),l={default:e.default||"",options:i||null}}return d.radio.includes(e.fieldType)&&(l={default:e.default||"",options:e.options?.items||[]}),l?.options&&l?.options.forEach((e=>{const l=e;e.value&&(l.value=e.label)})),"field_country"===e.fieldId&&(l.default=e.valueConfigs?.default||l.default),l})(e);return{...t,...o}},r=(e("t",(e=>e.replace(/_(\w)/g,((e,l)=>l.toUpperCase())))),e=>{const l={};return e.forEach((e=>{const i=o[e.groupId];l[i]?.length||(l[i]=[]);let a={};if(a=e.valueConfigs?.id?u(e.valueConfigs):u(e),a.required=e.isRequired,a.id=e.id,a.fieldId=e.fieldId,a.groupId=e.groupId,a.groupName=e.groupName,a.visible=e.visible,a.label=e.labelName,a.custom=a.custom||e?.custom,a.variant="filled","date"!==a.fieldType||a.default||(a.default=t(new Date,"yyyy-MM-dd")),"country"===a.name&&(a.replaceOptions={label:"countryName",value:"countryCode"}),"state"===a.name&&(a.replaceOptions={label:"stateName",value:"stateName"}),"field_confirm_password"===e.fieldId&&(a.name="confirmPassword"),"files"===a.fieldType&&(a.filesLimit=3,a.maxFileSize=10485760,a.default=[]),"checkbox"!==a.fieldType||a.options||(a.label="",a.options=[{label:e.labelName,value:e.labelName}]),"text"===a.fieldType&&"integer"===a.type&&(a.fieldType="number"),a.label.length>0){let e=25;const l=document.body.clientWidth<=750;let t=((e,l=14)=>{const t=document.body.clientWidth,i=t<=750?t+16-98:500,a=((e,l=14)=>e?e.replace(/[^\x00-\xff]/gi,"aa").length*l/2:null)(e,l);return null!==a?Math.ceil(a/i):1})(a.label,16);"multiline"===a.fieldType&&(e=0),"dropdown"===a.fieldType&&(e=0,t>1&&(t+=l?1.4:2),"field_state"===a.fieldId&&(t-=l?0:.8));const i=1===t?`${e}px`:e/16+(t-1)+"rem";t>0&&(a.extraPadding={paddingTop:i})}l[i].push(a)})),l});e("g",(e=>{if(e?.length){const l=e?e.filter((e=>!!e.visible||!!e.custom&&!!e.isRequired)):[];return l?r(l):{}}return{}})),e("c",(e=>[{name:"companyAttachments",label:e("register.label.companyAttachments"),default:[],fieldType:"file",required:!1,xs:12,filesLimit:3,maxFileSize:10485760}])),e("e",{2:"register.emailValidate.alreadyExitsBC",3:"global.emailValidate.multipleCustomer",4:"global.emailValidate.companyUsed",5:"global.emailValidate.alreadyExits",6:"global.emailValidate.usedSuperAdmin"})}}}));
