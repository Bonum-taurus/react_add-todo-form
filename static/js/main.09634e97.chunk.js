(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),c=a(2),s=a(1),l=(a(12),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),o=a(0),d=function(e){var t=e.title,a=e.completed,n=e.id,i=e.userId,r=l.find((function(e){return e.id===i}));return Object(o.jsxs)("article",{"data-id":n,className:"TodoInfo ".concat(a&&"TodoInfo--completed"),children:[Object(o.jsx)("h2",{className:"TodoInfo__title",children:t}),Object(o.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})},u=function(e){var t=e.todos;return Object(o.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(o.jsx)(d,{id:e.id,title:e.title,completed:e.completed,userId:e.userId},e.id)}))})},m=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],j=function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(0),d=Object(c.a)(i,2),j=d[0],h=d[1],b=Object(s.useState)(!1),p=Object(c.a)(b,2),O=p[0],f=p[1],x=Object(s.useState)(!1),v=Object(c.a)(x,2),y=v[0],S=v[1],I=Object(s.useState)(m),N=Object(c.a)(I,2),g=N[0],C=N[1];function _(e){var t=e.map((function(e){return e.id}));return Math.max.apply(Math,Object(r.a)(t))+1}return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Add todo form"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a||f(!0),j||S(!0),a&&j&&(C([].concat(Object(r.a)(g),[{id:_(g),title:a,completed:!1,userId:j}])),n(""),h(0))},action:"/api/todos",method:"POST",children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(o.jsx)("input",{value:a,onChange:function(e){n(e.target.value),f(!1)},id:"title",type:"text","data-cy":"titleInput",placeholder:"Enter a title"}),O&&Object(o.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{htmlFor:"user",children:"User: "}),Object(o.jsxs)("select",{"data-cy":"userSelect",id:"user",value:j,onChange:function(e){h(+e.target.value),S(!1)},children:[Object(o.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(o.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),y&&Object(o.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(o.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(o.jsx)(u,{todos:g})]})};i.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.09634e97.chunk.js.map