import{_ as s,o as d,c as p,b as t,w as i,a as e,d as o,r as n}from"./app.87509b5a.js";const c={},u=e("h1",{id:"i-notifications",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#i-notifications","aria-hidden":"true"},"#"),o(),e("code",null,"i/notifications")],-1),f=e("p",null,"Credential required.",-1),m=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),o(" Parameters")],-1),y=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),o(" Response")],-1),h=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),o(" Errors")],-1);function _(b,w){const r=n("MkApiConsole"),a=n("ClientOnly"),l=n("MkSchemaViewer");return d(),p("div",null,[u,f,t(a,null,{default:i(()=>[t(r,{name:"i/notifications",def:{summary:"",description:"",tags:["account"],requireCredential:!0,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},following:{type:"boolean",default:!1},unreadOnly:{type:"boolean",default:!1},markAsRead:{type:"boolean",default:!0},includeTypes:{type:"array",items:{type:"string",enum:["follow","mention","reply","renote","quote","reaction","pollVote","pollEnded","receiveFollowRequest","followRequestAccepted","groupInvited","app"]}},excludeTypes:{type:"array",items:{type:"string",enum:["follow","mention","reply","renote","quote","reaction","pollVote","pollEnded","receiveFollowRequest","followRequestAccepted","groupInvited","app"]}}},required:[]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Notification",$ref:"misskey://Notification"}},errors:{}}})]),_:1}),m,t(a,null,{default:i(()=>[t(l,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},following:{type:"boolean",default:!1},unreadOnly:{type:"boolean",default:!1},markAsRead:{type:"boolean",default:!0},includeTypes:{type:"array",items:{type:"string",enum:["follow","mention","reply","renote","quote","reaction","pollVote","pollEnded","receiveFollowRequest","followRequestAccepted","groupInvited","app"]}},excludeTypes:{type:"array",items:{type:"string",enum:["follow","mention","reply","renote","quote","reaction","pollVote","pollEnded","receiveFollowRequest","followRequestAccepted","groupInvited","app"]}}},required:[]}})]),_:1}),y,t(a,null,{default:i(()=>[t(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Notification",$ref:"misskey://Notification"}}})]),_:1}),h])}var q=s(c,[["render",_],["__file","notifications.html.vue"]]);export{q as default};