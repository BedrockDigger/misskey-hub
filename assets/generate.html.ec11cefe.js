import{_ as i,o as c,c as d,b as a,w as s,a as e,d as r,r as n}from"./app.87509b5a.js";const p={},h=e("h1",{id:"auth-session-generate",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#auth-session-generate","aria-hidden":"true"},"#"),r(),e("code",null,"auth/session/generate")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1),m=e("h3",{id:"no-such-app",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-app","aria-hidden":"true"},"#"),r(" NO_SUCH_APP")],-1),b=e("p",null,[r("ID: "),e("code",null,"92f93e63-428e-4f2f-a5a4-39e1407fe998")],-1);function g(y,k){const l=n("MkApiConsole"),t=n("ClientOnly"),o=n("MkSchemaViewer");return c(),d("div",null,[h,a(t,null,{default:s(()=>[a(l,{name:"auth/session/generate",def:{summary:"",description:"",tags:["auth"],requireCredential:!1,req:{type:"object",properties:{appSecret:{type:"string"}},required:["appSecret"]},res:{type:"object",optional:!1,nullable:!1,properties:{token:{type:"string",optional:!1,nullable:!1},url:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["token","url"]},errors:{"92f93e63-428e-4f2f-a5a4-39e1407fe998":{id:"92f93e63-428e-4f2f-a5a4-39e1407fe998",code:"NO_SUCH_APP",description:""}}}})]),_:1}),u,a(t,null,{default:s(()=>[a(o,{schema:{type:"object",properties:{appSecret:{type:"string"}},required:["appSecret"]}})]),_:1}),f,a(t,null,{default:s(()=>[a(o,{schema:{type:"object",optional:!1,nullable:!1,properties:{token:{type:"string",optional:!1,nullable:!1},url:{type:"string",optional:!1,nullable:!1,format:"url"}},required:["token","url"]}})]),_:1}),_,m,b])}var C=i(p,[["render",g],["__file","generate.html.vue"]]);export{C as default};