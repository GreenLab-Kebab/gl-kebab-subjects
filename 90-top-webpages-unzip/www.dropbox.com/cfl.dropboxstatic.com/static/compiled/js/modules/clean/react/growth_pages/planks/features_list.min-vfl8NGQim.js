define(["require","exports","tslib","react","spectrum-arbor/atoms/arbor_grid_container","spectrum-arbor/atoms/arbor_grid_element","spectrum-arbor/atoms/arbor_headline","spectrum-arbor/atoms/arbor_copy","spectrum-arbor/atoms/arbor_aspect_box","modules/clean/react/growth_pages/components/tile_layout","modules/clean/react/image","modules/clean/react_format","spectrum-arbor/atoms/arbor_link"],function(e,r,t,a,o,n,l,i,m,c,d,u,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a=t.__importDefault(a);var g=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r.prototype.render=function(){var e=this.props,r=e.backgroundColor,t=e.headlineColor,g=e.bodyColor,b=e.content,p=b.headlineCopy,f=b.bodyCopy,h=b.featureItems,y=e.className,C=e.columnCount,_=e.verticalPaddingSize,E=e.marginRightColumns,x=e.isZeus,k=a.default.createElement(n.ArborGridElement,{marginRightColumns:E,marginBottomSize:h?{base:x?"medium":"large",medium:"large"}:"none"},a.default.createElement(l.ArborHeadline,{tag:"h2",color:t,marginBottomSize:f?"medium":"none"},p),f&&a.default.createElement(i.ArborCopy,{color:g},f)),A=h?h.map(function(e){return a.default.createElement(a.default.Fragment,{key:e.headlineCopy},e.image&&a.default.createElement("div",{style:{width:"100%",maxWidth:e.image.width+"px"}},a.default.createElement(m.ArborAspectBox,{aspect:{width:e.image.width,height:e.image.height},content:a.default.createElement(d.Image,{src:e.image.src,srcHiRes:e.image.srcHiRes,style:{flexShrink:0}})})),a.default.createElement(l.ArborHeadline,{color:t,marginTopSize:e.image?"medium":"none",marginBottomSize:"small",tag:"h4"},e.headlineCopy),a.default.createElement(i.ArborCopy,{color:g},u.reactFormat(e.bodyCopy,{href:a.default.createElement(s.ArborLink,{theme:g,href:e.href}),secondaryHref:a.default.createElement(s.ArborLink,{theme:g,href:e.secondaryHref})})))}):[];return a.default.createElement(o.ArborGridContainer,{alignment:"center",backgroundColor:r,className:y,verticalPaddingSize:_},k,A.length>0&&a.default.createElement(c.TileLayout,{columnCount:C,isZeus:x},A))},r.defaultProps={backgroundColor:"panda-white",headlineColor:"panda-black",bodyColor:"panda-black",columnCount:3,verticalPaddingSize:{base:"xl",medium:"xxxl"},marginRightColumns:{base:0,medium:8}},r})(a.default.Component);r.FeaturesList=g});
//# sourceMappingURL=features_list.min.js-vfltG362P.map