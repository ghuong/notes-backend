(this.webpackJsonpexampleapp=this.webpackJsonpexampleapp||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(2),r=e(15),o=e.n(r),i=e(6),a=e(4),u=e(3),s=e.n(u),j=e(0),l=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(j.jsxs)("li",{className:"note",children:[n.content,Object(j.jsx)("button",{onClick:e,children:c})]})},f=function(t){var n=t.message;return null===n?null:Object(j.jsx)("div",{className:"error",children:n})},b=function(){return Object(j.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(j.jsx)("br",{}),Object(j.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2020"})]})},d="/api/notes",p=function(){var t=s.a.get(d),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},m=function(t){return s.a.post(d,t).then((function(t){return t.data}))},O=function(t,n){return s.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(c.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=Object(c.useState)("a new note..."),u=Object(a.a)(o,2),s=u[0],d=u[1],h=Object(c.useState)(!0),v=Object(a.a)(h,2),x=v[0],g=v[1],S=Object(c.useState)(null),k=Object(a.a)(S,2),w=k[0],y=k[1];Object(c.useEffect)((function(){p().then((function(t){r(t)}))}),[]);var N=x?e:e.filter((function(t){return t.important}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Notes"}),Object(j.jsx)(f,{message:w}),Object(j.jsx)("div",{children:Object(j.jsxs)("button",{onClick:function(){return g(!x)},children:["show ",x?"important":"all"]})}),Object(j.jsx)("ul",{children:N.map((function(t,n){return Object(j.jsx)(l,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});O(t,c).then((function(n){r(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){y("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3),r(e.filter((function(n){return n.id!==t})))}))}(t.id)}},n)}))}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:s,date:(new Date).toISOString(),important:Math.random()<.5};m(n).then((function(t){r(e.concat(t)),d("")}))},children:[Object(j.jsx)("input",{value:s,onChange:function(t){return d(t.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"save"})]}),Object(j.jsx)(b,{})]})};e(39);o.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5045568c.chunk.js.map