(window.webpackJsonp=window.webpackJsonp||[]).push([[14,10],{278:function(t,e,l){"use strict";l.r(e);var n={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment:function(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{class:t.alignment()},[t.showHeader?l("header",{staticClass:"text-xl xs:text-2xl font-bold mb-2"},[t._t("header")],2):t._e(),t._v(" "),l("div",{staticClass:"text-sm xs:text-lg"},[t._t("body")],2)])}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,l){"use strict";l.r(e);var n={components:{DetailPara:l(278).default},props:{textMargin:{type:Boolean,default:!0}}},r=l(9),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-col lg:flex-row lg:justify-start items-center"},[l("div",{staticClass:"mb-4 lg:mb-0"},[t._t("graphic")],2),t._v(" "),l("detail-para",{class:[t.textMargin?"lg:ml-12":"xs:pl-4"],scopedSlots:t._u([{key:"header",fn:function(){return[l("div",{staticClass:"text-3xl"},[t._t("header")],2)]},proxy:!0},{key:"body",fn:function(){return[l("div",{staticClass:"text-base xs:text-xl"},[t._t("body")],2)]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailPara:l(278).default})}}]);