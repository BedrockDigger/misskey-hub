import{_ as n,o as c,c as h,b as r,w as d,a as e,d as a,e as i,r as t}from"./app.0abd6ed9.js";const u={},l=e("h1",{id:"users-groups-transfer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-groups-transfer","aria-hidden":"true"},"#"),a(),e("code",null,"users/groups/transfer")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),b=i('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-group" tabindex="-1"><a class="header-anchor" href="#no-such-group" aria-hidden="true">#</a> NO_SUCH_GROUP</h3><p>ID: <code>8e31d36b-2f88-4ccd-a438-e2d78a9162db</code></p><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>711f7ebb-bbb9-4dfa-b540-b27809fed5e9</code></p><h3 id="no-such-group-member" tabindex="-1"><a class="header-anchor" href="#no-such-group-member" aria-hidden="true">#</a> NO_SUCH_GROUP_MEMBER</h3><p>ID: <code>d31bebee-196d-42c2-9a3e-9474d4be6cc4</code></p>',7);function m(x,g){const s=t("MkSchemaViewer"),o=t("ClientOnly");return c(),h("div",null,[l,p,_,r(o,null,{default:d(()=>[r(s,{schema:{type:"object",properties:{groupId:{type:"string",format:"misskey:id"},userId:{type:"string",format:"misskey:id"}},required:["groupId","userId"]}})]),_:1}),f,r(o,null,{default:d(()=>[r(s,{schema:{type:"object",optional:!1,nullable:!1,ref:"UserGroup",$ref:"misskey://UserGroup"}})]),_:1}),b])}var C=n(u,[["render",m],["__file","transfer.html.vue"]]);export{C as default};