import{_ as o,o as t,c as s,m as a,A as c,a as l,B as d}from"./entry.2f476eea.js";const i={props:{align:{type:String,default:"center"},showHeader:{type:Boolean,default:!0}},methods:{alignment(){switch(this.align){case"center":return"text-center";case"right":return"text-right";case"left":return"text-left";default:return"text-center"}}}},m={key:0,class:"text-xl xs:text-2xl font-bold mb-2"},x={class:"text-sm xs:text-lg"};function h(e,u,r,f,_,n){return t(),s("div",{class:d(n.alignment())},[r.showHeader?(t(),s("header",m,[a(e.$slots,"header")])):c("",!0),l("div",x,[a(e.$slots,"body")])],2)}const g=o(i,[["render",h]]);export{g as D};