(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),s=n.n(a),d=(n(13),n(14),n(8)),l=n(6),r=n(3),j=n.p+"static/media/book.1b3868f7.png",o=n(0),b=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(r.a)(a,2),b=s[0],u=s[1],f=Object(c.useState)(!0),m=Object(r.a)(f,2),O=m[0],h=m[1],x=Object(c.useState)(null),v=Object(r.a)(x,2),p=v[0],g=v[1],N=function(){if(n)if(n&&!O)u(b.map((function(e){return e.id===p?Object(l.a)(Object(l.a)({},e),{},{name:n}):e}))),h(!0),i(""),g(null);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(d.a)(b),[e])),i("")}else alert("plzz fill data")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-div",children:Object(o.jsxs)("div",{className:"child-div",children:[Object(o.jsxs)("figure",{children:[Object(o.jsx)("img",{src:j,alt:"todologo"}),Object(o.jsx)("figcaption",{children:"Add your list here \ud83d\udcd1"})]}),Object(o.jsxs)("div",{className:"addItems",children:[Object(o.jsx)("input",{type:"text",name:"",value:n,onChange:function(e){return i(e.target.value)},placeholder:" \u270d\ufe0f Add items"}),O?Object(o.jsx)("i",{className:"fa fa-plus add-btn",title:"add item",onClick:N}):Object(o.jsx)("i",{className:"fas fa-edit add-btn",title:"Update item",onClick:N})]}),Object(o.jsx)("div",{className:"showItems",children:b.map((function(e){return Object(o.jsxs)("div",{className:"eachItem",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsxs)("div",{className:"todo-btn",children:[Object(o.jsx)("i",{class:"fas fa-edit add-btn",title:"Edit item",onClick:function(){return function(e){var t=b.find((function(t){return t.id===e}));h(!1),i(t.name),g(e)}(e.id)}}),Object(o.jsx)("i",{className:"far fa-trash-alt add-btn",title:"Delete item",onClick:function(){return function(e){var t=b.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"showItems",children:Object(o.jsxs)("button",{className:"btn effect04","data-sm-link-text":"Remove All",onClick:function(){u([])},children:[" ",Object(o.jsx)("span",{children:"CHECK List"})]})})]})})})};var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.02574a3a.chunk.js.map