(window.webpackJsonp=window.webpackJsonp||[]).push([[50,3,9,10,12,14,16,18,21,22,27,28,29,30,42],{276:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.alignment()},[t.showHeader?n("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"text-sm xs:text-lg"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},277:function(t,e,n){"use strict";n.r(e);n(93),n(279);var r={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none focus:shadow-outline block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",[t._v("\n        Button Text\n      ")])],2)])])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";var r=n(5),o=n(28),l=n(29),c=n(135),f=n(75),d=n(10),x=n(55).f,m=n(56).f,h=n(14).f,v=n(281).trim,y="Number",_=r.Number,C=_,w=_.prototype,k=l(n(92)(w))==y,S="trim"in String.prototype,j=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=S?e.trim():v(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(k?d((function(){w.valueOf.call(n)})):l(n)!=y)?c(new C(j(e)),n,_):j(e)};for(var O,A=n(8)?x(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;A.length>N;N++)o(C,O=A[N])&&!o(_,O)&&h(_,O,m(C,O));_.prototype=w,w.constructor=_,n(16)(r,y,_)}},279:function(t,e,n){"use strict";n(280)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},280:function(t,e,n){var r=n(4),o=n(10),l=n(35),c=/"/g,f=function(t,e,n,r){var o=String(l(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),f+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},281:function(t,e,n){var r=n(4),o=n(35),l=n(10),c=n(282),f="["+c+"]",d=RegExp("^"+f+f+"*"),x=RegExp(f+f+"*$"),m=function(t,e,n){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=f?e(h):c[t];n&&(o[n]=d),r(r.P+r.F*f,"String",o)},h=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(x,"")),t};t.exports=m},282:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},283:function(t,e,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5b64a149",content,!0,{sourceMap:!1})},284:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("376a1d54",content,!0,{sourceMap:!1})},285:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5f3fab1a",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r={components:{SoButton:n(277).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(277).default})},287:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:t.alignment()},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./1mil+_downloads.jpg":144,"./appliance.jpg":145,"./conference.jpg":137,"./copper.jpg":146,"./course.jpg":147,"./dots.jpg":148,"./github_sos.jpg":149,"./graph.jpg":138,"./grid-thumb.jpg":150,"./grid.jpg":151,"./grid_list.jpg":152,"./hardware.jpg":139,"./install.jpg":153,"./instructor.jpg":154,"./live.jpg":155,"./mike-speaking.jpg":156,"./new-team.jpg":157,"./old-server-mockup.jpg":158,"./peelback-half.jpg":140,"./security_onion_solutions_rings.jpg":159,"./soc.jpg":160,"./sos-site-header-2-square.jpg":161,"./squares.jpg":136,"./terms.jpg":141,"./training.jpg":142,"./training1.jpg":162,"./training2.jpg":163,"./workbook.jpg":164,"./world.jpg":143};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=288},289:function(t,e,n){"use strict";n(283)},290:function(t,e,n){var r=n(22)(!1);r.push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=r},291:function(t,e,n){"use strict";n(284)},292:function(t,e,n){var r=n(22)(!1);r.push([t.i,".size[data-v-2fa13c8a]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-2fa13c8a]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);n(278),n(37),n(36);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0},clickable:{type:Boolean,default:!1}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(288)("./".concat(this.fileName))},handleClick:function(){if(this.clickable){var t=this.fileName.includes("-thumb")?"fullsize":"thumbnail";this.$nuxt.$emit("show-image-zoom",{imageName:this.fileName,imageType:t})}}}},o=(n(291),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center items-center m-auto size",class:[t.padding?"bg-white rounded-full overflow-hidden":"xs:p-0",t.clickable?"transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer":""],style:t.sizeVar,on:{click:function(e){return t.handleClick()}}},[n("img",{attrs:{src:t.importImage()}})])}),[],!1,null,"2fa13c8a",null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);n(289);var r=n(9),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[n("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[n("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"text-lg xl:text-2xl"},[t._t("body")],2)]),t._v(" "),n("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},295:function(t,e,n){"use strict";n.r(e);var r={props:{alternate:{type:Boolean,default:!1}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"90px"}}),t._v(" "),t._t("default"),t._v(" "),n("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[t.alternate?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},297:function(t,e,n){"use strict";n(285)},298:function(t,e,n){var r=n(22)(!1);r.push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=r},299:function(t,e,n){"use strict";n.r(e);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(297),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);var r={props:{showText:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},isButton:{type:Boolean,default:!1}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex content-center justify-center text-gray-700 bg-gray-400",class:[t.shadow?"shadow-xl":""]},[n("div",{staticClass:"m-auto px-4 text-center text-4xl",class:[t.isButton?"cursor-pointer":"cursor-default"]},[t.showText?n("div",[t._t("default",[t._v("\n        Graphic\n      ")])],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(276).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),n("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(276).default})},302:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(276).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("detail-para",{staticClass:"order-2 lg:order-1",class:[t.textMargin?"lg:mr-12":"xs:pr-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"order-1 lg:order-2 mb-4 lg:mb-0"},[t._t("graphic")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(276).default})},305:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(276).default}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"text-3xl xl:text-4xl mb-6 font-semibold text-center"},[t._t("section-heading")],2),t._v(" "),n("div",{staticClass:"flex flex-wrap"},[n("detail-para",{staticClass:"w-full md:w-1/2 md:pr-24 mb-6",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-top-left")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-top-left")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:" w-full md:w-1/2 md:pl-12 mb-6",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-top-right")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-top-right")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"w-full md:w-1/2 md:pr-12 mb-6 md:mb-0",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-bottom-left")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-bottom-left")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"w-full md:w-1/2 md:pl-12",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-bottom-right")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-bottom-right")]},proxy:!0}],null,!0)})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(276).default})},309:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4603ed18",content,!0,{sourceMap:!1})},310:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2b7a5397",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n(309)},333:function(t,e,n){var r=n(22)(!1);r.push([t.i,".graphic[data-v-e0a53066]{height:400px;width:300px}",""]),t.exports=r},334:function(t,e,n){"use strict";n(310)},335:function(t,e,n){var r=n(22)(!1);r.push([t.i,".graphic[data-v-9064a7d4]{height:200px;width:300px}",""]),t.exports=r},350:function(t,e,n){"use strict";n.r(e);n(42);var r={components:{DetailPara:n(276).default},props:{featureArr:{type:Array,default:function(){return[]}}},data:function(){return{activeFeat:0}},methods:{setActiveFeat:function(t){this.activeFeat=t},screenshot:function(t){var e=this.featureArr[t].image;return n(94)("./".concat(e))},handleImageClick:function(t){var e=this.featureArr[t].image.replace("screenshots/","");this.$nuxt.$emit("show-image-zoom",{imageName:e,imageType:"screenshot"})}}},o=(n(332),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row items-center justify-center"},[n("div",{staticClass:"w-full\n      lg:w-3/5\n      rounded-md\n      overflow-hidden\n      m-8\n      shadow-xl\n      px-2\n      xs:px-0\n      transform\n      hover:scale-105\n      transition\n      duration-200\n      ease-in-out\n      cursor-pointer",on:{click:function(e){return t.handleImageClick(t.activeFeat)}}},[n("img",{attrs:{src:t.screenshot(t.activeFeat)}})]),t._v(" "),n("div",{staticClass:"flex flex-col items-center lg:w-1/3 lg:mx-4"},t._l(t.featureArr,(function(e,r){return n("button",{key:r,staticClass:"flex justify-center items-center my-1 focus:outline-none w-4/5 xs:w-full",class:[t.activeFeat===r?"bg-gray-200 bg-opacity-25 shadow-lg rounded-lg":""],on:{click:function(e){return t.setActiveFeat(r)},focus:function(e){return t.setActiveFeat(r)}}},[n("detail-para",{staticClass:"px-6 w-full mt-4 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          "+t._s(e.header)+"\n        ")]},proxy:!0},{key:"body",fn:function(){return[t._v("\n          "+t._s(e.body)+"\n        ")]},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,"e0a53066",null);e.default=component.exports;installComponents(component,{DetailPara:n(276).default})},358:function(t,e,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("fca57384",content,!0,{sourceMap:!1})},375:function(t,e,n){"use strict";n.r(e);var r={components:{Graphic:n(300).default},props:{alternate:{type:Boolean,default:!1}}},o=(n(334),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center text-center"},[n("div",{staticClass:"flex flex-col items-center",class:[t.alternate?"rounded bg-white text-black shadow-lg p-4":""]},[n("div",{staticClass:"text-2xl font-semibold mb-1"},[t._t("title")],2),t._v(" "),t._t("graphic",[n("graphic",{staticClass:"w-full h-48 mb-8"})]),t._v(" "),n("div",{staticClass:"text-m w-5/6"},[t._t("body")],2)],2)])}),[],!1,null,"9064a7d4",null);e.default=component.exports;installComponents(component,{Graphic:n(293).default})},388:function(t){t.exports=JSON.parse('{"types":[{"name":"Agent","icon":["far","window-maximize"],"desc":"Information gathered from agent software","tools":"Beats, Wazuh, osquery"},{"name":"Alert","icon":"bell","desc":"Judgment made by a product about an event","tools":"Suricata, Wazuh"},{"name":"Asset","icon":"desktop","desc":"Metadata about hosts on the network","tools":"Zeek"},{"name":"Extracted Content","icon":"puzzle-piece","desc":"Rebuilt elements of a session and extracted metadata","tools":"Zeek"},{"name":"Full Content","icon":"stream","desc":"All packets on the network","tools":"Stenographer"},{"name":"Session","icon":"exchange-alt","desc":"Detail about conversations between hosts","tools":"Zeek, Suricata"},{"name":"Transaction","icon":"ethernet","desc":"Generated logs based on network traffic protocols","tools":"Zeek, Suricata"}]}')},389:function(t){t.exports=JSON.parse('{"features":[{"image":"screenshots/alerts.jpg","header":"Native Alert Queue","body":"Use our NEW Alerts interface to review and manage alerts generated by Security Onion."},{"image":"screenshots/hunt.jpg","header":"Hunt for Evil","body":"Our Hunt interface is purpose built to let you investigate events quickly and easily."},{"image":"screenshots/pcap.jpg","header":"Full PCAP Analysis","body":"Pull packet captures from network events and analyze them within SOC or your favorite external tool."}]}')},390:function(t){t.exports=JSON.parse('{"version":"2.3.51"}')},391:function(t,e,n){"use strict";n(358)},392:function(t,e,n){var r=n(22),o=n(296),l=n(140),c=r(!1),f=o(l);c.push([t.i,".hero-software[data-v-267c8282]{background:100% 100% no-repeat url("+f+")}",""]),t.exports=c},426:function(t,e,n){"use strict";n.r(e);var r=n(305),o=n(286),l=n(350),c={scrollToTop:!0,components:{FourPanelDetail:r.default,ActionCallout:o.default,FeatureSelector:l.default},data:function(){return{links:[{name:"Overview",id:"overview"},{name:"Use Cases",id:"use-cases"},{name:"Features",id:"features"}],typeArray:n(388).types,featureArr:n(389).features,soVersion:n(390).version}}},f=(n(391),n(9)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xs:px-12"},[r("PageNav",{attrs:{"page-name":"Security Onion",links:t.links}}),t._v(" "),r("SubHero",{staticClass:"hero-software",attrs:{id:"download-before"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Security Onion 2\n    ")]},proxy:!0},{key:"body",fn:function(){return[r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"text-2xl"},[t._v("\n          Latest version:\n          "),r("span",{staticClass:"font-light"},[t._v(t._s(t.soVersion))])])]),t._v(" "),r("div",{staticClass:"flex justify-center"},[r("ActionCallout",{staticClass:"mt-1 xl:mt-4",attrs:{link:"https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md"},scopedSlots:t._u([{key:"button-text",fn:function(){return[t._v("\n            Download Now\n          ")]},proxy:!0}])})],1),t._v(" "),r("div",{staticClass:"flex justify-center"},[r("ActionCallout",{staticClass:"mt-1 xl:mt-2",attrs:{link:"https://securityonion.net/aws/?ref=_ptnr_web_sos"},scopedSlots:t._u([{key:"button-text",fn:function(){return[t._v("\n            Use in Amazon\n            "),r("img",{attrs:{src:n(200)}})]},proxy:!0}])})],1),t._v(" "),r("div",{staticClass:"flex justify-center"},[r("ActionCallout",{staticClass:"xl:mt-2",attrs:{link:"https://docs.securityonion.net/"},scopedSlots:t._u([{key:"button-text",fn:function(){return[t._v("\n            Documentation\n          ")]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),r("ContentSection",{attrs:{id:"overview",alternate:!0}},[r("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[r("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Overview\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[r("div",{staticClass:"shadow-xl rounded-md overflow-hidden"},[r("Graphic",{attrs:{padding:!1,"file-name":"install.jpg",size:20,clickable:!0}})],1)]},proxy:!0},{key:"body",fn:function(){return[r("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management. The easy-to-use Setup wizard allows you to build an army of distributed sensors for your enterprise in minutes!\n          ")]),t._v(" "),r("div",{staticClass:"text-center xs:text-left mt-4"},[t._v("\n            Security Onion includes Elasticsearch, Logstash, Kibana, Suricata, Zeek (formerly known as Bro), Wazuh, Stenographer, TheHive, Cortex, CyberChef, NetworkMiner, and many other security tools.\n          ")])]},proxy:!0}])}),t._v(" "),r("feature-left",{staticClass:"my-12",scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Highly Scalable\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[r("Graphic",{staticClass:"shadow-xl rounded-md overflow-hidden",attrs:{"file-name":"grid_list.jpg",padding:!1,size:20,clickable:!0}})]},proxy:!0},{key:"body",fn:function(){return[r("div",{staticClass:"text-left"},[t._v("\n            From a single network appliance, to a grid of a thousand nodes, Security Onion scales to fit your specific needs.\n          ")])]},proxy:!0}])}),t._v(" "),r("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Open Source Community\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[r("div",{staticClass:"shadow-xl rounded-md overflow-hidden"},[r("Graphic",{attrs:{padding:!1,"file-name":"github_sos.jpg",size:20,clickable:!0}})],1)]},proxy:!0},{key:"body",fn:function(){return[r("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion and the tools we integrate are all open source, written by members of the cyber security community.\n          ")])]},proxy:!0}])})],1)]),t._v(" "),r("ContentSection",{attrs:{id:"use-cases"}},[r("div",{staticClass:"xs:-mx-12",attrs:{id:"use_cases"}},[r("four-panel-detail",{staticClass:"mx-3 xs:mx-24",scopedSlots:t._u([{key:"section-heading",fn:function(){return[t._v("\n          Use Cases\n        ")]},proxy:!0},{key:"header-top-left",fn:function(){return[t._v("\n          NIDS\n        ")]},proxy:!0},{key:"body-top-left",fn:function(){return[t._v("\n          Collect network events from Zeek, Suricata, and other tools for complete coverage of your network. Cast a wide net to catch the bad guys quickly and easily.\n        ")]},proxy:!0},{key:"header-top-right",fn:function(){return[t._v("\n          HIDS\n        ")]},proxy:!0},{key:"body-top-right",fn:function(){return[t._v("\n          Security Onion supports several host-based event collection agents including Wazuh, Beats, and osquery. Just point them to your installation and it's off to the races.\n        ")]},proxy:!0},{key:"header-bottom-left",fn:function(){return[t._v("\n          Static Analysis (PCAP Import)\n        ")]},proxy:!0},{key:"body-bottom-left",fn:function(){return[t._v("\n          Use Security Onion to import PCAP files for quick static analysis and case studies. Spin up a virtual machine quickly and get started in just a few minutes.\n        ")]},proxy:!0},{key:"header-bottom-right",fn:function(){return[t._v("\n          SOC Workstation\n        ")]},proxy:!0},{key:"body-bottom-right",fn:function(){return[t._v("\n          A workstation install option is also available for SOC analysts to use local Linux tools to perform analysis of network and host events. No need to install extra tools, we bundle all the apps you might need.\n        ")]},proxy:!0}])})],1)]),t._v(" "),r("ContentSection",{attrs:{id:"features",alternate:!0}},[r("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[r("section-header",{staticClass:"mb-6"},[t._v("\n        Included Features\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4"},[r("feature-selector",{attrs:{"feature-arr":t.featureArr}})],1)],1)]),t._v(" "),r("ContentSection",{attrs:{id:"data_types"}},[r("div",{staticClass:"xs:-mx-12 px-4"},[r("SectionHeader",{staticClass:"mt-6 xs:mb-8"},[t._v("\n        Data Types\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-row flex-wrap justify-center mt-4"},t._l(t.typeArray,(function(e,i){return r("div",{key:i,staticClass:"w-full md:w-1/3 xl:w-1/4 bg-gray-200 rounded-md m-2 p-2 h-64"},[r("VerticalFeature",{scopedSlots:t._u([{key:"graphic",fn:function(){return[r("fa",{staticClass:"mb-2",attrs:{icon:e.icon,mask:"circle",transform:"shrink-8",size:"4x"}})]},proxy:!0},{key:"title",fn:function(){return[r("div",{staticClass:"text-2xl"},[t._v("\n                "+t._s(e.name)+"\n              ")])]},proxy:!0},{key:"body",fn:function(){return[r("div",{staticClass:"flex flex-col items-center text-center text-lg pt-2"},[r("div",{staticClass:"mb-2 h-20"},[t._v("\n                  "+t._s(e.desc)+"\n                ")]),t._v(" "),r("div",{staticClass:"text-gray-600 font-light text-sm"},[t._v("\n                  "+t._s(e.tools)+"\n                ")])])]},proxy:!0}],null,!0)})],1)})),0)],1)]),t._v(" "),r("ContentSection",{attrs:{id:"hardwarehelp",alternate:!0}},[r("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[r("action-callout",{staticClass:"my-12",attrs:{alternate:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about Security Onion Solutions' offerings.",source:"software_general_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[r("div",{staticClass:"text-2xl flex justify-center"},[r("div",[t._v("\n              Let Security Onion Solutions take care of the hardware and setup, so you can focus on threat hunting.\n            ")])])]},proxy:!0},{key:"button-text",fn:function(){return[r("div",{staticClass:"text-lg my-1"},[t._v("\n            Find Out How\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,"267c8282",null);e.default=component.exports;installComponents(component,{PageNav:n(299).default,ActionCallout:n(286).default,SubHero:n(294).default,Graphic:n(293).default,FeatureRight:n(301).default,FeatureLeft:n(302).default,ContentSection:n(295).default,FourPanelDetail:n(305).default,SectionHeader:n(287).default,FeatureSelector:n(350).default,SectionHeader:n(287).default,VerticalFeature:n(375).default,ActionCallout:n(286).default})}}]);