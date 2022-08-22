import{_ as f,o as l,c as _,b as d,w as i,a as e,d as o,r}from"./app.e1db1624.js";const p={},u=e("h1",{id:"following-invalidate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#following-invalidate","aria-hidden":"true"},"#"),o(),e("code",null,"following/invalidate")],-1),h=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),o(" Parameters")],-1),E=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),o(" Response")],-1),O=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),o(" Errors")],-1),I=e("h2",{id:"resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resources","aria-hidden":"true"},"#"),o(" Resources")],-1);function L(R,S){const a=r("MkApiConsole"),c=r("ClientOnly"),s=r("MkSchemaViewerItemObject"),t=r("MkSchemaViewer"),n=r("MkApiErrors"),b=r("MkApiResources");return l(),_("div",null,[u,h,d(c,null,{default:i(()=>[d(a,{name:"following/invalidate",def:{summary:"",description:"",tags:["following"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"},errors:{"5b12c78d-2b28-4dca-99d2-f56139b42ff8":{id:"5b12c78d-2b28-4dca-99d2-f56139b42ff8",code:"NO_SUCH_USER",description:""},"07dc03b9-03da-422d-885b-438313707662":{id:"07dc03b9-03da-422d-885b-438313707662",code:"FOLLOWER_IS_YOURSELF",description:""},"5dbf82f5-c92b-40b1-87d1-6c8c0741fd09":{id:"5dbf82f5-c92b-40b1-87d1-6c8c0741fd09",code:"NOT_FOLLOWING",description:""}}}})]),_:1}),m,d(c,null,{default:i(()=>[d(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),E,d(c,null,{default:i(()=>[d(t,{schema:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"}})]),_:1}),O,d(c,null,{default:i(()=>[d(n,{errors:{"5b12c78d-2b28-4dca-99d2-f56139b42ff8":{id:"5b12c78d-2b28-4dca-99d2-f56139b42ff8",code:"NO_SUCH_USER",description:""},"07dc03b9-03da-422d-885b-438313707662":{id:"07dc03b9-03da-422d-885b-438313707662",code:"FOLLOWER_IS_YOURSELF",description:""},"5dbf82f5-c92b-40b1-87d1-6c8c0741fd09":{id:"5dbf82f5-c92b-40b1-87d1-6c8c0741fd09",code:"NOT_FOLLOWING",description:""}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),I,d(c,null,{default:i(()=>[d(b,{def:{summary:"",description:"",tags:["following"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{type:"object",optional:!1,nullable:!1,ref:"UserLite",$ref:"misskey://UserLite"},errors:{"5b12c78d-2b28-4dca-99d2-f56139b42ff8":{id:"5b12c78d-2b28-4dca-99d2-f56139b42ff8",code:"NO_SUCH_USER",description:""},"07dc03b9-03da-422d-885b-438313707662":{id:"07dc03b9-03da-422d-885b-438313707662",code:"FOLLOWER_IS_YOURSELF",description:""},"5dbf82f5-c92b-40b1-87d1-6c8c0741fd09":{id:"5dbf82f5-c92b-40b1-87d1-6c8c0741fd09",code:"NOT_FOLLOWING",description:""}}}})]),_:1})])}var y=f(p,[["render",L],["__file","invalidate.html.vue"]]);export{y as default};
