(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.alignment()},[this.showHeader?e("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[this._t("header")],2):this._e(),this._v(" "),e("div",{staticClass:"text-sm xs:text-lg"},[this._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},203:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5f3fab1a",content,!0,{sourceMap:!1})},204:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("5b64a149",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4589e76e",content,!0,{sourceMap:!1})},206:function(t,e,n){"use strict";n.r(e);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:this.alignment()},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n.r(e);n(211);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[e("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[e("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"text-lg xl:text-2xl"},[this._t("body")],2)]),this._v(" "),e("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);e.default=component.exports},209:function(t,e,n){"use strict";var r=n(203);n.n(r).a},210:function(t,e,n){(e=n(15)(!1)).push([t.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),t.exports=e},211:function(t,e,n){"use strict";var r=n(204);n.n(r).a},212:function(t,e,n){(e=n(15)(!1)).push([t.i,".herobase[data-v-6318ec5c]{height:400px}",""]),t.exports=e},213:function(t,e,n){"use strict";n.r(e);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(209),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[t._v("\n      "+t._s(t.pageName)+"\n      "),n("noscript",[t._v("\n        Test\n      ")])]),t._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},t._l(t.links,(function(link,e){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[t._v("\n          "+t._s(link.name)+"\n        ")]),t._v(" "),e!==t.links.length-1?n("div",{staticClass:"xs:px-1"},[t._v("\n          •\n        ")]):t._e()])})),0)])])}),[],!1,null,null,null);e.default=component.exports},214:function(t,e,n){"use strict";n.r(e);var r={props:{alt:{type:Boolean,default:!1}}},o=n(3),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"90px"}}),this._v(" "),this._t("default"),this._v(" "),e("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);e.default=component.exports},215:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(202).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),n("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(202).default})},216:function(t,e,n){t.exports=n.p+"img/squares.6463b0b.jpg"},217:function(t,e,n){t.exports=n.p+"img/terms.93431e8.jpg"},218:function(t,e,n){t.exports=n.p+"img/world.d880d30.jpg"},219:function(t,e,n){t.exports=n.p+"img/conference.1032341.jpg"},220:function(t,e,n){t.exports=n.p+"img/dots.d8b6c08.jpg"},221:function(t,e,n){t.exports=n.p+"img/graph.8400772.jpg"},222:function(t,e,n){t.exports=n.p+"img/hardware.7fda609.jpg"},223:function(t,e,n){t.exports=n.p+"img/peelback-half.cd8240d.jpg"},224:function(t,e,n){var map={"./1mil+_downloads.jpg":225,"./appliance.jpg":226,"./conference.jpg":219,"./copper.jpg":227,"./course.jpg":228,"./dots.jpg":220,"./github_sos.jpg":229,"./graph.jpg":221,"./hardware.jpg":222,"./install.jpg":230,"./instructor.jpg":231,"./mike-speaking.jpg":232,"./new-team.jpg":233,"./old-server-mockup.jpg":234,"./peelback-half.jpg":223,"./security_onion_solutions_rings.jpg":235,"./sensor_list.jpg":236,"./soc.jpg":237,"./sos-site-header-2-square.jpg":238,"./squares.jpg":216,"./terms.jpg":217,"./training1.jpg":239,"./training2.jpg":240,"./workbook.jpg":241,"./world.jpg":218};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=224},225:function(t,e,n){t.exports=n.p+"img/1mil+_downloads.654f98c.jpg"},226:function(t,e,n){t.exports=n.p+"img/appliance.db240df.jpg"},227:function(t,e,n){t.exports=n.p+"img/copper.415548c.jpg"},228:function(t,e,n){t.exports=n.p+"img/course.003187e.jpg"},229:function(t,e,n){t.exports=n.p+"img/github_sos.4262a2b.jpg"},230:function(t,e,n){t.exports=n.p+"img/install.f806511.jpg"},231:function(t,e,n){t.exports=n.p+"img/instructor.add9a02.jpg"},232:function(t,e,n){t.exports=n.p+"img/mike-speaking.f3c8d70.jpg"},233:function(t,e,n){t.exports=n.p+"img/new-team.8451bbf.jpg"},234:function(t,e,n){t.exports=n.p+"img/old-server-mockup.d2de404.jpg"},235:function(t,e,n){t.exports=n.p+"img/security_onion_solutions_rings.28912c4.jpg"},236:function(t,e,n){t.exports=n.p+"img/sensor_list.14fa0e8.jpg"},237:function(t,e,n){t.exports=n.p+"img/soc.5fed0a7.jpg"},238:function(t,e,n){t.exports=n.p+"img/sos-site-header-2-square.e29d2e0.jpg"},239:function(t,e,n){t.exports=n.p+"img/training1.f02aabe.jpg"},240:function(t,e,n){t.exports=n.p+"img/training2.f6ce0c4.jpg"},241:function(t,e,n){t.exports=n.p+"img/workbook.ec0a6d8.jpg"},242:function(t,e,n){"use strict";var r=n(205);n.n(r).a},243:function(t,e,n){(e=n(15)(!1)).push([t.i,".size[data-v-744daca7]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-744daca7]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),t.exports=e},244:function(t,e,n){"use strict";n.r(e);n(126);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(224)("./".concat(this.fileName))}}},o=(n(242),n(3)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center items-center m-auto size",class:[this.padding?"bg-white rounded-full overflow-hidden":"xs:p-0"],style:this.sizeVar},[e("img",{attrs:{src:this.importImage()}})])}),[],!1,null,"744daca7",null);e.default=component.exports},245:function(t,e,n){"use strict";n.r(e);var r={components:{DetailPara:n(202).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("detail-para",{staticClass:"order-2 lg:order-1",class:[t.textMargin?"lg:mr-12":"xs:pr-4"],scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)}),t._v(" "),n("div",{staticClass:"order-1 lg:order-2 mb-4 lg:mb-0"},[t._t("graphic")],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:n(202).default})},279:function(t,e,n){var content=n(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("b90616c8",content,!0,{sourceMap:!1})},280:function(t,e,n){var content=n(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("99eb1886",content,!0,{sourceMap:!1})},281:function(t,e,n){var content=n(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("dc6bb736",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n.r(e);var r={props:{alt:{type:Boolean,default:!1}}},o=(n(338),n(3)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center"},[e("div",{staticClass:"shadow-sm border font-bold p-4 xs:p-6 xl:py-4 xl:px-4 rounded-xl m-1 relative mx-2 lg:mx-12",class:[this.alt?"bg-so-blue text-white":"bg-white text-black"]},[e("div",{staticClass:"mx-4 text-sm xs:text-base"},[this._t("text")],2)])])}),[],!1,null,"386252c0",null);e.default=component.exports},330:function(t){t.exports=JSON.parse('{"events":[]}')},331:function(t,e,n){"use strict";var r=n(279);n.n(r).a},332:function(t,e,n){var r=n(15),o=n(208),l=n(220);e=r(!1);var c=o(l);e.push([t.i,".graphic[data-v-ad827ef4]{height:25rem;min-width:25rem}.video-placeholder[data-v-ad827ef4]{width:48rem;height:27rem}.hero-training[data-v-ad827ef4]{background:100% 100% no-repeat url("+c+")}",""]),t.exports=e},336:function(t,e,n){"use strict";var r=n(280);n.n(r).a},337:function(t,e,n){(e=n(15)(!1)).push([t.i,".hooper{height:auto}",""]),t.exports=e},338:function(t,e,n){"use strict";var r=n(281);n.n(r).a},339:function(t,e,n){(e=n(15)(!1)).push([t.i,".name[data-v-386252c0]{right:-2%;bottom:-40%}",""]),t.exports=e},358:function(t,e,n){"use strict";n.r(e);n(26);var r={components:{},props:{scheduleList:{type:Array,default:function(){return[]}}},data:function(){return{dateTimeOptions:{day:"numeric",year:"numeric",month:"short",hour:"numeric",minute:"numeric",timeZoneName:"short"}}},methods:{recordRegisterClick:function(t){this.$gtag("event","register_click",{event_category:"engagement",event_label:t.name})}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-12"},[n("ul",t._l(t.scheduleList,(function(e,r){return n("li",{key:r,staticClass:"mb-6 hover:shadow-lg"},[n("a",{attrs:{href:e.register_link,target:"_blank"},on:{click:function(n){return t.recordRegisterClick(e)}}},[n("div",{staticClass:"bg-gray-200 bg-opacity-50 border rounded-md overflow-hidden"},[n("div",{staticClass:"flex h-auto p-2 bg-gray-400 bg-opacity-25"},[n("span",{staticClass:"font-semibold text-xl"},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"h-auto px-4 pt-2 pb-4"},[n("div",{staticClass:"mb-4"},[n("span",{staticClass:"font-normal text-lg"},[t._v(t._s(e.summary))])]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(new Date(e.start).toLocaleString("en-US",t.dateTimeOptions))+" - "+t._s(new Date(e.end).toLocaleString("en-US",t.dateTimeOptions))+"\n            ")]),t._v(" "),n("div",{staticClass:"mb-1 font-light"},[t._v("\n              "+t._s(e.location)+"\n            ")])]),t._v(" "),n("div",{staticClass:"h-auto flex items-center justify-end bg-gray-400 bg-opacity-25 border-top border-dotted border-gray-800"},[n("div",{staticClass:"text-sm xs:text-xs text-so-blue xs:text-base px-4 py-2 flex items-center"},[n("div",{staticClass:"mr-2 font-semibold"},[t._v("Register")]),t._v(" "),n("fa",{attrs:{icon:["fas","external-link-alt"]}})],1)])])])])})),0)])}),[],!1,null,"c2d72c62",null);e.default=component.exports},359:function(t,e,n){"use strict";n.r(e);var r=n(333),o=(n(334),{components:{Hooper:r.a,Slide:r.b},props:{list:{type:Array,default:function(){return[]}},alt:{type:Boolean,default:!1}},data:function(){return{settings:{mouseDrag:!1,touchDrag:!1,wheelControl:!1,keysControl:!1,autoPlay:!0,playSpeed:8e3,transition:800,trimWhiteSpace:!0,itemsToShow:1}}}}),l=(n(336),n(3)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hooper",{staticClass:"focus:outline-none",attrs:{tabindex:"-1",settings:t.settings}},t._l(t.list,(function(e,r){return n("slide",{key:r},[n("Testimonial",{attrs:{alt:t.alt},scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n          "+t._s(e)+"\n        ")]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Testimonial:n(290).default})},367:function(t,e,n){"use strict";n.r(e);var r={scrollToTop:!0,components:{SectionHeader:n(206).default},data:function(){return{scheduleList:n(330).events,links:[{name:"Free",id:"free-training"},{name:"Premium",id:"premium-on-demand"},{name:"Instructor Led",id:"instructor-training"}],testimonialList:["I needed this class. This is the best instruction of SO and dedicated time to it that I have ever had.","One can tell they're not just instructors. They know the subject at an engineering level.","I've really been impressed by how this training event went. Outstanding job","It's very very rare that I get to be in a class with practitioners that are as awesome and knowledgeable as Security Onion Solutions.",'The labs were absolutely necessary and going through the case studies to "find evil" was the best.']}},head:function(){return{title:"Security Onion Solutions - Training"}}},o=(n(331),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Training",links:t.links}}),t._v(" "),n("SubHero",{staticClass:"hero-training text-center",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n      Official Training\n    ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"justify-center"},[n("div",{staticClass:"flex flex-row text-2xl justify-center"},[t._v("\n          Security Onion Solutions is the only official training provider of the Security Onion software.\n        ")]),t._v(" "),n("div",{staticClass:"flex flex-row text-xl font-light justify-center mt-8"},[t._v("\n          Choose from On-Demand (Free and Premium) or Instructor Led training.\n        ")])])]},proxy:!0}])}),t._v(" "),n("ContentSection",{attrs:{id:"free-training",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Free On-Demand\n      ")]),t._v(" "),n("div",{staticClass:"text-center text-base xs:text-lg mb-16"},[n("p",[t._v("\n          Get started by taking the "),n("span",{staticClass:"italic"},[t._v("free")]),t._v(" "),n("span",{staticClass:"font-semibold"},[t._v("Security Onion 2 Essentials")]),t._v(" training.\n        ")]),t._v(" "),n("p",[t._v("\n          This course is a prerequisite to the premium on-demand courses.\n        ")])]),t._v(" "),n("div",{staticClass:"flex justify-center"},[n("fa",{attrs:{icon:"video",size:"10x"}})],1),t._v(" "),n("div",{staticClass:"text-center text-xl"},[t._v("\n        Coming soon! This course is expected to be available in the second half of October, 2020.\n      ")])],1)]),t._v(" "),n("ContentSection",{attrs:{id:"premium-on-demand"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Premium On-Demand\n      ")]),t._v(" "),n("div",{staticClass:"text-left text-xl"},[t._v("\n        We offer online training via on-demand training modules.\n        They are a cost-effective alternative to instructor led training, but do not include the in-depth, hands-on labs that our instructor led classes offer.\n      ")]),t._v(" "),n("div",{staticClass:"text-left text-xl mt-6"},[t._v("\n        We currently provide training for both the new Security Onion 2, and existing Security Onion 16.04.\n      ")]),t._v(" "),n("feature-left",{staticClass:"my-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion 2\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl",attrs:{"file-name":"training1.jpg",size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            Courses include:\n            "),n("ul",{staticClass:"list-disc ml-6 mb-6"},[n("li",{staticClass:"my-2"},[t._v("\n                Security Onion 2 Essentials "),n("span",{staticClass:"bg-gray-200 text-sm text-red-500 font-semibold py-1 px-2 rounded-md"},[t._v("Coming Soon")])]),t._v(" "),n("li",{staticClass:"my-2"},[t._v("\n                Security Onion 2 in Production "),n("span",{staticClass:"bg-gray-200  text-sm text-red-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},[t._v("Coming Soon")])]),t._v(" "),n("li",{staticClass:"my-2"},[t._v("\n                Developing Your Detection Pipeline With Security Onion 2 "),n("span",{staticClass:"bg-gray-200 text-sm text-red-500 font-semibold py-1 px-2 rounded-md whitespace-no-wrap"},[t._v("Coming Soon")])])])]),t._v(" "),n("div",{staticClass:"align-center hidden"},[n("action-callout",{staticClass:"my-12",attrs:{link:"https://onlinetraining.securityonionsolutions.com/"},scopedSlots:t._u([{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n                  Get Started\n                ")])]},proxy:!0}])})],1)]},proxy:!0}])}),t._v(" "),n("feature-right",{staticClass:"my-6",scopedSlots:t._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            Security Onion 16.04 (legacy)\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("CircleGraphic",{staticClass:"shadow-xl",attrs:{"file-name":"training2.jpg",padding:!1,size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-left"},[t._v("\n            Courses include:\n            "),n("ul",{staticClass:"list-disc ml-6"},[n("li",{staticClass:"my-1"},[t._v("\n                Security Onion 101: Introduction to Security Onion\n              ")]),t._v(" "),n("li",{staticClass:"my-1"},[t._v("\n                Security Onion 201: Best Practices for Production Deployments\n              ")]),t._v(" "),n("li",{staticClass:"my-1"},[t._v("\n                Security Onion 301: Best Practices for Distributed Deployments\n              ")])])]),t._v(" "),n("div",{staticClass:"text-left mt-4"},[n("strong",[t._v("Best value!")]),t._v(" Purchase all three classes in a discounted bundle and get 30 days additional access!\n          ")])]},proxy:!0}])}),t._v(" "),n("action-callout",{staticClass:"my-12",attrs:{link:"https://onlinetraining.securityonionsolutions.com/"},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",[t._v("\n            Ready to check out the course details?\n          ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n            Get Started\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"instructor-training",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Instructor Led Training\n      ")]),t._v(" "),n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:t._u([{key:"graphic",fn:function(){return[n("CircleGraphic",{attrs:{"file-name":"workbook.jpg",size:20}})]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[t._v("\n            We offer multi-day comprehensive training classes with hands-on labs and real-world case studies for reinforcement!\n            Students receive printed course materials and a Certificate of Completion ready to make their adversaries cry!\n          ")]),t._v(" "),n("action-callout",{staticClass:"my-6",attrs:{alt:!0},on:{"button-click":function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about private training classes.",source:"training_private_contact_us"})}},scopedSlots:t._u([{key:"info",fn:function(){return[n("div",{staticClass:"text-xl"},[t._v("\n                Have at least 8 students and want private instructor-led training?\n              ")])]},proxy:!0},{key:"button-text",fn:function(){return[n("div",{staticClass:"text-lg my-1"},[t._v("\n                Find Out How\n              ")])]},proxy:!0}])})]},proxy:!0}])}),t._v(" "),n("DetailPara",{staticClass:"mb-16 mt-10",scopedSlots:t._u([{key:"body",fn:function(){return[t._v("\n          We are proud to offer GSA pricing through our partner IntelliGenesis!\n          Eligible organizations, please\n          "),n("span",{staticClass:"hover:text-gray-900 cursor-pointer underline",on:{click:function(e){return t.$nuxt.$emit("show-contact-modal",{text:"Please contact me with more information about GSA pricing.",source:"GSA_pricing_info"})}}},[t._v("contact us")]),t._v("\n          for more information.\n        ")]},proxy:!0}])})],1)]),t._v(" "),n("ContentSection",{attrs:{id:"public-training"}},[n("div",{staticClass:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("section-header",{staticClass:"mb-6"},[t._v("\n        Upcoming Instructor Led Training Events\n      ")]),t._v(" "),n("div",{staticClass:"flex justify-center"},[0!==t.scheduleList.length?n("training-table",{staticClass:"mx-2 xs:mx-12 lg:mx-24 xl:mx-32 w-full",attrs:{"schedule-list":t.scheduleList}}):t._e(),t._v(" "),0==t.scheduleList.length?n("div",{staticClass:"text-xl"},[t._v("\n          No classes are currently scheduled.\n        ")]):t._e()],1)],1)]),t._v(" "),n("ContentSection",{attrs:{id:"testimonials",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("SectionHeader",{staticClass:"mb-6"},[t._v("\n        Student Feedback\n      ")]),t._v(" "),n("client-only",[n("TestimonialList",{attrs:{list:t.testimonialList}})],1),t._v(" "),n("noscript",{inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Testimonial",{scopedSlots:t._u([{key:"text",fn:function(){return[t._v("\n        "+t._s(t.testimonialList[1])+"\n        ")]},proxy:!0}])})},staticRenderFns:[]}})],1)])],1)}),[],!1,null,"ad827ef4",null);e.default=component.exports;installComponents(component,{PageNav:n(213).default,SubHero:n(207).default,SectionHeader:n(206).default,ContentSection:n(214).default,CircleGraphic:n(244).default,ActionCallout:n(125).default,FeatureLeft:n(245).default,FeatureRight:n(215).default,DetailPara:n(202).default,TrainingTable:n(358).default,SectionHeader:n(206).default,TestimonialList:n(359).default,Testimonial:n(290).default})}}]);