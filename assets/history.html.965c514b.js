import{_ as i,o as l,c as d,b as a,w as n,a as e,d as s,r as o}from"./app.0abd6ed9.js";const c={},h=e("h1",{id:"messaging-history",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#messaging-history","aria-hidden":"true"},"#"),s(),e("code",null,"messaging/history")],-1),m=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),s(" Errors")],-1);function f(g,y){const r=o("MkSchemaViewer"),t=o("ClientOnly");return l(),d("div",null,[h,m,_,a(t,null,{default:n(()=>[a(r,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},group:{type:"boolean",default:!1}},required:[]}})]),_:1}),u,a(t,null,{default:n(()=>[a(r,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"MessagingMessage",$ref:"misskey://MessagingMessage"}}})]),_:1}),p])}var x=i(c,[["render",f],["__file","history.html.vue"]]);export{x as default};