import{_ as i,o as c,c as l,b as r,w as t,a as e,d,e as h,r as s}from"./app.87509b5a.js";const p={},_=e("h1",{id:"gallery-posts-unlike",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gallery-posts-unlike","aria-hidden":"true"},"#"),d(),e("code",null,"gallery/posts/unlike")],-1),u=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),d(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),d(" Response")],-1),b=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-post" tabindex="-1"><a class="header-anchor" href="#no-such-post" aria-hidden="true">#</a> NO_SUCH_POST</h3><p>ID: <code>c32e6dd0-b555-4413-925e-b3757d19ed84</code></p><h3 id="not-liked" tabindex="-1"><a class="header-anchor" href="#not-liked" aria-hidden="true">#</a> NOT_LIKED</h3><p>ID: <code>e3e8e06e-be37-41f7-a5b4-87a8250288f0</code></p>',5);function k(y,x){const n=s("MkApiConsole"),a=s("ClientOnly"),o=s("MkSchemaViewer");return c(),l("div",null,[_,u,r(a,null,{default:t(()=>[r(n,{name:"gallery/posts/unlike",def:{summary:"",description:"",tags:["gallery"],requireCredential:!0,req:{type:"object",properties:{postId:{type:"string",format:"misskey:id"}},required:["postId"]},res:{},errors:{"c32e6dd0-b555-4413-925e-b3757d19ed84":{id:"c32e6dd0-b555-4413-925e-b3757d19ed84",code:"NO_SUCH_POST",description:""},"e3e8e06e-be37-41f7-a5b4-87a8250288f0":{id:"e3e8e06e-be37-41f7-a5b4-87a8250288f0",code:"NOT_LIKED",description:""}}}})]),_:1}),f,r(a,null,{default:t(()=>[r(o,{schema:{type:"object",properties:{postId:{type:"string",format:"misskey:id"}},required:["postId"]}})]),_:1}),m,r(a,null,{default:t(()=>[r(o,{schema:{}})]),_:1}),b])}var g=i(p,[["render",k],["__file","unlike.html.vue"]]);export{g as default};