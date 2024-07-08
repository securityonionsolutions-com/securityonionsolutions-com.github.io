import{_ as N}from"./DZZo8aNJ.js";import{_ as j}from"./blheFw7a.js";import $ from"./CnYZCOqe.js";import{S as I,_ as G}from"./CYRDTRj_.js";import{_ as S,r as l,o as i,c,a as o,w as t,b as u,d as e,F as y,g as w,t as r,h as C,u as M,q as B,e as D,f as H}from"./BBCYHjb7.js";import{s as z}from"./B1PQBLuz.js";import{_ as L}from"./o6wwPCXV.js";import{F as V,a as E}from"./t5K7M6sj.js";import{A as P}from"./xNmJLMcm.js";import{F as U}from"./BRzeXsi3.js";import{F as W}from"./ilA7r7hm.js";import{F as q}from"./Re9t8_MJ.js";import"./DKzsDYrr.js";import"./DKZE4Mis.js";import"./BP01UKHC.js";import"./KWitV1IB.js";const J={components:{Footnotes:V},data:()=>({appliances:E}),methods:{thumbnail(s){return`/img/appliances/${s.img_front_thumb}`},handleClick(s){this.$router.push(`/hardware/${s.name.replace(" ","_")}`)}}},K={class:"w-full"},Q={class:"mx-auto table-auto rounded-md border-separate border border-blue-400 bg-blue mb-12"},X=e("thead",null,[e("tr",{class:"bg-blue-400 text-left text-white"},[e("th",{class:"hidden md:table-cell px-2 truncate",style:{"min-width":"1.3em"}},[e("div",null," ")]),e("th",{class:"hidden md:table-cell px-2 truncate"}),e("th",{class:"truncate"},[e("div",null," "),e("div",null,"Model")]),e("th",{class:"hidden xl:table-cell px-2 truncate"},[e("div",null," "),e("div",null,"Use Case(s)")]),e("th",{class:"text-center px-2 truncate"},[e("div",null,"Forward Node"),e("div",null,"Throughput †")]),e("th",{class:"text-center px-2 truncate"},[e("div",null,"Standalone"),e("div",null,"Throughput †")]),e("th",{class:"hidden md:table-cell text-center px-2 truncate"},[e("div",null,"Max Data"),e("div",null,"Storage *")]),e("th",{class:"hidden md:table-cell text-center px-2 truncate"},[e("div",null,"Data"),e("div",null,"Class")]),e("th",{class:"hidden lg:table-cell text-center px-2 truncate"},[e("div",null,"Form"),e("div",null,"Factor")])])],-1),Y=["onClick"],Z=["textContent"],ee={key:1,class:"hidden md:table-cell border-t border-blue-400 text-white bg-white pl-1 pr-1 pt-2 truncate vert-header"},te={class:"hidden md:table-cell border-t border-blue-400 truncate w-1/4"},oe=["src"],ne={class:"text-right border-t border-blue-400 px-2 truncate"},se={class:"flex flex-row"},ae={class:"hidden xl:table-cell border-t border-blue-400 px-2 truncate"},re=["textContent"],le=["textContent"],ie=["textContent"],ce=["textContent"],de=["textContent"],ue=["textContent"];function pe(s,d,k,F,A,_){const m=L,x=$,f=l("Footnotes");return i(),c("div",K,[o(m,{class:"mb-8"},{default:t(()=>[u(" Appliance Comparison ")]),_:1}),e("table",Q,[X,e("tbody",null,[(i(!0),c(y,null,w(s.appliances,(n,p)=>(i(),c("tr",{key:p,class:"bg-white cursor-pointer",onClick:h=>_.handleClick(n)},[n.category=="Response Ready"?(i(),c("td",{key:0,class:"hidden md:table-cell border-t border-blue-400 text-white bg-blue-400 pl-1 pr-1 pt-2 truncate vert-header",textContent:r(n.category)},null,8,Z)):C("",!0),n.category!="Response Ready"?(i(),c("td",ee)):C("",!0),e("td",te,[e("img",{src:_.thumbnail(n)},null,8,oe)]),e("td",ne,[e("div",se,[u(r(n.name)+" ",1),o(x,{name:"fa6-solid:circle-info",class:"mx-2 mt-1 text-base"})])]),e("td",ae,[(i(!0),c(y,null,w(n.roles,(h,b)=>(i(),c("div",{key:b,textContent:r(h)},null,8,re))),128))]),e("td",{class:"text-right border-t border-blue-400 px-2 truncate",textContent:r(n.specs["Forward Node Throughput †"])},null,8,le),e("td",{class:"text-right border-t border-blue-400 px-2 truncate",textContent:r(n.specs["Standalone Throughput †"])},null,8,ie),e("td",{class:"hidden md:table-cell text-right border-t border-blue-400 px-2 truncate",textContent:r(n.specs["Data Storage *"])},null,8,ce),e("td",{class:"hidden md:table-cell text-left border-t border-blue-400 px-2 truncate",textContent:r(n.specs["Data Storage Class"])},null,8,de),e("td",{class:"hidden lg:table-cell text-right border-t border-blue-400 px-2 truncate",textContent:r(n.specs["Form Factor"])},null,8,ue)],8,Y))),128))])]),o(f)])}const he=S(J,[["render",pe]]),_e={scrollToTop:!0,components:{ApplianceGrid:he,SubHero:I,ActionCallout:P,FeatureRight:U,FeatureLeft:W,FeatureLeftAction:q},data:()=>({sos:z,links:[{name:"Overview",id:"overview"},{name:"Comparison",id:"comparison"}]}),head(){return{title:"Security Onion Solutions"}}},a=s=>(D("data-v-1ea90d0d"),s=s(),H(),s),me={class:"xs:px-12"},xe=a(()=>e("div",{class:"flex justify-center text-center"},[e("div",{class:"text-2xl"}," Introducing the newest generation of Security Onion appliances. With upgraded storage, network, processing, and memory these new appliances will make it even easier to make your adversaries cry! ")],-1)),fe={class:"flex justify-center"},be={class:"px-6 xs:px-12 lg:px-32"},ve=a(()=>e("div",{class:"text-center xs:text-left"}," Official Hardware Appliances for Security Onion ",-1)),ge=a(()=>e("div",{class:"text-center xs:text-left"}," We know Security Onion's hardware needs, and our appliances are the perfect match for the platform. Leave the hardware research, testing, and support to us, so you can focus on what's important for your organization. ",-1)),ye=a(()=>e("div",{class:"text-center xs:text-left"}," Integration with Security Onion ",-1)),we=a(()=>e("div",{class:"text-left"}," Security Onion's SOC interface provides appliance-specific information directly in the user-interface. Use this information to monitor the appliance's health in realtime. Also view the appliance front and rear panels, useful for walking through connectivity discussions with personnel in the data center. Only official Security Onion Solutions appliances are supported with this integration. ",-1)),Ce=a(()=>e("div",{class:"text-center xs:text-left"}," Support Security Onion ",-1)),$e=a(()=>e("div",{class:"text-center xs:text-left"}," Not only will you have confidence that your Security Onion deployment is running on the best-suited hardware, you will also be supporting future development and maintenance of the Security Onion project! ",-1)),Se=a(()=>e("div",{class:"text-3xl mb-6 text-left"}," Response-Ready Appliances ",-1)),ke=a(()=>e("div",{class:"flex flex-col text-left"},[e("div",null," Our Response-Ready appliance provide rapidly deployable options for: "),e("ul",{class:"list-disc list-inside pl-1 -mr-1"},[e("li",null," Government, Military, or Commercial Applications "),e("li",null," Tactical Edge Enterprise Security Monitoring "),e("li",null," Deployable, Small Form Factor, and ATA-Compliant ")])],-1)),Fe={class:"lg:-ml-4"},Ae={class:"flex flex-col items-center justify-center mx-1 xs:-mx-10 sm:mx-0"},Oe={class:"px-6 xs:px-12 lg:px-32 -my-8"},Re=a(()=>e("div",{class:"text-3xl flex justify-center text-center md:text-left"},[e("div",null," Ready to purchase or need more information? ")],-1)),Te=a(()=>e("div",{class:"text-lg my-1"}," Contact Us ",-1));function Ne(s,d,k,F,A,_){const m=N,x=l("ActionCallout"),f=l("SubHero"),n=j,p=l("feature-right"),h=l("feature-left"),b=$,O=l("feature-left-action"),v=G,R=l("ApplianceGrid"),T=l("action-callout");return i(),c("div",me,[o(m,{"page-name":"Appliances",links:s.links},null,8,["links"]),o(f,{id:"download-before",class:"hero-hardware"},{header:t(()=>[u(" Next Gen Is Here! ")]),body:t(()=>[xe,e("div",fe,[o(x,{class:"mt-4",onButtonClick:d[0]||(d[0]=g=>("navigateTo"in s?s.navigateTo:M(B))("#comparison"))},{"button-text":t(()=>[u(" Compare ")]),_:1})])]),_:1}),o(v,{id:"overview",alternate:!0},{default:t(()=>[e("div",be,[o(p,{class:"xs:mb-12","text-margin":!0},{header:t(()=>[ve]),graphic:t(()=>[e("div",null,[o(n,{"file-name":"appliance.jpg",size:20})])]),body:t(()=>[ge]),_:1}),o(h,{class:"my-12"},{header:t(()=>[ye]),graphic:t(()=>[e("div",null,[o(n,{class:"shadow-xl rounded-md overflow-hidden",padding:!1,size:20,"file-name":"grid-thumb.jpg",clickable:!0})])]),body:t(()=>[we]),_:1}),o(p,{class:"xs:mb-20","text-margin":!0},{header:t(()=>[Ce]),graphic:t(()=>[o(b,{name:"fa-solid:hands-helping",size:"10em"})]),body:t(()=>[$e]),_:1}),o(O,{alternate:!0,onButtonClick:d[1]||(d[1]=g=>s.sos.showContactModal({text:"Please contact me with more information about Response-Ready appliances.",source:"hw_r2_purchasing_info"}))},{header:t(()=>[Se]),body:t(()=>[ke]),graphic:t(()=>[e("div",Fe,[o(n,{class:"shadow-xl rounded-xl overflow-hidden",size:20,"file-name":"so-onion-camo.jpg"})])]),"button-text":t(()=>[u(" Get More Info ")]),_:1})])]),_:1}),o(v,{id:"comparison"},{default:t(()=>[e("div",Ae,[o(R)])]),_:1}),o(v,{id:"hardwarehelp",alternate:!0},{default:t(()=>[e("div",Oe,[o(T,{alternate:!0,class:"my-12",onButtonClick:d[2]||(d[2]=g=>s.sos.showContactModal({text:"Please contact me with more information about Security Onion appliances.",source:"hw_purchasing_info"}))},{info:t(()=>[Re]),"button-text":t(()=>[Te]),_:1})])]),_:1})])}const Ke=S(_e,[["render",Ne],["__scopeId","data-v-1ea90d0d"]]);export{Ke as default};
