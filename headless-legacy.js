System.register(["./assets/b3Logger-legacy-C5y5ZQF8.js"],(function(t,e){"use strict";var r;return{setters:[t=>{r=t.b}],execute:function(){const{MODE:t,VITE_LOCAL_GRAPHQL_ORIGIN:e}={VITE_B2B_URL:"https://api-b2b.bigcommerce.com",VITE_B2B_SOCKET_URL:"https://api-b2b.bigcommerce.com",VITE_TRANSLATION_SERVICE_URL:"https://api-b2b.bigcommerce.com",VITE_CATPCHA_SETKEY:"captcha_setkey",VITE_B2B_CLIENT_ID:"dl7c39mdpul6hyc489yk0vzxl6jesyx",VITE_LOCAL_DEBUG:"TRUE",VITE_LOCAL_GRAPHQL_ORIGIN:"https://api-b2b.bigcommerce.com",VITE_ASSETS_ABSOLUTE_PATH:"http://localhost:3001/assets/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1,LEGACY:!0},n={development:e,staging:"https://api-b2b.staging.zone",production:"https://api-b2b.bigcommerce.com"};!function(){const e=t=>{const e=(new DOMParser).parseFromString(t,"text/html").querySelectorAll("script");if(e.length){const t=document.querySelector("body"),r=document.querySelectorAll(".headless-buyerPortal-id");r.length>0&&r.forEach((t=>{t.parentNode?.removeChild(t)})),e.forEach(((e,r)=>{const n=e?.innerHTML||"",o=e?.src||"",s=e?.dataSrc||"",c=e?.type||"",a=e?.crossorigin||"",i=e?.id||"",h=document.createElement("script");h.innerHTML=n,h.className="headless-buyerPortal-id",o&&h.setAttribute("src",o),s&&h.setAttribute("data-src",s),c?h.setAttribute("type","module"):0!==r&&(h.noModule=!0),i&&h.setAttribute("id",i),a&&h.setAttribute("crossorigin","true"),t&&t.appendChild(h)}))}};!async function(){try{const{origin:o}=window.location;await async function(o){const s={siteUrl:o,storehash:"",channelId:""},c=document.querySelector("script[data-storehash][data-channelid]");if(c?.dataset){const t=c.dataset;s.storehash=t.storehash||"",s.channelId=t.channelid||""}const a={query:`\n        {\n          storefrontScript(\n            storeHash: "${s.storehash}"\n            channelId: ${s.channelId}\n            siteUrl: "${s.siteUrl}"\n          ) {\n            script\n            storeHash\n            channelId\n          }\n        }`},i={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(a)};fetch(`${n[t]}/graphql`,i).then((t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})).then((t=>{const{data:{storefrontScript:r}}=t;e(r.script)})).catch((t=>{r.error("There was a problem with the fetch operation:",t)}))}(o)}catch(o){r.error("Interface error")}}()}()}}}));
