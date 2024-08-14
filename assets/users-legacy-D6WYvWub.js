System.register(["./react-setup-legacy-Bwwh9_Jr.js","../index-legacy.BPYbSXo1.js"],(function(n,e){"use strict";var a,l,s,r;return{setters:[n=>{a=n.B,l=n.aA,s=n.ar,r=n.a8},null],execute:function(){const e=n=>`{\n  users (\n    first: ${n.first}\n    search: "${n.q||""}"\n    offset: ${n.offset}\n    companyId: ${n.companyId}\n    ${""===n.companyRoleId?"":`companyRoleId: ${n.companyRoleId}`}\n  ){\n    totalCount,\n    pageInfo{\n      hasNextPage,\n      hasPreviousPage,\n    },\n    edges{\n      node{\n        id,\n        createdAt,\n        updatedAt,\n        firstName,\n        lastName,\n        email,\n        phone,\n        bcId,\n        role,\n        uuid,\n        extraFields{\n          fieldName\n          fieldValue\n        }\n        companyRoleId,\n        companyRoleName,\n      }\n    }\n  }\n}`,m=n=>`mutation{\n  ${n?.userId?"userUpdate":"userCreate"} (\n    userData: {\n      companyId: ${n.companyId}\n      ${n?.email?`email: "${n.email}"`:""}\n      firstName: "${n.firstName||""}"\n      lastName: "${n.lastName||""}"\n      phone: "${n.phone||""}"\n      ${n?.companyRoleId?`companyRoleId: ${n.companyRoleId}`:""}\n      ${n?.userId?`userId: ${n.userId}`:""}\n      ${n?.addChannel?`addChannel: ${n.addChannel}`:""}\n      extraFields: ${s(n?.extraFields||[])}\n      ${n?.companyRoleName?`companyRoleName: ${n.companyRoleName}`:""}\n    }\n  ){\n    user{\n      id,\n      bcId,\n    }\n  }\n}`,d=n=>`mutation{\n  userDelete (\n    companyId: ${n.companyId}\n    userId: ${n.userId}\n  ){\n    message\n  }\n}`,o=n=>`{\n  userEmailCheck (\n    email: "${n.email}"\n    companyId: ${n.companyId||null}\n    storeHash: "${r}"\n    channelId: ${n.channelId||null}\n  ){\n    userType,\n    userInfo{\n      id\n      email\n      firstName\n      lastName\n      phoneNumber\n      role\n      companyName\n      originChannelId\n      forcePasswordReset\n    }\n  }\n}`,u=n=>`{\n  customerEmailCheck (\n    email: "${n.email}"\n    storeHash: "${r}"\n    channelId: ${n.channelId||null}\n  ){\n    userType,\n  }\n}`;n("d",(n=>a.graphqlB2B({query:e(n)}))),n("g",(()=>a.graphqlB2B({query:"{\n  userExtraFields {\n    fieldName\n    fieldType\n    isRequired\n    defaultValue\n    maximumLength\n    numberOfRows\n    maximumValue\n    listOfValue\n    visibleToEnduser\n    labelName\n  }\n}"}))),n("b",(n=>a.graphqlB2B({query:m(n)}))),n("e",(n=>a.graphqlB2B({query:d(n)}))),n("a",(n=>a.graphqlB2B({query:o(n)}).then((n=>({...n.userEmailCheck,isValid:n.userEmailCheck.userType===l.DOESNT_EXIST}))))),n("c",(n=>a.graphqlB2B({query:u(n)}).then((n=>({...n.customerEmailCheck,isValid:n.customerEmailCheck.userType!==l.B2C})))))}}}));
