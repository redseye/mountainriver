(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36959dbc"],{"0fd9":function(t,e,n){"use strict";n("4b85");var l=n("2b0e"),a=n("d9f7"),r=n("80d2");const o=["sm","md","lg","xl"],s=["start","end","center"];function i(t,e){return o.reduce((n,l)=>(n[t+Object(r["t"])(l)]=e(),n),{})}const c=t=>[...s,"baseline","stretch"].includes(t),u=i("align",()=>({type:String,default:null,validator:c})),d=t=>[...s,"space-between","space-around"].includes(t),f=i("justify",()=>({type:String,default:null,validator:d})),g=t=>[...s,"space-between","space-around","stretch"].includes(t),p=i("alignContent",()=>({type:String,default:null,validator:g})),b={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(p)},y={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){let l=y[t];if(null!=n){if(e){const n=e.replace(t,"");l+="-"+n}return l+="-"+n,l.toLowerCase()}}const h=new Map;e["a"]=l["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:g},...p},render(t,{props:e,data:n,children:l}){let r="";for(const a in e)r+=String(e[a]);let o=h.get(r);if(!o){let t;for(t in o=[],b)b[t].forEach(n=>{const l=e[n],a=m(t,n,l);a&&o.push(a)});o.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),h.set(r,o)}return t(e.tag,Object(a["a"])(n,{staticClass:"row",class:o}),l)}})},3337:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"social",tag:"section"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("instagram")],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("newest-posts")],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("tags")],1)],1)],1)},a=[],r=(n("d3b7"),{name:"HomeSocial",components:{NewestPosts:function(){return n.e("chunk-50d1619a").then(n.bind(null,"e5a9"))},Instagram:function(){return n.e("chunk-fb6d2392").then(n.bind(null,"7a6e"))},Tags:function(){return n.e("chunk-08e1ccae").then(n.bind(null,"3855"))}}}),o=r,s=n("2877"),i=n("6544"),c=n.n(i),u=n("62ad"),d=n("a523"),f=n("0fd9"),g=Object(s["a"])(o,l,a,!1,null,null,null);e["default"]=g.exports;c()(g,{VCol:u["a"],VContainer:d["a"],VRow:f["a"]})},"62ad":function(t,e,n){"use strict";n("4b85");var l=n("2b0e"),a=n("d9f7"),r=n("80d2");const o=["sm","md","lg","xl"],s=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),i=(()=>o.reduce((t,e)=>(t["offset"+Object(r["t"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>o.reduce((t,e)=>(t["order"+Object(r["t"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(s),offset:Object.keys(i),order:Object.keys(c)};function d(t,e,n){let l=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");l+="-"+n}return"col"!==t||""!==n&&!0!==n?(l+="-"+n,l.toLowerCase()):l.toLowerCase()}}const f=new Map;e["a"]=l["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:l,parent:r}){let o="";for(const a in e)o+=String(e[a]);let s=f.get(o);if(!s){let t;for(t in s=[],u)u[t].forEach(n=>{const l=e[n],a=d(t,n,l);a&&s.push(a)});const n=s.some(t=>t.startsWith("col-"));s.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(o,s)}return t(e.tag,Object(a["a"])(n,{class:s}),l)}})}}]);
//# sourceMappingURL=chunk-36959dbc.15908771.js.map