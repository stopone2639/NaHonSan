"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[970],{6970:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(88214),s=t(15861),i=t(70885),a=t(72791),c=t(20501),l=t(16871),u=t(29586),o=t(79343),d=t(64826),f=t(8503),m=t(7512),x=t(6993),h=t(93561),p=t(66579),j=t(86135),k=t(194),v=t(20343),b=t(80184);var N=function(){var e=(0,a.useState)(!1),n=(0,i.Z)(e,2),t=n[0],N=n[1],g=(0,a.useState)(),Z=(0,i.Z)(g,2),w=Z[0],y=Z[1],C=(0,a.useState)(),_=(0,i.Z)(C,2),S=_[0],I=_[1],F=(0,a.useState)({isFollow:!1,isLike:!1}),L=(0,i.Z)(F,2),M=L[0],T=L[1],U=(0,a.useState)(!1),R=(0,i.Z)(U,2),A=R[0],E=R[1],H=(0,l.UO)().id,P=(0,l.s0)(),z=(0,p.C)((function(e){return e.auth.userInfo})),O=function(){N((function(e){return!e}))};if((0,a.useEffect)((function(){(0,u.Hx)(H).then((function(e){T({isFollow:e.isFollow,isLike:e.isLike}),y(e.tip);var n=e.tipComments.reverse();I(n)})).catch((function(){return P("NotFound")}))}),[t,H]),!w)return(0,b.jsx)("div",{});var q={__html:w.content},B=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,(0,u.eZ)(H);case 4:return"SUCCESS"===(n=e.sent)&&P("/"),e.abrupt("return",n);case 7:return e.abrupt("return",0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=2;break}return e.abrupt("return",P("/login"));case 2:if(A){e.next=9;break}return E(!0),e.next=6,(0,u.dk)(H);case 6:200===e.sent.status&&O(),E(!1);case 9:return e.abrupt("return",0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z){e.next=2;break}return e.abrupt("return",P("/login"));case 2:if(A){e.next=13;break}if(E(!0),!M.isFollow){e.next=9;break}return e.next=7,(0,o.zM)(w.userNickname);case 7:e.next=11;break;case 9:return e.next=11,(0,o.R3)(w.userNickname);case 11:E(!1),O();case 13:return e.abrupt("return",0);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=(null===z||void 0===z?void 0:z.nickname)===w.userNickname;return(0,b.jsx)("div",{id:"tip-detail-page",children:(0,b.jsxs)("div",{className:"article flex column",children:[(0,b.jsx)("p",{className:"title notoMid",children:w.title}),(0,b.jsxs)("div",{className:"header flex",children:[(0,b.jsxs)("div",{className:"header-info flex",children:[(0,b.jsx)("div",{className:"header-info__img-container flex",children:(0,b.jsx)("button",{type:"button",onClick:function(){P("/userfeed/".concat(w.userNickname))},children:(0,b.jsx)("img",{src:w.userProfileImg?"data:image/jpeg;base64,".concat(w.userProfileImg):d.Z,alt:"User",className:"profile-user__img",title:"User"})})}),(0,b.jsxs)("div",{className:"header-info__text flex column justify-center",children:[(0,b.jsx)(c.rU,{to:"/userfeed/".concat(w.userNickname),className:"user-name notoMid",children:w.userNickname}),(0,b.jsx)("div",{className:"created flex column align-center",children:(0,b.jsx)("p",{className:" notoReg",children:w.updateTime?"".concat((0,j.h)(w.updateTime)," (\uc218\uc815\ub428)"):(0,j.h)(w.time)})})]}),(0,b.jsx)("button",{onClick:G,className:"header-info__btn notoReg ".concat(J?"hide":null," ").concat(M.isFollow?"grey":"yellow"),type:"button",children:M.isFollow?"\uc5b8\ud314\ub85c\uc6b0":"\ud314\ub85c\uc6b0"})]}),(0,b.jsx)("div",{className:"header-func flex",children:J?(0,b.jsxs)("div",{className:"header-func-btn flex",children:[(0,b.jsx)("button",{onClick:function(){P("/tip/edit/".concat(H),{state:w})},type:"button",children:(0,b.jsx)("img",{src:x.Z,alt:"edit",title:"edit"})}),(0,b.jsx)("button",{onClick:B,type:"button",children:(0,b.jsx)("img",{src:h.Z,alt:"del",title:"delete"})})]}):(0,b.jsx)("div",{className:"header-func-btn flex",children:(0,b.jsx)("button",{onClick:D,type:"button",children:(0,b.jsx)("img",{src:M.isLike?m.Z:f.Z,alt:"like",title:"like"})})})})]}),(0,b.jsx)("div",{className:"body flex",children:(0,b.jsx)("div",{className:"body-content ",dangerouslySetInnerHTML:q})}),(0,b.jsxs)("div",{className:"comment flex column",children:[(0,b.jsx)("div",{className:"comment-head",children:(0,b.jsxs)("p",{className:"notoMid",children:["\ub313\uae00",(0,b.jsx)("span",{className:"",children:w.comment})]})}),(0,b.jsxs)("div",{className:"comment-input flex",children:[(0,b.jsx)("div",{className:"input-img-container flex",children:(0,b.jsx)("img",{src:null!==z&&void 0!==z&&z.profileImg?"data:image/jpeg;base64,".concat(z.profileImg):d.Z,alt:"dum",title:"user-icon"})}),(0,b.jsx)(v.Z,{type:"Tip",changed:O,articleIdx:H})]}),S?(0,b.jsx)(k.Z,{isArticleAuthor:!1,postIdx:H,changed:O,type:"Tip",comments:S}):null]})]})})}}}]);
//# sourceMappingURL=970.9b038778.chunk.js.map