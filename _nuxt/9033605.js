(window.webpackJsonp=window.webpackJsonp||[]).push([[40,20,21,28],{288:function(t,e,n){"use strict";n.r(e);n(97),n(289);var r={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",(function(){return[t._v("\n        Button Text\n      ")]}))],2)])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n(290)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},290:function(t,e,n){var r=n(4),l=n(9),o=n(31),c=/"/g,d=function(t,e,n,r){var l=String(o(t)),d="<"+e;return""!==n&&(d+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),d+">"+l+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(d),r(r.P+r.F*l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},292:function(t,e,n){var content=n(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0e4af157",content,!0,{sourceMap:!1})},300:function(t,e,n){var map={"./1mil+_downloads.jpg":152,"./2mil+_downloads.jpg":153,"./appliance.jpg":154,"./chevrons.jpg":144,"./conference.jpg":145,"./copper.jpg":155,"./course.jpg":156,"./dots.jpg":157,"./github_sos.jpg":158,"./graph.jpg":146,"./grid-thumb.jpg":159,"./grid.jpg":160,"./grid_list.jpg":161,"./hardware.jpg":147,"./install.jpg":162,"./instructor.jpg":163,"./live.jpg":164,"./mike-speaking.jpg":165,"./new-team.jpg":166,"./old-server-mockup.jpg":167,"./peelback-half.jpg":148,"./security_onion_solutions_rings.jpg":168,"./so-onion-camo.jpg":169,"./soc.jpg":170,"./sos-site-header-2-square.jpg":171,"./squares.jpg":143,"./training.jpg":149,"./training1.jpg":172,"./training2.jpg":173,"./workbook.jpg":174,"./world.jpg":150};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=300},301:function(t,e,n){"use strict";n.r(e);n(142),n(38),n(37);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0},clickable:{type:Boolean,default:!1}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{handleClick:function(){if(this.clickable){var t=this.fileName.includes("-thumb")?"fullsize":"thumbnail";this.$nuxt.$emit("show-image-zoom",{imageName:this.fileName,imageType:t})}}}},l=(n(302),n(6)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center items-center m-auto size",class:[t.padding?"bg-white rounded-full overflow-hidden":"xs:p-0",t.clickable?"transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer":""],style:t.sizeVar,on:{click:function(e){return t.handleClick()}}},[r("img",{attrs:{src:n(300)("./"+t.fileName)}})])}),[],!1,null,"7b268c68",null);e.default=component.exports},302:function(t,e,n){"use strict";n(292)},303:function(t,e,n){var r=n(22)(!1);r.push([t.i,".size[data-v-7b268c68]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-7b268c68]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=r},304:function(t,e,n){"use strict";n.r(e);var r={props:{showText:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},isButton:{type:Boolean,default:!1}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex content-center justify-center text-gray-700 bg-gray-400",class:[t.shadow?"shadow-xl":""]},[n("div",{staticClass:"m-auto px-4 text-center text-4xl",class:[t.isButton?"cursor-pointer":"cursor-default"]},[t.showText?n("div",[t._t("default",(function(){return[t._v("\n        Graphic\n      ")]}))],2):t._e()])])}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,n){var content=n(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4b5be128",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n(382)},432:function(t,e,n){var r=n(22)(!1);r.push([t.i,".graphic[data-v-619336d8]{height:200px;width:200px}",""]),t.exports=r},456:function(t,e,n){"use strict";n.r(e);var r=n(141),l=n(304),o=n(288),c={components:{DetailPara:r.default,Graphic:l.default,SoButton:o.default},props:{alternate:{type:Boolean,default:!1},link1:{type:String,default:""},link2:{type:String,default:""}}},d=(n(431),n(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"text-5xl text-center mb-12 mt-10"},[t._t("section-heading")],2),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex flex-row flex-wrap lg:flex-no-wrap mt-10 mb-20"},[t._t("graphic-left",(function(){return[n("graphic",{staticClass:"graphic md:w-1/2 mr-12"})]})),t._v(" "),n("div",{staticClass:"flex flex-col justify-center items-start px-2 xs:px-6 xl:px-10 py-10 mb-0 sm:mb-16 md:mb-0"},[n("detail-para",{staticClass:"md:pl-6 mb-3",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-left")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-top-left")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"md:pl-6 mb-5",attrs:{align:"left","show-header":!1},scopedSlots:t._u([{key:"body",fn:function(){return[t._t("body-bottom-left")]},proxy:!0}],null,!0)}),t._v(" "),n("so-button",{staticClass:"sm:mx-6 h-12",attrs:{alternate:t.alternate,link:t.link1},nativeOn:{click:function(e){return t.$emit("button1-click")}}},[t._t("left-button-text")],2)],1)],2),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap lg:flex-no-wrap"},[n("div",{staticClass:"flex flex-col justify-center items-end px-2 xs:px-10 py-10 mb-0 sm:mb-16 md:mb-0 sm:order-1 order-2"},[n("detail-para",{staticClass:"md:pr-6 mb-3",attrs:{align:"right"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-right")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-top-right")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"md:pr-6 mb-4",attrs:{align:"right","show-header":!1},scopedSlots:t._u([{key:"body",fn:function(){return[t._t("body-bottom-right")]},proxy:!0}],null,!0)}),t._v(" "),n("so-button",{staticClass:"sm:mx-6 h-12",attrs:{alternate:t.alternate,link:t.link2},nativeOn:{click:function(e){return t.$emit("button2-click")}}},[t._t("right-button-text")],2)],1),t._v(" "),n("div",{staticClass:"order-1 sm:order-2 w-full"},[t._t("graphic-right",(function(){return[n("graphic",{staticClass:"graphic md:w-1/2 mr-12"})]}))],2)])])])}),[],!1,null,"619336d8",null);e.default=component.exports;installComponents(component,{Graphic:n(301).default,DetailPara:n(141).default,SoButton:n(288).default})}}]);