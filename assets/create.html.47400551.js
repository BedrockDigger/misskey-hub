import{_ as d,o as c,c as i,b as a,w as n,a as e,d as r,r as o}from"./app.0abd6ed9.js";const l={},h=e("h1",{id:"drive-folders-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-folders-create","aria-hidden":"true"},"#"),r(),e("code",null,"drive/folders/create")],-1),_=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1),m=e("h3",{id:"no-such-folder",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-folder","aria-hidden":"true"},"#"),r(" NO_SUCH_FOLDER")],-1),x=e("p",null,[r("ID: "),e("code",null,"53326628-a00d-40a6-a3cd-8975105c0f95")],-1);function b(v,y){const t=o("MkSchemaViewer"),s=o("ClientOnly");return c(),i("div",null,[h,_,f,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",properties:{name:{type:"string",default:"Untitled",maxLength:200},parentId:{type:"string",format:"misskey:id",nullable:!0}},required:[]}})]),_:1}),u,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",optional:!1,nullable:!1,ref:"DriveFolder",$ref:"misskey://DriveFolder"}})]),_:1}),p,m,x])}var C=d(l,[["render",b],["__file","create.html.vue"]]);export{C as default};