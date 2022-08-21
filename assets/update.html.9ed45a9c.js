import{_ as o,o as c,c as l,b as t,w as r,a as e,d as n,r as i}from"./app.87509b5a.js";const h={},m=e("h1",{id:"admin-announcements-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-announcements-update","aria-hidden":"true"},"#"),n(),e("code",null,"admin/announcements/update")],-1),u=e("p",null,"Credential required.",-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),n(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),n(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),n(" Errors")],-1),g=e("h3",{id:"no-such-announcement",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-announcement","aria-hidden":"true"},"#"),n(" NO_SUCH_ANNOUNCEMENT")],-1),b=e("p",null,[n("ID: "),e("code",null,"d3aae5a7-6372-4cb4-b61c-f511ffc2d7cc")],-1);function y(x,N){const d=i("MkApiConsole"),a=i("ClientOnly"),s=i("MkSchemaViewer");return c(),l("div",null,[m,u,t(a,null,{default:r(()=>[t(d,{name:"admin/announcements/update",def:{summary:"",description:"",tags:["admin"],requireCredential:!0,req:{type:"object",properties:{id:{type:"string",format:"misskey:id"},title:{type:"string",minLength:1},text:{type:"string",minLength:1},imageUrl:{type:"string",nullable:!0,minLength:1}},required:["id","title","text","imageUrl"]},res:{},errors:{"d3aae5a7-6372-4cb4-b61c-f511ffc2d7cc":{id:"d3aae5a7-6372-4cb4-b61c-f511ffc2d7cc",code:"NO_SUCH_ANNOUNCEMENT",description:""}}}})]),_:1}),p,t(a,null,{default:r(()=>[t(s,{schema:{type:"object",properties:{id:{type:"string",format:"misskey:id"},title:{type:"string",minLength:1},text:{type:"string",minLength:1},imageUrl:{type:"string",nullable:!0,minLength:1}},required:["id","title","text","imageUrl"]}})]),_:1}),_,t(a,null,{default:r(()=>[t(s,{schema:{}})]),_:1}),f,g,b])}var k=o(h,[["render",y],["__file","update.html.vue"]]);export{k as default};