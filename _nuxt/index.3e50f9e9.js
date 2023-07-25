import{_ as f,S as y}from"./SubHero.d8456a29.js";import w from"./Icon.ce456431.js";import{_ as p}from"./SoButton.28c8f20c.js";import{_ as S}from"./ActionCallout.3573fbfa.js";import{s as k}from"./sos.abfc2498.js";import{V as C}from"./VerticalFeature.ae071ea2.js";import{d as O}from"./cert_domains.56d8c0ff.js";import{_ as P,r as x,c,d as o,w as s,o as d,a as e,F as j,g as T,e as t,t as u,p as N,f as $}from"./entry.4ef2c0f7.js";import"./Graphic.e613cb5c.js";import"./GraphicPlaceholder.fa6bfd4c.js";const A={scrollToTop:!0,components:{ContentSection:f,VerticalFeature:C,SoButton:p,SubHero:y},data:()=>({sos:k,domainArr:O.domains}),beforeMount(){},head(){return{title:"Security Onion Solutions - Certification"}}},n=l=>(N("data-v-bad6b8db"),l=l(),$(),l),B={class:"xs:px-12"},D=n(()=>e("div",null,[t(" Security Onion "),e("br"),t(" Certified Professional "),e("br"),t(" (SOCP) ")],-1)),V=n(()=>e("div",{class:"mt-6"}," Available Now! ",-1)),H=n(()=>e("div",{class:"px-6 xs:px-12 lg:px-32"},[e("div",{class:"text-2xl md:text-4xl text-center font-semibold"}," The SOCP exam validates that you have the knowledge and skills to properly investigate alerts, hunt for adversaries, and manage your Security Onion 2 grid. ")],-1)),I={class:"flex flex-col px-6 xs:px-0"},q=n(()=>e("div",{class:"text-xl md:text-2xl font-semibold text-center mb-6"}," This exam tests your knowledge in the following six domains: ",-1)),z={class:"flex flex-row flex-wrap justify-center mt-4"},E=["onClick"],F={class:"-mt-3 mr-2 absolute right-0 font-bold text-xs text-gray-700"},M={class:"-mx-1"},R={class:"flex justify-center items-center mx-3 sm:mx-16"},L={class:"flex flex-col justify-center items-center w-full lg:w-4/5 xl:w-3/5 py-6 mx-1 md:mx-0 lg:mx-32 xl:mx-0 px-2 md:px-4 mb-1 rounded-lg border-solid border-4 justify-between border-gray-700 bg-white text-black"},G=n(()=>e("div",{class:"text-5xl font-bold text-center lg:text-left mb-4"}," SOCP Exam ",-1)),U={class:"flex flex-col lg:flex-row w-full items-center justify-center justify-between lg:px-4 xl:px-10"},J=n(()=>e("div",{class:"flex flex-col lg:mr-6 mb-12 lg:mb-4"},[e("div",{class:"text-base text-center lg:text-left lg:ml-2"},[e("ul",null,[e("li",null,[e("span",{class:"font-bold"},"Cost:"),t(" $199 ")]),e("li",null,[e("span",{class:"font-bold"},"Certification validity:"),t(" 3 years ")]),e("li",null,[e("span",{class:"font-bold"},"Length:"),t(" 45 questions"),e("br",{class:"md:hidden"}),e("span",{class:"hidden md:inline-block"},","),t(" 125 minutes ")]),e("li",null,[e("span",{class:"font-bold"},"Retake wait time:"),t(" None ")])])])],-1)),K={class:"flex flex-col items-center gap-y-6 lg:mt-4"},Q={class:"text-sm -mt-4 mb-3 hover:underline"},W={href:"/files/socp-registration-guide.pdf"},X={class:"flex flex-row justify-center content-center"},Y=n(()=>e("div",null," Registration Guide ",-1)),Z={class:"ml-1 text-xs"},ee=n(()=>e("div",{class:"flex justify-center -mx-12"},[e("div",{class:"w-full lg:w-4/5 xl:w-3/5 px-6 md:px-10"},[e("div",{class:"text-center text-3xl font-semibold mb-12 -mt-4"}," Authorized Materials "),e("div",{class:"text-md mx-4"},[e("div",{class:"ml-4"},[t(" The SOCP exam is in an open book format. "),e("br"),t(),e("br"),t(" The following are all authorized material for the exam: "),e("ul",{class:"list-disc list-inside ml-2 mb-6"},[e("li",null,[t(" Security Onion Documentation Paperback book (Available online "),e("a",{class:"text-so-blue hover:underline cursor-pointer",href:"https://securityonion.net/book",target:"_blank"},"here"),t(") ")]),e("li",null," Course material for any Security Onion Solutions instructor-led training "),e("li",null," Notes (handwritten or typed) ")])]),e("div",{class:"bg-red-100 text-red-700 border border-red-700 rounded rounded-md px-6 py-2"},[t(" Reference materials having the appearance of exam questions and answers are "),e("span",{class:"font-bold"},"strictly prohibited"),t(". ")])])])],-1)),te={class:"px-6 xs:px-12 lg:px-48 -my-8"},se=n(()=>e("div",{class:"text-3xl flex justify-center text-center md:text-left"},[e("div",null," Have more questions about the SOCP? ")],-1)),oe=n(()=>e("div",{class:"text-lg my-1"}," Contact Us ",-1));function ne(l,m,le,ie,ae,re){const h=x("SubHero"),a=f,r=w,b=x("vertical-feature"),_=p,v=S;return d(),c("div",B,[o(h,{class:"hero"},{header:s(()=>[D]),body:s(()=>[V]),_:1}),o(a,{alternate:!0},{default:s(()=>[H]),_:1}),o(a,{id:"domain-list"},{default:s(()=>[e("div",I,[q,e("div",z,[(d(!0),c(j,null,T(l.domainArr,(i,g)=>(d(),c("div",{key:g,class:"w-full md:w-1/3 bg-gray-200 rounded-md m-2 md:px-4 px-2 py-4 h-72 transition duration-75 ease-linear transform xs:hover:scale-105 focus: cursor-pointer",onClick:ce=>l.sos.showDomainDetails({domainDetailText:i.details,domainName:i.name,domainTestPercent:i.percent})},[e("div",F,[o(r,{name:"fa6-solid:circle-info"})]),o(b,{class:"mt-1"},{graphic:s(()=>[o(r,{name:"fa-solid:"+i.icon,class:"mb-3",size:"4em"},null,8,["name"])]),title:s(()=>[e("div",M,u(i.name),1)]),body:s(()=>[t(u(i.desc),1)]),_:2},1024)],8,E))),128))])])]),_:1}),o(a,{alternate:!0},{default:s(()=>[e("div",R,[e("div",L,[G,e("div",U,[J,e("div",K,[o(_,{link:"/files/socp-v1-exam-blueprint.pdf"},{default:s(()=>[t(" Exam details ")]),_:1}),o(_,{link:"https://www.prometric.com/sos"},{default:s(()=>[t(" Schedule exam ")]),_:1}),e("div",Q,[e("a",W,[e("div",X,[Y,e("div",Z,[o(r,{name:"fa-solid:external-link-alt"})])])])])])])])])]),_:1}),o(a,null,{default:s(()=>[ee]),_:1}),o(a,{id:"certificationhelp",alternate:!0},{default:s(()=>[e("div",te,[o(v,{alternate:!0,class:"my-12",onButtonClick:m[0]||(m[0]=i=>l.sos.showContactModal({text:"Please contact me with more information about the Security Onion Certified Professional certification.",source:"hw_purchasing_info"}))},{info:s(()=>[se]),"button-text":s(()=>[oe]),_:1})])]),_:1})])}const ge=P(A,[["render",ne],["__scopeId","data-v-bad6b8db"]]);export{ge as default};