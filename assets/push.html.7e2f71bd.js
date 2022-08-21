import{_ as o,o as n,c as h,b as a,w as s,a as e,d as t,e as f,r}from"./app.87509b5a.js";const l={},u=e("h1",{id:"users-lists-push",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-lists-push","aria-hidden":"true"},"#"),t(),e("code",null,"users/lists/push")],-1),_=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),b=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),m=f('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-list" tabindex="-1"><a class="header-anchor" href="#no-such-list" aria-hidden="true">#</a> NO_SUCH_LIST</h3><p>ID: <code>2214501d-ac96-4049-b717-91e42272a711</code></p><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>a89abd3d-f0bc-4cce-beb1-2f446f4f1e6a</code></p><h3 id="already-added" tabindex="-1"><a class="header-anchor" href="#already-added" aria-hidden="true">#</a> ALREADY_ADDED</h3><p>ID: <code>1de7c884-1595-49e9-857e-61f12f4d4fc5</code></p><h3 id="you-have-been-blocked" tabindex="-1"><a class="header-anchor" href="#you-have-been-blocked" aria-hidden="true">#</a> YOU_HAVE_BEEN_BLOCKED</h3><p>ID: <code>990232c5-3f9d-4d83-9f3f-ef27b6332a4b</code></p>',9);function y(E,C){const i=r("MkApiConsole"),d=r("ClientOnly"),c=r("MkSchemaViewer");return n(),h("div",null,[u,_,a(d,null,{default:s(()=>[a(i,{name:"users/lists/push",def:{summary:"",description:"",tags:["lists"],requireCredential:!0,req:{type:"object",properties:{listId:{type:"string",format:"misskey:id"},userId:{type:"string",format:"misskey:id"}},required:["listId","userId"]},res:{},errors:{"2214501d-ac96-4049-b717-91e42272a711":{id:"2214501d-ac96-4049-b717-91e42272a711",code:"NO_SUCH_LIST",description:""},"a89abd3d-f0bc-4cce-beb1-2f446f4f1e6a":{id:"a89abd3d-f0bc-4cce-beb1-2f446f4f1e6a",code:"NO_SUCH_USER",description:""},"1de7c884-1595-49e9-857e-61f12f4d4fc5":{id:"1de7c884-1595-49e9-857e-61f12f4d4fc5",code:"ALREADY_ADDED",description:""},"990232c5-3f9d-4d83-9f3f-ef27b6332a4b":{id:"990232c5-3f9d-4d83-9f3f-ef27b6332a4b",code:"YOU_HAVE_BEEN_BLOCKED",description:""}}}})]),_:1}),p,a(d,null,{default:s(()=>[a(c,{schema:{type:"object",properties:{listId:{type:"string",format:"misskey:id"},userId:{type:"string",format:"misskey:id"}},required:["listId","userId"]}})]),_:1}),b,a(d,null,{default:s(()=>[a(c,{schema:{}})]),_:1}),m])}var I=o(l,[["render",y],["__file","push.html.vue"]]);export{I as default};