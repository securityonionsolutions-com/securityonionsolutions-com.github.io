(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3,28],{279:function(t,e,n){"use strict";n.r(e);n(97),n(281);var r={props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}},computed:{external:function(){return!(!this.link.startsWith("http")&&!this.link.startsWith("https"))&&"_blank"}},methods:{baseType:function(){return""!==this.link?"a":"div"}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.baseType(),{tag:"component",attrs:{href:[""!==t.link&&t.link],target:t.external},on:{click:function(e){return t.$emit("click")}}},[n("button",{staticClass:"shadow-lg font-bold py-2 px-2 xs:px-4 rounded-full focus:outline-none block",class:[t.alternate?"bg-white text-black hover:bg-gray-100":"bg-so-blue text-white hover:bg-blue-700"],attrs:{type:"button"}},[n("div",{staticClass:"mx-6"},[t._t("default",(function(){return[t._v("\n        Button Text\n      ")]}))],2)])])}),[],!1,null,null,null);e.default=component.exports},281:function(t,e,n){"use strict";n(282)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},282:function(t,e,n){var r=n(4),o=n(10),l=n(36),c=/"/g,f=function(t,e,n,r){var o=String(l(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),f+">"+o+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(f),r(r.P+r.F*o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",n)}},288:function(t,e,n){"use strict";n.r(e);var r={components:{SoButton:n(279).default},props:{alternate:{type:Boolean,default:!1},link:{type:String,default:""}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col xl:flex-row justify-between items-center xl:mx-12"},[n("div",{staticClass:"text-3xl xs:text-4xl xl:mr-6 mb-5 xl:mb-0 text-center xs:text-left"},[t._t("info")],2),t._v(" "),n("div",{staticClass:"block"},[n("so-button",{staticClass:"whitespace-no-wrap w-full",attrs:{alternate:t.alternate,link:t.link},nativeOn:{click:function(e){return t.$emit("button-click")}}},[t._t("button-text")],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SoButton:n(279).default})},317:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("3ed2441f",content,!0,{sourceMap:!1})},343:function(t,e,n){var map={"./sos-1u-ethernet-back-thumb.jpg":172,"./sos-1u-ethernet-back.jpg":173,"./sos-1u-front-thumb.jpg":174,"./sos-1u-front.jpg":175,"./sos-1u-sfp-back-thumb.jpg":176,"./sos-1u-sfp-back.jpg":177,"./sos-2u-back-thumb.jpg":178,"./sos-2u-back.jpg":179,"./sos-2u-front-thumb.jpg":180,"./sos-2u-front.jpg":181};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=343},344:function(t,e,n){"use strict";n(317)},345:function(t,e,n){var r=n(27)(!1);r.push([t.i,".graphic[data-v-635857d2]{width:30rem;height:15rem}@media (min-width:480px){.graphic[data-v-635857d2]{width:60rem;height:30rem}}",""]),t.exports=r},383:function(t,e,n){"use strict";n.r(e);n(38),n(37),n(39);var r={props:{appliance:{type:Object,default:function(){}}},computed:{threesixtyDetails:function(){var t,e,n,r=!1;return this.appliance.img_back.includes("sos-1u")?(t=this.appliance.img_back.includes("ethernet")?"/img/appliances/sos-1u-ethernet":"/img/appliances/sos-1u-sfp",e=this.appliance.img_back.includes("ethernet")?"sos-1u-ethernet-360-{index}.jpg":"sos-1u-sfp-360-{index}.jpg",n=this.appliance.img_back.includes("ethernet")?36:37):(t="/img/appliances/sos-2u",e="sos-2u-360-{index}.jpg",n=42,r=!0),{imagePath:t,filenameFormat:e,numPics:n,reverse:r}}},methods:{pic:function(t){return n(343)("./".concat(t))},specSplit:function(t){return t.replace(/, /g,"\n")},handleImageClick:function(t){var e;e="front"===t?this.appliance.img_front_thumb:this.appliance.img_back_thumb,this.$nuxt.$emit("show-image-zoom",{imageType:"appliance",imageName:e})}}},o=(n(344),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden bg-white text-black flex flex-col flex-grow"},[n("div",{staticClass:"flex flex-col flex-grow justify-between"},[n("div",[n("div",{staticClass:"bg-so-blue text-white text-4xl text-center font-semibold w-full p-4"},[t._v("\n        "+t._s(t.appliance.name)+"\n      ")]),t._v(" "),n("client-only",[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"xs:mx-12 xl:mx-24 pb-6 border-b border-gray-400"},[n("vue-three-sixty",{attrs:{amount:t.threesixtyDetails.numPics,"image-path":t.threesixtyDetails.imagePath,"file-name":t.threesixtyDetails.filenameFormat,"spin-reverse":t.threesixtyDetails.reverse}})],1)])]),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row justify-center items-center text-center border-b border-gray-400 pb-6 xs:mx-12 mt-4"},[t.appliance.img_front_thumb?n("div",{staticClass:"justify-items-center"},[n("div",{staticClass:"w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer",on:{click:function(e){return t.handleImageClick("front")}}},[n("img",{attrs:{src:t.pic(t.appliance.img_front_thumb)}})]),t._v(" "),n("div",{staticClass:"w-full transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer",on:{click:function(e){return t.handleImageClick("back")}}},[n("img",{attrs:{src:t.pic(t.appliance.img_back_thumb)}})])]):t._e(),t._v(" "),n("div",{staticClass:"md:px-4",class:[null==t.appliance.img_front_thumb&&null==t.appliance.img_back_thumb?"pt-12":"pt-12 md:pt-0"]},t._l(Object.keys(t.appliance.specs),(function(e){return n("div",{key:e,staticClass:"p-2"},[n("span",{staticClass:"font-bold",domProps:{textContent:t._s(e)}}),t._v(" "),n("pre",{staticClass:"font-sans",domProps:{textContent:t._s(t.specSplit(t.appliance.specs[e]))}})])})),0)]),t._v(" "),n("div",{staticClass:"p-4 xs:mx-12 xl:mx-48"},[t.appliance.caveats.storageApproximated?n("div",[t._v("\n          * Storage sizes are approximate.\n        ")]):t._e(),t._v(" "),t.appliance.caveats.performanceDependsOnTraffic?n("div",[t._v("\n          † Actual performance depends on network traffic. Forward node estimates assume a Manager Node is used.\n        ")]):t._e(),t._v(" "),t.appliance.caveats.withoutPcap?n("div",[t._v("\n          ‡ Throughput rating is achieved without PCAP.\n        ")]):t._e()])],1),t._v(" "),n("ActionCallout",{staticClass:"m-6 xs:pb-6",on:{"button-click":function(e){t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about the "+t.appliance.name,source:t.appliance.name.toLowerCase().replace(" ","_")+"_purchasing_info"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._v("\n          Ready to purchase, or need more information?\n        ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-base"},[t._v("\n          Contact Us\n        ")])]},proxy:!0}])})],1)])}),[],!1,null,"635857d2",null);e.default=component.exports;installComponents(component,{ActionCallout:n(288).default})}}]);