import n from"./BRR52tsp.js";import{_ as i,o as r,c as d,a as s,b as c,d as m,v as f}from"./CLXCGJtF.js";import"./DKzsDYrr.js";const p={props:{index:{type:Number,default:0}},computed:{indexVars(){return{"--bg-z-index":`${this.index+9980}`,"--modal-z-index":`${this.index+9981}`}}}},u={class:"flex justify-center opacity-100 modal-wrapper ma-4"};function x(t,e,_,$,b,o){const a=n;return r(),d("div",{style:f(o.indexVars),class:"modal-mask flex justify-center items-center"},[s("div",u,[c(t.$slots,"default",{},void 0,!0),s("div",{class:"flex justify-start text-2xl -ml-8 mt-2",onClick:e[0]||(e[0]=l=>t.$emit("close"))},[m(a,{name:"fa-solid:times-circle",class:"text-black"})])]),s("div",{class:"bg-black opacity-75 absolute top-0 left-0 h-full w-full modal-bg",onClick:e[1]||(e[1]=l=>t.$emit("close"))})],4)}const g=i(p,[["render",x],["__scopeId","data-v-c0ecf639"]]);export{g as default};
