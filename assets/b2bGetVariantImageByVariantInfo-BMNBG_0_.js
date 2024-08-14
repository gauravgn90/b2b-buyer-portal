const i=(b,e)=>{let l="";if(b&&b.length>0){const g=b.find(d=>+d.variant_id==+e.variantId||d.sku===(e==null?void 0:e.variantSku));g&&(l=(g==null?void 0:g.image_url)||"")}return l};export{i as b};
