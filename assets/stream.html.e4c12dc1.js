import{_ as o,o as d,c as l,b as r,w as i,a as e,d as a,r as n}from"./app.0abd6ed9.js";const c={},m=e("h1",{id:"drive-stream",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-stream","aria-hidden":"true"},"#"),a(),e("code",null,"drive/stream")],-1),h=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(y,x){const t=n("MkSchemaViewer"),s=n("ClientOnly");return d(),l("div",null,[m,h,_,r(s,null,{default:i(()=>[r(t,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},type:{type:"string",pattern:"^[a-zA-Z\\/\\-*]+$"}},required:[]}})]),_:1}),p,r(s,null,{default:i(()=>[r(t,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"DriveFile",$ref:"misskey://DriveFile"}}})]),_:1}),u])}var v=o(c,[["render",f],["__file","stream.html.vue"]]);export{v as default};