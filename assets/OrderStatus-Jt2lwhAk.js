import{B as r,a9 as d}from"./react-setup-B89zJiq4.js";import{j as l}from"./mui-5MYSBV5R.js";import"./lang-BFcXlKUT.js";import"./reactVendor-BAhb8EbJ.js";import"../index.CgW3dhwJ.js";const n=(e,t)=>"{\n  ".concat(t,'(\n    search: "').concat(e.q||"",'"\n    status: "').concat((e==null?void 0:e.statusCode)||"",'"\n    first: ').concat(e.first,"\n    offset: ").concat(e.offset,"\n    beginDateAt: ").concat(e!=null&&e.beginDateAt?JSON.stringify(e.beginDateAt):null,"\n    endDateAt: ").concat(e!=null&&e.endDateAt?JSON.stringify(e.endDateAt):null,'\n    companyName: "').concat((e==null?void 0:e.companyName)||"",'"\n    createdBy: "').concat((e==null?void 0:e.createdBy)||"",'"\n    isShowMy: "').concat((e==null?void 0:e.isShowMy)||0,'"\n    orderBy: "').concat(e.orderBy,'"\n    email: "').concat((e==null?void 0:e.email)||"",'"\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node {\n        orderId,\n        createdAt,\n        updatedAt,\n        totalIncTax,\n        currencyCode,\n        usdIncTax,\n        money,\n        items,\n        cartId,\n        userId,\n        poNumber,\n        referenceNumber,\n        status,\n        customStatus,\n        statusCode,\n        isArchived,\n        isInvoiceOrder,\n        invoiceId,\n        invoiceNumber,\n        invoiceStatus,\n        ipStatus,\n        flag,\n        billingName,\n        merchantEmail,\n        firstName,\n        lastName,\n        companyId {\n          id,\n          companyName,\n          bcGroupName,\n          description,\n          catalogId,\n          companyStatus,\n          addressLine1,\n          addressLine2,\n          city,\n          state,\n          zipCode,\n          country,\n          extraFields {\n            fieldName,\n            fieldValue,\n          }\n        }\n      }\n    }\n  }\n}'),a=(e,t)=>"{\n  ".concat(t,"(\n    id: ").concat(e,"\n  ){\n    id,\n    companyName,\n    firstName,\n    lastName,\n    status,\n    statusId,\n    customerId,\n    customStatus,\n    dateCreated,\n    dateModified,\n    dateShipped,\n    subtotalExTax,\n    subtotalIncTax,\n    subtotalTax,\n    baseShippingCost,\n    shippingCostExTax,\n    shippingCostIncTax,\n    shippingCostTax,\n    shippingCostTaxClassId,\n    baseHandlingCost,\n    handlingCostExTax,\n    handlingCostIncTax,\n    handlingCostTax,\n    handlingCostTaxClassId,\n    baseWrappingCost,\n    wrappingCostExTax,\n    wrappingCostIncTax,\n    wrappingCostTax,\n    wrappingCostTaxClassId,\n    totalExTax,\n    totalIncTax,\n    totalTax,\n    itemsTotal,\n    itemsShipped,\n    paymentMethod,\n    paymentProviderId,\n    paymentStatus,\n    refundedAmount,\n    orderIsDigital,\n    storeCreditAmount,\n    giftCertificateAmount,\n    ipAddress,\n    geoipCountry,\n    geoipCountryIso2,\n    currencyId,\n    currencyCode,\n    currencyExchangeRate,\n    defaultCurrencyId,\n    defaultCurrencyCode,\n    staffNotes,\n    customerMessage,\n    discountAmount,\n    couponDiscount,\n    shippingAddressCount,\n    isDeleted,\n    ebayOrderId,\n    cartId,\n    ipAddressV6,\n    isEmailOptIn,\n    poNumber,\n    storeDefaultCurrencyCode,\n    storeDefaultToTransactionalExchangeRate,\n    customerLocale,\n    channelId,\n    orderSource,\n    externalSource,\n    creditCardType,\n    externalId,\n    externalMerchantId,\n    taxProviderId,\n    canReturn,\n    createdEmail,\n    products,\n    coupons,\n    extraFields,\n    billingAddress,\n    shippingAddresses,\n    shippingAddress,\n    shipments,\n    money,\n    referenceNumber,\n    isInvoiceOrder,\n    updatedAt,\n    externalOrderId,\n    ipStatus,\n    invoiceId,\n    orderHistoryEvent {\n      id,\n      eventType,\n      status,\n      extraFields,\n      createdAt,\n    },\n  }\n}"),o=e=>"{\n  ".concat(e," {\n    systemLabel,\n    customLabel,\n    statusCode,\n  }\n}"),u=(e,t,i)=>"{\n  ".concat(i,"(\n    companyId: ").concat(e,",\n    module: ").concat(t,",\n  ){\n    results,\n  }\n}"),A=e=>r.graphqlB2B({query:n(e,"allOrders")}).then(t=>t.allOrders),x=e=>r.graphqlB2B({query:n(e,"customerOrders")}).then(t=>t.customerOrders),S=e=>r.graphqlB2B({query:a(e,"order")}).then(t=>t.order),I=e=>r.graphqlB2B({query:a(e,"customerOrder")}).then(t=>t.customerOrder),B=()=>r.graphqlB2B({query:o("orderStatuses")}).then(e=>e.orderStatuses),P=()=>r.graphqlB2B({query:o("bcOrderStatuses")}).then(e=>e.bcOrderStatuses),T=(e,t)=>r.graphqlB2B({query:u(e,t,"createdByUser")}),p={"Partially Refunded":"#F4CC46","Manual Verification Required":"#DDA3AE",Disputed:"#916CF6",Refunded:"#F4CC46",Declined:"#7A6041",Cancelled:"#000000",Shipped:"#C4DD6C",Completed:"#C4DD6C","Partially Shipped":"#516FAE","Awaiting Pickup":"#BE7FEB","Awaiting Shipment":"#BD3E1E","Awaiting Fulfillment":"#87CBF6","Awaiting Payment":"#F19536",Pending:"#899193",Incomplete:"#000000"},c={"Partially Refunded":"rgba(0, 0, 0, 0.87)","Manual Verification Required":"rgba(0, 0, 0, 0.87)",Disputed:"#FFFFFF",Refunded:"rgba(0, 0, 0, 0.87)",Declined:"#FFFFFF",Cancelled:"#FFFFFF",Shipped:"rgba(0, 0, 0, 0.87)",Completed:"rgba(0, 0, 0, 0.87)","Partially Shipped":"#FFFFFF","Awaiting Pickup":"#FFFFFF","Awaiting Shipment":"#FFFFFF","Awaiting Fulfillment":"rgba(0, 0, 0, 0.87)","Awaiting Payment":"#FFFFFF",Pending:"#FFFFFF",Incomplete:"#FFFFFF"},m={"Partially Refunded":"Partially Refunded","Manual Verification Required":"Manual Verification Required here",Disputed:"Disputed",Refunded:"Refunded",Declined:"Declined",Cancelled:"Cancelled",Shipped:"Shipped",Completed:"Completed","Partially Shipped":"Partially Shipped","Awaiting Pickup":"Awaiting Pickup","Awaiting Shipment":"Awaiting Shipment","Awaiting Fulfillment":"Awaiting Fulfillment","Awaiting Payment":"Awaiting Payment",Pending:"Pending",Incomplete:"Incomplete"},D={Incomplete:"orders.status.incomplete",Pending:"orders.status.pending",Shipped:"orders.status.shipped","Partially Shipped":"orders.status.partiallyShipped",Refunded:"orders.status.refunded",Cancelled:"orders.status.cancelled",Declined:"orders.status.declined","Awaiting Payment":"orders.status.awaitingPayment","Awaiting Pickup":"orders.status.awaitingPickup","Awaiting Shipment":"orders.status.awaitingShipment",Completed:"orders.status.completed","Awaiting Fulfillment":"orders.status.awaitingFulfillment","Manual Verification Required":"orders.status.manualVerificationRequired",Disputed:"orders.status.disputed","Partially Refunded":"orders.status.partiallyRefunded"},g=e=>({color:p[e],textColor:c[e],name:m[e]});function b(e){const{code:t,text:i}=e,s=g(t);return s.name?l.jsx(d,{color:s.color,textColor:s.textColor,children:i||s.name}):null}export{b as O,x as a,S as b,I as c,B as d,P as e,T as f,A as g,D as o};
