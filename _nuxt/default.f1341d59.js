import{j as T,_ as p,o as r,c as u,a as t,s as D,t as b,r as O,d as o,w as l,h as x,e as a,p as L,f as N,x as E,T as F,b as H,y as V,i as w,z as y,A as k}from"./entry.82b424d1.js";import{_ as $}from"./nuxt-link.f819f5a6.js";import S from"./Icon.64b5c597.js";import{s as f}from"./sos.69fe02d0.js";import"./config.cfb13b8e.js";const j=T({name:"Head",inheritAttrs:!1,setup:(e,n)=>()=>{var c,m;return(m=(c=n.slots).default)==null?void 0:m.call(c)}});const A={props:{name:{type:String,default:"",required:!0},imageType:{type:String,default:"thumbnail",required:!0}},data:()=>({wide:!0}),computed:{sizeVar(){return window.innerHeight>=800?{"--size":`${this.wide?75:50}rem`}:{"--size":`${this.wide?65:45}rem`}}},mounted(){const e=new Image;e.src=this.importImage(),e.width/e.height<=1&&(this.wide=!1)},methods:{importImage(){let e,n;return this.imageType==="appliance"?(e=this.name.replace("-thumb",""),n="appliances"):this.imageType==="fullsize"?(e=this.name.replace("-thumb",""),n="graphics"):this.imageType==="screenshot"?(e=this.name,n="graphics"):(e=this.name,n="graphics"),`/img/${n}/${e}`}}},B=["src"];function P(e,n,c,m,g,i){return r(),u("div",{class:"rounded bg-white p-8",style:D(i.sizeVar)},[t("img",{src:i.importImage()},null,8,B)],4)}const q=p(A,[["render",P],["__scopeId","data-v-4044ef3e"]]);const R={props:{detailText:{type:String,default:""},domainName:{type:String,default:""},testPercent:{type:Number,default:0}}},K={class:"flex flex-col justify-center content-center text-center px-6 py-12 sm:py-10 sm:px-20 bg-white border border-gray-800 rounded detail-wrapper"},U={class:"text-4xl font-semibold mb-8"},Z={class:"text-lg mb-10"},Q={class:"text-md font-light"};function W(e,n,c,m,g,i){return r(),u("div",K,[t("div",U,b(c.domainName),1),t("div",Z,b(c.detailText),1),t("div",Q,b(c.testPercent)+"% of questions ",1)])}const Y=p(R,[["render",W],["__scopeId","data-v-be0534d4"]]),G=""+new URL("sos-white.4279da22.svg",import.meta.url).href;const J={data:()=>({sos:f,dropdownOpen:!1}),mounted(){const e=n=>{(n.key==="Esc"||n.key==="Escape")&&(this.dropdownOpen=!1)};document.addEventListener("keydown",e)},methods:{}},C=e=>(L("data-v-0cc0e1dc"),e=e(),N(),e),X={class:"flex justify-center w-full navbar"},ee={class:"mx-auto flex-grow flex items-center justify-between flex-wrap bg-black py-2 lg:pb-2 lg:pt-4 z-50 container"},te={class:"flex items-end flex-shrink-0 text-white xs:mr-6 h-full -ml-1 lg:-ml-2 lg:-mb-3"},oe=C(()=>t("img",{class:"nav-icon",src:G},null,-1)),ne={class:"block lg:hidden relative"},se={id:"Layer_1",class:"h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"32px",style:{"enable-background":"new 0 0 32 32"},version:"1.1",viewBox:"0 0 32 32",width:"32px","xml:space":"preserve"},le=C(()=>t("path",{d:`M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
            s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
            S29.104,22,28,22z`},null,-1)),ae=[le],ie={class:"cursor-default hidden lg:flex flex-col mr-2"},re={class:"flex flex-row items-center justify-end mb-1 mt-4 lg:mt-0 text-white"},ce={class:"block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue",href:"https://twitter.com/securityonion",target:"_blank"},de={class:"block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue",href:"https://infosec.exchange/@securityonion",target:"_blank"},ue={class:"block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue",href:"https://securityonion.net/discuss",target:"_blank"},_e={class:"block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue",href:"https://www.linkedin.com/company/security-onion-solutions-llc",target:"_blank"},fe={class:"block rounded-lg mr-3 lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue",href:"https://securityonion.net/youtube",target:"_blank"},me={class:"flex flex-row mt-4 lg:mt-0"};function he(e,n,c,m,g,i){const _=O("router-link"),s=$,d=S;return r(),u("div",X,[t("nav",ee,[t("div",te,[o(_,{to:"/",class:"flex items-end focus:outline-none active:outline-none h-full"},{default:l(()=>[oe]),_:1})]),t("div",ne,[t("button",{class:"relative z-10 block bg-none hover:bg-gray-900 border-2 border-gray-900 text-gray-300 focus:text-white hover:text-white py-2 px-2 mr-4 rounded-lg focus:outline-none",onClick:n[0]||(n[0]=h=>e.dropdownOpen=!e.dropdownOpen)},[(r(),u("svg",se,ae))]),e.dropdownOpen?(r(),u("button",{key:0,tabIndex:"-1",class:"fixed h-full w-full inset-0 bg-black opacity-25 cursor-default",onClick:n[1]||(n[1]=h=>e.dropdownOpen=!1)})):x("",!0),e.dropdownOpen?(r(),u("div",{key:1,class:"absolute right-0 mt-1 shadow-xl bg-white rounded-lg py-2 w-48",onClick:n[2]||(n[2]=h=>e.dropdownOpen=!e.dropdownOpen)},[o(s,{to:"/software",class:"dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"},{default:l(()=>[a(" Software ")]),_:1}),o(s,{to:"/hardware",class:"dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"},{default:l(()=>[a(" Hardware ")]),_:1}),o(s,{to:"/training",class:"dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"},{default:l(()=>[a(" Training ")]),_:1}),o(s,{to:"/certification",class:"dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"},{default:l(()=>[a(" Certification ")]),_:1}),o(s,{to:"/support",class:"dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"},{default:l(()=>[a(" Support ")]),_:1}),o(s,{to:"/conference",class:"dropdown block px-4 p-2 hover:bg-so-blue hover:text-white focus:outline-none focus:bg-so-blue focus:text-white"},{default:l(()=>[a(" Conference ")]),_:1})])):x("",!0)]),t("div",ie,[t("div",re,[t("a",ce,[o(d,{name:"fa6-brands:twitter"})]),t("a",de,[o(d,{name:"fa6-brands:mastodon"})]),t("a",ue,[o(d,{name:"fa6-brands:github"})]),t("a",_e,[o(d,{name:"fa6-brands:linkedin"})]),t("a",fe,[o(d,{name:"fa6-brands:youtube"})]),t("div",{class:"block rounded-lg lg:inline-block text-lg focus:outline-none cursor-pointer hover:text-so-blue",onClick:n[3]||(n[3]=h=>e.sos.showContactModal({text:"",source:"header_icon"}))},[o(d,{name:"fa6-regular:envelope"})])]),t("div",me,[o(s,{to:"/software",class:"block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"},{default:l(()=>[a(" Software ")]),_:1}),o(s,{to:"/hardware",class:"block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"},{default:l(()=>[a(" Hardware ")]),_:1}),o(s,{to:"/training",class:"block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"},{default:l(()=>[a(" Training ")]),_:1}),o(s,{to:"/certification",class:"block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"},{default:l(()=>[a(" Certification ")]),_:1}),o(s,{to:"/support",class:"block lg:inline-block text-gray-400 hover:text-blue-500 mr-5 text-lg font-light focus:outline-none focus:text-blue-500"},{default:l(()=>[a(" Support ")]),_:1}),o(s,{to:"/conference",class:"block lg:inline-block text-gray-400 hover:text-blue-500 text-lg font-light focus:outline-none focus:text-blue-500"},{default:l(()=>[a(" Conference ")]),_:1})])])])])}const pe=p(J,[["render",he],["__scopeId","data-v-0cc0e1dc"]]),ge={data:()=>({sos:f})},xe={class:"w-full flex flex-col items-center justify-center flex-wrap pb-8"},be={class:"flex flex-row flex-wrap w-full items-center justify-center text-center mt-6 text-gray-400 text-lg"},we=E('<a href="/">Home</a><span class="text-gray-700 mx-2">|</span><a href="https://github.com/Security-Onion-Solutions/securityonion/blob/2.4/main/DOWNLOAD_AND_VERIFY_ISO.md">Download</a><span class="text-gray-700 mx-2">|</span><a href="https://docs.securityonion.net/">Documentation</a><span class="text-gray-700 mx-2">|</span><a href="https://blog.securityonion.net/">Blog</a><span class="text-gray-700 mx-2">|</span>',8),ve=t("span",{class:"text-gray-700 mx-2"},"|",-1),ye=t("span",{class:"text-gray-700 mx-2"},"|",-1),ke=t("span",{class:"text-gray-700 mx-2"},"|",-1),$e={class:"flex flex-row"},Se={class:"text-center content-center justify-center"},Ce={class:"flex flex-row justify-center mt-2"},Me={rel:"me",class:"block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer",href:"https://twitter.com/securityonion",target:"_blank"},ze={rel:"me",class:"block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer",href:"https://infosec.exchange/@securityonion",target:"_blank"},Ie={class:"block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer",href:"https://securityonion.net/discuss",target:"_blank"},Te={rel:"me",class:"block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer",href:"https://www.linkedin.com/company/security-onion-solutions-llc",target:"_blank"},De={class:"block rounded-lg mr-2 lg:inline-block text-4xl focus:outline-none cursor-pointer",href:"https://securityonion.net/youtube",target:"_blank"},Oe=t("div",{class:"block mt-2 lg:inline-block text-l text-white"},[t("p",null," © Security Onion Solutions, LLC ")],-1);function Le(e,n,c,m,g,i){const _=$,s=S;return r(),u("footer",xe,[t("div",be,[we,o(_,{to:"/education"},{default:l(()=>[a("Education")]),_:1}),ve,o(_,{to:"/license"},{default:l(()=>[a("License")]),_:1}),ye,o(_,{to:"/privacy"},{default:l(()=>[a("Privacy")]),_:1}),ke,o(_,{to:"/brand"},{default:l(()=>[a("Brand")]),_:1})]),t("div",$e,[t("div",Se,[t("div",Ce,[t("a",Me,[o(s,{name:"fa6-brands:twitter",class:"p-2 text-white"})]),t("a",ze,[o(s,{name:"fa6-brands:mastodon",class:"p-2 text-white"})]),t("a",Ie,[o(s,{name:"fa6-brands:github",class:"p-2 text-white"})]),t("a",Te,[o(s,{name:"fa6-brands:linkedin",class:"p-2 text-white"})]),t("a",De,[o(s,{name:"fa6-brands:youtube",class:"p-2 text-white"})]),t("div",{class:"block rounded-lg lg:inline-block text-4xl focus:outline-none cursor-pointer",onClick:n[0]||(n[0]=d=>e.sos.showContactModal({text:"",source:"footer_icon"}))},[o(s,{name:"fa6-regular:envelope",class:"p-2 text-white"})])]),Oe])])])}const Ne=p(ge,[["render",Le]]);const Ee=y(()=>k(()=>import("./ContactForm.f2bc5f5f.js"),["./ContactForm.f2bc5f5f.js","./entry.82b424d1.js","./ContactForm.b4abcb5d.css"],import.meta.url).then(e=>e.default||e)),Fe=y(()=>k(()=>import("./FloatingModal.45ed7363.js"),["./FloatingModal.45ed7363.js","./Icon.64b5c597.js","./entry.82b424d1.js","./config.cfb13b8e.js","./Icon.6f5d80f8.css","./FloatingModal.77788641.css"],import.meta.url).then(e=>e.default||e)),He={data:()=>({sos:f,colorSchemeString:""}),mounted(){this.colorSchemeString=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"-dark":"";const e=window.matchMedia("(prefers-color-scheme: dark)");try{e.addEventListener("change",()=>this.setFavicon())}catch{try{e.addListener(()=>this.setFavicon())}catch{}}},methods:{setFavicon(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?this.colorSchemeString="-dark":this.colorSchemeString=""},handleModalClose(){f.showModal=!1},shouldShowModal(){return f.showModal},isFormModal(){return f.modalType=="form"},isImageModal(){return f.modalType=="image"},isDomainDetailsModal(){return f.modalType=="domainDetails"}}},Ve=t("title",null,"Security Onion Solutions",-1),je=t("meta",{"http-equiv":"Content-type",content:"text/html; charset=UTF-8"},null,-1),Ae=t("meta",{name:"description",content:"Security Onion Solutions, LLC"},null,-1),Be=t("link",{rel:"icon",href:"/favicon.ico",sizes:"any"},null,-1),Pe=["href"],qe=["href"],Re={key:0,class:"form-wrapper"},Ke={class:"flex flex-col leading-normal tracking-normal min-h-screen bg-gradient-to-r from-so-blue-dark via-so-blue to-so-blue-dark"},Ue=t("div",{class:"fixed nav-bleed w-full bg-black z-0"},null,-1),Ze={class:"flex-grow content container mx-auto flex flex-col bg-white shadow-xl z-10"},Qe={class:"relative"},We=t("div",{class:"absolute footer-bleed w-full bg-gray-900 z-0"},null,-1);function Ye(e,n,c,m,g,i){const _=j,s=Ee,d=q,h=Y,M=Fe,z=pe,I=Ne;return r(),u("div",{tabindex:"0",onKeydown:n[2]||(n[2]=V(v=>i.handleModalClose(),["esc"]))},[o(_,null,{default:l(()=>[Ve,je,Ae,Be,t("link",{rel:"icon",type:"image/svg+xml",href:`/favicon/onion${e.colorSchemeString}.svg`},null,8,Pe),t("link",{rel:"alt icon",type:"image/png",href:`/favicon/onion${e.colorSchemeString}.png`},null,8,qe)]),_:1}),o(F,{name:"modal"},{default:l(()=>[i.shouldShowModal()?(r(),w(M,{key:0,index:1,onClose:n[1]||(n[1]=v=>i.handleModalClose())},{default:l(()=>[i.isFormModal()?(r(),u("div",Re,[o(s,{text:e.sos.contactText,source:e.sos.eventSource,onClose:n[0]||(n[0]=v=>i.handleModalClose())},null,8,["text","source"])])):i.isImageModal()?(r(),w(d,{key:1,name:e.sos.imageName,"image-type":e.sos.imageType},null,8,["name","image-type"])):i.isDomainDetailsModal()?(r(),w(h,{key:2,"detail-text":e.sos.domainDetailText,"domain-name":e.sos.domainName,"test-percent":e.sos.domainTestPercent},null,8,["detail-text","domain-name","test-percent"])):x("",!0)]),_:1})):x("",!0)]),_:1}),t("div",Ke,[o(z,{class:"fixed z-50"}),Ue,t("div",Ze,[H(e.$slots,"default")]),t("div",Qe,[o(I,{class:"z-10 relative"}),We])])],32)}const ot=p(He,[["render",Ye]]);export{ot as default};