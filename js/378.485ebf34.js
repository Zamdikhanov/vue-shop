"use strict";(self["webpackChunkvue_shop"]=self["webpackChunkvue_shop"]||[]).push([[378],{3744:function(e,l){l.Z=(e,l)=>{const a=e.__vccOpts||e;for(const[t,i]of l)a[t]=i;return a}},7903:function(e,l,a){a.d(l,{Z:function(){return c}});var t=a(6252),i=a(3577),u={__name:"AppButton",props:{buttonType:{validator:function(e){return["","secondary","success"].includes(e)},default:""},outline:{type:Boolean,default:!1}},setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("button",{class:(0,i.C_)(["button",[{success:"success"===e.buttonType},{secondary:"secondary"===e.buttonType},{outline:e.outline}]])},[(0,t.WI)(l.$slots,"default")],2))}},d=a(3744);const o=(0,d.Z)(u,[["__scopeId","data-v-d97a6200"]]);var c=o},2378:function(e,l,a){a.r(l),a.d(l,{default:function(){return X}});a(7658);var t=a(6252),i=a(3577),u=a(2262);const d={class:"custom-checkbox"},o=["checked","value"];var c={__name:"AppCheckbox",props:{modelValue:{type:[Boolean,Array],default:!1},label:{type:String,default:""},value:{type:[String,Number],default:"on"},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,c=(0,u.iH)(a.modelValue),n=(0,t.Fl)((()=>a.modelValue instanceof Array?a.modelValue.includes(a.value):a.modelValue===a.trueValue));function r(e){let t=e.target.checked;if(a.modelValue instanceof Array){let e=[...a.modelValue];t?e.push(a.value):e.splice(e.indexOf(a.value),1),l("update:modelValue",e)}else l("update:modelValue",t?a.trueValue:a.falseValue)}return(l,a)=>((0,t.wg)(),(0,t.iD)("label",d,[(0,t._)("input",{checked:n.value,type:"checkbox",value:c.value,onChange:r},null,40,o),(0,t._)("span",null,(0,i.zw)(e.label),1)]))}},n=a(3744);const r=(0,n.Z)(c,[["__scopeId","data-v-42a05226"]]);var s=r,v=a(7903),_={__name:"CatalogColorButton",props:{color:{type:Object,default:()=>({})},isActive:{type:Boolean,default:!1}},setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("button",{class:(0,i.C_)(["color-button",[{active:e.isActive}]])},[(0,t._)("div",{class:"color-button__inner",style:(0,i.j5)({backgroundColor:e.color.value})},null,4)],2))}};const p=(0,n.Z)(_,[["__scopeId","data-v-d50fce76"]]);var b=p;const g={class:"catalog-card"},f={class:"catalog-card__wrapper"},m={class:"catalog-card__image-block"},k=["src"],x={class:"catalog-card__middle-block"},y={class:"middle-block__product-name"},w={class:"middle-block__price"},z={class:"middle-block__brand-name"},h={class:"middle-block__variants"},C={class:"catalog-card__end-block"},D={key:0,class:"end-block__color-container"},B={key:1,class:"end-block__size-container"};var I={__name:"CatalogCard",props:{product:{type:Object,default:()=>({})},brand:{type:Object,default:()=>({})}},setup(e){const l=e,{purchases:a,addPurchase:d}=(0,t.f3)("state"),o=(0,u.iH)(!1),c=(0,u.iH)(null),n=(0,u.iH)(null),r=(0,u.iH)(null),s=(0,t.Fl)((()=>{if(l.product.configurable_options?.length){const e=l.product.configurable_options.findIndex((e=>"color"===e.attribute_code));if(e>=0)return l.product.configurable_options[e]}return null})),_=(0,t.Fl)((()=>{if(l.product.configurable_options?.length){const e=l.product.configurable_options.findIndex((e=>"size"===e.attribute_code));if(e>=0)return l.product.configurable_options[e]}return null}));(0,t.wF)((()=>{if("configurable"===l.product.type){const e=a.value.find((e=>e.id===l.product.id));if(e){const a=l.product.variants.find((l=>l.product.id===e.variantId));c.value=a.attributes.find((e=>"size"===e.code)).value_index,n.value=a.attributes.find((e=>"color"===e.code)).value_index,o.value=!0,r.value=e.variantId}else c.value=l.product.variants[0].attributes.find((e=>"size"===e.code)).value_index,n.value=l.product.variants[0].attributes.find((e=>"color"===e.code)).value_index,r.value=l.product.variants[0].product.id}else I()}));const p=(0,t.Fl)((()=>{if("configurable"===l.product.type){const e=l.product.variants.find((e=>e.product.id===r.value));if(e)return e.product.image}return l.product.image}));function I(){"simple"===l.product.type?o.value=a.value.some((e=>e.id===l.product.id)):o.value=a.value.some((e=>e.id===l.product.id&&e.variantId===r.value))}function S(){let e=(0,u.IU)(l.product.id),a=(0,u.IU)(r.value);d(e,a),o.value=!0}function U(e){const a=l.product.variants.find((l=>A(l,"color",e)&&A(l,"size",c.value)));if(a)r.value=a.product.id;else{const a=l.product.variants.find((l=>A(l,"color",e)));c.value=a.attributes.find((e=>"size"===e.code)).value_index,r.value=a.product.id}n.value=e,I()}function V(e){const a=l.product.variants.find((l=>A(l,"color",n.value)&&A(l,"size",e)));if(a)r.value=a.product.id;else{const a=l.product.variants.find((l=>A(l,"size",e)));n.value=a.attributes.find((e=>"color"===e.code)).value_index,r.value=a.product.id}c.value=e,I()}function A(e,l,a){const t=e.attributes.find((e=>e.code===l));return!!t&&t.value_index===a}return(l,a)=>((0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("div",f,[(0,t._)("div",m,[(0,t._)("img",{class:"image-block__image",src:p.value,alt:""},null,8,k)]),(0,t._)("div",x,[(0,t._)("h3",y,(0,i.zw)(e.product.title),1),(0,t._)("div",w,[(0,t.Uk)(" Цена: "),(0,t._)("span",null,(0,i.zw)(e.product.regular_price?.value)+" "+(0,i.zw)(e.product.regular_price?.currency),1)]),(0,t._)("div",z,[(0,t.Uk)(" Брэнд: "),(0,t._)("span",null,(0,i.zw)(e.brand.title),1)]),(0,t._)("div",h," Варианты: "+(0,i.zw)(e.product.variants?.length??"1"),1),(0,t._)("div",C,[s.value?((0,t.wg)(),(0,t.iD)("div",D,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.value.values,(e=>((0,t.wg)(),(0,t.j4)(b,{key:e.value_index,color:e,"is-active":n.value===e.value_index,onClick:l=>U(e.value_index)},null,8,["color","is-active","onClick"])))),128))])):(0,t.kq)("",!0),_.value?((0,t.wg)(),(0,t.iD)("div",B,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(_.value.values,(e=>((0,t.wg)(),(0,t.j4)(v.Z,{key:e.value_index,class:"end-block__size","button-type":c.value===e.value_index?"":"secondary",outline:!0,onClick:l=>V(e.value_index)},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(e.label),1)])),_:2},1032,["button-type","onClick"])))),128))])):(0,t.kq)("",!0),(0,t.Wm)(v.Z,{"button-type":o.value?"success":"",class:"end-block__basket-button",onClick:a[0]||(a[0]=()=>{!o.value&&S()})},{default:(0,t.w5)((()=>[(0,t.Uk)((0,i.zw)(o.value?"В корзине":"В корзину"),1)])),_:1},8,["button-type"])])])])]))}};const S=(0,n.Z)(I,[["__scopeId","data-v-e9980a40"]]);var U=S;const V={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"w-6 h-6"},A=(0,t._)("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"},null,-1),P=[A];function H(e,l){return(0,t.wg)(),(0,t.iD)("svg",V,P)}const Z={},j=(0,n.Z)(Z,[["render",H]]);var F=j,O=a(6890),K=a(3770);function L(){return O}function M(){return K}const W=e=>((0,t.dD)("data-v-381c5bbd"),e=e(),(0,t.Cn)(),e),Y={class:"catalog-page"},N={class:"filters-container"},R=W((()=>(0,t._)("h3",{class:"filters-container__title"},"Фильтровать по",-1))),T={class:"filter"},q=W((()=>(0,t._)("h3",{class:"filter__title"},"Бренды",-1))),J={class:"card-container"},$=W((()=>(0,t._)("h1",{class:"card-container__title"},"Наш каталог",-1))),E={class:"card-container__list"};var G={__name:"CatalogView",setup(e){const l=L(),a=M(),d=(0,t.Fl)((()=>"AllId"===c.value[0]?l:l.filter((e=>c.value.includes(e.brand?.toString()))))),o=(0,u.iH)([]),c=(0,u.iH)(["AllId"]);(0,t.wF)((()=>{o.value=[{id:"AllId",title:"Все"},...a]}));const n=(0,u.iH)(!1);function r(){n.value=!n.value}function _(e){return a.find((l=>l.id===e))}function p(){c.value.length>1&&"AllId"===c.value[c.value.length-1]?c.value=["AllId"]:c.value.length>1&&c.value.includes("AllId")&&(c.value=c.value.filter((e=>"AllId"!==e))),0===c.value.length&&c.value.push("AllId")}return(e,l)=>((0,t.wg)(),(0,t.iD)("div",Y,[(0,t._)("aside",N,[R,(0,t._)("div",T,[(0,t._)("div",{class:(0,i.C_)(["filter__title-block",{"filter__title-block--closed":!n.value}])},[q,(0,t.Wm)(v.Z,{outline:!0,"button-type":"secondary",class:"filter-button",onClick:r},{default:(0,t.w5)((()=>[(0,t.Wm)(F,{class:(0,i.C_)(["filter-icon",{"filter-icon--up":n.value}])},null,8,["class"])])),_:1})],2),(0,t._)("div",{class:(0,i.C_)(["filter__list",{"filter__list--hide":!n.value}])},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value,(e=>((0,t.wg)(),(0,t.j4)(s,{key:e.id,modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value=e),value:e.id?.toString(),label:e.title,onChange:p},null,8,["modelValue","value","label"])))),128))],2)])]),(0,t._)("div",J,[$,(0,t._)("div",E,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(d.value,(e=>((0,t.wg)(),(0,t.j4)(U,{key:e.id,product:e,brand:_(e.brand)},null,8,["product","brand"])))),128))])])]))}};const Q=(0,n.Z)(G,[["__scopeId","data-v-381c5bbd"]]);var X=Q},3770:function(e){e.exports=JSON.parse('[{"id":1,"title":"Brand 1","sort":"100","code":"brand_1"},{"id":2,"title":"Brand 2","sort":"200","code":"brand_2"},{"id":3,"title":"Brand 3","sort":"300","code":"brand_3"},{"id":4,"title":"Brand 4","sort":"400","code":"brand_4"},{"id":5,"title":"Brand 5","sort":"500","code":"brand_5"},{"id":6,"title":"Brand 6","sort":"600","code":"brand_6"},{"id":7,"title":"Brand 7","sort":"700","code":"brand_7"},{"id":8,"title":"Brand 8","sort":"700","code":"brand_8"},{"id":9,"title":"Brand 9","sort":"900","code":"brand_9"}]')},6890:function(e){e.exports=JSON.parse('[{"type":"simple","id":1,"sku":"s1","title":"Product 1","regular_price":{"currency":"USD","value":27.12},"image":"/images/1.png","brand":9},{"type":"configurable","id":2,"sku":"c1","title":"Product 2","regular_price":{"currency":"USD","value":54.21},"image":"/images/conf/default.png","configurable_options":[{"attribute_id":93,"attribute_code":"color","label":"Color","values":[{"label":"Red","value_index":931,"value":"#ff0000"},{"label":"Blue","value_index":932,"value":"#0000ff"},{"label":"Black","value_index":933,"value":"#000"}]},{"attribute_code":"size","attribute_id":144,"position":0,"id":2,"label":"Size","values":[{"label":"M","value_index":1441,"value":1},{"label":"L","value_index":1442,"value":2}]}],"variants":[{"attributes":[{"code":"color","value_index":931},{"code":"size","value_index":1441}],"product":{"id":2001,"sku":"c1-red-m","image":"/image/conf/red.png"}},{"attributes":[{"code":"color","value_index":931},{"code":"size","value_index":1442}],"product":{"id":2002,"sku":"c1-red-l","image":"/image/conf/red.png"}},{"attributes":[{"code":"color","value_index":932},{"code":"size","value_index":1441}],"product":{"id":2003,"sku":"c1-blue-m","image":"/image/conf/blue.png"}},{"attributes":[{"code":"color","value_index":933},{"code":"size","value_index":1442}],"product":{"id":2004,"sku":"c1-black-l","image":"/image/conf/black.png"}}],"brand":1},{"type":"simple","id":3,"sku":"s2","title":"Product 3","regular_price":{"currency":"USD","value":36.87},"image":"/images/2.png","brand":8},{"type":"simple","id":4,"sku":"s3","title":"Product 4","regular_price":{"currency":"USD","value":28.91},"image":"/images/3.png","brand":2},{"type":"simple","id":5,"sku":"s4","title":"Product 5","regular_price":{"currency":"USD","value":41.23},"image":"/images/4.png","brand":7},{"type":"simple","id":6,"sku":"s5","title":"Product 6","regular_price":{"currency":"USD","value":88},"image":"/images/5.png","brand":3},{"type":"simple","id":7,"sku":"s6","title":"Product 7","regular_price":{"currency":"USD","value":127.41},"image":"/images/6.png","brand":6},{"type":"configurable","id":8,"sku":"c2","title":"Product 8","regular_price":{"currency":"USD","value":63.27},"image":"/images/conf/default.png","configurable_options":[{"attribute_id":93,"attribute_code":"color","label":"Color","values":[{"label":"Red","value_index":931,"value":"#ff0000"},{"label":"Blue","value_index":932,"value":"#0000ff"},{"label":"Black","value_index":933,"value":"#000"}]},{"attribute_code":"size","attribute_id":144,"position":0,"id":2,"label":"Size","values":[{"label":"M","value_index":1441,"value":1},{"label":"L","value_index":1442,"value":2}]}],"variants":[{"attributes":[{"code":"color","value_index":931},{"code":"size","value_index":1441}],"product":{"id":8001,"sku":"c2-red-m","image":"/image/conf/red.png"}},{"attributes":[{"code":"color","value_index":931},{"code":"size","value_index":1442}],"product":{"id":8002,"sku":"c2-red-l","image":"/image/conf/red.png"}},{"attributes":[{"code":"color","value_index":932},{"code":"size","value_index":1441}],"product":{"id":8003,"sku":"c2-blue-m","image":"/image/conf/blue.png"}},{"attributes":[{"code":"color","value_index":933},{"code":"size","value_index":1442}],"product":{"id":8004,"sku":"c2-black-l","image":"/image/conf/black.png"}}],"brand":4},{"type":"simple","id":9,"sku":"s7","title":"Product 9","regular_price":{"currency":"USD","value":123.4},"image":"/images/7.png","brand":5},{"type":"configurable","id":10,"sku":"c3","title":"Product 10","regular_price":{"currency":"USD","value":68.273},"image":"/images/conf/default.png","configurable_options":[{"attribute_id":93,"attribute_code":"color","label":"Color","values":[{"label":"Red","value_index":931,"value":"#ff0000"},{"label":"Blue","value_index":932,"value":"#0000ff"},{"label":"Black","value_index":933,"value":"#000"}]},{"attribute_code":"size","attribute_id":144,"position":0,"id":2,"label":"Size","values":[{"label":"M","value_index":1441,"value":1},{"label":"L","value_index":1442,"value":2}]}],"variants":[{"attributes":[{"code":"color","value_index":931},{"code":"size","value_index":1441}],"product":{"id":10001,"sku":"c10-red-m","image":"/image/conf/red.png"}},{"attributes":[{"code":"color","value_index":931},{"code":"size","value_index":1442}],"product":{"id":10002,"sku":"c10-red-l","image":"/image/conf/red.png"}},{"attributes":[{"code":"color","value_index":932},{"code":"size","value_index":1441}],"product":{"id":10003,"sku":"c10-blue-m","image":"/image/conf/blue.png"}},{"attributes":[{"code":"color","value_index":933},{"code":"size","value_index":1442}],"product":{"id":10004,"sku":"c10-black-l","image":"/image/conf/black.png"}}],"brand":3},{"type":"simple","id":11,"sku":"s8","title":"Product 11","regular_price":{"currency":"USD","value":92.32},"image":"/images/8.png","brand":1},{"type":"simple","id":12,"sku":"s9","title":"Product 12","regular_price":{"currency":"USD","value":53.4},"image":"/images/9.png","brand":2}]')}}]);
//# sourceMappingURL=378.485ebf34.js.map