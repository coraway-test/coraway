(this["webpackJsonpone-true"]=this["webpackJsonpone-true"]||[]).push([[10],{518:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(24),i=n(17),l=n(18),s=n(43);function c(){var t=Object(i.a)(["\n\tbackground: ",";\n"]);return c=function(){return t},t}var p=s.a.colors,d=l.a.div(c(),p.white),m=n(23);function u(){var t=Object(i.a)(['\n  background: url("','") no-repeat center;\n  background-size: cover;\n  \n  .wrapper {\n  \tpadding: 174px 0 109px 93px;\n  \tbackground: ',";\n  }\n  \n  .info-wrapper {\n    \n    .big-describe {\n        font-weight: bold;\n\t\t\t\tfont-size: 64px;\n\t\t\t\tline-height: 75px;\n\t\t\t\t\n\t\t\t\t.counter-of-result, .counter-all-managers {\n\t\t\t\t\ttext-decoration-line: underline;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.counter-of-result {\n\t\t\t\t \tmargin-right: 20px;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.counter-all-managers {\n\t\t\t\t\tmargin-left: 20px;\n\t\t\t\t}\n\t\t\t\t   \n    }\n    \n    .small-describe {\n        font-style: normal;\n\t\t\t\tfont-weight: normal;\n\t\t\t\tfont-size: 36px;\n\t\t\t\tline-height: 42px;\n\t\t\t\tpadding-top: 19px;\n    }\n    \n    .big-describe, .small-describe {\n      color: ","\n    }\n  }\n  \n  @media "," {\n  \t.wrapper {\n  \t\tdisplay: none;\n  \t}\n  }\n  \n"]);return u=function(){return t},t}var h=s.a.text,g=s.a.bg,f=s.a.colors,x=l.a.div(u(),g.result,f.resultPageRectangle,h.invert,m.a.laptopT),b=n(48),v=function(t){var e=t.sectionType,n=b.a[e.toUpperCase()],a=n.title,o=n.description;return r.a.createElement(x,{id:"first-block-on-landing-page"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("div",{className:"big-describe"},r.a.createElement("span",{className:"counter-of-result"},21),r.a.createElement("span",null,a),r.a.createElement("span",{className:"counter-all-managers"},98122)),r.a.createElement("div",{className:"small-describe"},r.a.createElement("span",null,o)))))};function y(){var t=Object(i.a)(["\n\tpadding: 59px 91px;\n\t\n\t@media "," {\n\t\tpadding: 30px 42px;\n\t}\n"]);return y=function(){return t},t}var E=l.a.div(y(),m.a.laptopT),w=n(83);function T(){var t=Object(i.a)(["\n\t.title {\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 36px;\n\t\tline-height: 42px;\n\t\tcolor: ",";\n\t\tpadding-right: 15px;\n\t}\n\t\n\t.filter {\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 28px;\n\t\tmargin-right: 17px;\n\t\tborder: 2px solid #9A9A9A;\n\t\tbox-sizing: border-box;\n\t\tborder-radius: 4px;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\tpadding: 1px 44px 1px 23px;\n\t\t-moz-appearance:none; /* Firefox */\n    -webkit-appearance:none; /* Safari and Chrome */\n    appearance:none;\n    background: url(",") no-repeat;\n    background-position-x: calc(100% - 12px);\n  \tbackground-position-y: 10px;\n\t}\n\t\n\t@media "," {\n\t\t.title {\n\t\t\tfont-size: 24px;\n\t\t}\n\t\t\n\t\t.filter {\n\t\t\tfont-size: 18px;\n\t\t\toutline: none;\n\t\t}\n\t}\n\n"]);return T=function(){return t},t}var k=s.a.colors,N=l.a.div(T(),k.black,k.whiteWithEasilyGray,k.filterText,w.a.RESULT_PAGE.ARROW_DOWN,m.a.laptopT),S=n(156),F=n(158),M=function(){var t=Object(o.e)(S.c).title,e=Object(o.e)(S.b).filters,n=Object(o.d)(),a=function(t){var e={type:t.target.name,value:t.target.value};n(F.a.selectFilter(e))};return r.a.createElement(N,null,r.a.createElement("div",{className:"selectWrapper"},r.a.createElement("span",{className:"title"},t),r.a.createElement("span",null,e.map((function(t,e){return r.a.createElement("select",{key:e+t.placeholder,className:"filter",name:t.key,id:t.placeholder+t.data.length,onChange:a},t.data.map((function(e,n){return r.a.createElement("option",{key:n+t.placeholder,value:e.value},e.value)})))})))))},C=function(t,e){return(C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var D=function(){return(D=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};var L={Pixel:"Pixel",Percent:"Percent"},O={unit:L.Percent,value:.8};var R=function(t){function e(e){var n=t.call(this,e)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(t){n.lastScrollTop||(n.dragging=!0,t instanceof MouseEvent?n.startY=t.pageY:t instanceof TouchEvent&&(n.startY=t.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(t){n.dragging&&(t instanceof MouseEvent?n.currentY=t.pageY:t instanceof TouchEvent&&(n.currentY=t.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&n.props.refreshFunction&&n.props.refreshFunction(),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="none")}))},n.onScrollListener=function(t){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(t)}),0);var e=n.props.height||n._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||(n.isElementAtBottom(e,n.props.scrollThreshold)&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=e.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1},n.throttledOnScrollListener=function(t,e,n,a){var r,o=!1,i=0;function l(){r&&clearTimeout(r)}function s(){var s=this,c=Date.now()-i,p=arguments;function d(){i=Date.now(),n.apply(s,p)}o||(a&&!r&&d(),l(),void 0===a&&c>t?d():!0!==e&&(r=setTimeout(a?function(){r=void 0}:d,void 0===a?t-c:t)))}return"boolean"!==typeof e&&(a=n,n=e,e=void 0),s.cancel=function(){l(),o=!0},s}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(t,e){function n(){this.constructor=t}C(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.UNSAFE_componentWillReceiveProps=function(t){this.props.key===t.key&&this.props.dataLength===t.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1,pullToRefreshThresholdBreached:!1}))},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,a=function(t){return"number"===typeof t?{unit:L.Percent,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:L.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:L.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),O):(console.warn("scrollThreshold should be string or number"),O)}(e);return a.unit===L.Pixel?t.scrollTop+n>=t.scrollHeight-a.value:t.scrollTop+n>=a.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=D({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),a=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:a,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(a.Component),P=n(306);function _(){var t=Object(i.a)(["\n\tmax-width: 393px;\n\tborder: 1px solid ",";\n\tbox-sizing: border-box;\n\tbackground: ",";\n  margin: 0 auto;\n\t\n\t.image-wrapper {\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 260px;\n\t\t\t}\n\t}\n\t\n\t.detail-wrapper {\n\t    padding: 0 10px 19px;\n\t    \n\t    .name {\n\t    \tfont-weight: bold;\n\t\t\t\tfont-size: 30px;\n\t\t\t\tline-height: 35px;\n\t\t\t\tcolor: #303030;\n\t    }\n\t    \n\t    .type-wrapper {\n        padding: 15px 0 24px;\n        \n        .serviceType, .managementType {\n\t\t      border: 2px solid ",";\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tborder-radius: 11px;\n\t\t\t\t\tfont-style: normal;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tline-height: 28px;\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\tpadding: 10px 25px;\n\t        display: inline-block;\n\t\t    }\n\t\t    \n\t\t    .serviceType {\n\t\t      margin-right: 10px;\n\t\t    }\n\t\t  \n\t    }\n\t    \n\t    \n\t    \n\t    .button-wrapper {\n\t\t\t\t.btn {\n\t\t\t\t\tfont-weight: 500;\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tline-height: 21px;\n\t\t\t\t\tborder: 2px solid ",";\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tborder-radius: 3px;\n\t\t\t\t\twidth: 166.94px;\n\t\t\t\t\tpadding-top: 19px;\n\t\t\t\t\tpadding-bottom: 19px;\n\t\t\t\t\t\n\t\t\t\t\t&.compare {\n\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t\tbackground-color: ",";\n\t\t\t\t\t\tmargin-right: 16px;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t&.send-a-message {\n\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t.compare-wrapper {\n\t      padding: 25px 25px 0 25px;\n\t\t    display: flex;\n\t\t    justify-content: flex-end;\n\t\t\t\n\t\t\t\t.compare-input {\n\t\t\t\t\twidth: 26.97px;\n\t\t\t\t\theight: 25.44px;\n\t\t\t\t\tborder: 1px solid ",";\n\t\t\t\t\tbox-sizing: border-box;\n\t\t\t\t\tborder-radius: 4px;\n\t\t\t\t}\n\t\t\t\n\t\t\t\t.compare {\n\t\t\t\t\tfont-style: normal;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tline-height: 28px;\n\t\t\t\t\tcolor: ",";\n\t\t\t\t}\n\t\t\t}\n\t}\n\t\n\t.footer {\n\t\tborder-top: 1px solid ",";\n    align-items: center;\n    display: flex;\n    font-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 20px;\n\t\tline-height: 23px;\n\t\t\n\t\tcolor: ",";\n    \n    img {\n    \tpadding-left: 18px;\n    }\n    \n    .startingAt {\n    \tpadding-right: 12px;\n    }\n    \n    .perMonth, .startPrice {\n    \tcolor: ",";\n    \tfont-weight: bold;\n    }\n    \n    .startPrice {\n    \tpadding-right: 10px;\n    }\n\t}\n\t\n\t\n"]);return _=function(){return t},t}var A=s.a.colors,z=l.a.div(_(),A.whiteWithEasilyGray,A.white,A.success,A.success,A.success,A.success,A.white,A.white,A.grayEasyLight,A.whiteWithEasilyGray,A.whiteWithEasilyGray,A.grayEasyDark,A.grayEasyDark),Y=n(82),j=n(72),I=n(26),B=function(t){var e=t.item,n=t.isMaximumItemsAreCompare,a=t.addItemToCompare;return r.a.createElement(z,null,r.a.createElement(j.a,{to:"".concat(I.a.details).concat(e.id)},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:e.img,alt:"img"}))),r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"type-wrapper"},r.a.createElement("span",{className:"serviceType"},e.serviceType),r.a.createElement("span",{className:"managementType"},e.managementType)),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("span",null,r.a.createElement(Y.a,{className:"btn compare",onClick:function(){return a(e)},disabled:n},r.a.createElement("span",null,"Add to Compare"))),r.a.createElement("span",null,r.a.createElement(Y.a,{className:"btn send-a-message"},r.a.createElement("span",null,"Send a message")))),r.a.createElement("div",{className:"compare-wrapper"},r.a.createElement(P.c,null,r.a.createElement(P.a,{type:"checkbox",name:"manual-only",id:"manual-only",className:"compare-input",checked:e.isCompare,disabled:!0})),r.a.createElement("span",{className:"compare"},"Compare"))),r.a.createElement("div",{className:"footer"},r.a.createElement("img",{src:w.a.RESULT_PAGE.HEART,alt:"heart"}),r.a.createElement("span",{className:"startingAt"},"STARTING AT"),r.a.createElement("span",{className:"startPrice"},e.startingPrice),r.a.createElement("span",{className:"perMonth"},"PER MONTH")))};function W(){var t=Object(i.a)(["\n\t.infinite-scroll-component {\n\t\tdisplay: grid;\n\t  grid-template-columns: repeat(auto-fill, minmax(392px, 1fr));\n\t  grid-gap: 5rem 2rem;\n\t  padding-top: 1.75rem;\n\t}\n\t\n\t.info {\n\t    text-align: center;\n\t    padding: 60px;\n\t}\n"]);return W=function(){return t},t}var H=l.a.div(W()),G=function(t){var e=t.isMaximumItemsAreCompare,n=t.result,a=t.addItemToCompare,o=t.fetchMoreData,i=t.hasMore;return r.a.createElement(H,null,r.a.createElement(R,{dataLength:n.length,hasMore:i,next:o,loader:r.a.createElement("h4",{className:"info"},"Loading..."),endMessage:r.a.createElement("p",{className:"info"},r.a.createElement("b",null,"Yay! You have seen it all"))},n&&n.map((function(t,n){return r.a.createElement(B,{key:n+"item",className:"item",item:t,isMaximumItemsAreCompare:e,addItemToCompare:a})}))))},V=function(t){var e=t.isMaximumItemsAreCompare,n=t.result,a=t.addItemToCompare,o=t.fetchMoreData,i=t.hasMore;return r.a.createElement(E,null,r.a.createElement(M,null),r.a.createElement(G,{isMaximumItemsAreCompare:e,result:n,addItemToCompare:a,fetchMoreData:o,hasMore:i}))};function U(){var t=Object(i.a)(["\n\t\tposition: fixed;\n    bottom: 0;\n    width: 100%;\n    background: ",";\n    border-top: 1px solid ",";\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    padding: 48px 30px 19px;\n    display: grid;\n    grid-gap: 0rem;\n    grid-template-columns: 1fr 2fr;\n    \n    .item-wrapper {\n      display: grid;\n\t    grid-template-columns: repeat(3, 172px);\n\t    grid-gap: 2rem;\n    \ttext-align: center;\n    \t\n    \timg {\n    \t\twidth: 100%;\n    \t\theight: 110px;\n    \t}\n    \t\n    \tspan {\n    \t\tfont-style: normal;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tline-height: 21px;\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: ",";\n    \t}\n    }\n    \n    .control-wrapper {\n      display: grid;\n\t    grid-template-columns: 1fr 2fr;\n\t    align-items: center;\n    }\n    \n    .btn {\n    \tdisplay: flex;\n\t\t\talign-items: center;\n\t    font-style: normal;\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 18px;\n\t\t\tline-height: 21px;\n    \tbackground: ",";\n\t\t\tborder-radius: 8px;\n\t\t\tcolor: ",";\n\t\t\tpadding: 21px 26px 21px 24px;\n\t\t\twidth: 340.93px;\n\t\t\t\n\t\t\t.icon-boll {\n\t\t\t\tdisplay: flex;\n\t\t    align-items: center;\n\t\t    justify-content: center;\n\t\t\t\tbackground: ",";\n\t\t\t\twidth: 26.57px;\n\t\t\t\theight: 26.67px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tfont-weight: 500;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tline-height: 21px;\n\t\t\t\tcolor: ",";\n\t\t\t\tmargin-left: 19px;\n\t\t\t}\n    }\n    \n    .reset {\n    \tfont-weight: 300;\n\t\t\tfont-size: 36px;\n\t\t\tline-height: 42px;\n\t\t\ttext-decoration-line: underline;\n\t\t\tcolor: ",";\n\t\t\tpadding-left: 47px;\n\t\t\tcursor: pointer;\n    }\n"]);return U=function(){return t},t}var K=s.a.colors,$=l.a.div(U(),K.white,K.whiteWithEasilyGray,K.ghostWithDark,K.success,K.white,K.white,K.success,K.success),J=function(t){var e=t.data,n=t.onResetCompare,a=t.showCompareMenu;return r.a.createElement($,null,r.a.createElement("div",{className:"item-wrapper"},e&&e.map((function(t,e){return r.a.createElement("div",{key:e+t.img},r.a.createElement("img",{src:t.img,alt:t.name}),r.a.createElement("span",null,t.name))}))),r.a.createElement("div",{className:"control-wrapper"},r.a.createElement("div",null,r.a.createElement(Y.a,{className:"btn",onClick:function(){return a()}},r.a.createElement("span",null,"Compare Property Managers"),r.a.createElement("span",{className:"icon-boll"},e.length))),r.a.createElement("span",{className:"reset",onClick:function(){return n()}},"Reset")))},q=n(163),Q=n(91),X=n(44);function Z(){var t=Object(i.a)(["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0px;\n\ttop: 0px;\n\tz-index: 12;\n\t\n\t.info {\n\t\twidth: 1242px;\n    background: #FFFFFF;\n    position: relative;\n    margin: 0 auto;\n    top: 418px;\n\t}\n\t\n\theader {\n\t\tbackground: #117700;\n\t\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\t\tborder-radius: 2px;\n\t\tfont-weight: normal;\n\t\tfont-size: 48px;\n\t\tline-height: 56px;\n\t\tcolor: #FFFFFF;\n    padding-top: 35px;\n    padding-bottom: 40px;\n    padding-left: 62px;\n\t}\n\t\n\t.btn {\n\t\t\tpadding: 15px 35px 15px 43px;\n\t\t\tfont-weight: 500;\n\t\t\tfont-size: 24px;\n\t\t\tline-height: 28px;\n\t\t\tborder-radius: 3px;\n\t    text-align: center;\n\t    \n\t    &.send-a-message {\n\t    \tbackground: #117700;\n\t    \tcolor: #FFFFFF;\n\t    }\n\t    \n\t    &.done {\n\t    \twidth: 257px\n\t    }\n  }\n  \n  table {\n  \tmargin: 0;\n    width: 100%;\n    padding: 0 20px 29px 20px;\n    \n    th {\n    \tpadding: 0;\n    }\n    \n    tr:nth-of-type(odd) {\n    \tbackground: #F1F1F1;\n    }\n    \n  \ttr.item-wrapper {\n  \t\t\tdisplay: grid;\n\t\t    grid-template-columns: repeat(4, 300px);\n\t\t    grid-gap: 0rem;\n\t\t    text-align: center;\n\t\t    background: none;\n\t\t    \n\t\t    th {\n  \t\t\n\t\t      .item {\n\t\t      \tpadding-top: 29px;\n\t\t      \tpadding-bottom: 26px;\n\t\t      \tborder-left: 1px solid #D7D7D7;\n    \t\t\t\tborder-right: 1px solid #D7D7D7;\n    \t\t\t\t\n\t\t        img {\n              width: 260px;\n\t\t\t\t\t    height: 210px;\n\t\t        }\n\t\t        \n\t\t        &.best {\n    \t\t\t\t\tbackground: rgba(184, 255, 187, 0.3);\n    \t\t\t\t\t\n    \t\t\t\t\timg {\n    \t\t\t\t\t\topacity: 0.7;\n    \t\t\t\t\t}\n    \t\t\t\t}\n\t\t        \n\t\t        .bestValue {\n\t\t        \tfont-weight: bold;\n\t\t\t\t\t\t\tfont-size: 36px;\n\t\t\t\t\t\t\tline-height: 42px;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\tcolor: #0E6500;\n\t\t\t\t\t\t\theight: 42px;\n\t\t        }\n\t\t        \n\t\t        .name {\n\t\t          font-weight: bold;\n\t\t\t\t\t\t\tfont-size: 20px;\n\t\t\t\t\t\t\tline-height: 23px;\n\t\t\t\t\t\t\tcolor: #303030;\n\t\t\t\t\t\t\tpadding-bottom: 17px;\n\t\t        }\n\t\t      }\n\t\t    }\n    }\n    \n    tr {\n\t    display: grid;\n\t    grid-template-columns: repeat(4,300px);\n\t    grid-gap: 0rem;\n\t    text-align: center;\n\n    \ttd {\n    \t\tborder-left: 1px solid rgba(241,241,241,0);\n    \t\t\n    \t\t&.empty {\n    \t\t\tborder-left: 1px solid #D7D7D7;\n    \t\t}\n    \t\t\n    \t\t&.typeName, &.typeValue {\n\t\t\t    padding-left: 33px;\n    \t\t}\n\n    \t\t&.typeName {\n\t\t      font-weight: bold;\n\t\t\t\t\tfont-size: 24px;\n\t\t\t\t\tline-height: 28px;\n\t\t\t\t\tcolor: #0F6900;\n\t\t\t\t\ttext-align: left;\n\t\t    }\n\t\t    \n\t\t    &.typeValue {\n\t\t    \ttext-align: left;\n\t\t    \tdisplay: flex;\n\t\t\t    align-items: center;\n\t\t    }\n\t\t    \n    \t\tspan {\n\t        display: inline-block;\n          width: 30px;\n    \t\t\theight: 30px;\n\n\t\t\t\t\t&.ok {\n\t\t\t\t\t\tbackground: url(",") no-repeat center;\n\t\t\t\t\t}\n\n\t\t\t\t\t&.error {\n\t\t\t\t\t\tbackground: url(",") no-repeat center;\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t&.price {\n\t\t\t      width: 100%;\n\t\t\t\t    display: flex;\n\t\t\t\t    align-items: center;\n\t\t\t\t    justify-content: center;\n\t\t\t\t    font-size: 22px;\n\t\t\t\t\t\tline-height: 26px;\n\t\t\t\t\t\tcolor: ",";\n\t\t\t\t\t}\n\t\t\t\t}\n    \t}\n    \t\n    \t&:nth-of-type(2n) {\n\t      td.detail {\n\t      \tborder-left: 1px solid #D7D7D7;\n\t      }\n\t    }\n\t    \n    }\n  \t\n  \t\n  }\n\t\n\tfooter {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\t\n\t\t.btn {\n\t\t\n\t\t\t&.back {\n\t\t\t\tbackground: #BFBFBF;\n\t\t\t\tcolor: #272727;\n\t\t\t\tmargin-right: 15px;\n\t\t\t}\n\t\t\t\n\t\t\t&.done {\n\t\t\t\tbackground: #117700;\n\t\t\t\tcolor: #FFFFFF;\n\t\t\t}\n\t\t}\n\t\t\n\t\tpadding-bottom: 65px;\n\t}\n"]);return Z=function(){return t},t}var tt=s.a.colors,et=l.a.div(Z(),w.c.OK,w.c.ERROR,tt.priceColor),nt={name:"Management Type",data:[{key:"turnKey",value:"Turn Key"},{key:"flatFee",value:"Flat Fee"},{key:"aLaCarteServices",value:"A la carte services"}]},at={name:"Owner Services",data:[{key:"rentCollection",value:"Rent Collection"},{key:"taxesAndStatements",value:"Taxes and Statements"},{key:"yearAndStatement",value:"Year and statement"},{key:"maintenance",value:"Maintenance"},{key:"inspections",value:"Inspections"},{key:"response",value:"24/7 response"}]},rt={name:"Tenant Services",data:[{key:"screeningTenants",value:"Screening tenants"},{key:"vacancyMarketing",value:"Vacancy marketing"},{key:"eviction",value:"Eviction"},{key:"reKey",value:"Re-key"},{key:"tenantShowings",value:"Tenant Showings"}]},ot={name:"Leasing Services",data:[{key:"leasingFee",value:"Leasing Fee"},{key:"leaseRenewals",value:"Lease renewals"},{key:"listingsOnline",value:"Listings online"},{key:"marketAnalysis",value:"Market analysis"}]},it=function(t){var e=t.fieldParentName,n=t.fields,a=t.typeField,o=t.managers,i=t.fieldOfPrice;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"item-data"},r.a.createElement("td",{className:"typeName"},e)),n.map((function(t,e){return r.a.createElement("tr",{className:"item-data",key:e+t.key+a},r.a.createElement("td",{className:"typeValue"},t.value),o.map((function(e,n){return r.a.createElement("td",{key:n+e.name+a,className:"detail"},i&&t.key===i?r.a.createElement("span",{className:"price"},"$",e[t.key]):r.a.createElement("span",{className:e[t.key]?"ok":"error"}))})))})))},lt=function(t){var e=t.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{className:"item-wrapper"},r.a.createElement("th",null),e&&e.map((function(t,e){return r.a.createElement("th",{key:e+t.name},r.a.createElement("div",{className:t.isBest?"item best":"item"},r.a.createElement("div",{className:"bestValue"},t.isBest?"Best Value":null),r.a.createElement("img",{src:t.img,alt:t.name}),r.a.createElement("div",{className:"name"},t.name),r.a.createElement(Y.a,{className:"btn send-a-message"},"Send a message")))}))))},st=function(t){var e=t.data,n=t.closeCompareMenu,a=nt,o=at,i=rt,l=ot;return r.a.createElement(et,null,r.a.createElement("div",{className:"info"},r.a.createElement("header",null,"Compare property managers:"),r.a.createElement("main",null,r.a.createElement("div",{className:"info-wrapper"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(lt,{data:e})),r.a.createElement("tbody",null,r.a.createElement(it,{fieldParentName:a.name,fields:a.data,managers:e,typeField:"managementType"}),r.a.createElement(it,{fieldParentName:o.name,fields:o.data,managers:e,typeField:"ownerServices"}),r.a.createElement(it,{fieldParentName:i.name,fields:i.data,managers:e,typeField:"tenantServices"}),r.a.createElement(it,{fieldParentName:l.name,fields:l.data,managers:e,typeField:"leasingServices",fieldOfPrice:"leasingFee"}))))),r.a.createElement("footer",null,r.a.createElement(Y.a,{className:"btn done",onClick:function(){return n()}},"Done"))))},ct=n(107),pt=n(59),dt=n(19),mt=function(){var t=Object(o.d)(),e=Object(o.e)(q.a).data,n=Object(o.e)(q.c),a=Object(o.e)(Q.e).result,i=Object(o.e)(q.b).isShow,l=Object(o.e)(Q.d).hasMore;return r.a.createElement(d,null,r.a.createElement(v,{sectionType:"result"}),r.a.createElement(V,{isMaximumItemsAreCompare:n,result:a,addItemToCompare:function(e){t(X.a.addItemToCompare(e))},fetchMoreData:function(){t(dt.b.fetchMoreData())},hasMore:l}),e.length?r.a.createElement(J,{data:e,onResetCompare:function(){t(X.a.reset())},showCompareMenu:function(){t(ct.b.show(pt.a.COMPARE)),t(X.a.showCompareMenu())}}):null,i?r.a.createElement(st,{data:e,closeCompareMenu:function(){t(ct.b.hide()),t(X.a.closeCompareMenu())}}):null)};n.d(e,"Result",(function(){return mt}));e.default=mt}}]);
//# sourceMappingURL=10.d0038d78.chunk.js.map