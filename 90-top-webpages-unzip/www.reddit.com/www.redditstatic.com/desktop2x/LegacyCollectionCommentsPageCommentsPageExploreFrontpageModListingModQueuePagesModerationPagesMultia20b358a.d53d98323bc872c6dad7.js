(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a"],{"./src/lib/timezone/index.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"c",(function(){return p}));n("./node_modules/core-js/modules/es6.number.constructor.js"),n("./node_modules/core-js/modules/es6.regexp.replace.js"),n("./node_modules/core-js/modules/es6.regexp.split.js");var o=n("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./src/lib/constants/index.ts"),s=n("./src/reddit/models/PostCreationForm/index.ts"),c="America/Los_Angeles",a=function(){var e;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}return"Asia/Calcutta"===e&&(e="Asia/Kolkata"),e||void 0},i=function(e){var t=Math.abs(e),n=t%60,o=e>0?"-":"+",r=("0"+Math.floor(t/60)).slice(-2),s=("0"+n).slice(-2);return"".concat(o).concat(r,":").concat(s)},l=function(e,t){var n=t||Date.now(),s={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1,timeZone:e},c="";try{c=new Intl.DateTimeFormat("en-US",s).format(new Date(n))}catch(e){return}var a=c.replace(", "," ").split(" "),i=Object(o.a)(a,3),l=i[0],u=i[1],d=i[2],p=l.trim().split("/").map(Number),b=Object(o.a)(p,3),m=b[0],f=b[1],j=b[2],O=u.trim().split(":").map(Number),x=Object(o.a)(O,3),v=x[0],g=x[1],w=x[2],_=Date.UTC(j,m-1,f,v,g,w),h=new Date(n).setMilliseconds(0)-_;return{abbreviation:d,offset:Math.round(h/r.bb)}},u=function(e){var t=e.slice(0,19).split("T"),n=Object(o.a)(t,2),r=n[0],s=n[1],c=r.split("-").map(Number),a=Object(o.a)(c,3),i=a[0],l=a[1],u=a[2],d=s.split(":").map(Number),p=Object(o.a)(d,3),b=p[0],m=p[1],f=p[2];return new Date(i,l-1,u,b,m,void 0===f?0:f)},d=function(e){var t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,16)},p=function(e){if(e&&e.eventInfo){var t=e.eventInfo,n=t.eventStart,o=t.eventEnd;return{startDate:d(new Date(n*r.Ab)),endDate:d(new Date(o*r.Ab)),submitTime:s.i.Now,timezoneName:a()||c}}}},"./src/reddit/actions/postCollection/index.ts":function(e,t,n){"use strict";n("./node_modules/core-js/modules/es6.promise.js"),n("./node_modules/core-js/modules/es6.string.iterator.js"),n("./node_modules/core-js/modules/web.dom.iterable.js"),n("./node_modules/core-js/modules/es6.array.iterator.js"),n("./node_modules/core-js/modules/es6.object.to-string.js"),n("./node_modules/core-js/modules/es6.object.keys.js");var o=n("./node_modules/@babel/runtime/regenerator/index.js"),r=n.n(o),s=(n("./node_modules/regenerator-runtime/runtime.js"),n("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js")),c=n("./node_modules/react-router-redux/es/index.js"),a=n("./src/app/strings/index.ts"),i=n("./src/lib/filterQueryParams/index.ts"),l=n("./src/lib/makeActionCreator/index.ts"),u=n("./src/reddit/actions/postCollection/constants.ts"),d=n("./src/reddit/actions/toaster.ts"),p=n("./src/reddit/constants/history.ts"),b=n("./src/lib/constants/index.ts"),m=n("./src/lib/makeApiRequest/index.ts"),f=n("./src/lib/omitHeaders/index.ts"),j=n("./src/reddit/constants/headers.ts"),O=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/add_post_to_collection.json"),method:b.ab.POST,data:{collection_id:t,link_fullname:n}})},x=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/create_collection.json"),method:b.ab.POST,data:{title:t,sr_fullname:n}})},v=function(e,t){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/delete_collection.json"),method:b.ab.POST,data:{collection_id:t}})},g=n("./src/config.ts"),w=function(e,t){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(g.a.gatewayUrl,"/desktopapi/v1/subreddit_collections/").concat(t),method:b.ab.GET})},_=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/remove_post_in_collection.json"),method:b.ab.POST,data:{collection_id:t,link_fullname:n}})},h=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/update_collection_title.json"),method:b.ab.POST,data:{collection_id:t,title:n}})},C=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/reorder_collection.json"),method:b.ab.POST,data:{collection_id:t,link_ids:n.join(",")}})},I=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/update_collection_description.json"),method:b.ab.POST,data:{collection_id:t,description:n}})},y=function(e,t,n){return Object(m.b)(Object(f.a)(e,[j.a]),{endpoint:"".concat(e.apiUrl,"/api/v1/collections/update_collection_display_layout.json"),method:b.ab.POST,data:{collection_id:t,display_layout:n}})},E=n("./src/reddit/helpers/overlay/index.ts"),k=n("./src/reddit/helpers/path/index.ts"),S=function(e){return{author:e.author_name||void 0,createdAtUTC:e.created_at_utc,description:e.description,displayLayout:e.display_layout,id:e.collection_id,lastUpdateUTC:e.last_update_utc,permalink:e.permalink,postIds:e.link_ids,primaryPostId:e.primary_link_id||void 0,subredditId:e.subreddit_id,title:e.title}},M=n("./src/reddit/models/Toast/index.ts"),N=n("./src/reddit/selectors/postCollection.ts"),T=n("./src/reddit/selectors/posts.ts"),D=n("./src/reddit/selectors/subreddit.ts");n.d(t,"b",(function(){return P})),n.d(t,"e",(function(){return A})),n.d(t,"g",(function(){return z})),n.d(t,"a",(function(){return J})),n.d(t,"c",(function(){return K})),n.d(t,"h",(function(){return H})),n.d(t,"f",(function(){return te})),n.d(t,"d",(function(){return ue}));var B=Object(l.a)(u.c),L=Object(l.a)(u.b),F=Object(l.a)(u.d),P=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,c){var a,i,l,u,d,p;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=c.apiContext,o(B()),n.next=4,x(a(),e,t);case 4:return(i=n.sent).ok?(u=s().meta,d=S(i.body),o(F({collection:d,meta:u})),l=d):(p=i.error,o(L(p))),n.abrupt("return",l);case 7:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},U=Object(l.a)(u.f),A=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n,o,s){var c,i,l,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=s.apiContext,i=o(),l=i.postCollection.subredditToIds||{},!(Object.keys(l).length>0)){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,w(c(),e);case 7:(u=t.sent).ok?n(U(u.body)):n(Object(d.e)({kind:M.b.Error,text:Object(a.a)(i.user.language,"error.type.generic")}));case 9:case"end":return t.stop()}}),t)})));return function(e,n,o){return t.apply(this,arguments)}}()},R=Object(l.a)(u.g),z=function(e,t,n){return function(){var o=Object(s.a)(r.a.mark((function o(s,c,i){var l,u,p,b,m,f,j,O,x,v,g,w;return r.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return l=i.apiContext,o.next=3,_(l(),e,t);case 3:o.sent.ok?(u=c(),p=Object(T.I)(u,{postId:t}),b=p&&p.title||"",m=Object(N.q)(u,{collectionId:e}),f=m&&m.postIds&&m.postIds.indexOf(t)||-1,j=f-1,s(R({collectionId:e,postId:t})),n&&j>=0&&(O=c(),x=Object(N.q)(O,{collectionId:e}),v=x&&x.postIds&&x.postIds[j]||"",(g=Object(T.I)(O,{postId:v}))&&g.permalink&&s(Object(E.a)(g.permalink))),s(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(u.user.language,"collection.postRemovedSuccess",{postTitle:b}),buttonText:Object(a.a)(u.user.language,"collection.undo"),buttonAction:J(e,t)}))):(w=c(),s(Object(d.e)({kind:M.b.Error,text:Object(a.a)(w.user.language,"error.type.generic")})));case 5:case"end":return o.stop()}}),o)})));return function(e,t,n){return o.apply(this,arguments)}}()},W=Object(l.a)(u.a),Z=Object(l.a)(u.t),J=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,c){var i,l,u,p,b;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.apiContext,l=s(),n.next=4,O(i(),e,t);case 4:n.sent.ok?(o(W({collectionId:e,postId:t})),o(Z({collectionId:e,postId:t})),u=Object(T.I)(l,{postId:t}),p=Object(N.q)(l,{collectionId:e}),b=p&&p.title||"",o(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(l.user.language,"collection.postAddedSuccess",{title:b}),buttonText:Object(a.a)(l.user.language,"collection.view"),buttonAction:Object(E.a)(u.permalink)}))):o(Object(d.e)({kind:M.b.Error,text:Object(a.a)(l.user.language,"error.type.generic")}));case 6:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},G=Object(l.a)(u.e),K=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,l){var u,p,b,m,f,j,O;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=l.apiContext,p=s(),n.next=4,v(u(),e);case 4:n.sent.ok?(b=p.platform.currentPage.url,m=Object(N.q)(p,{collectionId:e}),f=m&&m.title||"",j=m&&m.subredditId,O=j?Object(D.b)(p,j):"/",o(G({collectionId:e,collection:m})),o(t?Object(c.c)(Object(i.a)(b,["collection"])):Object(c.b)(O)),o(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(p.user.language,"collection.collectionDeletedSuccess",{title:f})}))):o(Object(d.e)({kind:M.b.Error,text:Object(a.a)(p.user.language,"error.type.generic")}));case 6:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},V=Object(l.a)(u.r),q=Object(l.a)(u.n),Y=Object(l.a)(u.s),H=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,c){var i,l,u,p,b;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.apiContext,o(V()),n.next=4,h(i(),e,t);case 4:return l=n.sent,u=!1,p=s(),l.ok?(o(Y({collectionId:e,newTitle:t})),o(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(p.user.language,"collection.editModal.titleUpdateSuccess")})),u=!0):(b=l.error,o(q(b)),o(Object(d.e)({kind:M.b.Error,text:Object(a.a)(p.user.language,"error.type.generic")}))),n.abrupt("return",u);case 9:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},Q=Object(l.a)(u.l),X=Object(l.a)(u.m),$=Object(l.a)(u.k),ee=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,c){var i,l,u,p,b;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.apiContext,o(Q()),n.next=4,I(i(),e,t);case 4:return l=n.sent,u=!1,p=s(),l.ok?(o(X({collectionId:e,newDescription:t})),o(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(p.user.language,"collection.editModal.descriptionUpdateSuccess")})),u=!0):(b=l.error,o($(b)),o(Object(d.e)({kind:M.b.Error,text:Object(a.a)(p.user.language,"error.type.generic")}))),n.abrupt("return",u);case 9:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},te=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n,o){var s,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=o(),a=s.platform.currentPage.locationState,i=!(!a||!a[p.a.IsOverlay]),n(i?Object(E.a)(e.permalink):Object(c.b)(Object(k.b)(e.permalink)));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},ne=Object(l.a)(u.i),oe=Object(l.a)(u.j),re=Object(l.a)(u.h),se=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,c){var i,l,u,p;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.apiContext,o(ne()),n.next=4,C(i(),e,t);case 4:return l=n.sent,u=!1,p=s(),l.ok?(o(oe({collectionId:e,postIds:t})),o(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(p.user.language,"collection.editModal.reorderCollectionSuccess")})),u=!0):(o(re({error:l.error})),o(Object(d.e)({kind:M.b.Error,text:Object(a.a)(p.user.language,"error.type.generic")}))),n.abrupt("return",u);case 9:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},ce=Object(l.a)(u.p),ae=Object(l.a)(u.o),ie=Object(l.a)(u.q),le=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(o,s,c){var i,l,u,p,b;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=c.apiContext,o(ce()),n.next=4,y(i(),e,t);case 4:return l=n.sent,u=!1,p=s(),l.ok?(o(ie({collectionId:e,newLayout:t})),o(Object(d.e)({kind:M.b.SuccessMod,text:Object(a.a)(p.user.language,"collection.editModal.layoutUpdateSuccess")})),u=!0):(b=l.error,o(ae(b)),o(Object(d.e)({kind:M.b.Error,text:Object(a.a)(p.user.language,"error.type.generic")}))),n.abrupt("return",u);case 9:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}()},ue=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var o,s,c,a,i,l,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=[],s=e.collectionId,c=e.description,a=e.displayLayout,i=e.postIds,l=e.title,i&&o.push(n(se(s,i))),l&&o.push(n(H(s,l))),void 0!==c&&o.push(n(ee(s,c))),a&&o.push(n(le(s,a))),u=!0,t.next=9,Promise.all(o).then((function(e){e.forEach((function(e){e||(u=!1)}))}));case 9:return t.abrupt("return",u);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},"./src/reddit/components/ConfirmUserActionModal/index.m.less":function(e,t,n){e.exports={buttonWidth:"ogOEj4x-0BpDZWeccJwxx",ModalText:"_2YxEi97B6Nm7NCgLG6pCud",modalText:"_2YxEi97B6Nm7NCgLG6pCud"}},"./src/reddit/components/ConfirmUserActionModal/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./src/higherOrderComponents/asModal/index.tsx"),c=n("./src/reddit/components/ModalStyledComponents/index.tsx"),a=n("./src/reddit/controls/TextButton/index.tsx"),i=n("./src/reddit/i18n/utils.ts"),l=n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),u=n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),d=n.n(u),p=function(e){return e.preventDefault()};t.a=Object(s.a)((function(e){return r.a.createElement(c.c,null,r.a.createElement(c.g,null,r.a.createElement(l.a,null,r.a.createElement(c.n,null,e.headerText||Object(i.c)("Confirm")),r.a.createElement(a.a,{onClick:function(){e.onClose&&e.onClose(),e.toggleModal&&e.toggleModal()}},r.a.createElement(c.b,null)))),r.a.createElement(c.j,null,r.a.createElement(c.m,{className:d.a.ModalText},e.modalText)),r.a.createElement(c.e,null,r.a.createElement(c.a,{className:d.a.buttonWidth,onMouseDown:p,onClick:function(){e.onCancel&&e.onCancel(),e.toggleModal&&e.toggleModal()},"data-redditstyle":!0},e.cancelActionText||Object(i.c)("Cancel")),r.a.createElement(c.r,{className:d.a.buttonWidth,onMouseDown:p,onClick:function(t){e.onConfirm(),e.toggleModal&&e.toggleModal(),e.trackClick&&e.trackClick()},"data-redditstyle":!0},e.actionText)))}))},"./src/reddit/components/OverflowMenu/index.m.less":function(e,t,n){e.exports={_Dropdown:"ehsOqYO6dxn_Pf9Dzwu37",dropdown:"ehsOqYO6dxn_Pf9Dzwu37",MenuButton:"_2pFdCpgBihIaYh9DSMWBIu",menuButton:"_2pFdCpgBihIaYh9DSMWBIu",mIsEnabled:"uMPgOFYlCc5uvpa2Lbteu",MenuIcon:"_38GxRFSqSC-Z2VLi5Xzkjy",menuIcon:"_38GxRFSqSC-Z2VLi5Xzkjy",DropdownRow:"_2DO72U0b_6CUw3msKGrnnT",dropdownRow:"_2DO72U0b_6CUw3msKGrnnT"}},"./src/reddit/components/OverflowMenu/index.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./node_modules/react/index.js"),s=n.n(r),c=n("./node_modules/react-redux/es/index.js"),a=n("./node_modules/reselect/es/index.js"),i=n("./src/lib/classNames/index.ts"),l=n("./src/lib/lessComponent.tsx"),u=n("./src/reddit/actions/tooltip.ts"),d=n("./src/reddit/i18n/utils.ts"),p=n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),b=n("./src/reddit/controls/Dropdown/index.tsx"),m=n("./src/reddit/controls/Dropdown/Row.tsx"),f=n("./src/reddit/icons/fonts/Menu/index.tsx"),j=n("./src/reddit/selectors/tooltip.ts"),O=n("./src/reddit/components/OverflowMenu/index.m.less"),x=n.n(O),v=l.a.wrapped(b.a,"_Dropdown",x.a),g=Object(p.a)(v),w=l.a.button("MenuButton",x.a),_=l.a.wrapped(f.a,"MenuIcon",x.a),h=l.a.wrapped(m.b,"DropdownRow",x.a),C=Object(a.c)({dropdownIsOpen:function(e,t){var n=t.dropdownId;return Object(j.b)(n)(e)}}),I=Object(c.b)(C,(function(e,t){var n=t.dropdownId;return{toggleDropdown:function(){return e(Object(u.h)({tooltipId:n}))}}})),y=function(e){return function(t){e.onClick&&e.onClick(),e.toggleDropdown(),t.stopPropagation()}};t.b=I((function(e){return s.a.createElement(w,{"aria-expanded":e.dropdownIsOpen,"aria-haspopup":!0,"aria-label":Object(d.c)("more options"),className:Object(i.a)(e.className,Object(o.a)({},x.a.mIsEnabled,!e.disabled)),disabled:e.disabled,onClick:y(e),onMouseDown:e.handleMouseDown,id:e.dropdownId},e.icon?e.icon:s.a.createElement(_,null),s.a.createElement(g,{className:e.dropdownClassName,isOpen:e.dropdownIsOpen,tooltipId:e.dropdownId,isFixed:e.isFixed,targetPosition:e.targetPosition,tooltipPosition:e.tooltipPosition},e.children))}))},"./src/reddit/components/SubscribeButton/Base.m.less":function(e,t,n){e.exports={IconButton:"_1zyZUfB30L-DDI98CCLJlQ",iconButton:"_1zyZUfB30L-DDI98CCLJlQ",active:"_2FebEA49ReODemDlwzYHSR",SubscribeIcon:"_1O2i-ToERP3a0i4GSL0QwU",subscribeIcon:"_1O2i-ToERP3a0i4GSL0QwU",UnsubscribeIcon:"_1uBzAtenMgErKev3G7oXru",unsubscribeIcon:"_1uBzAtenMgErKev3G7oXru",isSmall:"_2ilDLNSvkCHD3Cs9duy9Q_",SubscribeIconButton:"_2kBlhw4LJXNnk73IJcwWsT",subscribeIconButton:"_2kBlhw4LJXNnk73IJcwWsT",UnsubscribeIconButton:"_1kRJoT0CagEmHsFjl2VT4R",unsubscribeIconButton:"_1kRJoT0CagEmHsFjl2VT4R",SubscribeInternalButton:"_3VgTjAJVNNV7jzlnwY-OFY",subscribeInternalButton:"_3VgTjAJVNNV7jzlnwY-OFY",UnsubscribeButton:"_2QmHYFeMADTpuXJtd36LQs",unsubscribeButton:"_2QmHYFeMADTpuXJtd36LQs",UnsubscribeButtonDefault:"_31L3r0EWsU0weoMZvEJcUA",unsubscribeButtonDefault:"_31L3r0EWsU0weoMZvEJcUA",UnsubscribeButtonHover:"_11Zy7Yp4S1ZArNqhUQ0jZW",unsubscribeButtonHover:"_11Zy7Yp4S1ZArNqhUQ0jZW"}},"./src/reddit/components/SubscribeButton/Base.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var o=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),r=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),s=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),a=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),i=n("./node_modules/@babel/runtime/helpers/esm/extends.js"),l=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),u=(n("./node_modules/core-js/modules/es6.string.small.js"),n("./node_modules/core-js/modules/es6.symbol.js"),n("./node_modules/react/index.js")),d=n.n(u),p=n("./src/app/strings/index.ts"),b=n("./src/reddit/constants/elementClassNames.ts"),m=n("./src/reddit/controls/Button/index.tsx"),f=n("./src/reddit/i18n/utils.ts"),j=n("./src/reddit/icons/svgs/Checkmark/index.tsx"),O=n("./src/reddit/icons/svgs/Plus/index.tsx"),x=n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),v=n("./src/reddit/components/SubscribeButton/Base.m.less"),g=n.n(v),w=n("./src/lib/classNames/index.ts"),_=n("./src/lib/lessComponent.tsx"),h=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},C=_.a.button("IconButton",g.a),I=_.a.wrapped(O.a,"SubscribeIcon",g.a),y=_.a.wrapped(j.a,"UnsubscribeIcon",g.a),E=_.a.wrapped((function(e){e.border;var t=e.small,n=h(e,["border","small"]);return d.a.createElement(C,n,d.a.createElement(I,{className:Object(w.a)(n.className,Object(l.a)({},g.a.isSmall,t))}))}),"SubscribeIconButton",g.a),k=_.a.wrapped((function(e){var t=e.border,n=e.small,o=h(e,["border","small"]);return t?d.a.createElement(m.f,Object(i.a)({},o,{className:Object(w.a)(o.className,Object(l.a)({},g.a.isSmall,n))})):d.a.createElement(m.n,Object(i.a)({},o,{className:Object(w.a)(o.className,Object(l.a)({},g.a.isSmall,n))}))}),"SubscribeInternalButton",g.a),S=function(e){var t=e.icon,n=h(e,["icon"]);return t?d.a.createElement(E,Object(i.a)({},n,{className:Object(w.a)(n.className,Object(l.a)({},g.a.isSmall,n.small))})):d.a.createElement(k,Object(i.a)({},n,{className:Object(w.a)(n.className,Object(l.a)({},g.a.isSmall,n.small))}))},M=_.a.wrapped((function(e){e.border,e.language;var t=e.small,n=(e.type,h(e,["border","language","small","type"]));return d.a.createElement(C,n,d.a.createElement(y,{className:Object(w.a)(b.o,n.className,Object(l.a)({},g.a.isSmall,t))}))}),"UnsubscribeIconButton",g.a),N=_.a.wrapped((function(e){e.language;var t=e.small,n=e.type,o=h(e,["language","small","type"]),r=d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:g.a.UnsubscribeButtonDefault},"subreddit"===n?Object(f.c)("Joined"):Object(f.c)("Following")),d.a.createElement("span",{className:g.a.UnsubscribeButtonHover},"subreddit"===n?Object(f.c)("Leave"):Object(f.c)("Unfollow"))),s=Object(w.a)(o.className,Object(l.a)({},g.a.isSmall,t));return o.border?d.a.createElement(m.i,Object(i.a)({},o,{className:s,children:r})):d.a.createElement(m.n,Object(i.a)({},o,{className:s,children:r}))}),"UnsubscribeButton",g.a),T=function(e){var t=e.icon,n=h(e,["icon"]);return t?d.a.createElement(M,Object(i.a)({},n,{className:Object(w.a)(n.className,Object(l.a)({},g.a.isSmall,n.small))})):d.a.createElement(N,Object(i.a)({},n,{className:Object(w.a)(n.className,Object(l.a)({},g.a.isSmall,n.small))}))},D=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(c.a)(t).apply(this,arguments))).onClick=function(t){if(e.props.userIsSubscriber?e.props.onUnsubscribe():e.props.onSubscribe(),e.props.onClick&&e.props.onClick(t),e.props.getEventFactory){var n=e.props.getEventFactory(e.props.userIsSubscriber);n&&e.props.sendEvent(n)}},e}return Object(a.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onSubscriptionsRequested()}},{key:"render",value:function(){var e=this.props,t=e.border,n=void 0===t||t,o=e.className,r=e.icon,s=void 0!==r&&r,c=e.id,a=e.language,l=e.small,u=void 0!==l&&l,b={border:n,className:o,icon:s,onClick:this.onClick,small:u};return this.props.userIsSubscriber?d.a.createElement(T,Object(i.a)({},b,{language:a,type:this.props.identifier.type})):d.a.createElement(S,Object(i.a)({},b,{id:c}),this.props.children,Object(p.a)(a,"subscriptions.".concat(Object(x.a)({type:this.props.identifier.type}),".subscribe")))}}]),t}(d.a.Component)},"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts":function(e,t,n){"use strict";t.a=function(e){return"subreddit"===e.type?"subredditActions":"profileActions"}},"./src/reddit/components/SubscribeButton/index.tsx":function(e,t,n){"use strict";var o=n("./src/reddit/components/TrackingHelper/index.tsx"),r=n("./src/reddit/connectors/SubscribeButton/index.ts"),s=n("./src/reddit/components/SubscribeButton/Base.tsx");t.a=Object(r.a)(Object(o.b)(s.a))},"./src/reddit/connectors/SubscribeButton/index.ts":function(e,t,n){"use strict";var o=n("./node_modules/react-redux/es/index.js"),r=n("./node_modules/reselect/es/index.js"),s=n("./src/reddit/actions/subscription/index.ts"),c=n("./src/reddit/selectors/monthsToMinutes.ts"),a=n("./src/reddit/selectors/subreddit.ts"),i=n("./src/reddit/selectors/user.ts");t.a=Object(o.b)((function(){return Object(r.c)({language:i.S,subscribeReminderTooltipId:c.C,subscribeTooltipId:c.D,userIsSubscriber:a.ab})}),(function(e,t){var n=t.identifier;return{onSubscribe:function(){return e(s.d([n],!0))},onSubscriptionsRequested:function(){return e(s.e())},onUnsubscribe:function(){return e(s.d([n],!1))}}}))},"./src/reddit/controls/Dropdown/Row.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var o=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),c=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),a=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),i=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),u=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),d=(n("./node_modules/core-js/modules/es6.symbol.js"),n("./node_modules/lodash/throttle.js")),p=n.n(d),b=n("./node_modules/react/index.js"),m=n.n(b),f=n("./src/lib/classNames/index.ts"),j=n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),O=n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),x=n("./src/reddit/layout/row/InlineButton/index.tsx"),v=n("./src/reddit/controls/Dropdown/index.m.less"),g=n.n(v),w=n("./src/reddit/controls/Dropdown/row.m.less"),_=n.n(w),h=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},C=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(a.a)(this,Object(i.a)(t).apply(this,arguments))).handleMouseMove=p()((function(){var t=Object(l.a)(e).props;t.handleActivateRow&&t.handleActivateRow(t.index)}),500),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.skipRoleAttr?null:{role:"menuitem"},n=Object(f.a)(_.a.iconWrapper,e.iconWrapperClassName);return e.href?m.a.createElement(j.a,Object(r.a)({},t,{id:e.id,className:e.className,onBlur:e.onBlur,onClick:e.onClick,onMouseDown:e.onMouseDown,onMouseMove:this.handleMouseMove,onKeyDown:e.onKeydown,rel:e.rel,to:e.href}),e.children&&m.a.createElement("span",{className:n},e.children),m.a.createElement("span",{className:Object(f.a)(_.a.text,e.textClassName)},e.displayText)):m.a.createElement(x.a,Object(r.a)({},t,{id:e.id,className:e.className,onBlur:e.onBlur,onClick:e.onClick,onKeyDown:e.onKeydown,onMouseDown:e.onMouseDown,onMouseMove:p()(this.handleMouseMove,500)}),e.children&&(e.noIcon?m.a.createElement("div",null,e.children):m.a.createElement("span",{className:n},e.children)),e.displayText&&m.a.createElement("span",{className:Object(f.a)(_.a.text,e.textClassName)},e.displayText),e.showDropdownTriangle&&m.a.createElement(O.a,{className:g.a.dropdownTriangle}))}}]),t}(m.a.Component);t.b=function(e){var t,n=e.className,s=h(e,["className"]),c=Object(f.a)(_.a.row,n,(t={},Object(o.a)(t,_.a.mIsInteractive,!s.noHover),Object(o.a)(t,_.a.mIsSelected,s.isSelected),t));return m.a.createElement(C,Object(r.a)({className:c},s))}},"./src/reddit/controls/Dropdown/row.m.less":function(e,t,n){e.exports={iconWrapper:"pthKOcceozMuXLYrLlbL1",iconStyles:"_2XOVBjNLHjJIznEsn35vs2",text:"_2-cXnP74241WI7fpcpfPmg",row:"_3LwUIE7yX7CZQKmD2L87vf",mIsSelected:"_1IKtbRloF_LV1hPqMzP3MC",mIsInteractive:"_1oYEKCssGFjqxQ9jJMNj5G"}},"./src/reddit/controls/LoadingIcon/index.m.less":function(e,t,n){e.exports={loadingIcon:"_3LwT7hgGcSjmJ7ng7drAuq",spin:"ibDwUVR1CAykturOgqOS5",mCentered:"_2qr28EeyPvBWAsPKl-KuWN"}},"./src/reddit/controls/LoadingIcon/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),r=n("./node_modules/react/index.js"),s=n.n(r),c=n("./src/lib/classNames/index.ts"),a=n("./src/reddit/controls/LoadingIcon/index.m.less"),i=n.n(a);t.a=function(e){var t=e.center,n=e.className,r=e.sizePx;return s.a.createElement("div",{className:Object(c.a)(i.a.loadingIcon,n,Object(o.a)({},i.a.mCentered,t)),style:{"--sizePx":"".concat(r,"px")}})}},"./src/reddit/controls/UnstyledInternalLink/index.m.less":function(e,t,n){e.exports={unstyledInternalLink:"_39Glgtoolpdt4PIzcnjPSW"}},"./src/reddit/controls/UnstyledInternalLink/index.tsx":function(e,t,n){"use strict";var o=n("./src/lib/lessComponent.tsx"),r=n("./src/reddit/controls/InternalLink/index.tsx"),s=n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),c=n.n(s);t.a=o.a.wrapped(r.a,"unstyledInternalLink",c.a)},"./src/reddit/helpers/trackers/postCollection.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"o",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return m})),n.d(t,"n",(function(){return f})),n.d(t,"m",(function(){return j})),n.d(t,"b",(function(){return x})),n.d(t,"p",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"j",(function(){return w})),n.d(t,"q",(function(){return _})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return C})),n.d(t,"i",(function(){return I})),n.d(t,"d",(function(){return y}));n("./node_modules/core-js/modules/es6.object.assign.js");var o,r,s=n("./src/reddit/constants/tracking.ts"),c=n("./src/reddit/helpers/trackers/postEvent.ts"),a=n("./src/reddit/selectors/platform.ts"),i=n("./src/reddit/selectors/telemetry.ts");!function(e){e.collection="collection",e.collectionComposer="collection_composer",e.postComposer="post_composer",e.postOverflowMenu="post_overflow_menu"}(o||(o={})),function(e){e.post="post",e.follow="follow",e.unfollow="unfollow",e.screen="screen",e.eventEducation="event_education",e.eventEducationGotIt="event_education_got_it",e.collectionEducation="collection_education",e.collectionEducationGotIt="collection_education_got_it",e.collectionCancel="cancel",e.collectionCreate="collection_create",e.collectionSelect="collection_select",e.collectionDelete="collection_delete",e.collectionEdit="collection_edit",e.collectionAddPost="collection_add_post",e.collectionRemovePost="remove_post_from_collection",e.startEvent="start_event"}(r||(r={}));var l=function(e){return function(t){return Object.assign({source:o.collection,noun:r.post},p(t,e))}},u=function(e){var t=e.postId,n=e.isFollowed;return function(e){return Object.assign({source:o.collection,noun:n?r.unfollow:r.follow},p(e,t))}},d=function(e){var t=e.postId,n=e.isFollowed;return function(e){return Object.assign({source:c.a.postEvent,noun:n?r.unfollow:r.follow},p(e,t))}},p=function(e,t){var n=Object.assign({},i.defaults(e),{action:s.d.CLICK,subreddit:i.subreddit(e)});return void 0===t?n:Object.assign({},n,{post:i.post(e,t),postCollection:i.postCollectionI13nSelector(e,{postId:t}),postEvent:i.postEventI13nSelector(e,{postId:t})})},b=function(e){return Object.assign({},O(e),{action:s.d.VIEW,noun:r.collectionEducation})},m=function(e){return Object.assign({},O(e),{action:s.d.CLICK,noun:r.collectionEducationGotIt})},f=function(e){return Object.assign({},O(e),{action:s.d.VIEW,noun:r.eventEducation})},j=function(e){return Object.assign({},O(e),{action:s.d.CLICK,noun:r.eventEducationGotIt})},O=function(e){return Object.assign({},i.defaults(e),{subreddit:i.subreddit(e),source:o.postComposer})},x=function(e,t){return function(n){return Object.assign({},p(n,e),{source:t||o.postOverflowMenu,noun:r.collectionAddPost})}},v=function(e){return function(t){return Object.assign({},p(t,e),{source:o.collectionComposer,noun:r.collectionRemovePost})}},g=function(){return function(e){return Object.assign({},p(e),{source:o.collectionComposer,noun:r.collectionCancel})}},w=function(){return function(e){var t=Object(a.o)(e)||void 0;return Object.assign({},p(e,t),{source:o.collectionComposer,noun:r.collectionCreate})}},_=function(){return function(e){return Object.assign({},p(e),{source:o.collectionComposer,noun:r.collectionSelect})}},h=function(e){return function(t){return Object.assign({},i.defaults(t),{subreddit:i.subreddit(t),source:o.collectionComposer,action:s.d.CLICK,noun:r.collectionDelete,postCollection:i.postCollectionI13nByCollectionIdSelector(t,{collectionId:e})})}},C=function(e){return function(t){return Object.assign({},p(t),{source:o.collectionComposer,noun:r.collectionEdit,postCollection:i.postCollectionI13nByCollectionIdSelector(t,{collectionId:e})})}},I=function(e){return function(t){return Object.assign({},p(t,e),{source:o.collectionComposer,noun:r.startEvent})}},y=function(){return function(e){var t=Object(a.o)(e)||void 0;return Object.assign({},p(e,t),{source:o.collectionComposer,action:s.d.VIEW,noun:r.screen})}}},"./src/reddit/helpers/trackers/postEvent.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return v}));n("./node_modules/core-js/modules/es6.object.assign.js");var o,r=n("./src/lib/constants/index.ts"),s=n("./src/lib/eventTools/index.ts"),c=n("./src/lib/timezone/index.ts"),a=n("./src/reddit/constants/tracking.ts"),i=n("./src/reddit/models/PostCreationForm/index.ts"),l=n("./src/reddit/selectors/platform.ts"),u=n("./src/reddit/selectors/postCreations.ts"),d=n("./src/reddit/selectors/telemetry.ts"),p=n("./src/telemetry/index.ts");!function(e){e.postEvent="post_event",e.postComposer="post_composer",e.eventComposer="event_composer"}(o||(o={}));var b=function(e){return d.actionInfo(e,{pageType:"event_submit"})},m=function(e){Object(p.a)(Object.assign({},d.defaults(e),{source:o.postComposer,action:a.d.CLICK,noun:"event_create",subreddit:d.subreddit(e)}))},f=function(e){Object(p.a)(Object.assign({},d.defaults(e),{source:o.postComposer,action:a.d.CLICK,noun:"event_edit",subreddit:d.subreddit(e),postEvent:g(e),postComposer:w(e)}))},j=function(){return function(e){return{source:o.eventComposer,action:a.d.VIEW,noun:a.c.SCREEN,actionInfo:b(e),postEvent:g(e)}}},O=function(e){return function(t){return Object.assign({},C(t,Object(l.o)(t)),{source:o.postComposer,noun:"apply",postComposer:_(e)})}},x=function(){return function(e){return Object.assign({},C(e,Object(l.o)(e)),{noun:"cancel",actionInfo:b(e)})}},v=function(e){return function(t){return Object.assign({},C(t,Object(l.o)(t)),{noun:"delete",actionInfo:b(t),postComposer:w(t),postEvent:h(e)})}},g=function(e){var t=Object(u.o)(e);return t&&h(t)},w=function(e){return _(Object(u.o)(e))},_=function(e){return{postScheduled:!!e,submitScheduledTime:e&&e.submitTime===i.i.AtEventTime?Object(c.f)(e.startDate).getTime()/r.Ab:void 0}},h=function(e){var t=Object(c.f)(e.startDate).getTime()/r.Ab,n=Object(c.f)(e.endDate).getTime()/r.Ab;return{eventStartTimestamp:t,eventEndTimestamp:n,eventState:Object(s.e)(t,n)}},C=function(e,t){var n={source:o.eventComposer,action:a.d.CLICK,subreddit:d.subreddit(e)};return t?Object.assign({},n,{post:d.post(e,t),postEvent:d.postEventI13nSelector(e,{postId:t}),postCollection:d.postCollectionI13nSelector(e,{postId:t})}):n}},"./src/reddit/icons/fonts/DropdownTriangle/index.m.less":function(e,t,n){e.exports={DropdownTriangle:"_28O0gzb6GMS8lbDeySdpwp",dropdownTriangle:"_28O0gzb6GMS8lbDeySdpwp"}},"./src/reddit/icons/fonts/DropdownTriangle/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./src/reddit/icons/fonts/helpers.tsx"),c=n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),a=n.n(c),i=n("./src/lib/lessComponent.tsx").a.wrapped((function(e){return r.a.createElement("i",{className:"".concat(Object(s.b)("dropdownTriangle")," ").concat(e.className)})}),"DropdownTriangle",a.a);t.a=i},"./src/reddit/icons/fonts/Menu/index.m.less":function(e,t,n){e.exports={MenuIcon:"_2L8b_l8zFzAkWuMyZJ1_vg",menuIcon:"_2L8b_l8zFzAkWuMyZJ1_vg"}},"./src/reddit/icons/fonts/Menu/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o),s=n("./src/reddit/icons/fonts/helpers.tsx"),c=n("./src/reddit/icons/fonts/Menu/index.m.less"),a=n.n(c),i=n("./src/lib/lessComponent.tsx").a.wrapped((function(e){return r.a.createElement("i",{className:"".concat(Object(s.b)("menu")," ").concat(e.className)})}),"MenuIcon",a.a);t.a=i},"./src/reddit/icons/svgs/Checkmark/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o);t.a=function(e){return r.a.createElement("svg",{className:e.className,viewBox:"0 0 20 22",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("g",null,r.a.createElement("path",{d:"M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",fill:"inherit"})))}},"./src/reddit/icons/svgs/VideoMute/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o);t.a=function(e){return r.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M16.41,10.5l1.79-1.79a1,1,0,0,0-1.41-1.41L15,9.09,13.21,7.29a1,1,0,0,0-1.41,1.41l1.79,1.79-1.79,1.79a1,1,0,1,0,1.41,1.41L15,11.91l1.79,1.79a1,1,0,0,0,1.41-1.41Z",fill:"#FFFFFF"}),r.a.createElement("path",{d:"M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",fill:"#FFFFFF"}))}},"./src/reddit/icons/svgs/VideoVolume/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n.n(o);t.a=function(e){return r.a.createElement("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M12.67,3.1a1,1,0,0,0-.33,2,5,5,0,0,1,0,9.85,1,1,0,0,0,.17,2h.17a7,7,0,0,0,0-13.79Z",fill:"#FFFFFF"}),r.a.createElement("path",{d:"M9.7,1.54a.5.5,0,0,0-.54.09L3.81,6.5H1.5A.5.5,0,0,0,1,7v6a.5.5,0,0,0,.5.5H3.81l5.36,4.87a.5.5,0,0,0,.34.13.49.49,0,0,0,.2,0A.5.5,0,0,0,10,18V2A.5.5,0,0,0,9.7,1.54Z",fill:"#FFFFFF"}),r.a.createElement("path",{d:"M12,10.86a1,1,0,0,0,1,1.73,3,3,0,0,0,0-5.17,1,1,0,0,0-1,1.73,1,1,0,0,1,0,1.72Z",fill:"#FFFFFF"}))}}}]);
//# sourceMappingURL=Legacy~CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~a20b358a.d53d98323bc872c6dad7.js.map