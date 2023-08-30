import{_ as V}from"./PageNav.0f936478.js";import{_ as O}from"./Graphic.c6ab2700.js";import A from"./Icon.61339106.js";import{S as B,_ as T}from"./SubHero.53808943.js";import{s as H}from"./sos.ec3146a8.js";import{_ as I}from"./SectionHeader.ed7e4509.js";import{F as P,a as z}from"./appliances.9377daec.js";import{_ as w,r as l,o as i,c,d as o,w as t,e as d,a as e,F as k,g as F,t as p,h as N,b,p as D,f as L}from"./entry.512953f5.js";import{A as E}from"./ActionCallout.f5e8b86a.js";import{F as U}from"./FeatureRight.be130e0b.js";import{F as W}from"./FeatureLeft.21b5c8ae.js";import{_ as R}from"./SoButton.3010f18a.js";import{G as q}from"./GraphicPlaceholder.49a3b15c.js";import{D as J}from"./DetailPara.5db466de.js";import"./config.5d144548.js";const K={components:{Footnotes:P},data:()=>({appliances:z}),methods:{thumbnail(n){return`/img/appliances/${n.img_front_thumb}`},handleClick(n){this.$router.push(`/hardware/${n.name.replace(" ","_")}`)}}},Q={class:"w-full"},X={class:"mx-auto table-auto rounded-md border-separate border border-blue-400 bg-blue mb-12"},Y=e("thead",null,[e("tr",{class:"bg-blue-400 text-left text-white"},[e("th",{class:"hidden md:table-cell px-2 truncate",style:{"min-width":"1.3em"}},[e("div",null," ")]),e("th",{class:"hidden md:table-cell px-2 truncate"}),e("th",{class:"truncate"},[e("div",null," "),e("div",null,"Model")]),e("th",{class:"hidden xl:table-cell px-2 truncate"},[e("div",null," "),e("div",null,"Use Case(s)")]),e("th",{class:"text-center px-2 truncate"},[e("div",null,"Forward Node"),e("div",null,"Throughput †")]),e("th",{class:"text-center px-2 truncate"},[e("div",null,"Max"),e("div",null,"Storage *")]),e("th",{class:"hidden sm:table-cell text-center px-2 truncate"},[e("div",null,"Form"),e("div",null,"Factor")])])],-1),Z=["onClick"],ee=["textContent"],te={key:1,class:"hidden md:table-cell border-t border-blue-400 text-white bg-white pl-1 pr-1 pt-2 truncate vert-header"},oe={class:"hidden md:table-cell border-t border-blue-400 truncate w-1/4"},ne=["src"],se={class:"text-right border-t border-blue-400 px-2 truncate"},ae={class:"flex flex-row"},re={class:"hidden xl:table-cell border-t border-blue-400 px-2 truncate"},le=["textContent"],ie=["textContent"],ce=["textContent"],de=["textContent"];function pe(n,r,v,$,S,h){const u=I,_=A,m=l("Footnotes");return i(),c("div",Q,[o(u,{class:"mb-8"},{default:t(()=>[d(" Appliance Comparison ")]),_:1}),e("table",X,[Y,e("tbody",null,[(i(!0),c(k,null,F(n.appliances,(s,f)=>(i(),c("tr",{key:f,class:"bg-white cursor-pointer",onClick:x=>h.handleClick(s)},[s.category=="Response Ready"?(i(),c("td",{key:0,class:"hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header",textContent:p(s.category)},null,8,ee)):N("",!0),s.category!="Response Ready"?(i(),c("td",te)):N("",!0),e("td",oe,[e("img",{src:h.thumbnail(s)},null,8,ne)]),e("td",se,[e("div",ae,[d(p(s.name)+" ",1),o(_,{name:"fa6-solid:circle-info",class:"mx-2 mt-1 text-base"})])]),e("td",re,[(i(!0),c(k,null,F(s.roles,(x,y)=>(i(),c("div",{key:y,textContent:p(x)},null,8,le))),128))]),e("td",{class:"text-right border-t border-blue-400 px-2 truncate",textContent:p(s.specs["Forward Node Throughput †"])},null,8,ie),e("td",{class:"text-right border-t border-blue-400 px-2 truncate",textContent:p(s.specs["Data Storage *"])},null,8,ce),e("td",{class:"hidden sm:table-cell text-right border-t border-blue-400 px-2 truncate",textContent:p(s.specs["Form Factor"])},null,8,de)],8,Z))),128))])]),o(m)])}const ue=w(K,[["render",pe]]),_e={components:{Graphic:q,DetailPara:J,SoButton:R},props:{alternate:{type:Boolean,default:!1}}},me={class:"flex flex-col lg:flex-row justify-center sm:justify-end items-center"},he={class:"flex flex-col items-center xs:items-start order-2 lg:order-1 mt-6 sm:mt-0 w-full lg:w-3/5"},fe={class:"order-1 lg:order-2 w-full lg:w-2/5 my-6 lg:my-0"};function xe(n,r,v,$,S,h){const u=l("detail-para"),_=R,m=O;return i(),c("div",me,[e("div",he,[o(u,{class:"xs:mr-6 mb-10"},{header:t(()=>[b(n.$slots,"header")]),body:t(()=>[b(n.$slots,"body")]),_:3}),o(_,{class:"mx-10 xs:mx-0 block",alternate:v.alternate,onClick:r[0]||(r[0]=s=>n.$emit("button-click"))},{default:t(()=>[b(n.$slots,"button-text")]),_:3},8,["alternate"])]),e("div",fe,[b(n.$slots,"graphic",{},()=>[o(m)])])])}const be=w(_e,[["render",xe]]);const ve={scrollToTop:!0,components:{ApplianceGrid:ue,SubHero:B,ActionCallout:E,FeatureRight:U,FeatureLeft:W,FeatureLeftAction:be},data:()=>({sos:H,links:[{name:"Overview",id:"overview"},{name:"Comparison",id:"comparison"}]}),head(){return{title:"Security Onion Solutions"}}},a=n=>(D("data-v-0d68437b"),n=n(),L(),n),ye={class:"xs:px-12"},ge=a(()=>e("div",{class:"flex justify-center text-center"},[e("div",{class:"text-2xl"},[d(" Check out the "),e("a",{href:"/hardware/SNNV"},"SOS SNNV"),d("! "),e("br"),d(" SOS SNNV uses extremely fast Non-volatile Memory (NVMe) for data storage. ")])],-1)),we={class:"flex justify-center"},$e={class:"px-6 xs:px-12 lg:px-32"},Se=a(()=>e("div",{class:"text-center xs:text-left"}," Official Hardware Appliances for Security Onion ",-1)),Ce=a(()=>e("div",{class:"text-center xs:text-left"}," We know Security Onion's hardware needs, and our appliances are the perfect match for the platform. Leave the hardware research, testing, and support to us, so you can focus on what's important for your organization. ",-1)),ke=a(()=>e("div",{class:"text-center xs:text-left"}," Integration with Security Onion ",-1)),Fe=a(()=>e("div",{class:"text-left"}," Security Onion's SOC interface provides appliance-specific information directly in the user-interface. Use this information to monitor the appliance's health in realtime. Also view the appliance front and rear panels, useful for walking through connectivity discussions with personnel in the data center. Only official Security Onion Solutions appliances are supported with this integration. ",-1)),Ne=a(()=>e("div",{class:"text-center xs:text-left"}," Support Security Onion ",-1)),Oe=a(()=>e("div",{class:"text-center xs:text-left"}," Not only will you have confidence that your Security Onion deployment is running on the best-suited hardware, you will also be supporting future development and maintenance of the Security Onion project! ",-1)),Ae=a(()=>e("div",{class:"text-3xl mb-6 text-left"}," Response-Ready Appliances ",-1)),Re=a(()=>e("div",{class:"flex flex-col text-left"},[e("div",null," Our Response-Ready appliance provide rapidly deployable options for: "),e("ul",{class:"list-disc list-inside pl-1 -mr-1"},[e("li",null," Government, Military, or Commercial Applications "),e("li",null," Tactical Edge Enterprise Security Monitoring "),e("li",null," Deployable, Small Form Factor, and ATA-Compliant ")])],-1)),je={class:"lg:-ml-4"},Me={class:"flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0"},Ge={class:"px-6 xs:px-12 lg:px-32 -my-8"},Ve=a(()=>e("div",{class:"text-3xl flex justify-center text-center md:text-left"},[e("div",null," Ready to purchase or need more information? ")],-1)),Be=a(()=>e("div",{class:"text-lg my-1"}," Contact Us ",-1));function Te(n,r,v,$,S,h){const u=V,_=l("ActionCallout"),m=l("SubHero"),s=O,f=l("feature-right"),x=l("feature-left"),y=A,j=l("feature-left-action"),g=T,M=l("ApplianceGrid"),G=l("action-callout");return i(),c("div",ye,[o(u,{"page-name":"Appliances",links:n.links},null,8,["links"]),o(m,{id:"download-before",class:"hero-hardware"},{header:t(()=>[d(" Have a need for speed? ")]),body:t(()=>[ge,e("div",we,[o(_,{class:"mt-4",onButtonClick:r[0]||(r[0]=C=>n.sos.showContactModal({text:"Please contact me with more information about the SOS SNNV.",source:"hw_purchase"}))},{"button-text":t(()=>[d(" Purchase ")]),_:1})])]),_:1}),o(g,{id:"overview",alternate:!0},{default:t(()=>[e("div",$e,[o(f,{class:"xs:mb-12","text-margin":!0},{header:t(()=>[Se]),graphic:t(()=>[e("div",null,[o(s,{"file-name":"appliance.jpg",size:20})])]),body:t(()=>[Ce]),_:1}),o(x,{class:"my-12"},{header:t(()=>[ke]),graphic:t(()=>[e("div",null,[o(s,{class:"shadow-xl rounded-md overflow-hidden",padding:!1,size:20,"file-name":"grid-thumb.jpg",clickable:!0})])]),body:t(()=>[Fe]),_:1}),o(f,{class:"xs:mb-20","text-margin":!0},{header:t(()=>[Ne]),graphic:t(()=>[o(y,{name:"fa-solid:hands-helping",size:"10em"})]),body:t(()=>[Oe]),_:1}),o(j,{alternate:!0,onButtonClick:r[1]||(r[1]=C=>n.sos.showContactModal({text:"Please contact me with more information about Response-Ready appliances.",source:"hw_r2_purchasing_info"}))},{header:t(()=>[Ae]),body:t(()=>[Re]),graphic:t(()=>[e("div",je,[o(s,{class:"shadow-xl rounded-xl overflow-hidden",size:20,"file-name":"so-onion-camo.jpg"})])]),"button-text":t(()=>[d(" Get More Info ")]),_:1})])]),_:1}),o(g,{id:"comparison"},{default:t(()=>[e("div",Me,[o(M)])]),_:1}),o(g,{id:"hardwarehelp",alternate:!0},{default:t(()=>[e("div",Ge,[o(G,{alternate:!0,class:"my-12",onButtonClick:r[2]||(r[2]=C=>n.sos.showContactModal({text:"Please contact me with more information about Security Onion appliances.",source:"hw_purchasing_info"}))},{info:t(()=>[Ve]),"button-text":t(()=>[Be]),_:1})])]),_:1})])}const Ze=w(ve,[["render",Te],["__scopeId","data-v-0d68437b"]]);export{Ze as default};