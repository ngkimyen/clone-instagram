(this["webpackJsonpclone-instagram"]=this["webpackJsonpclone-instagram"]||[]).push([[0],{13:function(e,n,t){"use strict";var c=t(5),i=t(11),r=(t(0),t(9)),a=t.n(r),s=t(2);n.a=function(e){var n,t=e.isBig,r=e.isCentered;return Object(s.jsx)("div",{className:Object(i.a)(a.a.spinner,(n={},Object(c.a)(n,a.a.bigSpinner,t),Object(c.a)(n,a.a.centeredSpinner,r),n))})}},19:function(e,n,t){},20:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(14),a=t.n(r),s=(t(19),t(4)),j=t(1),o=(t(20),t(13)),b=t(7),u=t(2),O=Object(c.lazy)((function(){return t.e(2).then(t.bind(null,70))})),l=Object(c.lazy)((function(){return t.e(4).then(t.bind(null,71))}));var g=function(){var e=Object(c.useContext)(b.a),n=Object(s.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){!0===localStorage.getItem("isLogin")&&i("LOGIN")}),[i]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)(o.a,{}),children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/clone-instagram/",element:t.isLogin?Object(u.jsx)(O,{isHomePage:!0}):Object(u.jsx)(l,{})}),Object(u.jsx)(j.a,{path:"/clone-instagram/".concat(localStorage.getItem("user")),element:Object(u.jsx)(O,{})}),Object(u.jsx)(j.a,{path:"*",element:Object(u.jsx)("div",{children:"Not found"})})]})})})},d=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,69)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))},p=t(12);a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p.a,{children:Object(u.jsx)(b.b,{children:Object(u.jsx)(g,{})})})}),document.getElementById("root")),d()},7:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(4),i=t(6),r=t(0),a=t(2),s=Object(r.createContext)({isLogin:!1}),j={isLogin:localStorage.getItem("isLogin")},o=function(e,n){switch(n.type){case"LOGIN":return Object(i.a)(Object(i.a)({},e),{},{isLogin:!0});case"LOGOUT":return Object(i.a)(Object(i.a)({},e),{},{isLogin:!1});default:return e}};n.b=function(e){var n=e.children,t=Object(r.useReducer)(o,j),i=Object(c.a)(t,2),b=i[0],u=i[1];return Object(a.jsx)(s.Provider,{value:[b,u],children:n})}},9:function(e,n,t){e.exports={spinner:"Spinner_spinner__38Fak",spin:"Spinner_spin__2wPQ-",bigSpinner:"Spinner_bigSpinner__1VeDb",centeredSpinner:"Spinner_centeredSpinner__1OXep"}}},[[22,1,3]]]);
//# sourceMappingURL=main.b5f7de47.chunk.js.map