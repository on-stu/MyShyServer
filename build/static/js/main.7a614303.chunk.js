(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,n,t){},142:function(e,n,t){},143:function(e,n,t){},144:function(e,n,t){},146:function(e,n,t){},251:function(e,n,t){},253:function(e,n,t){},254:function(e,n,t){},273:function(e,n,t){},274:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),i=t(25),s=t.n(i),r=t(5),o=t.n(r),l=t(10),j=t(4),d=t(11),u=t.n(d),b=t(8),h=t(6),x=t(288),O=(t(131),t(1));var p=function(e){var n=e.isLoggedIn,t=(e.userObj,Object(h.f)());return Object(O.jsx)("div",{className:"header__Container",children:n?Object(O.jsxs)("div",{className:"header__InnerContainer",children:[Object(O.jsx)(b.b,{style:{textDecoration:"none",color:"white"},to:"/",children:Object(O.jsx)("h1",{children:"MyShy"})}),Object(O.jsxs)("div",{className:"header__LinkContainer",children:[Object(O.jsx)(b.b,{style:{textDecoration:"none",color:"white"},to:"/post",children:Object(O.jsx)(x.a,{children:"\uae00\uc4f0\uae30"})}),Object(O.jsx)(x.a,{onClick:function(){localStorage.removeItem("token"),t.push("/"),t.go(0)},children:"\ub85c\uadf8\uc544\uc6c3"})]})]}):Object(O.jsxs)("div",{className:"header__InnerContainer",children:[Object(O.jsx)(b.b,{style:{textDecoration:"none",color:"white"},to:"/",children:Object(O.jsx)("h1",{children:"MyShy"})}),Object(O.jsxs)("div",{className:"header__LinkContainer",children:[Object(O.jsx)(b.b,{style:{textDecoration:"none",color:"white"},to:"/register",children:Object(O.jsx)(x.a,{children:"\ud68c\uc6d0\uac00\uc785"})}),Object(O.jsx)(b.b,{className:"link",to:"/login",children:Object(O.jsx)(x.a,{children:"\ub85c\uadf8\uc778"})})]})]})})},g="http://13.209.57.114:3001/api",m=t(99),v=t(17),f=(t(142),t(98));var _,w=function(e){var n=e.isLoggedIn,t=Object(h.f)(),a=window.Kakao,i=Object(c.useState)(""),s=Object(j.a)(i,2),r=s[0],d=s[1],b=Object(c.useState)(""),p=Object(j.a)(b,2),_=p[0],w=p[1],k=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("kakao",n),e.next=3,u.a.post("".concat(g,"/kakaoLogin"),n).then((function(e){console.log(e.data),"success"===e.data.status&&(console.log("the token is",e.data.data),localStorage.setItem("token",e.data.data),t.replace("/"),t.go(0))}));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),N=function(e){var n=e.target,t=n.name,c=n.value;"username"===t?d(c):w(c)},y=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat(g,"/login"),{username:r,password:_}).then((function(e){console.log(e.data),"success"===e.data.status?(console.log("the token is",e.data.data),localStorage.setItem("token",e.data.data),t.replace("/"),t.go(0)):"error"===e.data.status&&alert(e.data.error)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n&&t.replace("/"),console.log(a)}),[n]),Object(O.jsx)("div",{className:"login__Container",children:Object(O.jsx)("div",{className:"login__InnerContainer",children:Object(O.jsxs)("div",{className:"login__inputContainer",children:[Object(O.jsx)("h2",{children:"\ub85c\uadf8\uc778"}),Object(O.jsx)("div",{className:"login__input",children:Object(O.jsx)("input",{type:"text",name:"username",value:r,onChange:N,required:!0,placeholder:"\uc544\uc774\ub514"})}),Object(O.jsx)("div",{className:"login__input",children:Object(O.jsx)("input",{type:"password",name:"password",value:_,onChange:N,required:!0,placeholder:"\ube44\ubc00\ubc88\ud638"})}),Object(O.jsx)("div",{className:"login__button",children:Object(O.jsx)(x.a,{onClick:y,children:"\ub85c\uadf8\uc778"})}),Object(O.jsx)("div",{className:"login__button",children:Object(O.jsx)(x.a,{onClick:function(){return t.push("/register")},children:"\ud68c\uc6d0\uac00\uc785"})}),Object(O.jsxs)("div",{className:"login__social_button",children:[Object(O.jsxs)(x.a,{onClick:function(){alert("\uc900\ube44\uc911\uc785\ub2c8\ub2e4.")},children:[Object(O.jsx)(v.a,{icon:m.a}),"\xa0 \uad6c\uae00\ub85c \ub85c\uadf8\uc778"]}),Object(O.jsx)("div",{className:"kakaoLogin",children:Object(O.jsx)(f.a,{className:"kakaoLogin",jskey:"4c29c3d6db416c3bbf28c6c1517a41ac",onSuccess:k,onFail:function(){return alert("\uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4")},getProfile:!0,style:{width:"100%",height:"100%",background:"none",borderRadius:"10px",outline:"none",border:"none",cursor:"pointer"},children:"\xa0"})})]})]})})})},k=(t(143),t(19)),N=t(28),y=t(20),C=(t(144),Object(y.a)(b.b)(_||(_=Object(k.a)(["\n  text-emphasis: none;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  color: black;\n\n  h3 {\n    padding: 0;\n    margin: 0;\n  }\n"]))));var S=function(e){var n=e.title,t=e.preview,c=e.commentNum,a=e.likes,i=e.id,s=e.isLoggedIn;return console.log(i),Object(O.jsxs)("div",{className:"card__Container",children:[Object(O.jsxs)("div",{className:"card__left",children:[Object(O.jsx)(C,{to:"/singview/".concat(i),isLoggedIn:s,children:Object(O.jsx)("h3",{children:n})}),Object(O.jsxs)("span",{children:[t,"..."]})]}),Object(O.jsx)("div",{className:"card__right",children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(v.a,{icon:N.a})," ",c]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(v.a,{icon:N.b})," ",a]})]})})]})},I=t(48);var L=function(e){e.userObj;var n=e.isLoggedIn,t=Object(h.f)(),a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],r=i[1],d=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat(g,"/getsings")).then((function(e){console.log(e.data.sings),r(e.data.sings)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){d(),console.log(n)}),[n]),Object(O.jsx)("div",{className:"main__Container",children:Object(O.jsxs)("div",{className:"main__InnerContainer",children:[Object(O.jsxs)("div",{className:"main__SearchContainer",children:[Object(O.jsx)("input",{type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694"}),Object(O.jsx)(v.a,{icon:I.b})]}),Object(O.jsxs)("div",{className:"main__col1",children:[Object(O.jsxs)("div",{className:"main__col1__header",children:[Object(O.jsx)("h3",{children:"\uc2b9\ud638 \ub178\ub798\uc601\uc0c1"}),Object(O.jsx)("button",{onClick:function(){return t.push("/singlist")},children:"\ub354\ubcf4\uae30"})]}),Object(O.jsx)("div",{className:"main__col1__body",children:s.slice(0,6).map((function(e){return Object(O.jsx)(S,{title:e.title.slice(9),id:e._id,likes:e.likes,preview:e.description.slice(0,22),commentNum:e.comments.length,isLoggedIn:n},e._id)}))})]}),Object(O.jsxs)("div",{className:"main__col1",children:[Object(O.jsxs)("div",{className:"main__col1__header",children:[Object(O.jsx)("h3",{children:"\uc790\uc720 \uac8c\uc2dc\ud310"}),Object(O.jsx)("button",{children:"\ub354\ubcf4\uae30"})]}),Object(O.jsxs)("div",{className:"main__col1__body",children:[Object(O.jsx)(S,{title:"\ub2c8 \uacc1\uc774\ub77c\uba74",preview:"\uc9c4\uc9dc \uc886\ub418\ub294 \ub77c\uc774\ube0c",commentNum:31,likes:20}),Object(O.jsx)(S,{title:"\ub2c8 \uacc1\uc774\ub77c\uba74",preview:"\uc9c4\uc9dc \uc886\ub418\ub294 \ub77c\uc774\ube0c",commentNum:31,likes:21}),Object(O.jsx)(S,{title:"\ub2c8 \uacc1\uc774\ub77c\uba74",preview:"\uc9c4\uc9dc \uc886\ub418\ub294 \ub77c\uc774\ube0c",commentNum:31,likes:40}),Object(O.jsx)(S,{title:"\ub2c8 \uacc1\uc774\ub77c\uba74",preview:"\uc9c4\uc9dc \uc886\ub418\ub294 \ub77c\uc774\ube0c",commentNum:31,likes:33}),Object(O.jsx)(S,{title:"\ub2c8 \uacc1\uc774\ub77c\uba74",preview:"\uc9c4\uc9dc \uc886\ub418\ub294 \ub77c\uc774\ube0c",commentNum:31,likes:10}),Object(O.jsx)(S,{title:"\ub2c8 \uacc1\uc774\ub77c\uba74",preview:"\uc9c4\uc9dc \uc886\ub418\ub294 \ub77c\uc774\ube0c",commentNum:31,likes:25})]})]})]})})},q=(t(146),t(103)),F=t.n(q);t(250);var D=function(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],a=n[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"post__Container",children:[Object(O.jsx)("div",{className:"post__header",children:"hello"}),Object(O.jsx)("div",{style:{height:"692px",width:"900px",paddingBottom:0,backgroundColor:"white"},children:Object(O.jsx)(F.a,{style:{height:"650px",width:"100%",paddingBottom:0},theme:"snow",modules:{toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],[{align:[]},{color:[]},{background:[]}],["clean"]]},formats:["header","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","align","color","background"],value:t||"",onChange:function(e,n,c,i){return s=i.getHTML(),a(s),void console.log(t);var s}})})]})})};t(251);var E,z,P=function(){var e=Object(c.useState)(""),n=Object(j.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(""),s=Object(j.a)(i,2),r=s[0],d=s[1],b=Object(c.useState)(""),p=Object(j.a)(b,2),m=p[0],v=p[1],f=Object(h.f)(),_=function(e){var n=e.target,t=n.name,c=n.value;"username"===t?a(c):"password"===t?d(c):v(c)},w=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat(g,"/register"),{username:t,password:r,nickname:m}).then((function(e){"success"===e.data.status?(alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4. \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694."),f.push("/")):"error"===e.data.status&&alert(e.data.error)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"register__Container",children:Object(O.jsx)("div",{className:"register__InnerContainer",children:Object(O.jsxs)("div",{className:"register__inputContainer",children:[Object(O.jsx)("h2",{children:"\ud68c\uc6d0\uac00\uc785"}),Object(O.jsx)("div",{className:"register__input",children:Object(O.jsx)("input",{type:"text",name:"username",value:t,onChange:_,required:!0,placeholder:"\uc544\uc774\ub514"})}),Object(O.jsx)("div",{className:"register__input",children:Object(O.jsx)("input",{type:"password",name:"password",value:r,required:!0,onChange:_,placeholder:"\ube44\ubc00\ubc88\ud638"})}),Object(O.jsx)("div",{className:"register__input",children:Object(O.jsx)("input",{type:"text",name:"nickname",value:m,required:!0,onChange:_,placeholder:"\ub2c9\ub124\uc784"})}),Object(O.jsx)("div",{className:"register__button",children:Object(O.jsx)(x.a,{onClick:w,children:"\ud68c\uc6d0\uac00\uc785"})})]})})})},B=t(60),M=t(104),T=t.n(M),H=y.a.div(E||(E=Object(k.a)(["\n  width: 30%;\n  height: 300px;\n  border: 1px solid black;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;\n  z-index: 1;\n\n  h3 {\n    padding: 0;\n    margin: 0;\n  }\n  .header {\n    margin-bottom: 20px;\n    width: 100%;\n  }\n  img {\n    width: 100%;\n    height: 50%;\n    object-fit: cover;\n    z-index: 0;\n    position: relative;\n  }\n\n  span {\n    color: #7a7a7a;\n  }\n"]))),J=Object(y.a)(b.b)(z||(z=Object(k.a)(["\n  text-emphasis: none;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  color: black;\n\n  h3 {\n    padding: 0;\n    margin: 0;\n  }\n"])));var R,A,K=function(e){var n=e.title,t=e.preview,c=(e.commentNum,e.likes,e.id),a=e.url,i=T()(a);return Object(O.jsx)(H,{children:Object(O.jsxs)(J,{to:"/singview/".concat(c),children:[Object(O.jsx)("div",{className:"header",children:Object(O.jsx)("h3",{children:n})}),Object(O.jsx)("img",{src:i.high.url,alt:n}),Object(O.jsxs)("span",{children:[t,"..."]})]})})},U=y.a.div(R||(R=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  min-width: 1200px;\n  height: calc(100vh - 80px);\n  overflow: scroll;\n"]))),G=y.a.div(A||(A=Object(k.a)(["\n  margin-top: 40px;\n  width: 60%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"])));var Q,V,W=function(){var e=Object(c.useState)([]),n=Object(j.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(0),s=Object(j.a)(i,2),r=s[0],d=s[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat(g,"/singview?skip=").concat(r)).then((function(e){a([].concat(Object(B.a)(t),Object(B.a)(e.data)))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[r]),Object(O.jsx)(U,{onScroll:function(e){var n=e.target,c=n.offsetHeight,a=n.scrollTop,i=n.scrollHeight;console.log(c),c+a===i&&(console.log("scrolled"),d(t.length))},children:Object(O.jsx)(G,{children:t.length>0?t.map((function(e){return Object(O.jsx)(K,{title:e.title.slice(9),id:e._id,likes:e.likes,preview:e.description.slice(0,60),commentNum:e.comments.length,url:e.url},e._id)})):Object(O.jsx)("h1",{children:" loading"})})})},X=(t(253),y.a.div(Q||(Q=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 40px;\n  row-gap: 15px;\n"])))),Y=Object(y.a)(x.a)(V||(V=Object(k.a)(["\n  width: 600px;\n  height: 40px;\n  background-color: #537fa8;\n  color: white;\n\n  :hover {\n    background-color: #537fa8;\n  }\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 55px;\n  }\n"])));var Z=function(e){var n=e.userObj,t=Object(c.useState)(""),a=Object(j.a)(t,2),i=a[0],s=a[1],r=Object(c.useState)(""),d=Object(j.a)(r,2),b=d[0],x=d[1],p=Object(c.useState)(""),m=Object(j.a)(p,2),f=m[0],_=m[1],w=Object(h.f)(),k=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:i,description:b,url:f,creatorId:n.user.id,createdAt:Date.now()},e.next=3,u.a.post("".concat(g,"/singpost"),t).then((function(e){"success"===e.data?(alert("\uc5c5\ub85c\ub4dc\uc5d0 \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4!"),s(""),x(""),_("")):console.log("error")})).then((function(){w.push("/")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)(X,{children:[Object(O.jsx)("div",{className:"main__SearchContainer",children:Object(O.jsx)("input",{type:"text",value:i,required:!0,onChange:function(e){return s(e.target.value)},placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694."})}),Object(O.jsx)("div",{className:"main__SearchContainer",children:Object(O.jsx)("input",{type:"text",value:b,required:!0,onChange:function(e){return x(e.target.value)},placeholder:"\uc124\uba85"})}),Object(O.jsx)("div",{className:"main__SearchContainer",children:Object(O.jsx)("input",{type:"text",value:f,required:!0,onChange:function(e){return _(e.target.value)},placeholder:"\uc601\uc0c1 URL"})}),Object(O.jsx)(Y,{onClick:k,children:Object(O.jsxs)("div",{children:[Object(O.jsx)(v.a,{icon:I.a}),Object(O.jsx)("span",{children:"\uc5c5\ub85c\ub4dc"})]})})]})},$=(t(254),t(105)),ee=t.n($);var ne=function(e){var n=e.match,t=e.isLoggedIn,a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],r=i[1];console.log(t);var d=n.params.id,b=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat(g,"/getsingbyid/").concat(d)).then((function(e){console.log(e.data.sing[0]),r(e.data.sing[0])}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"singview__Container",children:Object(O.jsx)("div",{className:"singview__InnerContainer",children:Object(O.jsxs)("div",{className:"singview__PlayerContainer",children:[Object(O.jsx)("h1",{children:s.title}),Object(O.jsx)("div",{className:"singview__Player",children:Object(O.jsx)(ee.a,{url:s.url,playing:!1,loop:!0,controls:!0})}),Object(O.jsx)("p",{children:s.description}),Object(O.jsxs)("div",{className:"singview__footer",children:[Object(O.jsx)(v.a,{icon:N.b,size:"2x"}),Object(O.jsx)("h3",{children:s.likes}),"\xa0",Object(O.jsx)(v.a,{icon:N.a,size:"2x"}),Object(O.jsx)("h3",{children:"0"})]})]})})})})};var te=function(){var e=Object(c.useState)({}),n=Object(j.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(!1),s=Object(j.a)(i,2),r=s[0],d=s[1],x=localStorage.getItem("token");function m(){return(m=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat(g,"/checkIsLoggedIn"),{token:n}).then((function(e){"success"===e.data.status?(a(e.data),d(!0)):(a({}),d(!1))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(e){m.apply(this,arguments)}(x)}),[x]),Object(O.jsxs)(b.a,{children:[Object(O.jsx)(p,{isLoggedIn:r,userObj:t}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:Object(O.jsx)(L,{userObj:t})}),Object(O.jsx)(h.a,{path:"/login",children:Object(O.jsx)(w,{isLoggedIn:r})}),Object(O.jsx)(h.a,{path:"/register",isLoggedIn:r,component:P}),Object(O.jsx)(h.a,{path:"/post",children:Object(O.jsx)(D,{})}),Object(O.jsx)(h.a,{path:"/singview/:id",component:ne}),Object(O.jsx)(h.a,{path:"/singpost",children:Object(O.jsx)(Z,{userObj:t,isLoggedIn:r})}),Object(O.jsx)(h.a,{path:"/singlist",component:W})]})]})},ce=(t(273),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,289)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),i(e),s(e)}))});s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(te,{})}),document.getElementById("root")),ce()}},[[274,1,2]]]);
//# sourceMappingURL=main.7a614303.chunk.js.map