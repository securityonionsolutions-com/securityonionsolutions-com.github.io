import{_ as R}from"./PageNav.a7dc9e81.js";import{_ as D}from"./SoButton.f2f97ec8.js";import{_ as F}from"./Graphic.56925707.js";import{S as z,_ as M}from"./SubHero.d0666dab.js";import{_ as L}from"./SectionHeader.83916b9b.js";import{_,o as r,c as a,a as e,b as d,n as h,F as j,g as O,i as G,w as o,e as u,t as x,m as H,d as s,h as C,r as b,p as U,f as V}from"./entry.93107fd3.js";import W from"./Icon.bc37e3ee.js";import{s as J}from"./sos.4af35a9f.js";import{A as q}from"./ActionCallout.3f1e7401.js";import{F as K}from"./FeatureRight.60a1aa58.js";import{F as Z}from"./FeatureLeft.d42b30b6.js";import"./config.cfcf76be.js";import"./DetailPara.ab77030c.js";const Q={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},X={class:"flex flex-col items-center"},Y={class:"text-xl"},ee={class:"text-2xl font-bold mb-2"},te=e("div",{class:"vertical-line h-6"},null,-1);function ne(t,i,n,p,g,l){return r(),a("div",{class:"flex flex-col items-center grow",onClick:i[0]||(i[0]=c=>t.$emit("event-click",n.index))},[e("div",X,[e("div",Y,[d(t.$slots,"event")]),e("div",ee,[d(t.$slots,"year")]),e("div",{class:h(["rounded-full h-6 w-6 border-4 border-gray-900 grow-child",[n.focused?"bg-so-blue":"bg-white"]])},null,2)]),te])}const ie=_(Q,[["render",ne]]),oe={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},se=e("div",{class:"vertical-line h-6"},null,-1),re={class:"flex flex-col items-center"},ae={class:"text-2xl font-bold mb-1 mt-2"},le={class:"text-xl"};function ce(t,i,n,p,g,l){return r(),a("div",{class:"flex flex-col items-center grow",onClick:i[0]||(i[0]=c=>t.$emit("event-click",n.index))},[se,e("div",re,[e("div",{class:h(["rounded-full h-6 w-6 border-4 border-gray-900 grow-child",[n.focused?"bg-so-blue":"bg-white"]])},null,2),e("div",ae,[d(t.$slots,"year")]),e("div",le,[d(t.$slots,"event")])])])}const de=_(oe,[["render",ce]]),me={props:{index:{type:Number,default:0}},data:()=>({focused:!1}),methods:{handleClick(){this.focused=!0,this.$emit("event-click",this.index)}}},ue={class:"flex justify-between items-center"},_e={class:"mr-3 flex-1 text-right font-bold"},fe=e("div",{class:"vertical-line h-16"},null,-1),pe={class:"ml-3 flex-1"};function ge(t,i,n,p,g,l){return r(),a("div",ue,[e("div",_e,[d(t.$slots,"year")]),fe,e("div",pe,[d(t.$slots,"event")])])}const he=_(me,[["render",ge]]),ve={props:{index:{type:Number,default:0}},data:()=>({focused:!1}),methods:{handleClick(){this.focused=!0,this.$emit("event-click",this.index)}}},we={class:"flex justify-between items-center"},xe={class:"mr-3 flex-1 text-right"},ye=e("div",{class:"vertical-line h-16"},null,-1),be={class:"ml-3 flex-1"};function $e(t,i,n,p,g,l){return r(),a("div",we,[e("div",xe,[d(t.$slots,"event")]),ye,e("div",be,[d(t.$slots,"year")])])}const ke=_(ve,[["render",$e]]);const Se={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},je={class:"mr-4 flex-1 font-bold text-right text-2xl mt-1"},Oe={class:"flex-none"},Ee={class:"vertical-line h-32 relative"},Ce={class:"ml-4 flex-1 mt-1"};function Le(t,i,n,p,g,l){return r(),a("div",{class:"flex justify-between items-center grow",onClick:i[0]||(i[0]=c=>t.$emit("event-click",n.index))},[e("div",je,[d(t.$slots,"year",{},void 0,!0)]),e("div",Oe,[e("div",Ee,[e("div",{class:h(["circle grow-child",[n.focused?"bg-so-blue":"bg-white"]])},null,2)])]),e("div",Ce,[d(t.$slots,"event",{},void 0,!0)])])}const Te=_(Se,[["render",Le],["__scopeId","data-v-40c8d2c3"]]),Be={props:{index:{type:Number,default:0},focused:{type:Boolean,default:!1}}},Ie={class:"mr-4 flex-1 text-right mt-1"},Pe={class:"flex-none"},Ae={class:"vertical-line h-24"},Ne={class:"ml-4 flex-1 font-bold text-2xl mt-1"};function Re(t,i,n,p,g,l){return r(),a("div",{class:"flex justify-between items-center grow",onClick:i[0]||(i[0]=c=>t.$emit("event-click",n.index))},[e("div",Ie,[d(t.$slots,"event")]),e("div",Pe,[e("div",Ae,[e("div",{class:h(["rounded-full h-4 w-4 -ml-1 mt-10 border-4 border-gray-900 grow-child",[n.focused?"bg-so-blue":"bg-white"]])},null,2)])]),e("div",Ne,[d(t.$slots,"year")])])}const De=_(Be,[["render",Re]]);const Fe={components:{TimelineStart:ie,TimelineEnd:de,TimelineEventRight:he,TimelineEventLeft:ke,ImportantTimelineEventRight:Te,ImportantTimelineEventLeft:De},data:()=>({timelineEvents:[{year:"2008",event:"Our humble beginnings"},{year:"2009",event:"First release",important:!1},{year:"2012",event:"Big Distro Rebuild (BDR)",important:!1},{year:"2014",event:"Security Onion Solutions, LLC",important:!0},{year:"2016",event:"Company expansion",important:!1},{year:"2018",event:"Custom hardware",important:!0},{year:"2019",event:"Team continues to grow!",important:!0},{year:"2020",event:"Security Onion 2",important:!0},{year:"2021",event:"Over 2 million downloads!",important:!1},{year:"2022",event:"Significant software features introduced",important:!0},{year:"2023",event:"Security Onion 2.4 released"}],focusedEventIndex:0}),methods:{timelineComponent(t){const i=this.timelineEvents.indexOf(t);if(i===0)return"timeline-start";if(i===this.timelineEvents.length-1)return"timeline-end";{let n="";return i%2,n="right",t.important?`important-timeline-event-${n}`:`timeline-event-${n}`}},handleClick(t){this.focusedEventIndex=t,this.$emit("timeline-click",t)}}},ze={class:"text-sm lg:text-base"};function Me(t,i,n,p,g,l){return r(),a("div",null,[(r(!0),a(j,null,O(t.timelineEvents,(c,v)=>(r(),a("div",{key:v},[(r(),G(H(l.timelineComponent(c)),{index:v,focused:t.focusedEventIndex===v,onEventClick:i[0]||(i[0]=$=>l.handleClick($))},{year:o(()=>[u(x(c.year),1)]),event:o(()=>[e("div",ze,x(c.event),1)]),_:2},1064,["index","focused"]))]))),128))])}const T=_(Fe,[["render",Me]]);const Ge={props:{name:{type:String,default:""},image:{type:String,default:""},role:{type:String,default:""},linkedin:{type:String,default:""},twitter:{type:String,default:""}},computed:{showSocialLinks(){return this.linkedin!==""||this.twitter!==""}}},He={class:"card"},Ue={class:"flex flex-col items-left"},Ve={class:"img pt-3 px-3"},We=["src"],Je={class:"flex flex-row justify-between gap-0 ml-4 mr-3"},qe={class:"text-xl font-bold"},Ke={class:"flex flex-row justify-left items-center"},Ze=["href"],Qe=["href"],Xe={class:"text-md mx-4"};function Ye(t,i,n,p,g,l){const c=W;return r(),a("div",He,[e("div",Ue,[e("div",Ve,[e("img",{src:`/img/team/${n.image}`},null,8,We)]),e("div",Je,[e("div",qe,x(n.name),1),e("div",Ke,[n.twitter!==""?(r(),a("a",{key:0,href:n.twitter,target:"_blank",class:"hover:text-so-blue"},[s(c,{name:"fa6-brands:twitter",class:h([n.linkedin!==""?"mr-3":""])},null,8,["class"])],8,Ze)):C("",!0),n.linkedin!==""?(r(),a("a",{key:1,href:n.linkedin,target:"_blank",class:"hover:text-so-blue"},[s(c,{name:"fa6-brands:linkedin"})],8,Qe)):C("",!0)])]),e("div",Xe,x(n.role),1)])])}const B=_(Ge,[["render",Ye],["__scopeId","data-v-cd2cd1e3"]]),et=""+new URL("elastic-logo.495cbf4c.png",import.meta.url).href,tt=""+new URL("garlandtechnology-logo.6ea8ec51.png",import.meta.url).href,nt=""+new URL("gigamon-logo.98615b34.png",import.meta.url).href,it=""+new URL("intelligenesis-logo.e924eb90.png",import.meta.url).href,ot=""+new URL("profitap-logo.51b610e6.png",import.meta.url).href,st=[{name:"Doug Burks",role:"Founder and CEO",image:"doug_burks.jpg",linkedin:"https://www.linkedin.com/in/dougburks",twitter:"https://twitter.com/dougburks"},{name:"Phil Plantamura",role:"Chief Operating Officer",image:"phil_plantamura.jpg",linkedin:"https://www.linkedin.com/in/philplantamura",twitter:"https://twitter.com/philplantamura"},{name:"Mike Byrd",role:"Chief Financial Officer",image:"mike_byrd.jpg"},{name:"Mike Reeves",role:"Vice President of Product",image:"mike_reeves.jpg",linkedin:"https://www.linkedin.com/in/mike-reeves-948b131/",twitter:"https://twitter.com/toosmooth"},{name:"Wes Lambert",role:"Principal Engineer",image:"wes_lambert.jpg",linkedin:"https://www.linkedin.com/in/wlambertcissp/",twitter:"https://twitter.com/therealwlambert"},{name:"Josh Brower",role:"Senior Engineer",image:"josh_brower.jpg",linkedin:"https://www.linkedin.com/in/joshbrower",twitter:"https://twitter.com/defensivedepth"},{name:"Karen Henegar Long",role:"Sales Assistant",image:"karen_henegar_long.jpg"},{name:"Josh Patterson",role:"Senior Engineer",image:"josh_patterson.jpg",twitter:"https://twitter.com/m0duspwnens"},{name:"Bryant Treacle",role:"Senior Engineer",image:"bryant_treacle.jpg",linkedin:"https://www.linkedin.com/in/bryant-treacle-40ab88113/"},{name:"John Bernal",role:"Senior Engineer",image:"john_bernal.jpg",linkedin:"https://www.linkedin.com/in/j-bernal/"},{name:"Jason Ertel",role:"Vice President of Software Engineering",image:"jason_ertel.jpg",twitter:"https://twitter.com/jasonertel"},{name:"Chris Morgret",role:"Manager of Support and Professional Services",image:"chris_morgret.jpg",linkedin:"http://www.linkedin.com/in/chris-morgret-75b0891"},{name:"Pete Di Giorgio",role:"Vice President of Federal",image:"pete_di_giorgio.jpg",linkedin:"https://www.linkedin.com/in/peterdigiorgio/"},{name:"Matt Gracie",role:"Senior Engineer",image:"matt_gracie.jpg",linkedin:"https://www.linkedin.com/in/matthew-gracie/",twitter:"https://twitter.com/InfosecGoon"},{name:"Andre Dessert",role:"Support Engineer",image:"andre_dessert.jpg"},{name:"Nate Olsen",role:"Account Manager",image:"nate_olsen.jpg"},{name:"Ethan Burrow",role:"Associate Support Engineer",image:"ethan_burrow.jpg",linkedin:"https://www.linkedin.com/in/james-burrow-b0a004232"},{name:"Robbie Marshall",role:"Senior Engineer",image:"robbie_marshall.jpg"},{name:"Tom Gilson",role:"Senior Engineer",image:"tom_gilson.jpg",linkedin:"https://www.linkedin.com/in/thomas-gilson/"},{name:"Jorge Reyes",role:"Senior Engineer",image:"jorge_reyes.jpg"},{name:"Corey Ogburn",role:"Senior Software Engineer",image:"corey_ogburn.jpg"}],rt={team:st},at=[{text:"",img:""},{text:"In 2008, Doug Burks started working on Security Onion, a Linux distribution for intrusion detection, network security monitoring, and log management.",img:"sos-site-header-2-square.jpg"},{},{},{text:"As the worldwide Security Onion community grew, Doug Burks began receiving more and more requests for training and professional services. In 2014, Doug started Security Onion Solutions LLC to help Security Onion users peel back the layers of their networks.",img:"security_onion_solutions_rings.jpg"},{},{text:"In 2018 we celebrated 10 years of Security Onion by announcing custom hardware appliances!",img:"old-server-mockup.jpg"},{text:"Security Onion Solutions continued to grow in 2019, adding several new team members.",img:"new-team.jpg"},{text:"2020 marked the year that Security Onion 2 was introduced, with a complete overhaul of the product, and a brand new native web interface.",img:"alerts.jpg"},{},{text:"Significant Security Onion Console (SOC) features introduced: Cases, Dashboards, Analyzers, and more!",img:"dashboards.jpg"},{text:"New base operating system, simplified setup process, new user administration interface, new configuration interface, and many more new features. Also consolidation of third-party dependencies and additional security enhancements.",img:"config.jpg"}],lt={events:at};const ct=[et,tt,nt,it,ot],dt={components:{SubHero:z,Timeline:T,TeamCard:B,SectionHeader:L,ActionCallout:q,FeatureRight:K,FeatureLeft:Z},data:()=>({sos:J,links:[{name:"Portfolio",id:"portfolio"},{name:"Partners",id:"partners"},{name:"About",id:"about"},{name:"History",id:"timeline"},{name:"Team",id:"members"}],eventText:"Default Graphic",teamArr:rt.team,eventList:lt.events,currentEvent:1,logos:ct}),methods:{setEventGraphic(t){this.currentEvent=t+1,window.innerWidth<1024&&this.$scrollTo("#timeline")},eventObj(){this.eventList.length<this.currentEvent&&(this.currentEvent=0);let t=this.eventList[this.currentEvent].img;return(t===""||t===void 0)&&(this.currentEvent=0,t=this.eventList[this.currentEvent].img),{text:this.eventList[this.currentEvent].text,img:`/img/graphics/${t}`}}}},f=t=>(U("data-v-514e3d25"),t=t(),V(),t),mt={class:"xs:px-12"},ut=f(()=>e("br",null,null,-1)),_t={class:"flex justify-center"},ft={class:"px-6 xs:px-12 lg:px-32"},pt=f(()=>e("div",{class:"text-center xs:text-left"}," Products ",-1)),gt=f(()=>e("div",{class:"text-left"}," Our products include both the Security Onion software and specialized hardware appliances that are built and tested to run Security Onion. Our appliances will save you and your team time and resources, allowing you to focus on keeping your organization secure. ",-1)),ht=f(()=>e("div",{class:"text-center xs:text-left"}," Services ",-1)),vt=f(()=>e("div",{class:"text-left"}," We offer both training and support for Security Onion. Our instructors are the only Security Onion Certified Instructors in the world and our course material is the only authorized training material for Security Onion. We've been teaching Security Onion classes and providing Professional Services since 2014. ",-1)),wt=f(()=>e("div",{class:"text-2xl flex justify-center"},[e("div",null," Interested in discussing how our products and services can help your organization? ")],-1)),xt=f(()=>e("div",{class:"text-lg my-1"}," Contact Us ",-1)),yt={class:"xs:-mx-12 px-6 xs:px-12 lg:px-32"},bt={class:"flex flex-col lg:flex-row lg:flex-wrap justify-center content-center md:-mx-2 mt-4"},$t=["src"],kt={class:"px-6 xs:px-12 lg:px-32"},St={class:"rounded-full shadow-lg overflow-hidden"},jt=f(()=>e("div",{class:"text-center xs:text-left"}," Security Onion Solutions, LLC is the creator and maintainer of Security Onion, a free and open platform for threat hunting, network security monitoring, and log management. Security Onion includes best-of-breed free and open tools including Suricata, Zeek, the Elastic Stack and many others. ",-1)),Ot=f(()=>e("div",{class:"text-center xs:text-left mt-4"}," We created and maintain Security Onion, so we know it better than anybody else. When you purchase products and services from us, you're helping to fund development of Security Onion! ",-1)),Et={class:"xs:-mx-12"},Ct={class:"flex flex-row flex-wrap justify-center content-center mb-4"},Lt={class:"flex flex-col justify-center items-center md:w-1/2 lg:w-2/3 lg:pr-8 xl:pl-4 pb-12 lg:pb-0"},Tt=["src"],Bt={class:"text-xl text-center w-4/5"},It={class:"md:w-1/2 lg:w-1/3 pr-12"},Pt={class:"flex flex-row flex-wrap justify-center content-center mb-4 md:mx-24"};function At(t,i,n,p,g,l){const c=R,v=D,$=b("SubHero"),k=F,I=b("feature-left"),E=b("feature-right"),P=b("action-callout"),w=M,y=L,A=T,N=B;return r(),a("div",mt,[s(c,{"page-name":"Home",links:t.links},null,8,["links"]),s($,{class:"hero text-center"},{header:o(()=>[u(" Announcing "),ut,u(" Security Onion 2.4 ")]),body:o(()=>[u(" Our latest version focuses on simplifying grid installation and configuration. "),e("div",_t,[s(v,{class:"mt-4",link:"/software"},{default:o(()=>[u(" Learn More ")]),_:1})])]),_:1}),s(w,{id:"portfolio",alternate:!0},{default:o(()=>[e("div",ft,[s(I,{class:"my-12"},{header:o(()=>[pt]),graphic:o(()=>[s(k,{class:"shadow-xl rounded-md overflow-hidden","file-name":"soc.jpg",padding:!1,size:20})]),body:o(()=>[gt]),_:1}),s(E,{class:"my-12"},{header:o(()=>[ht]),graphic:o(()=>[s(k,{class:"shadow-xl rounded-md overflow-hidden","file-name":"course.jpg",padding:!1,size:20})]),body:o(()=>[vt]),_:1}),s(P,{alternate:!0,class:"my-12",onButtonClick:i[0]||(i[0]=m=>t.sos.showContactModal({text:"Please contact me with more information about Security Onion Solutions' offerings.",source:"main_general_contact_us"}))},{info:o(()=>[wt]),"button-text":o(()=>[xt]),_:1})])]),_:1}),s(w,{id:"partners"},{default:o(()=>[e("div",yt,[s(y,{class:"mb-6"},{default:o(()=>[u(" Our Partners ")]),_:1}),e("div",bt,[(r(!0),a(j,null,O(t.logos,(m,S)=>(r(),a("img",{key:S,class:"partner-logo m-auto lg:px-6 py-10 lg:py-2 w-1/2 lg:w-1/6",src:m},null,8,$t))),128))])])]),_:1}),s(w,{id:"about",alternate:!0},{default:o(()=>[e("div",kt,[s(y,{class:"mb-6"},{default:o(()=>[u(" About Us ")]),_:1}),s(E,{class:"xs:mb-12","text-margin":!0},{graphic:o(()=>[e("div",St,[s(k,{padding:!1,"file-name":"mike-speaking.jpg",size:20})])]),body:o(()=>[jt,Ot]),_:1})])]),_:1}),s(w,{id:"timeline"},{default:o(()=>[e("div",Et,[s(y,{class:"sm:mx-40 mb-8"},{default:o(()=>[u(" Our History ")]),_:1}),e("div",Ct,[e("div",Lt,[e("img",{class:h(["object-contain mb-8 overflow-hidden rounded-md w-5/6",[t.currentEvent!=0?"shadow-xl":""]]),src:l.eventObj().img},null,10,Tt),e("div",Bt,x(l.eventObj().text),1)]),e("div",It,[s(A,{onTimelineClick:i[1]||(i[1]=m=>l.setEventGraphic(m))})])])])]),_:1}),s(w,{id:"members",alternate:!0},{default:o(()=>[e("div",null,[s(y,{class:"sm:mx-40 mb-8"},{default:o(()=>[u(" Our Team ")]),_:1}),e("div",Pt,[(r(!0),a(j,null,O(t.teamArr,(m,S)=>(r(),a("div",{key:S,class:"px-4 py-4"},[s(N,{name:m.name,role:m.role,image:m.image,linkedin:m.linkedin,twitter:m.twitter},null,8,["name","role","image","linkedin","twitter"])]))),128))])])]),_:1})])}const Kt=_(dt,[["render",At],["__scopeId","data-v-514e3d25"]]);export{Kt as default};
