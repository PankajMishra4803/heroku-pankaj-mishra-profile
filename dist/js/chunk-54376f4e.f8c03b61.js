(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54376f4e"],{"0160":function(e,t,i){},"0e81":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"qualification"},[i("v-toolbar",{attrs:{color:"teal","max-width":"250",dark:""}},[i("v-toolbar-title",[e._v("Qualification")])],1),i("v-timeline",{attrs:{"align-top":"",dense:"dense"}},e._l(e.qualifications,(function(t,s){return i("v-timeline-item",{key:s,attrs:{color:"teal",small:""}},[i("v-card",{staticClass:"elevation-2"},[i("v-card-title",{staticClass:"headline"},[e._v(e._s(t.classname))]),i("v-card-text",[i("p",[i("span",[e._v("CollageName:")]),i("span",[e._v(e._s(t.schoolName))])]),i("p",[i("span",[e._v("CGPPercentage:")]),i("span",{staticStyle:{}},[e._v(e._s(t.CGP))])]),i("p",[i("span",[e._v("YearOfPassing:")]),i("span",{staticStyle:{}},[e._v(e._s(t.yearOfPassing))])])])],1)],1)})),1),i("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"teal"},on:{click:e.toTop}},[i("v-icon",[e._v(e._s(e.icon))])],1)],1)},n=[],a={name:"Qualification",data:function(){return{fab:!1,icon:"mdi-apple-keyboard-control",qualifications:[{classname:"M.Tech",schoolName:"Birla",CGP:"5.5",yearOfPassing:"2018"},{classname:"BCA",schoolName:"NSHM",CGP:"7.0",yearOfPassing:"2012"},{classname:"High Seconday",schoolName:"Birla",CGP:"56%",yearOfPassing:"2008"},{classname:"Secondary",schoolName:"Birla",CGP:"71%",yearOfPassing:"2006"}]}},methods:{onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20}},toTop:function(){this.$vuetify.goTo(0)}}},o=a,l=i("2877"),r=i("6544"),c=i.n(r),m=i("8336"),h=i("b0af"),d=i("99d9"),v=i("132d"),f=i("8414"),u=i("1e06"),p=i("71d9"),g=i("2a7f"),_=i("269a"),C=i.n(_),b=i("f977"),y=Object(l["a"])(o,s,n,!1,null,null,null);t["default"]=y.exports;c()(y,{VBtn:m["a"],VCard:h["a"],VCardText:d["a"],VCardTitle:d["b"],VIcon:v["a"],VTimeline:f["a"],VTimelineItem:u["a"],VToolbar:p["a"],VToolbarTitle:g["a"]}),C()(y,{Scroll:b["b"]})},"1e06":function(e,t,i){"use strict";i("c96a");var s=i("5530"),n=i("58df"),a=i("9d26"),o=i("7560"),l=i("a9ad"),r=Object(n["a"])(l["a"],o["a"]);t["a"]=r.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(a["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",Object(s["a"])({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var e=[];return this.hideDot||e.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},e)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody(),this.genDivider()];return this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:Object(s["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},t)}})},8414:function(e,t,i){"use strict";var s=i("5530"),n=(i("0160"),i("58df")),a=i("7560");t["a"]=Object(n["a"])(a["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(s["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-54376f4e.f8c03b61.js.map