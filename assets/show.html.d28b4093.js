import{_ as d,o as c,c as h,b as r,w as o,a as e,d as a,r as n}from"./app.0abd6ed9.js";const i={},l=e("h1",{id:"app-show",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#app-show","aria-hidden":"true"},"#"),a(),e("code",null,"app/show")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),f=e("h3",{id:"no-such-app",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-app","aria-hidden":"true"},"#"),a(" NO_SUCH_APP")],-1),m=e("p",null,[a("ID: "),e("code",null,"dce83913-2dc6-4093-8a7b-71dbb11718a3")],-1);function b(x,w){const s=n("MkSchemaViewer"),t=n("ClientOnly");return c(),h("div",null,[l,p,r(t,null,{default:o(()=>[r(s,{schema:{type:"object",properties:{appId:{type:"string",format:"misskey:id"}},required:["appId"]}})]),_:1}),_,r(t,null,{default:o(()=>[r(s,{schema:{type:"object",optional:!1,nullable:!1,ref:"App",$ref:"misskey://App"}})]),_:1}),u,f,m])}var k=d(i,[["render",b],["__file","show.html.vue"]]);export{k as default};