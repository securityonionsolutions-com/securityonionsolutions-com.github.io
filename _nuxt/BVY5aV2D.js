import{s as i}from"./Dtv-UwXP.js";import{_ as l,o,c as r,d as n,n as c,y as d}from"./KkZSxgP4.js";const m={data:()=>({sos:i}),props:{size:{type:Number,default:20},padding:{type:Boolean,default:!0},fileName:{type:String,default:"",required:!0},clickable:{type:Boolean,default:!1}},computed:{sizeVar(){return{"--size":`${this.size}rem`}}},methods:{handleClick(){if(this.clickable){const t=this.fileName.includes("-thumb")?"fullsize":"thumbnail";i.showImageZoom({imageName:this.fileName,imageType:t})}}}},u=["src"];function f(t,a,e,p,_,s){return o(),r("div",{class:c(["flex justify-center items-center m-auto size",[e.padding?"bg-white rounded-full overflow-hidden":"xs:p-0",e.clickable?"transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer":""]]),style:d(s.sizeVar),onClick:a[0]||(a[0]=h=>s.handleClick())},[n("img",{src:`/img/graphics/${e.fileName}`},null,8,u)],6)}const z=l(m,[["render",f],["__scopeId","data-v-54801176"]]);export{z as _};