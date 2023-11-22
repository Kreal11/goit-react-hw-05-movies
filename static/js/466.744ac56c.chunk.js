"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[466],{324:function(e,n,t){t.d(n,{a:function(){return u}});t(791);var r,a=t(168),i=t(867).default.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  margin: 0 auto;\n  padding: 10px 0;\n"]))),s=t(881),c=t(184),u=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(s.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},466:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r,a,i,s,c,u,o,p=t(861),d=t(439),l=t(757),f=t.n(l),x=t(791),v=t(689),h=t(207),m=t(168),w=t(87),g=t(867),y=g.default.div(r||(r=(0,m.Z)(["\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  flex-wrap: wrap;\n"]))),Z=g.default.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 60px;\n  text-align: justify;\n  max-width: 800px;\n  margin-bottom: 30px;\n"]))),j=g.default.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-align: center;\n"]))),b=g.default.div(s||(s=(0,m.Z)(["\n  display: flex;\n  margin: auto;\n  gap: 60px;\n  justify-content: center;\n  align-items: center;\n"]))),k=g.default.div(c||(c=(0,m.Z)(["\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n"]))),_=(0,g.default)(w.OL)(u||(u=(0,m.Z)(["\n  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;\n  border-radius: 5px;\n  padding: 4px;\n  max-width: 70px;\n\n  &.active {\n    color: white;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    box-shadow: 0 0 15px white;\n  }\n"]))),S=g.default.div(o||(o=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  gap: 30px;\n  margin-bottom: 30px;\n"]))),R=t(324),C=t(184),T=function(){var e,n,t,r=(0,x.useState)(!1),a=(0,d.Z)(r,2),i=a[0],s=a[1],c=(0,v.UO)().movieId,u=(0,v.s0)(),o=(0,v.TH)(),l=(0,x.useRef)((null===(e=o.state)||void 0===e?void 0:e.from)||"/"),m=(0,x.useState)(""),w=(0,d.Z)(m,2),g=w[0],T=w[1],D=(0,x.useState)({}),L=(0,d.Z)(D,2),N=L[0],G=L[1],H=(0,x.useState)({}),M=(0,d.Z)(H,2),O=M[0],U=M[1];return(0,x.useEffect)((function(){s(!0);var e=function(){var e=(0,p.Z)(f().mark((function e(){var n,t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.Mc)(c);case 3:return n=e.sent,e.next=6,(0,h.D4)(c);case 6:t=e.sent,G(n),U(t),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),T(e.t0.message);case 15:return e.prev=15,s(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),g&&u("/404"),i?(0,C.jsx)(R.a,{}):(0,C.jsxs)(y,{children:[(0,C.jsxs)(Z,{children:[(0,C.jsxs)(j,{children:[(0,C.jsx)(_,{to:l.current,children:"Go back"}),(0,C.jsx)("h2",{children:""!==N.title?N.title:"No title assigned yet"})]}),(0,C.jsxs)(b,{children:[N.poster_path&&(0,C.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(N.poster_path),alt:"",width:"250",height:"350"}),(0,C.jsxs)(k,{children:[(0,C.jsxs)("p",{children:["Rate:"," ",N.vote_average?"".concat(N.vote_average,"/10"):"No rate yet"]}),(0,C.jsxs)("p",{children:["Description:"," ",""!==N.overview?N.overview:"No description yet"]}),(0,C.jsxs)("p",{children:["Genres:"," ",null!==(n=N.genres)&&void 0!==n&&n.length?null===(t=N.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(", "):"The movie has not yet been assigned any genre"]})]})]})]}),O&&(0,C.jsx)("iframe",{title:O,width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(null===O||void 0===O?void 0:O.key)}),(0,C.jsxs)(S,{children:[(0,C.jsx)(_,{to:"cast",children:"Cast"}),(0,C.jsx)(_,{to:"reviews",children:"Reviews"})]}),(0,C.jsx)(x.Suspense,{children:(0,C.jsx)(v.j3,{})})]})}},207:function(e,n,t){t.d(n,{D4:function(){return d},Mc:function(){return p},RH:function(){return f},V7:function(){return l},mv:function(){return x},wr:function(){return o}});var r=t(683),a=t(861),i=t(757),s=t.n(i),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="f041ed3a64ad49a5d8fa59f2cf7de502",o=function(){var e=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/week",{params:(0,r.Z)((0,r.Z)({},n),{},{api_key:u})});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n),{params:{api_key:u}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/videos"),{params:{api_key:u}});case 2:return t=e.sent,r=t.data,a=r.results.find((function(e){return"Teaser"===e.type||"Trailer"===e.type})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:u}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:u}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{params:(0,r.Z)({api_key:u},n)});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=466.744ac56c.chunk.js.map