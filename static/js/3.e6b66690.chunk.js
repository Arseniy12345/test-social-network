(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{292:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3WpQP",dialogsItem:"Dialogs_dialogsItem__28Y9J",dialog:"Dialogs_dialog__1JdGW",active:"Dialogs_active__2ygUn",messages:"Dialogs_messages__3l_Vb"}},296:function(e,s,a){"use strict";a.r(s);var t=a(0),i=a.n(t),n=a(95),c=a(1),o=a(292),r=a.n(o),d=a(25),l=function(e){var s="/dialogs/"+e.id;return Object(c.jsx)("div",{className:r.a.dialog,children:Object(c.jsx)(d.b,{to:s,activeClassName:r.a.active,children:e.name})})},g=function(e){return Object(c.jsx)("div",{className:r.a.message,children:e.text})},u=a(126),j=a(34),b=a(24),m=Object(j.a)(30),O=Object(u.a)({form:"newMessageBody"})((function(e){var s=e.handleSubmit;return Object(c.jsxs)("form",{onSubmit:s,children:[Object(b.b)("message",b.a,"text","message",[j.b,m],null),Object(c.jsx)("button",{children:"Send"})]})})),h=function(e){var s=e.dialogs,a=e.messages,t=Object(n.a)(e,["dialogs","messages"]),i=s.map((function(e){return Object(c.jsx)(l,{id:e.id,name:e.name})})),o=a.map((function(e){return Object(c.jsx)(g,{text:e.text})}));return Object(c.jsxs)("div",{className:r.a.dialogs,children:[Object(c.jsx)("div",{className:r.a.dialogsItem,children:i}),Object(c.jsxs)("div",{className:r.a.messages,children:[o,Object(c.jsx)(O,{onSubmit:function(e){t.addMessage(e.message)}})]})]})},p=a(96),x=a(12),f=a(5),v=a(37),_=a(38),D=a(40),y=a(39),N=a(10),w=function(e){return{isAuth:e.auth.isAuth}},M=a(9),J=Object(M.d)(Object(x.b)((function(e){return{dialogs:e.dialogsPage.dialogsData,messages:e.dialogsPage.messagesData,newMessageText:e.dialogsPage.newMessageText}}),{addMessage:p.a}),(function(e){var s=function(s){Object(D.a)(t,s);var a=Object(y.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(_.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(c.jsx)(e,Object(f.a)({},this.props)):Object(c.jsx)(N.a,{to:"/login"})}}]),t}(i.a.Component);return Object(x.b)(w)(s)}))(h);s.default=J}}]);
//# sourceMappingURL=3.e6b66690.chunk.js.map