System.register(["./mui-legacy-BDTphHaF.js","./lang-legacy-C2M9M2Og.js","./reactVendor-legacy-CtYIj4Ma.js","./react-setup-legacy-Bwwh9_Jr.js","../index-legacy.BPYbSXo1.js"],(function(e,l){"use strict";var a,t,s,i,r;return{setters:[e=>{a=e.j},e=>{t=e.u},null,e=>{s=e.u,i=e.R,r=e.a9},null],execute:function(){e("S",(function({status:e}){const{submitShoppingListPermission:l}=s(i),n=t(),d=o(l).find((l=>+l.value==+e));return d?a.jsx(r,{color:d.color,textColor:d.textColor,children:n(d.idLang)}):null}));const l=e=>{const l=[{label:"All",value:99,idLang:"global.shoppingLists.status.all"},{label:"Approved",value:0,idLang:"global.shoppingLists.status.approved"},{label:"Draft",value:30,idLang:"global.shoppingLists.status.draft"},{label:"Ready for approval",value:40,idLang:"global.shoppingLists.status.readyForApproval"},{label:"Rejected",value:20,idLang:"global.shoppingLists.status.rejected"}];return e?l:l.filter((e=>30!==e.value&&20!==e.value))},o=(e("a",((e,a)=>[{name:"createdBy",label:"Created by",required:!1,default:"",fieldType:"dropdown",options:e?.createdByUser?.results.map((e=>({createdBy:`${e.firstName} ${e.lastName} (${e.email})`})))||[],replaceOptions:{label:"createdBy",value:"createdBy"},xs:12,variant:"filled",size:"small",idLang:"global.shoppingLists.filter.createdBy"},{name:"status",label:"Status",required:!1,default:"",fieldType:"dropdown",options:l(a),xs:12,variant:"filled",size:"small",idLang:"global.shoppingLists.filter.status"}])),e("g",(e=>[{name:"name",label:e("shoppingLists.name"),required:!0,default:"",fieldType:"text",xs:12,variant:"filled",size:"small",maxLength:200},{name:"description",label:e("shoppingLists.description"),required:!1,default:"",fieldType:"multiline",xs:12,variant:"filled",size:"small",rows:4,maxLength:200}])),e=>l(e).map((e=>0==+e.value?{color:"#C4DD6C",textColor:"black",...e}:40==+e.value?{color:"#F4CC46",textColor:"black",...e}:30==+e.value?{color:"#899193",textColor:"#FFFFFF",...e}:{color:"#7A6041",textColor:"#FFFFFF",...e})))}}}));
