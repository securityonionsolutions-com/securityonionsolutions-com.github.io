(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{202:function(e,t,n){"use strict";n.r(t);var r={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(3),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.alignment()},[this.showHeader?t("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[this._t("header")],2):this._e(),this._v(" "),t("div",{staticClass:"text-sm xs:text-lg"},[this._t("body")],2)])}),[],!1,null,null,null);t.default=component.exports},203:function(e,t,n){var content=n(213);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("5f3fab1a",content,!0,{sourceMap:!1})},204:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("5b64a149",content,!0,{sourceMap:!1})},205:function(e,t,n){var content=n(242);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("4589e76e",content,!0,{sourceMap:!1})},206:function(e,t,n){"use strict";n.r(t);var r={props:{align:{type:String,default:"center"}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},o=n(3),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"text-3xl xl:text-4xl font-semibold",class:this.alignment()},[this._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},207:function(e,t,n){"use strict";n.r(t);var r={components:{DetailPara:n(202).default},props:{textMargin:{type:Boolean,default:!0}}},o=n(3),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[n("div",{staticClass:"mb-4 lg:mb-0"},[e._t("graphic")],2),e._v(" "),n("detail-para",{class:[e.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-3xl"},[e._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-base xs:text-xl"},[e._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DetailPara:n(202).default})},208:function(e,t,n){e.exports=n.p+"img/world.d880d30.jpg"},209:function(e,t,n){"use strict";n.r(t);n(214);var r=n(3),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"herobase flex flex-row xs:-mx-12"},[t("div",{staticClass:"flex flex-col w-full md:w-1/2 h-full items-center bg-white bg-opacity-90 md:bg-opacity-100 pt-16 px-2 xs:px-8"},[t("header",{staticClass:"text-3xl xl:text-5xl font-bold text-center"},[this._t("header")],2),this._v(" "),t("div",{staticClass:"text-lg xl:text-2xl"},[this._t("body")],2)]),this._v(" "),t("div",{staticClass:"md:flex md:flex-col md:w-1/4 md:h-full md:bg-gradient-to-r md:from-white md:to-transparent"})])}),[],!1,null,"6318ec5c",null);t.default=component.exports},210:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},211:function(e,t,n){e.exports=n.p+"img/conference.1032341.jpg"},212:function(e,t,n){"use strict";var r=n(203);n.n(r).a},213:function(e,t,n){(t=n(15)(!1)).push([e.i,".nav-style{border-bottom:1px solid #d3d3d3}",""]),e.exports=t},214:function(e,t,n){"use strict";var r=n(204);n.n(r).a},215:function(e,t,n){(t=n(15)(!1)).push([e.i,".herobase[data-v-6318ec5c]{height:400px}",""]),e.exports=t},216:function(e,t,n){e.exports=n.p+"img/dots.d8b6c08.jpg"},217:function(e,t,n){e.exports=n.p+"img/graph.8400772.jpg"},218:function(e,t,n){e.exports=n.p+"img/hardware.d076817.jpg"},219:function(e,t,n){e.exports=n.p+"img/peelback-half.cd8240d.jpg"},220:function(e,t,n){"use strict";n.r(t);var r={props:{pageName:{type:String,default:""},links:{type:Array,default:function(){return[{name:"",id:""}]}}}},o=(n(212),n(3)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xs:-mx-12"},[n("div",{staticClass:"w-full px-2 xs:px-4 pt-1 flex flex-wrap justify-between items-center nav-style bg-gray-100"},[n("div",{staticClass:"text-md xs:text-xl font-light pb-1"},[e._v("\n      "+e._s(e.pageName)+"\n      "),n("noscript",[e._v("\n        Test\n      ")])]),e._v(" "),n("div",{staticClass:"flex flex-row -mx-2 content-center font-light pb-1 text-xs xs:text-base"},e._l(e.links,(function(link,t){return n("div",{key:link.name,staticClass:"flex flex-row"},[n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#"+link.id,expression:"`#${link.id}`"}],staticClass:"px-2 hover:text-gray-700",attrs:{href:"#"}},[e._v("\n          "+e._s(link.name)+"\n        ")]),e._v(" "),t!==e.links.length-1?n("div",{staticClass:"xs:px-1"},[e._v("\n          •\n        ")]):e._e()])})),0)])])}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,n){"use strict";n.r(t);var r={props:{alt:{type:Boolean,default:!1}}},o=n(3),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"flex flex-col"},[t("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"90px"}}),this._v(" "),this._t("default"),this._v(" "),t("div",{staticClass:"xs:-ml-12 xs:-mr-12",class:[this.alt?"bg-so-blue":""],staticStyle:{height:"70px"}})],2)])}),[],!1,null,null,null);t.default=component.exports},222:function(e,t,n){var map={"./1mil+_downloads.jpg":223,"./appliance.jpg":224,"./conference.jpg":211,"./copper.jpg":225,"./course.jpg":226,"./dots.jpg":216,"./github_sos.jpg":227,"./graph.jpg":217,"./hardware.jpg":218,"./install.jpg":228,"./instructor.jpg":229,"./mike-speaking.jpg":230,"./new-team.jpg":231,"./old-server-mockup.jpg":232,"./ondemand.jpg":233,"./ondemand2.jpg":234,"./peelback-half.jpg":219,"./security_onion_solutions_rings.jpg":235,"./sensor_list.jpg":236,"./soc.jpg":237,"./sos-site-header-2-square.jpg":238,"./squares.jpg":239,"./workbook.jpg":240,"./world.jpg":208};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=222},223:function(e,t,n){e.exports=n.p+"img/1mil+_downloads.654f98c.jpg"},224:function(e,t,n){e.exports=n.p+"img/appliance.db240df.jpg"},225:function(e,t,n){e.exports=n.p+"img/copper.415548c.jpg"},226:function(e,t,n){e.exports=n.p+"img/course.003187e.jpg"},227:function(e,t,n){e.exports=n.p+"img/github_sos.4262a2b.jpg"},228:function(e,t,n){e.exports=n.p+"img/install.f806511.jpg"},229:function(e,t,n){e.exports=n.p+"img/instructor.add9a02.jpg"},230:function(e,t,n){e.exports=n.p+"img/mike-speaking.f3c8d70.jpg"},231:function(e,t,n){e.exports=n.p+"img/new-team.8451bbf.jpg"},232:function(e,t,n){e.exports=n.p+"img/old-server-mockup.d2de404.jpg"},233:function(e,t,n){e.exports=n.p+"img/ondemand.f02aabe.jpg"},234:function(e,t,n){e.exports=n.p+"img/ondemand2.f6ce0c4.jpg"},235:function(e,t,n){e.exports=n.p+"img/security_onion_solutions_rings.28912c4.jpg"},236:function(e,t,n){e.exports=n.p+"img/sensor_list.14fa0e8.jpg"},237:function(e,t,n){e.exports=n.p+"img/soc.5fed0a7.jpg"},238:function(e,t,n){e.exports=n.p+"img/sos-site-header-2-square.e29d2e0.jpg"},239:function(e,t,n){e.exports=n.p+"img/squares.6463b0b.jpg"},240:function(e,t,n){e.exports=n.p+"img/workbook.ec0a6d8.jpg"},241:function(e,t,n){"use strict";var r=n(205);n.n(r).a},242:function(e,t,n){(t=n(15)(!1)).push([e.i,".size[data-v-744daca7]{height:15rem;width:15rem;min-width:15rem}@media (min-width:480px){.size[data-v-744daca7]{height:var(--size);width:var(--size);min-width:var(--size)}}",""]),e.exports=t},243:function(e,t,n){"use strict";n.r(t);n(125);var r={props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0}},computed:{sizeVar:function(){return{"--size":"".concat(this.size,"rem")}}},methods:{importImage:function(){return n(222)("./".concat(this.fileName))}}},o=(n(241),n(3)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex justify-center items-center m-auto size",class:[this.padding?"bg-white rounded-full overflow-hidden":"xs:p-0"],style:this.sizeVar},[t("img",{attrs:{src:this.importImage()}})])}),[],!1,null,"744daca7",null);t.default=component.exports},246:function(e,t,n){var content=n(288);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("f6ef722c",content,!0,{sourceMap:!1})},282:function(e){e.exports=JSON.parse('{"upcoming":{"year":2020,"date":"Oct 16, 2020","location":"Online"},"past":[{"year":2019,"date":"Oct 18, 2019","location":"Augusta, GA","pictures":"https://blog.securityonion.net/2019/10/pictures-from-security-onion-conference.html","playlist":"https://www.youtube.com/playlist?list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa","events":[{"speakers":["Wes Lambert"],"pres_name":"Augmenting the Onion: Facilitating Enhanced Detection and Response with Open Source Tools","links":{"video":"https://www.youtube.com/watch?v=XcFZV5J8juo&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=2"}},{"speakers":["Chris Sanders","Stef Rand"],"pres_name":"Creativity, Intelligence, and Security Analyst Thinking Modes","links":{"video":"https://www.youtube.com/watch?v=tZxr3cHElCw&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=3"}},{"speakers":["Josh Brower"],"pres_name":"Constructing Your Playbook within Security Onion","links":{"video":"https://www.youtube.com/watch?v=qBXg3IUJPjY&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=4"}},{"speakers":["Wylie Bayes"],"pres_name":"Building a Detection Lab with SecurityOnion","links":{"video":"https://www.youtube.com/watch?v=JOvWCQ-PHHY&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=5"}},{"speakers":["Bryant Treacle"],"pres_name":"Finding traffic anomalies using SSL certificates","links":{"video":"https://www.youtube.com/watch?v=-WD9BWlENwc&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=6"}},{"speakers":["Benjamin Klimkowski","Sean Eyre"],"pres_name":"Peeling Back the Layers: Using Security Onion to See Adversary Activity through All Phases of the Kill Chain","links":{"video":"https://www.youtube.com/watch?v=9ghFZf61FW4&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=7"}},{"speakers":["Doug Burks"],"pres_name":"State of the Onion","links":{"video":"https://www.youtube.com/watch?v=1B5bgH71hYc&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=8"}}]},{"year":2018,"date":"Oct 22, 2018","location":"Augusta, GA","pictures":"https://blog.securityonion.net/2018/10/pictures-from-security-onion-conference.html","playlist":"https://www.youtube.com/playlist?list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh","events":[{"speakers":["Mark Jeanmougin"],"pres_name":"Save Time with Modern Filtering Techniques","links":{"video":"https://www.youtube.com/watch?v=gOcBaY0e5AA&index=2&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh"}},{"speakers":["Don Murdoch"],"pres_name":"Blue, Red, Purple, White: Which team are you on?","links":{"video":"https://www.youtube.com/watch?v=LeeQ5OeGhG4&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh&index=3"}},{"speakers":["Todd Gay"],"pres_name":"Welcome to Georgia Cyber Center","links":{"video":"https://www.youtube.com/watch?v=P-zTOnVygBw&index=4&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh"}},{"speakers":["Brad Duncan"],"pres_name":"Pcaps Ahoy!","links":{"video":"https://www.youtube.com/watch?v=12PCO8_6-x4&index=5&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh"}},{"speakers":["Josh Brower"],"pres_name":"Integrating Osquery into Security Onion","links":{"video":"https://www.youtube.com/watch?v=I-SXeKf0UYQ&index=6&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh"}},{"speakers":["Mark Baggett"],"pres_name":"Getting the Most out of Freq and Domain_Stats","links":{"video":"https://www.youtube.com/watch?v=dfrh1FaFUic&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh&index=7"}},{"speakers":["David Bianco"],"pres_name":"Introduction to Data Analysis","links":{"video":"https://www.youtube.com/watch?v=A6hBoeSNJJw&index=8&list=PLljFlTO9rB16NPfCWXTCOrYCrN2FZNDsh"}},{"speakers":["Doug Burks","Mike Reeves"],"pres_name":"State of the Onion","links":{"video":"https://www.youtube.com/watch?v=1B5bgH71hYc&list=PLljFlTO9rB16UHGHbo4dTR5qzvJObEBoa&index=8"}}]},{"year":2017,"date":"Sep 18, 2017","location":"Augusta, GA","pictures":"https://blog.securityonion.net/2017/09/pictures-from-security-onion-conference.html","playlist":"https://www.youtube.com/playlist?list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k","events":[{"speakers":["Matt Domko"],"pres_name":"Arming Small Security Programs: Network Baseline Generation and Alerts with Bropy","links":{"video":"https://www.youtube.com/watch?v=LzFNOuaYc0g&index=2&list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k"}},{"speakers":["Don Murdoch"],"pres_name":"Building your Sec Ops Use Case","links":{"video":"https://www.youtube.com/watch?v=4ESQ0GfPHYY&index=3&list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k"}},{"speakers":["Joel Ester"],"pres_name":"Snort: History and Vision","links":{"video":"https://www.youtube.com/watch?v=3gS7MKO-cFE&index=4&list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k"}},{"speakers":["Rob Gresham"],"pres_name":"Orchestrating into SO-OODA","links":{"video":"https://www.youtube.com/watch?v=w3WRuTW865Q&list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k&index=5"}},{"speakers":["Chris Sanders"],"pres_name":"Pivoting Effectively to Catch More Bad Guys","links":{"video":"https://www.youtube.com/watch?v=_QVhMPGtIeU&index=6&list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k"}},{"speakers":["Doug Burks"],"pres_name":"State of the Onion","links":{"video":"https://www.youtube.com/watch?v=N1jmk7L4jj0&index=7&list=PLljFlTO9rB15jhnSfR6shBEskTgGbta2k"}}]},{"year":2016,"date":"Sep 13, 2016","location":"Augusta, GA","pictures":"https://blog.securityonion.net/2016/09/pictures-from-security-onion-conference.html","playlist":"https://www.youtube.com/playlist?list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe","events":[{"speakers":["Eric Conrad"],"pres_name":"C2 Phone Home: Leveraging Security Onion to Identify C&C Channels","links":{"video":"https://www.youtube.com/watch?v=ViR405l-ggg&index=1&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe","book-open":"http://www.ericconrad.com/2016/09/c2-phone-home-leveraging-securityonion.html"}},{"speakers":["Robert M. Lee"],"pres_name":"ICS/SCADA Network Security Monitoring in Difficult Scenarios","links":{"video":"https://www.youtube.com/watch?v=R67qce_KrY8&index=2&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe"}},{"speakers":["Josh Brower"],"pres_name":"Uncovering Persistence With Autoruns & Security Onion","links":{"video":"https://www.youtube.com/watch?v=LT45m30Ev4s&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=3","book-open":"http://www.Slideshare.net/DefensiveDepth/security-onion-conference-2016"}},{"speakers":["Chris Sanders"],"pres_name":"The Investigation Labyrinth","links":{"video":"https://www.youtube.com/watch?v=nW9g2K69qOA&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=4","book-open":"http://www.Slideshare.net/chrissanders88/soc2016-the-investigation-labyrinth?cardname=player&autoplay_disabled=true&earned=true&lang=en&card_height=130"}},{"speakers":["Martin Holste"],"pres_name":"ELSA 2.0","links":{"video":"https://www.youtube.com/watch?v=U8gwKp8enYQ&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=5","book-open":"https://drive.google.com/file/d/0By1KXg1ivlIeaDNBd2VBT0NUMFU/view"}},{"speakers":["Chris McCubbin"],"pres_name":"Practical Cyborgism: Machine Learning for Bro Logs","links":{"video":"https://www.youtube.com/watch?v=ZV5Ckf9wLrc&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=6"}},{"speakers":["Brad Duncan"],"pres_name":"My Use of Security Onion as a researcher","links":{"video":"https://www.youtube.com/watch?v=eFaPVym_n1A&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=7"}},{"speakers":["Nathan Crews","Tanner Payne"],"pres_name":"Simplifying Home Security with CHIVE","links":{"video":"https://www.youtube.com/watch?v=zBDAjNnRiQI&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=8"}},{"speakers":["Doug Burks"],"pres_name":"State of the Onion","links":{"video":"https://www.youtube.com/watch?v=AXk-Te_lMmg&list=PLljFlTO9rB15Tve-LhV5k_5_0HH37eALe&index=9"}}]},{"year":2015,"date":"Sep 11, 2015","location":"Augusta, GA","events":[{"speakers":["Todd Heberlein"],"pres_name":"Looking Back Over a Quarter Century of Network Monitoring","links":{"blog":"http://www.toddheberlein.com/blog/2015/9/11/security-onion-conference-presentation"}},{"speakers":["Seth Hall"],"pres_name":"Detect it Once","links":{"book-open":"https://drive.google.com/file/d/0BzQ65xrcMwNEYU4yQnV0QmYzX2s/view?usp=sharing"}},{"speakers":["Martin Holste"],"pres_name":"Security Event Data in the OODA Loop Model","links":{"book-open":"https://prezi.com/qzar9ip-zlvt/security-event-data-in-the-ooda-loop-model/"}},{"speakers":["Chris Sistrunk"],"pres_name":"Industrially Hardened Security Onion Sensor","links":{"book-open":"http://www.Slideshare.net/chrissistrunk/def-con-23-nsm-101-for-ics"}},{"speakers":["Josh Brower"],"pres_name":"Using Sysmon to Enrich Security Onion\'s Host-Level Capabilities","links":{"blog":"http://defensivedepth.com/2015/09/11/socaugusta-deck-sysmon-security-onion-integration/"}},{"speakers":["Chris Montgomery"],"pres_name":"Threat Intel Powered IDS"}]},{"year":2014,"date":"Sep 12, 2014","location":"Augusta, GA","events":[{"speakers":["Richard Bejtlich"],"pres_name":"Keynote Speech"},{"speakers":["Dustin Webber"],"pres_name":"Why I Built Snorby and the Future of Security Interfaces"},{"speakers":["Paul Halliday"],"pres_name":"SQUERT - An Open Source Web Interface for NSM Data"},{"speakers":["Martin Holste"],"pres_name":"ELSA"},{"speakers":["Mike Reeves"],"pres_name":"Scaling Security Onion to the Enterprise"},{"speakers":["Josh Brower"],"pres_name":"The Security Onion Cloud Client"},{"speakers":["Chris Sanders","Jason Smith"],"pres_name":"Using Flow Data Effectively"},{"speakers":["Ben Knowles"],"pres_name":"Learn Analysis and Forensics for Free** with Security Onion"},{"speakers":["Tim Krabec"],"pres_name":"Custodiet MSSP Framework"},{"speakers":["Scott Runnels"],"pres_name":"Contributing to Security Onion"},{"speakers":["Doug Burks"],"pres_name":"State of the Onion, Q&A, Closing Remarks"}]}]}')},287:function(e,t,n){"use strict";var r=n(246);n.n(r).a},288:function(e,t,n){var r=n(15),o=n(210),l=n(211);t=r(!1);var c=o(l);t.push([e.i,'@media (min-width:480px){.alt{margin-left:-3rem;margin-right:-3rem}}@media (min-width:768px){.alt{padding-left:8rem;padding-right:8rem}.white{padding-left:4rem;padding-right:4rem}}.alt{--bg-opacity:1;background-color:#1976d2;background-color:rgba(25,118,210,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));padding-left:3rem;padding-right:3rem}.video-container{overflow:hidden;position:relative}.video-container:after{padding-top:56.25%;display:block;content:""}.video-container iframe{position:absolute;top:0;left:0;width:100%;height:100%}.hero-conference{background:100% 100% no-repeat url('+c+")}",""]),e.exports=t},351:function(e,t,n){"use strict";n.r(t);n(47),n(48),n(33),n(14);var r={data:function(){return{links:[{name:"About",id:"about"},{name:"Past Conferences",id:"past"}],conferences:n(282).past,upcoming:n(282).upcoming,pictures:{},hooperSettings:{itemsToShow:1,centerMode:!0,wheelControl:!1,keysControl:!1,playSpeed:5e3,transition:800,trimWhiteSpace:!0},imageSize:{width:"",height:"24rem"}}},methods:{importAll:function(e,t){var n=this;this.pictures[t]=[],e.keys().forEach((function(r){e(r).includes("/conferences/".concat(t))&&n.pictures[t].push({pathLong:e(r),pathShort:r})}))},updateImageSize:function(e){this.imageSize.width="".concat(e.slideWidth,"px")},recordRegisterClick:function(){this.$gtag("event","register_click",{event_category:"engagement",event_label:"SO Conference ".concat(this.upcoming.year)})}}},o=(n(287),n(3)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xs:px-12"},[n("PageNav",{attrs:{"page-name":"Conference",links:e.links}}),e._v(" "),n("SubHero",{staticClass:"hero-conference text-center",scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n      Security Onion Conference "+e._s(e.upcoming.year)+"\n    ")]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"flex justify-center"},[n("div",{staticClass:"text-2xl"},[n("span",{staticClass:"font-light whitespace-nowrap"},[e._v("\n            "+e._s(e.upcoming.date)+"\n            "),n("fa",{staticClass:"mx-2",attrs:{icon:"caret-right",transform:"shrink-5"}}),e._v("\n            "+e._s(e.upcoming.location)+"\n          ")],1)])]),e._v(" "),n("div",{staticClass:"pt-3"},[e._v("\n        Registration is now closed. If you didn't make it this year, check back soon for recordings, pictures, and more!\n      ")])]},proxy:!0}])}),e._v(" "),n("ContentSection",{attrs:{id:"about",alt:!0}},[n("div",{staticClass:"bg-so-blue text-white xs:-mx-12 px-6 xs:px-12 lg:px-32"},[n("feature-right",{staticClass:"xs:mb-12",attrs:{"text-margin":!0},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[e._v("\n            Who Should Attend\n          ")])]},proxy:!0},{key:"graphic",fn:function(){return[n("div",{staticClass:"shadow-xl rounded-full overflow-hidden"},[n("CircleGraphic",{attrs:{padding:!1,"file-name":"instructor.jpg",size:20}})],1)]},proxy:!0},{key:"body",fn:function(){return[n("div",{staticClass:"text-center xs:text-left"},[e._v("\n            If you use, or are considering using Security Onion, then you should attend Security Onion Conference! Find out what's new with Security Onion, learn best practices and exchange ideas with other users.\n          ")]),e._v(" "),n("div",{staticClass:"text-center xs:text-left mt-4"},[e._v("\n            If you're generally interested in things like intrusion detection, network security monitoring, enterprise security monitoring, log management, hunting, and blue teaming, then you should consider attending Security Onion Conference!\n          ")])]},proxy:!0}])})],1)]),e._v(" "),n("ContentSection",{attrs:{id:"past"}},[n("SectionHeader",{staticClass:"mb-10"},[n("div",{staticClass:"text-lg xs:text-5xl"},[e._v("\n        Past Conferences\n      ")])]),e._v(" "),n("div",{staticClass:"lg:flex lg:flex-row justify-center mb-4"},e._l(e.conferences,(function(t,i){return n("so-button",{key:i,staticClass:"flex flex-col w-1/2 lg:w-auto mx-auto lg:mx-2 my-2",attrs:{link:"#"+t.year}},[e._v("\n        "+e._s(t.year)+"\n      ")])})),1),e._v(" "),e._l(e.conferences,(function(t,i){return n("div",{key:i,staticClass:"shadow-xl rounded-md overflow-hidden m-4",class:[i%2==0?"bg-gray-200":"bg-so-blue text-white"],attrs:{id:t.year}},[n("div",{staticClass:"h-20"}),e._v(" "),n("div",{staticClass:"pb-10 text-center"},[n("div",{staticClass:"mb-10"},[n("div",{staticClass:"text-5xl font-semibold"},[e._v("\n            Security Onion Conference "+e._s(t.year)+"\n          ")]),e._v(" "),n("div",{staticClass:"text-2xl"},[e._v("\n            "+e._s(t.date)+"\n            "),n("fa",{staticClass:"mx-2",attrs:{icon:"caret-right",transform:"shrink-5"}}),e._v("\n            "+e._s(t.location)+"\n          ")],1),e._v(" "),n("div",[t.pictures?n("a",{staticClass:"mx-4",attrs:{href:t.pictures,target:"_blank"}},[n("fa",{attrs:{icon:"camera"}})],1):e._e()])]),e._v(" "),n("div",{staticClass:"flex flex-col items-center content-center"},[t.playlist?n("div",{staticClass:"mb-10 w-full lg:w-2/3 video-container shadow-xl rounded-md overflow-hidden"},[n("iframe",{attrs:{id:"existing-iframe-example",src:t.playlist.replace("playlist?list=","embed/videoseries?list="),frameborder:"0",allowfullscreen:""}})]):e._e(),e._v(" "),t.events?n("div",{staticClass:"mb-4 justify-center"},[n("div",{staticClass:"text-3xl mb-2 font-bold"},[e._v("\n              Presentations\n            ")]),e._v(" "),n("div",{staticClass:"h-4"}),e._v(" "),e._l(t.events,(function(t,r){return n("div",{key:r,staticClass:"mb-4"},[n("div",{staticClass:"flex flex-row text-lg font-semibold  justify-center"},[e._v("\n                "+e._s(t.pres_name)+"\n              ")]),e._v(" "),n("div",{staticClass:"flex flex-row justify-center"},e._l(t.speakers,(function(r,o){return n("div",{key:o,staticClass:"mr-1 font-light"},[e._v("\n                  "+e._s(r)+"\n                  "),t.speakers.length>1&&o!==t.speakers.length-1?n("span",[e._v("&")]):e._e()])})),0),e._v(" "),t.links?n("div",{staticClass:"ml-4"},e._l(t.links,(function(e,t){return n("a",{key:t,attrs:{target:"_blank",href:e}},[n("fa",{staticClass:"mx-2",attrs:{icon:t}})],1)})),0):e._e()])}))],2):e._e()])])])}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageNav:n(220).default,SubHero:n(209).default,CircleGraphic:n(243).default,FeatureRight:n(207).default,ContentSection:n(221).default,SectionHeader:n(206).default,SoButton:n(87).default})}}]);