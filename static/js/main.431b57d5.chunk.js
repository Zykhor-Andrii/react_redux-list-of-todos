(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(9),s=c.n(n),a=c(8),r=c(15),l=c(6),i=c(13),o=c(14),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},b=c(3),h=function(){return{type:"filter/removeQuery"}},m=function(e){return{type:"filter/setQuery",payload:e}},O=function(e){return{type:"filter/status",payload:e}},f={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/removeQuery":return Object(b.a)(Object(b.a)({},e),{},{query:""});case"filter/setQuery":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"filter/status":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},p=function(e){return{type:"todos/set",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/set"===t.type?t.payload:e},y=Object(l.combineReducers)({currentTodo:j,filter:x,todos:v}),N=Object(l.createStore)(y,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),g=c(0);c(24),c(25);function T(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var w=c(16),k=a.b,E=a.c,C=c(1),S=function(){var e=E((function(e){return e.filter})),t=e.query,c=e.status,n=k(),s=E((function(e){return e.currentTodo})),a=E((function(e){return e.todos})),r=Object(g.useMemo)((function(){var e=Object(w.a)(a);return e=(e=e.filter((function(e){switch(c){case"active":return!e.completed;case"completed":return e.completed;default:return!0}}))).filter((function(e){return e.title.trim().toLowerCase().includes(t.trim().toLowerCase())}))}),[t,a,c]);return Object(C.jsx)(C.Fragment,{children:r.length?Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:r.map((function(e){return Object(C.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(C.jsx)("td",{className:"is-vcentered",children:e.id}),Object(C.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:e.id===(null===s||void 0===s?void 0:s.id)?Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"far fa-eye-slash"})})}):Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){!function(e){n(d(e))}(e)},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]}):Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},q=function(){var e=k(),t=h,c=m,n=O,s=E((function(e){return e.filter})).query;return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){e(n(t.target.value))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(t){return e(c(t.target.value))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(t())}})})]})]})},_=c(4),B=(c(27),function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})}),L=function(){var e=Object(g.useState)(null),t=Object(_.a)(e,2),c=t[0],n=t[1],s=E((function(e){return e.currentTodo})),a=k();return Object(g.useEffect)((function(){var e;(e=(null===s||void 0===s?void 0:s.userId)||0,T("/users/".concat(e))).then((function(e){return n(e)}))}),[null===s||void 0===s?void 0:s.id]),Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),c?Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===s||void 0===s?void 0:s.id]}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return a(u())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:null===s||void 0===s?void 0:s.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==s&&void 0!==s&&s.completed?Object(C.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(C.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(C.jsx)("a",{href:null===c||void 0===c?void 0:c.email,children:null===c||void 0===c?void 0:c.name})]})]})]}):Object(C.jsx)(B,{})]})},M=function(){var e=k(),t=E((function(e){return e.currentTodo})),c=E((function(e){return e.todos}));return Object(g.useEffect)((function(){T("/todos").then((function(t){return e(p(t))}))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(q,{})}),Object(C.jsx)("div",{className:"block",children:c.length?Object(C.jsx)(S,{}):Object(C.jsx)(B,{})})]})})}),t&&Object(C.jsx)(L,{})]})},Q=function(){return Object(C.jsx)(a.a,{store:N,children:Object(C.jsx)(r.a,{children:Object(C.jsx)(M,{})})})};s.a.render(Object(C.jsx)(Q,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.431b57d5.chunk.js.map