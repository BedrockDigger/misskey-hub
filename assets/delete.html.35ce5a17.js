import{_ as i,o as c,c as l,b as a,w as d,a as e,d as r,r as s}from"./app.87509b5a.js";const h={},_=e("h1",{id:"admin-ad-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-ad-delete","aria-hidden":"true"},"#"),r(),e("code",null,"admin/ad/delete")],-1),m=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1),b=e("h3",{id:"no-such-ad",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-ad","aria-hidden":"true"},"#"),r(" NO_SUCH_AD")],-1),x=e("p",null,[r("ID: "),e("code",null,"ccac9863-3a03-416e-b899-8a64041118b1")],-1);function C(y,k){const o=s("MkApiConsole"),t=s("ClientOnly"),n=s("MkSchemaViewer");return c(),l("div",null,[_,m,a(t,null,{default:d(()=>[a(o,{name:"admin/ad/delete",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{id:{type:"string",format:"misskey:id"}},required:["id"]},res:{},errors:{"ccac9863-3a03-416e-b899-8a64041118b1":{id:"ccac9863-3a03-416e-b899-8a64041118b1",code:"NO_SUCH_AD",description:""}}}})]),_:1}),u,a(t,null,{default:d(()=>[a(n,{schema:{type:"object",properties:{id:{type:"string",format:"misskey:id"}},required:["id"]}})]),_:1}),p,a(t,null,{default:d(()=>[a(n,{schema:{}})]),_:1}),f,b,x])}var N=i(h,[["render",C],["__file","delete.html.vue"]]);export{N as default};