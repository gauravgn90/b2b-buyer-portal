import{B as a}from"./react-setup-B89zJiq4.js";const i="mutation checkoutLogin($cartData: CheckoutLoginType!) {\n    checkoutLogin(\n        cartData: $cartData\n    ) {\n        result {\n            redirectUrl\n        }\n    }\n}",n=t=>a.graphqlB2B({query:i,variables:t}),s=(t,o)=>{o?window.location.replace(t):window.location.href=t},u=async(t,o,e)=>{try{const c=await n({cartData:{cartId:t}}),{checkoutLogin:{result:r}}=c;s(r.redirectUrl,e)}catch(c){s(o,e)}},h=(t,o)=>{sessionStorage.setItem("isNewStorefront",JSON.stringify(!0)),sessionStorage.setItem("quoteCheckoutId",t),sessionStorage.setItem("quoteDate",o==null?void 0:o.toString())};export{u as a,h as s};
