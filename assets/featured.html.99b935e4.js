import{_ as d,o as i,c as l,b as a,w as n,a as e,d as t,r as o}from"./app.0abd6ed9.js";const c={},h=e("h1",{id:"notes-featured",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-featured","aria-hidden":"true"},"#"),t(),e("code",null,"notes/featured")],-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function m(p,x){const r=o("MkSchemaViewer"),s=o("ClientOnly");return i(),l("div",null,[h,f,a(s,null,{default:n(()=>[a(r,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},offset:{type:"integer",default:0}},required:[]}})]),_:1}),u,a(s,null,{default:n(()=>[a(r,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),_])}var y=d(c,[["render",m],["__file","featured.html.vue"]]);export{y as default};