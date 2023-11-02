"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[466],{466:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r,a,i,s,c,o,u,p,l,d=t(168),f=t(861),x=t(439),v=t(757),h=t.n(v),m=t(791),g=t(689),w=t(207),y=t(87),Z=t(867),j=Z.default.div(r||(r=(0,d.Z)(["\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  flex-wrap: wrap;\n"]))),b=Z.default.div(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 60px;\n  text-align: justify;\n  max-width: 800px;\n  margin-bottom: 30px;\n"]))),k=Z.default.div(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  text-align: center;\n"]))),_=Z.default.div(s||(s=(0,d.Z)(["\n  display: flex;\n  margin: auto;\n  gap: 60px;\n  justify-content: center;\n  align-items: center;\n"]))),R=Z.default.div(c||(c=(0,d.Z)(["\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n"]))),S=(0,Z.default)(y.OL)(o||(o=(0,d.Z)(["\n  transition: color 0.3s, box-shadow 0.3s, background-color 0.3s;\n  border-radius: 5px;\n  padding: 4px;\n  max-width: 70px;\n\n  &.active {\n    color: white;\n  }\n  &:hover {\n    background-color: white;\n    color: black;\n    box-shadow: 0 0 15px white;\n  }\n"]))),C=Z.default.div(u||(u=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  gap: 30px;\n  margin-bottom: 30px;\n"]))),N=t(881),D=t(184),L=Z.default.div(p||(p=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),G=Z.default.div(l||(l=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80px;\n  margin: 0 auto;\n  padding: 40px 0;\n"]))),H=function(){var e,n,t,r,a=(0,m.useState)(!1),i=(0,x.Z)(a,2),s=i[0],c=i[1],o=(0,g.UO)().movieId,u=(0,g.TH)(),p=(0,m.useRef)((null===(e=u.state)||void 0===e?void 0:e.from)||"/"),l=(0,m.useState)({}),d=(0,x.Z)(l,2),v=d[0],y=d[1],Z=(0,m.useState)({}),H=(0,x.Z)(Z,2),M=H[0],O=H[1];return(0,m.useEffect)((function(){c(!0);var e=function(){var e=(0,f.Z)(h().mark((function e(){var n,t,r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.Mc)(o);case 3:return n=e.sent,e.next=6,(0,w.D4)(o);case 6:t=e.sent,r=t.results,console.log(n),y(n),O(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:return e.prev=16,c(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[o]),s?(0,D.jsx)(G,{children:(0,D.jsx)(N.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})}):v?(0,D.jsxs)(j,{children:[(0,D.jsxs)(b,{children:[(0,D.jsxs)(k,{children:[(0,D.jsx)(S,{to:p.current,children:"Go back"}),(0,D.jsx)("h2",{children:""!==v.title?v.title:"No title assigned yet"})]}),(0,D.jsxs)(_,{children:[v.poster_path&&(0,D.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(v.poster_path),alt:"",width:"250",height:"350"}),(0,D.jsxs)(R,{children:[(0,D.jsxs)("p",{children:["Rate:"," ",v.vote_average?"".concat(v.vote_average,"/10"):"No rate yet"]}),(0,D.jsxs)("p",{children:["Description:"," ",""!==v.overview?v.overview:"No description yet"]}),(0,D.jsxs)("p",{children:["Genres:"," ",null!==(n=v.genres)&&void 0!==n&&n.length?null===(t=v.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(", "):"The movie has not yet been assigned any genre"]})]})]})]}),M&&(0,D.jsx)("iframe",{title:M,width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(null===(r=M[0])||void 0===r?void 0:r.key)}),(0,D.jsxs)(C,{children:[(0,D.jsx)(S,{to:"cast",children:"Cast"}),(0,D.jsx)(S,{to:"reviews",children:"Reviews"})]}),(0,D.jsx)(m.Suspense,{children:(0,D.jsx)(g.j3,{})})]}):(0,D.jsx)(L,{children:"No data available, sorry"})}},207:function(e,n,t){t.d(n,{D4:function(){return l},Mc:function(){return p},RH:function(){return f},V7:function(){return d},mv:function(){return x},wr:function(){return u}});var r=t(683),a=t(861),i=t(757),s=t.n(i),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="f041ed3a64ad49a5d8fa59f2cf7de502",u=function(){var e=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/week",{params:(0,r.Z)((0,r.Z)({},n),{},{api_key:o})});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/videos"),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:o}});case 2:return t=e.sent,r=t.data,console.log(r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,a.Z)(s().mark((function e(n){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{params:(0,r.Z)({api_key:o},n)});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=466.ce9bc705.chunk.js.map