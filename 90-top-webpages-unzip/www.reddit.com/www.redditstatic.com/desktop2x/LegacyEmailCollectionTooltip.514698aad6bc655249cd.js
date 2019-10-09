(window.webpackJsonp=window.webpackJsonp||[]).push([["EmailCollectionTooltip"],{"./src/reddit/components/EmailCollection/Envelope/index.m.less":function(e,t,n){e.exports={container:"_1yYBGklEZ27AA6Pk4a5xcB",content:"_1tsHXJq8O99kY-Hnw0TU9H",envelopeIcon:"_2MwJgJPAzuZmaOVwlLfjeO",warningIcon:"_1UqQ04HyR3qGPylb_9baOq"}},"./src/reddit/components/EmailCollection/Envelope/index.tsx":function(e,t,n){"use strict";var s=n("./node_modules/react/index.js"),a=n.n(s),o=n("./src/lib/classNames/index.ts"),i=n("./src/reddit/icons/svgs/Envelope/index.tsx"),c=n("./src/reddit/icons/svgs/Warning/index.tsx"),l=n("./src/reddit/components/EmailCollection/Envelope/index.m.less"),r=n.n(l);t.a=function(e){return a.a.createElement("div",{className:Object(o.a)(r.a.container,e.className)},a.a.createElement("div",{className:r.a.content},a.a.createElement(i.a,{className:r.a.envelopeIcon}),a.a.createElement(c.a,{className:Object(o.a)(r.a.warningIcon,e.warningClassName)})))}},"./src/reddit/components/EmailCollection/Tooltip/index.m.less":function(e,t,n){e.exports={container:"_1OHU0AjPTE-FUvNKxuzeqm",containerHidden:"_2Hrc-FiL-gcvEHPjXQJtje",layout:"_3P4F20dAdxOLhYuQIp83Un",topLine:"Zg2H9-VJlQG31pGn_sdL_",close:"_1pjsDeA0UeCHBxQiLZRM8O",closeIcon:"_2a-5mXVPVNZDKkCjoMUXyS",header:"uOYfiMOx6GVTa6VjiFu2W",envelope:"_38w_kqptaAt6yMs7mlfrY4",title:"_3srJmTJ1O6dDecp9Bb3URc",description:"T4JXk56EjkLj-1nhW1bDf",addEmail:"_1Cdv8T1PfBIwryMYlCp7U2"}},"./src/reddit/components/EmailCollection/Tooltip/index.tsx":function(e,t,n){"use strict";n.r(t);var s=n("./node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/@babel/runtime/helpers/esm/createClass.js"),i=n("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=n("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),l=n("./node_modules/@babel/runtime/helpers/esm/inherits.js"),r=n("./node_modules/react/index.js"),d=n.n(r),m=n("./node_modules/react-redux/es/index.js"),p=n("./src/higherOrderComponents/addOverlayEvents.tsx"),u=n("./src/higherOrderComponents/asTooltip.tsx"),x=n("./src/lib/classNames/index.ts"),E=n("./src/reddit/actions/emailCollection/index.ts"),b=n("./src/reddit/actions/modal.ts"),v=n("./src/reddit/components/EmailCollection/Envelope/index.tsx"),j=n("./src/reddit/components/Settings/modalIds.ts"),f=n("./src/reddit/components/TrackingHelper/index.tsx"),h=n("./src/reddit/controls/Button/index.tsx"),O=n("./src/reddit/helpers/trackers/emailCollection.ts"),C=n("./src/reddit/i18n/components.tsx"),g=n("./src/reddit/icons/svgs/Close/index.tsx"),_=n("./src/reddit/components/EmailCollection/Tooltip/index.m.less"),N=n.n(_),w="tooltip",y=["left","bottom"],k=["right","top"],T=Object(m.b)(null,(function(e){return{onAddEmail:function(){return e(Object(b.h)(j.c))},onClose:function(){return e(Object(E.a)())}}})),H=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(c.a)(t).apply(this,arguments))).state={isClosed:!1},e.closeTooltip=function(){e.props.sendEvent(Object(O.e)(w)),e.setState({isClosed:!0},e.props.onClose)},e.addEmail=function(){e.props.onAddEmail(),e.props.sendEvent(Object(O.a)(w))},e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.sendEvent(Object(O.f)(w))}},{key:"render",value:function(){return this.state.isClosed?null:d.a.createElement("div",{className:Object(x.a)(N.a.container,this.props.isHidden&&N.a.containerHidden)},d.a.createElement("div",{className:N.a.layout},d.a.createElement("div",{className:N.a.topLine}),d.a.createElement("button",{className:N.a.close,onClick:this.closeTooltip},d.a.createElement(g.a,{className:N.a.closeIcon})),d.a.createElement("div",{className:N.a.header},d.a.createElement(v.a,{className:N.a.envelope}),d.a.createElement("h2",{className:N.a.title},d.a.createElement(C.c,null,"Add your email to verify your account"))),d.a.createElement("p",{className:N.a.description},d.a.createElement(C.c,null,"Add and verify your email to prevent being locked out of your account.")),d.a.createElement(h.f,{className:N.a.addEmail,redditStyle:!0,onClick:this.addEmail},d.a.createElement(C.c,null,"Add email"))))}}]),t}(d.a.Component),A=Object(u.a)(T(Object(f.b)(H)),[p.a.Click,p.a.Keydown,p.a.Resize]);t.default=function(e){return d.a.createElement(A,Object(s.a)({},e,{isFixed:!0,targetPosition:y,tooltipPosition:k}))}},"./src/reddit/icons/svgs/Warning/index.m.less":function(e,t,n){e.exports={warning:"_3ppQRTaxPs0X9rsFYHfSdf"}},"./src/reddit/icons/svgs/Warning/index.tsx":function(e,t,n){"use strict";var s=n("./node_modules/react/index.js"),a=n.n(s),o=n("./src/lib/classNames/index.ts"),i=n("./src/reddit/icons/svgs/Warning/index.m.less"),c=n.n(i);t.a=function(e){return a.a.createElement("svg",{className:Object(o.a)(c.a.warning,e.className),viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{r:"9",cx:"9",cy:"9"}),a.a.createElement("path",{d:"m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",fill:"inherit",fillRule:"evenodd",transform:"translate(-1 -1)"}))}}}]);
//# sourceMappingURL=Legacy~EmailCollectionTooltip.514698aad6bc655249cd.js.map