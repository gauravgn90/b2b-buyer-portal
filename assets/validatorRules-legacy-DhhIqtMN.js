System.register(["./react-setup-legacy-Bwwh9_Jr.js"],(function(e,a){"use strict";var l;return{setters:[e=>{l=e.bx}],execute:function(){e("v",((e,a)=>(t,s)=>{let r="";return e.forEach((e=>{"email"===e&&t&&!l.email.test(t)?r=s("global.validatorRules.email"):t.length>=200&&(r=s("global.emailValidate.emailLength")),"phone"===e&&t&&!l.phone.test(t)&&(r=s("global.validatorRules.phoneNumber")),"number"===e&&t&&!l.number.test(t)&&(r=s("global.validatorRules.number")),"max"===e&&a?.max&&+a.max<+t&&(r=s("global.validatorRules.max",{max:a.max})),"password"===e&&t&&!l.password.test(t)&&(r=s("global.validatorRules.passwords"))})),r||void 0}))}}}));
