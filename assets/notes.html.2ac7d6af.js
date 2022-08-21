import{_ as o,o as d,c,b as r,w as n,a as e,d as t,r as i}from"./app.0abd6ed9.js";const l={},m=e("h1",{id:"charts-user-notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#charts-user-notes","aria-hidden":"true"},"#"),t(),e("code",null,"charts/user/notes")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),h=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1);function f(y,_){const a=i("MkSchemaViewer"),s=i("ClientOnly");return d(),c("div",null,[m,p,r(s,null,{default:n(()=>[r(a,{schema:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null},userId:{type:"string",format:"misskey:id"}},required:["span","userId"]}})]),_:1}),h,r(s,null,{default:n(()=>[r(a,{schema:{type:"object",properties:{total:{type:"array",items:{type:"number"}},inc:{type:"array",items:{type:"number"}},dec:{type:"array",items:{type:"number"}},"diffs.normal":{type:"array",items:{type:"number"}},"diffs.reply":{type:"array",items:{type:"number"}},"diffs.renote":{type:"array",items:{type:"number"}},"diffs.withFile":{type:"array",items:{type:"number"}}},required:["total","inc","dec","diffs.normal","diffs.reply","diffs.renote","diffs.withFile"]}},null,8,["schema"])]),_:1}),u])}var x=o(l,[["render",f],["__file","notes.html.vue"]]);export{x as default};