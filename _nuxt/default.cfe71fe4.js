import{q as d,M as p,c as s,S as u,a as t,P as n,Q as h,O as m,o,T as f,U as _,t as x}from"./entry.1230311b.js";import{NAV_ITEMS as g}from"./index.c882b814.js";import{g as y}from"./index.4fde63e3.js";import"./member.05846920.js";const v={class:"h-18"},w={class:"ba h-18 fixed bottom-0 flex w-full justify-center"},b={class:"flex w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-primary px-16 py-2 backdrop-blur"},k=["onClick"],C={class:"text-xs text-inherit"},j=d({__name:"default",setup(S){const a=p(),l={Home(){a.push("/")},Draw(){a.push({name:"r-id",params:{id:y()}})},async Copy(){try{await navigator.clipboard.writeText(window.location.href),alert("Copied!")}catch(e){console.error(e)}}},c=e=>{l[e]()};return(e,B)=>(o(),s(n,null,[u(e.$slots,"default"),t("nav",v,[t("div",w,[t("ul",b,[(o(!0),s(n,null,h(m(g),({name:r,icon:i})=>(o(),s("li",{key:r,class:"flex flex-col items-center gap-1 rounded p-4 hover:cursor-pointer hover:bg-white/80 hover:text-primary-light",onClick:M=>c(r)},[(o(),f(_(i),{class:"h-6 w-6 text-inherit"})),t("p",C,x(r),1)],8,k))),128))])])])],64))}});export{j as default};
