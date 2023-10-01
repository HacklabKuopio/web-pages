import{_ as v}from"./section.1059ba3f.js";/* empty css                       */import{a as f,o,c as k,C as s,e,J as L,b as i,X as x,Y as P,t as u,q as B,Z as n,u as w,m as N,a2 as m,a3 as d,$ as _,a0 as h}from"./entry.cf772d27.js";import{_ as $}from"./nuxt-link.63b1115e.js";const q={},U=e("div",{class:"border-t-2 pt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right mb-6 md:mb-8"},[e("ol",{itemscope:"",itemtype:"https://schema.org/BreadcrumbList",class:"blog-breadcrumb"},[e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("a",{itemprop:"item",href:"/"},[e("span",{itemprop:"name"},"Home")]),e("meta",{itemprop:"position",content:"1"})]),e("span",null,"/"),e("li",{itemprop:"itemListElement",itemscope:"",itemtype:"https://schema.org/ListItem"},[e("span",{itemprop:"name"},"Blog"),e("meta",{itemprop:"position",content:"2"})])])],-1),C=e("h1",{class:"font-bold mb-4 md:mb-6 text-h3 leading-h3 md:text-h1 md:leading-h1 text-center md:text-left"},"Hacklab Kuopio Blog",-1),S=e("p",{class:"mb-3 md:w-8/12 md:text-lg md:leading-lg text-center md:text-left"},null,-1),D=e("div",{class:"border-t-2 mt-8 border-typography_primary flex flex-col md:flex-row items-center md:justify-between md:text-right"},null,-1);function I(t,a){const c=v;return o(),k(c,{id:"blog",class:"text-typography_primary"},{default:s(()=>[U,C,S,D]),_:1})}const et=f(q,[["render",I]]),V={class:"grid grid-cols-10 gap-4 text-typography_primary"},E={class:"wrapper"},M={class:"text-h3 leading-h3 font-semibold mb-2 group-hover:text-brand_primary"},j={class:"text-sm leading-sm mb-4 text-typography_primary/75 dark:text-typography_primary_dark/75"},A={key:0,class:"w-full md:w-7/12 text-h3 leading-h3 font-bold dark:text-white"},at={__name:"list",props:{data:{type:Array,required:!0},message:{type:String,default:"There are no posts right now, but stay tuned for newer releases in the future."}},setup(t){const{$formatDate:a}=L();return(c,y)=>{const g=$;return o(),i(x,null,[e("ul",V,[(o(!0),i(x,null,P(t.data,r=>(o(),i("li",{key:r._path,class:"col-span-full md:col-span-5 relative rounded-md border-2 border-typography_primary hover:border-brand_primary group"},[n(g,{to:r._path+"/",class:"p-4 block relative"},{default:s(()=>[e("div",E,[e("header",null,[e("h2",M,u(r.headline),1),e("p",j,u(w(a)(r.date)),1),e("p",null,u(r.excerpt),1)])])]),_:2},1032,["to"])]))),128))]),t.data.length==0?(o(),i("p",A,u(t.message),1)):B("",!0)],64)}}},H={},T={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Z=e("path",{fill:"currentColor",d:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"},null,-1),z=[Z];function F(t,a){return o(),i("svg",T,z)}const J=f(H,[["render",F]]),K={class:"pagination-list text-typography_primary"},R={class:"pagination-extra"},X={class:"pagination-extra"},Y={__name:"pagination",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},nextPage:{type:Boolean,required:!0},baseUrl:{type:String,required:!0},pageUrl:{type:String,required:!0}},setup(t){const a=t,c=r=>`${a.pageUrl}${r}/`,y=[Math.max(1,a.currentPage-1),a.currentPage,Math.min(a.totalPages,a.currentPage+1)],g=N(()=>a.currentPage===2?a.baseUrl:`${a.pageUrl}${a.currentPage-1}/`);return(r,G)=>{const b=J,p=$;return o(),i("div",K,[m(n(p,{class:"pagination-item pagination-icon",to:w(g)},{default:s(()=>[n(b,{class:"transform rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[d,t.currentPage>1]]),n(p,{class:h(["pagination-item",t.currentPage===1?"active":""]),to:t.baseUrl},{default:s(()=>[_("1")]),_:1},8,["class","to"]),m(e("span",R," ... ",512),[[d,t.currentPage>2]]),(o(),i(x,null,P(y,l=>m(n(p,{key:l,class:h(["pagination-item",t.currentPage===l?"active":""]),to:c(l)},{default:s(()=>[_(u(l),1)]),_:2},1032,["class","to"]),[[d,l!==1&&l!==t.totalPages]])),64)),m(e("span",X," ... ",512),[[d,t.currentPage<t.totalPages-1]]),m(n(p,{class:h(["pagination-item",t.currentPage===t.totalPages?"active":""]),to:c(t.totalPages)},{default:s(()=>[_(u(t.totalPages),1)]),_:1},8,["class","to"]),[[d,t.totalPages>1]]),m(n(p,{class:"pagination-item pagination-icon",to:c(t.currentPage+1)},{default:s(()=>[n(b,{class:"transform -rotate-90 h-6 w-6",width:"24",height:"24"})]),_:1},8,["to"]),[[d,t.currentPage<t.totalPages]])])}}},rt=f(Y,[["__scopeId","data-v-1dac4ff8"]]);export{et as _,at as a,rt as b};
