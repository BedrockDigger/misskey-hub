import{_ as d,o as l,c,b as r,w as t,a as e,d as s,r as o}from"./app.87509b5a.js";const h={},u=e("h1",{id:"admin-show-user",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-show-user","aria-hidden":"true"},"#"),s(),e("code",null,"admin/show-user")],-1),_=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),s(" Errors")],-1);function b(y,w){const i=o("MkApiConsole"),a=o("ClientOnly"),n=o("MkSchemaViewer");return l(),c("div",null,[u,_,r(a,null,{default:t(()=>[r(i,{name:"admin/show-user",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},res:{type:"object",nullable:!1,optional:!1},errors:{}}})]),_:1}),m,r(a,null,{default:t(()=>[r(n,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),p,r(a,null,{default:t(()=>[r(n,{schema:{type:"object",nullable:!1,optional:!1}})]),_:1}),f])}var k=d(h,[["render",b],["__file","show-user.html.vue"]]);export{k as default};