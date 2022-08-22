import{_ as w,u as x,j as I,o as t,c as s,a as c,t as h,n as a,b as r,w as i,m as d,K as S,L as V,a5 as j,d as o,r as f,a2 as N,a3 as R}from"./app.e1db1624.js";const L=l=>l[0].toLowerCase()+l.slice(1,l.length).replace(/[A-Z]/g,u=>`-${u.toLowerCase()}`),M={props:{schema:{type:Object,required:!0}},setup(l){const u=x(),e=l.schema.$ref?l.schema.$ref.replace("#/components/schemas/","").replace("misskey://",""):null,n=I(!1),y=j("schemas",{});return{refName:e,refPath:l.schema.$ref?`${u.value}docs/api/entity/${L(e)}.html`:null,expandRef:n,schemas:y}}},m=l=>(N("data-v-540f7950"),l=l(),R(),l),C={class:"mk-schema-viewer-item"},B={key:0},O=m(()=>c("div",{class:"title"},"\u8AAC\u660E",-1)),A={class:"description"},K={class:"type"},P=m(()=>c("div",{class:"title"},"\u578B",-1)),T={class:"body"},q={key:0},D=o("nullable"),E={key:1},F=o("nullable"),W={key:2,class:"string"},Z=m(()=>c("code",null,"string",-1)),z=o("nullable"),G={key:1,class:"enum"},H=o("enum: "),J={key:3,class:"number"},Q=m(()=>c("code",null,"number",-1)),U=o("nullable"),X={key:4,class:"integer"},Y=m(()=>c("code",null,"integer",-1)),p=o("nullable"),$={key:5,class:"boolean"},ee=m(()=>c("code",null,"boolean",-1)),te=o("nullable"),se={key:6,class:"array"},ae=m(()=>c("div",{class:"label"},"Array of:",-1)),ce={key:0,class:"description"},le=o("nullable"),ne={key:7,class:"object"},oe=m(()=>c("code",null,"object",-1)),ie=o("nullable"),_e={key:8,class:"object"},de={key:0,class:"nullable"},me=o("nullable"),he={key:1},ue=m(()=>c("div",{class:"title"},"\u30C7\u30D5\u30A9\u30EB\u30C8",-1));function re(l,u,e,n,y,fe){const v=f("RouterLink"),_=f("el-tag"),b=f("MkSchemaViewerItem",!0),g=f("MkSchemaViewerItemObject");return t(),s("div",C,[e.schema.description?(t(),s("section",B,[O,c("div",A,h(e.schema.description),1)])):a("",!0),c("section",K,[P,c("div",T,[e.schema.$ref&&e.schema.$ref.startsWith("misskey://")?(t(),s("div",q,[r(v,{to:n.refPath},{default:i(()=>[o(h(n.refName),1)]),_:1},8,["to"]),e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[D]),_:1})):a("",!0)])):e.schema.$ref?(t(),s("div",E,[c("button",{onClick:u[0]||(u[0]=k=>n.expandRef=!n.expandRef)},h(n.expandRef?"-":"+")+" ["+h(n.refName)+"]",1),e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[F]),_:1})):a("",!0),n.schemas&&n.expandRef?(t(),d(b,{key:1,schema:n.schemas[n.refName]},null,8,["schema"])):a("",!0)])):e.schema.type==="string"?(t(),s("div",W,[Z,e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[z]),_:1})):a("",!0),e.schema.enum?(t(),s("div",G,[H,(t(!0),s(S,null,V(e.schema.enum,k=>(t(),s("code",null,h(k),1))),256))])):a("",!0)])):e.schema.type==="number"?(t(),s("div",J,[Q,e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[U]),_:1})):a("",!0)])):e.schema.type==="integer"?(t(),s("div",X,[Y,e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[p]),_:1})):a("",!0)])):e.schema.type==="boolean"?(t(),s("div",$,[ee,e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[te]),_:1})):a("",!0)])):e.schema.type==="array"?(t(),s("div",se,[ae,e.schema.description?(t(),s("div",ce,h(e.schema.description),1)):a("",!0),r(b,{schema:e.schema.items},null,8,["schema"]),e.schema.nullable?(t(),d(_,{key:1,class:"ml-2",type:"info"},{default:i(()=>[le]),_:1})):a("",!0)])):e.schema.type==="object"&&e.schema.properties==null?(t(),s("div",ne,[oe,e.schema.nullable?(t(),d(_,{key:0,class:"ml-2",type:"info"},{default:i(()=>[ie]),_:1})):a("",!0)])):e.schema.type==="object"?(t(),s("div",_e,[r(g,{schema:e.schema},null,8,["schema"]),e.schema.nullable?(t(),s("div",de,[r(_,{class:"ml-2",type:"info"},{default:i(()=>[me]),_:1})])):a("",!0)])):a("",!0)])]),e.schema.default!==void 0?(t(),s("section",he,[ue,c("div",null,[c("code",null,h(e.schema.default),1)])])):a("",!0)])}var be=w(M,[["render",re],["__scopeId","data-v-540f7950"],["__file","MkSchemaViewerItem.vue"]]);export{be as default};
