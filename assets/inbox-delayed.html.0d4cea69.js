import{_ as i,o as d,c,b as a,w as t,a as e,d as r,r as s}from"./app.87509b5a.js";const p={},u=e("h1",{id:"admin-queue-inbox-delayed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-queue-inbox-delayed","aria-hidden":"true"},"#"),r(),e("code",null,"admin/queue/inbox-delayed")],-1),m=e("p",null,"Credential required.",-1),h=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function y(b,x){const o=s("MkApiConsole"),n=s("ClientOnly"),l=s("MkSchemaViewer");return d(),c("div",null,[u,m,a(n,null,{default:t(()=>[a(o,{name:"admin/queue/inbox-delayed",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"array",optional:!1,nullable:!1,items:{anyOf:[{type:"string"},{type:"number"}]}},example:[["example.com",12]]},errors:{}}},null,8,["def"])]),_:1}),h,a(n,null,{default:t(()=>[a(l,{schema:{type:"object",properties:{},required:[]}})]),_:1}),_,a(n,null,{default:t(()=>[a(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"array",optional:!1,nullable:!1,items:{anyOf:[{type:"string"},{type:"number"}]}},example:[["example.com",12]]}},null,8,["schema"])]),_:1}),f])}var C=i(p,[["render",y],["__file","inbox-delayed.html.vue"]]);export{C as default};