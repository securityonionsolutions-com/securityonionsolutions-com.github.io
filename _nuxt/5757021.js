(window.webpackJsonp=window.webpackJsonp||[]).push([[6],Array(202).concat([function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.alignment()},[this.showHeader?e("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[this._t("header")],2):this._e(),this._v(" "),e("div",{staticClass:"text-sm xs:text-lg"},[this._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5f3fab1a",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(215);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5b64a149",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(242);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4589e76e",content,!0,{sourceMap:!1})},function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:this.alignment()},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(202).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),n("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(202).default})},function(t,e,n){t.exports=n.p+"img/world.d880d30.jpg"},function(t,e,n){"use strict";n.r(e);n(214);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[e("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[e("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"text-lg xl:text-2xl"},[this._t("body")],2)]),this._v(" "),e("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},function(t,e,n){t.exports=n.p+"img/conference.1032341.jpg"},function(t,e,n){"use strict";var r=n(203);n.n(r).a},function(t,e,n){(e=n(15)(!1)).push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=e},function(t,e,n){"use strict";var r=n(204);n.n(r).a},function(t,e,n){(e=n(15)(!1)).push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=e},function(t,e,n){t.exports=n.p+"img/dots.d8b6c08.jpg"},function(t,e,n){t.exports=n.p+"img/graph.8400772.jpg"},function(t,e,n){t.exports=n.p+"img/hardware.d076817.jpg"},function(t,e,n){t.exports=n.p+"img/peelback-half.cd8240d.jpg"},function(t,e,n){"use strict";n.r(e);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(212),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={props:{alt:{type:Boolean,default:!1}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"90px"}}),this._v(" "),this._t("default"),this._v(" "),e("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){var map={"./1mil+_downloads.jpg":223,"./appliance.jpg":224,"./conference.jpg":211,"./copper.jpg":225,"./course.jpg":226,"./dots.jpg":216,"./github_sos.jpg":227,"./graph.jpg":217,"./hardware.jpg":218,"./install.jpg":228,"./instructor.jpg":229,"./mike-speaking.jpg":230,"./new-team.jpg":231,"./old-server-mockup.jpg":232,"./ondemand.jpg":233,"./ondemand2.jpg":234,"./peelback-half.jpg":219,"./security_onion_solutions_rings.jpg":235,"./sensor_list.jpg":236,"./soc.jpg":237,"./sos-site-header-2-square.jpg":238,"./squares.jpg":239,"./workbook.jpg":240,"./world.jpg":208};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=222},function(t,e,n){t.exports=n.p+"img/1mil+_downloads.654f98c.jpg"},function(t,e,n){t.exports=n.p+"img/appliance.db240df.jpg"},function(t,e,n){t.exports=n.p+"img/copper.415548c.jpg"},function(t,e,n){t.exports=n.p+"img/course.003187e.jpg"},function(t,e,n){t.exports=n.p+"img/github_sos.4262a2b.jpg"},function(t,e,n){t.exports=n.p+"img/install.f806511.jpg"},function(t,e,n){t.exports=n.p+"img/instructor.add9a02.jpg"},function(t,e,n){t.exports=n.p+"img/mike-speaking.f3c8d70.jpg"},function(t,e,n){t.exports=n.p+"img/new-team.8451bbf.jpg"},function(t,e,n){t.exports=n.p+"img/old-server-mockup.d2de404.jpg"},function(t,e,n){t.exports=n.p+"img/ondemand.f02aabe.jpg"},function(t,e,n){t.exports=n.p+"img/ondemand2.f6ce0c4.jpg"},function(t,e,n){t.exports=n.p+"img/security_onion_solutions_rings.28912c4.jpg"},function(t,e,n){t.exports=n.p+"img/sensor_list.14fa0e8.jpg"},function(t,e,n){t.exports=n.p+"img/soc.5fed0a7.jpg"},function(t,e,n){t.exports=n.p+"img/sos-site-header-2-square.e29d2e0.jpg"},function(t,e,n){t.exports=n.p+"img/squares.6463b0b.jpg"},function(t,e,n){t.exports=n.p+"img/workbook.ec0a6d8.jpg"},function(t,e,n){"use strict";var r=n(205);n.n(r).a},function(t,e,n){(e=n(15)(!1)).push([t.i,".size[data-v-744daca7]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-744daca7]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=e},function(t,e,n){"use strict";n.r(e);n(125);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(222)("./".concat(this.fileName))}}},o=(n(241),n(3)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center items-center m-auto size",class:[this.padding?"bg-white rounded-full overflow-hidden":"xs:p-0"],style:this.sizeVar},[e("img",{attrs:{src:this.importImage()}})])}),[],!1,null,"744daca7",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(202).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("detail-para",{staticClass:"order-2 lg:order-1",class:[t.textMargin?"lg:mr-12":"xs:pr-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"order-1 lg:order-2 mb-4 lg:mb-0"},[t._t("graphic")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(202).default})},function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(202).default}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"text-3xl xl:text-4xl mb-6 font-semibold text-center"},[t._t("section-heading")],2),t._v(" "),n("div",{staticClass:"flex flex-wrap"},[n("detail-para",{staticClass:"w-full md:w-1/2 md:pr-24 mb-6",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-top-left")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-top-left")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:" w-full md:w-1/2 md:pl-12 mb-6",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-top-right")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-top-right")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"w-full md:w-1/2 md:pr-12 mb-6 md:mb-0",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-bottom-left")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-bottom-left")]},proxy:!0}],null,!0)}),t._v(" "),n("detail-para",{staticClass:"w-full md:w-1/2 md:pl-12",attrs:{align:"left"},scopedSlots:t._u([{key:"header",fn:function(){return[t._t("header-bottom-right")]},proxy:!0},{key:"body",fn:function(){return[t._t("body-bottom-right")]},proxy:!0}],null,!0)})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(202).default})},,,,,function(t,e,n){t.exports=n.p+"img/so-onion.c2b551a.svg"},function(t,e,n){t.exports=n.p+"img/credence-logo.5292dee.jpg"},function(t,e,n){t.exports=n.p+"img/elastic-logo.3ca8c9e.png"},function(t,e,n){t.exports=n.p+"img/fireeye-logo.51a4f71.png"},function(t,e,n){t.exports=n.p+"img/intelligenesis-logo.a8f73fd.png"},function(t,e,n){t.exports=n.p+"img/profitap-logo.d6d9835.png"},function(t,e,n){t.exports=n.p+"img/bryant_treacle.4f647e0.jpg"},function(t,e,n){t.exports=n.p+"img/chris_morgret.3103883.jpg"},function(t,e,n){t.exports=n.p+"img/doug_burks.267a15d.jpg"},function(t,e,n){t.exports=n.p+"img/dustin_lee.6976a6a.jpg"},function(t,e,n){t.exports=n.p+"img/jason_ertel.463fe83.jpg"},function(t,e,n){t.exports=n.p+"img/john_bernal.ffdf27f.jpg"},function(t,e,n){t.exports=n.p+"img/josh_brower.1b1ea60.jpg"},function(t,e,n){t.exports=n.p+"img/josh_patterson.1b840f1.jpg"},function(t,e,n){t.exports=n.p+"img/karen_henegar_long.336da62.jpg"},function(t,e,n){t.exports=n.p+"img/mike_reeves.4b2bdb1.jpg"},function(t,e,n){t.exports=n.p+"img/phil_plantamura.d4d23c7.jpg"},function(t,e,n){t.exports=n.p+"img/wes_lambert.d078251.jpg"},function(t,e,n){t.exports=n.p+"img/william_wernert.f120e17.jpg"},function(t,e,n){var content=n(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1e178517",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("15c498e1",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(313);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("13184b31",content,!0,{sourceMap:!1})},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(202).default},props:{featureArr:{type:Array,default:function(){return[]}}},data:function(){return{activeFeat:0}},methods:{setActiveFeat:function(t){this.activeFeat=t},screenshot:function(t){var e=this.featureArr[t].image;return n(293)("./".concat(e))}}},o=(n(305),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row items-center justify-center"},[n("div",{staticClass:"w-full lg:w-3/5 rounded-md overflow-hidden m-8 shadow-xl px-2 xs:px-0"},[n("img",{attrs:{src:t.screenshot(t.activeFeat)}})]),t._v(" "),n("div",{staticClass:"flex flex-col items-center lg:w-1/3 lg:mx-4"},t._l(t.featureArr,(function(e,r){return n("button",{key:r,staticClass:"flex justify-center items-center my-1 focus:outline-none w-4/5 xs:w-full",class:[t.activeFeat===r?"bg-gray-200 bg-opacity-25 shadow-lg rounded-lg":""],on:{click:function(e){return t.setActiveFeat(r)},focus:function(e){return t.setActiveFeat(r)}}},[n("detail-para",{staticClass:"px-6 w-full mt-4 mb-6",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          "+t._s(e.header)+"\n        ")]},proxy:!0},{key:"body",fn:function(){return[t._v("\n          "+t._s(e.body)+"\n        ")]},proxy:!0}],null,!0)})],1)})),0)])}),[],!1,null,"ba238cd4",null);e.default=component.exports;installComponents(component,{DetailPara:n(202).default})},,,,,,,,,function(t,e,n){var map={"./appliances/SOS4000-back.jpg":128,"./appliances/SOS4000-back_thumb.jpg":129,"./appliances/SOS4000-front.jpg":130,"./appliances/SOS4000-front_thumb.jpg":131,"./appliances/SOSSN7200-back.jpg":132,"./appliances/SOSSN7200-back_thumb.jpg":133,"./appliances/SOSSN7200-front.jpg":134,"./appliances/SOSSN7200-front_thumb.jpg":135,"./conference.jpg":294,"./graphics/1mil+_downloads.jpg":223,"./graphics/appliance.jpg":224,"./graphics/conference.jpg":211,"./graphics/copper.jpg":225,"./graphics/course.jpg":226,"./graphics/dots.jpg":216,"./graphics/github_sos.jpg":227,"./graphics/graph.jpg":217,"./graphics/hardware.jpg":218,"./graphics/install.jpg":228,"./graphics/instructor.jpg":229,"./graphics/mike-speaking.jpg":230,"./graphics/new-team.jpg":231,"./graphics/old-server-mockup.jpg":232,"./graphics/ondemand.jpg":233,"./graphics/ondemand2.jpg":234,"./graphics/peelback-half.jpg":219,"./graphics/security_onion_solutions_rings.jpg":235,"./graphics/sensor_list.jpg":236,"./graphics/soc.jpg":237,"./graphics/sos-site-header-2-square.jpg":238,"./graphics/squares.jpg":239,"./graphics/workbook.jpg":240,"./graphics/world.jpg":208,"./icons/so-onion.svg":250,"./partners/credence-logo.jpg":251,"./partners/elastic-logo.png":252,"./partners/fireeye-logo.png":253,"./partners/intelligenesis-logo.png":254,"./partners/profitap-logo.png":255,"./screenshots/alerts.jpg":295,"./screenshots/grafana.jpg":296,"./screenshots/hunt-slash-skinny.jpg":297,"./screenshots/hunt.jpg":298,"./screenshots/kibana.jpg":299,"./screenshots/navigator.jpg":300,"./screenshots/pcap.jpg":301,"./screenshots/playbook.jpg":302,"./screenshots/thehive.jpg":303,"./svg/sos-header.svg":304,"./svg/sos-white.svg":136,"./team/bryant_treacle.jpg":256,"./team/chris_morgret.jpg":257,"./team/doug_burks.jpg":258,"./team/dustin_lee.jpg":259,"./team/jason_ertel.jpg":260,"./team/john_bernal.jpg":261,"./team/josh_brower.jpg":262,"./team/josh_patterson.jpg":263,"./team/karen_henegar_long.jpg":264,"./team/mike_reeves.jpg":265,"./team/phil_plantamura.jpg":266,"./team/wes_lambert.jpg":267,"./team/william_wernert.jpg":268};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=293},function(t,e,n){t.exports=n.p+"img/conference.df5a49b.jpg"},function(t,e,n){t.exports=n.p+"img/alerts.77dfeda.jpg"},function(t,e,n){t.exports=n.p+"img/grafana.02449f4.jpg"},function(t,e,n){t.exports=n.p+"img/hunt-slash-skinny.99521cf.jpg"},function(t,e,n){t.exports=n.p+"img/hunt.ee13d4c.jpg"},function(t,e,n){t.exports=n.p+"img/kibana.25faa0f.jpg"},function(t,e,n){t.exports=n.p+"img/navigator.cd5acbc.jpg"},function(t,e,n){t.exports=n.p+"img/pcap.008be84.jpg"},function(t,e,n){t.exports=n.p+"img/playbook.b71cd09.jpg"},function(t,e,n){t.exports=n.p+"img/thehive.3569af2.jpg"},function(t,e,n){t.exports=n.p+"img/sos-header.d168f45.svg"},function(t,e,n){"use strict";var r=n(269);n.n(r).a},function(t,e,n){(e=n(15)(!1)).push([t.i,".graphic[data-v-ba238cd4]{height:400px;width:300px}",""]),t.exports=e},function(t){t.exports=JSON.parse('{"types":[{"name":"Agent","icon":["far","window-maximize"],"desc":"Information gathered from agent software","tools":"Beats, Wazuh, osquery"},{"name":"Alert","icon":"bell","desc":"Judgment made by a product about an event","tools":"Suricata, Wazuh"},{"name":"Asset","icon":"desktop","desc":"Metadata about hosts on the network","tools":"Zeek"},{"name":"Extracted Content","icon":"puzzle-piece","desc":"Rebuilt elements of a session and extracted metadata","tools":"Zeek"},{"name":"Full Content","icon":"stream","desc":"All packets on the network","tools":"Stenographer"},{"name":"Session","icon":"exchange-alt","desc":"Detail about conversations between hosts","tools":"Zeek, Suricata"},{"name":"Transaction","icon":"ethernet","desc":"Generated logs based on network traffic protocols","tools":"Zeek, Suricata"}]}')},function(t){t.exports=JSON.parse('{"features":[{"image":"screenshots/alerts.jpg","header":"Native Alert Queue","body":"Use our NEW Alerts interface to review and manage alerts generated by Security Onion."},{"image":"screenshots/hunt.jpg","header":"Hunt for Evil","body":"Our Hunt interface is purpose built to let you investigate events quickly and easily."},{"image":"screenshots/pcap.jpg","header":"Full PCAP Analysis","body":"Pull packet captures from network events and analyze them within SOC or your favorite external tool."}]}')},function(t){t.exports=JSON.parse('{"version":"2.3.0"}')},function(t,e,n){"use strict";var r=n(270);n.n(r).a},function(t,e,n){var r=n(15),o=n(210),l=n(219);e=r(!1);var c=o(l);e.push([t.i,".hero-software[data-v-6902eb32]{background:100% 100% no-repeat url("+c+")}",""]),t.exports=e},function(t,e,n){"use strict";var r=n(271);n.n(r).a},function(t,e,n){(e=n(15)(!1)).push([t.i,".graphic[data-v-23ff55b6]{height:200px;width:300px}",""]),t.exports=e},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r={props:{showText:{type:Boolean,default:!0},shadow:{type:Boolean,default:!0},isButton:{type:Boolean,default:!1}}},o=n(3),l={components:{Graphic:Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex content-center justify-center text-gray-700 bg-gray-400",class:[this.shadow?"shadow-xl":""]},[e("div",{staticClass:"m-auto px-4 text-center text-4xl",class:[this.isButton?"cursor-pointer":"cursor-default"]},[this.showText?e("div",[this._t("default",[this._v("\n        Graphic\n      ")])],2):this._e()])])}),[],!1,null,null,null).exports},props:{alt:{type:Boolean,default:!1}}},c=(n(312),Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center text-center"},[e("div",{staticClass:"flex flex-col items-center",class:[this.alt?"rounded bg-white text-black shadow-lg p-4":""]},[e("div",{staticClass:"text-2xl font-semibold mb-1"},[this._t("title")],2),this._v(" "),this._t("graphic",[e("graphic",{staticClass:"w-full h-48 mb-8"})]),this._v(" "),e("div",{staticClass:"text-m w-5/6"},[this._t("body")],2)],2)])}),[],!1,null,"23ff55b6",null));e.default=c.exports},,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(245),o=n(126),l=n(284),c={scrollToTop:!0,components:{FourPanelDetail:r.default,ActionCallout:o.default,FeatureSelector:l.default},data:function(){return{links:[{name:"Overview",id:"overview"},{name:"Use Cases",id:"use-cases"},{name:"Features",id:"features"}],typeArray:n(307).types,featureArr:n(308).features,soVersion:n(309).version}}},f=(n(310),n(3)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Security Onion",links:t.links}}),t._v(" "),n("SubHero",{staticClass:"hero-software",attrs:{id:"download-before"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Security Onion 2\n    ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"text-2xl"},[t._v("\n          Latest version:\n          "),n("span",{staticClass:"font-light"},[t._v(t._s(t.soVersion))])])]),t._v(" "),n("div",{staticClass:"flex justify-center"},[n("ActionCallout",{staticClass:"mt-1 xl:mt-4",attrs:{link:"https://github.com/Security-Onion-Solutions/securityonion/blob/master/VERIFY_ISO.md"},scopedSlots:t._u([{key:"button-text",fn:function(){return[t._v("\n            Download Now\n          ")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"flex justify-center"},[n("ActionCallout",{staticClass:"xl:mt-4",attrs:{link:"https://docs.securityonion.net/"},scopedSlots:t._u([{key:"button-text",fn:function(){return[t._v("\n            Documentation\n          ")]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"overview",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Overview\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("div",{staticClass:"shadow-xl rounded-md overflow-hidden"},[n("CircleGraphic",{attrs:{padding:!1,"file-name":"install.jpg",size:20}})],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion is a free and open source Linux distribution for threat hunting, enterprise security monitoring, and log management. The easy-to-use Setup wizard allows you to build an army of distributed sensors for your enterprise in minutes!\n          ")]),t._v(" "),n("div",{staticClass:"text-center xs:text-left mt-4"},[t._v("\n            Security Onion includes Elasticsearch, Logstash, Kibana, Suricata, Zeek (formerly known as Bro), Wazuh, Stenographer, TheHive, Cortex, CyberChef, NetworkMiner, and many other security tools.\n          ")])]},proxy:!0}])}),t._v(" "),n("feature-left",{staticClass:"my-12",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Highly Scalable\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl rounded-md overflow-hidden",attrs:{"file-name":"sensor_list.jpg",padding:!1,size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            From a single network appliance, to a grid of a thousand nodes, Security Onion scales to fit your specific needs.\n          ")])]},proxy:!0}])}),t._v(" "),n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Open Source Community\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("div",{staticClass:"shadow-xl rounded-md overflow-hidden"},[n("CircleGraphic",{attrs:{padding:!1,"file-name":"github_sos.jpg",size:20}})],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion and the tools we integrate are all open source, written by members of the cyber security community.\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"use-cases"}},[n("div",{staticClass:"xs:-mx-12",attrs:{id:"use_cases"}},[n("four-panel-detail",{staticClass:"mx-3 xs:mx-24",scopedSlots:t._u([{key:"section-heading",fn:function(){return[t._v("\n          Use Cases\n        ")]},proxy:!0},{key:"header-top-left",fn:function(){return[t._v("\n          NIDS\n        ")]},proxy:!0},{key:"body-top-left",fn:function(){return[t._v("\n          Collect network events from Zeek, Suricata, and other tools for complete coverage of your network. Cast a wide net to catch the bad guys quickly and easily.\n        ")]},proxy:!0},{key:"header-top-right",fn:function(){return[t._v("\n          HIDS\n        ")]},proxy:!0},{key:"body-top-right",fn:function(){return[t._v("\n          Security Onion supports several host-based event collection agents including Wazuh, Beats, and osquery. Just point them to your installation and it's off to the races.\n        ")]},proxy:!0},{key:"header-bottom-left",fn:function(){return[t._v("\n          Static Analysis (PCAP Import)\n        ")]},proxy:!0},{key:"body-bottom-left",fn:function(){return[t._v("\n          Use Security Onion to import PCAP files for quick static analysis and case studies. Spin up a virtual machine quickly and get started in just a few minutes.\n        ")]},proxy:!0},{key:"header-bottom-right",fn:function(){return[t._v("\n          SOC Workstation\n        ")]},proxy:!0},{key:"body-bottom-right",fn:function(){return[t._v("\n          A workstation install option is also available for SOC analysts to use local Linux tools to perform analysis of network and host events. No need to install extra tools, we bundle all the apps you might need.\n        ")]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"features",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Included Features\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4"},[n("feature-selector",{attrs:{"feature-arr":t.featureArr}})],1)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"data_types"}},[n("div",{staticClass:"xs:-mx-12 px-4"},[n("SectionHeader",{staticClass:"mt-6 xs:mb-8"},[t._v("\n        Data Collection\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap justify-center mt-4"},t._l(t.typeArray,(function(e,i){return n("div",{key:i,staticClass:"w-full md:w-1/3 xl:w-1/4 bg-gray-200 rounded-md m-2 p-2 h-64"},[n("VerticalFeature",{scopedSlots:t._u([{key:"graphic",fn:function(){return[n("fa",{staticClass:"mb-2",attrs:{icon:e.icon,mask:"circle",transform:"shrink-8",size:"4x"}})]},proxy:!0},{key:"title",fn:function(){return[n("div",{staticClass:"text-2xl"},[t._v("\n                "+t._s(e.name)+"\n              ")])]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex flex-col items-center text-center text-lg pt-2"},[n("div",{staticClass:"mb-2 h-20"},[t._v("\n                  "+t._s(e.desc)+"\n                ")]),t._v(" "),n("div",{staticClass:"text-gray-600 font-light text-sm"},[t._v("\n                  "+t._s(e.tools)+"\n                ")])])]},proxy:!0}],null,!0)})],1)})),0)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"hardwarehelp",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("action-callout",{staticClass:"my-12",attrs:{alt:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about Security Onion Solutions' offerings.",source:"software_general_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-2xl flex justify-center"},[n("div",[t._v("\n              Let Security Onion Solutions take care of the hardware and setup, so you can focus on threat hunting.\n            ")])])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Find Out How\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,"6902eb32",null);e.default=component.exports;installComponents(component,{PageNav:n(220).default,ActionCallout:n(126).default,SubHero:n(209).default,CircleGraphic:n(243).default,FeatureRight:n(207).default,FeatureLeft:n(244).default,ContentSection:n(221).default,FourPanelDetail:n(245).default,SectionHeader:n(206).default,FeatureSelector:n(284).default,SectionHeader:n(206).default,VerticalFeature:n(346).default,ActionCallout:n(126).default})}])]);