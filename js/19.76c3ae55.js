(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{fdd9:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"q-pa-lg"},[e("q-card",[e("q-card-section",[e("div",{staticClass:"row flex justify-between"},[t._v("What would you like to bring to the Hypha DAO?"),e("a",{staticClass:"md-hint",attrs:{href:"https://www.markdownguide.org/cheat-sheet/",target:"_blank"}},[t._v("Markdown Cheat Sheet")])]),e("q-splitter",{staticStyle:{height:"500px"},scopedSlots:t._u([{key:"separator",fn:function(){return[e("q-avatar",{attrs:{color:"primary","text-color":"white",size:"28px",icon:"fas fa-arrows-alt-h"}})]},proxy:!0},{key:"before",fn:function(){return[e("div",{staticClass:"q-pa-md"},[e("q-input",{ref:"content",staticClass:"fit q-pa-sm",attrs:{type:"textarea",rows:"20",rules:[t.rules.required],"lazy-rules":""},model:{value:t.form.content,callback:function(a){t.$set(t.form,"content",a)},expression:"form.content"}})],1)]},proxy:!0},{key:"after",fn:function(){return[e("div",{staticClass:"q-pa-md"},[e("q-markdown",{staticClass:"fit q-pa-sm",attrs:{src:t.form.content}})],1)]},proxy:!0}]),model:{value:t.splitter,callback:function(a){t.splitter=a},expression:"splitter"}})],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{attrs:{label:t.modify?"Modify my application":"Submit my application",color:"primary",loading:t.submitting},on:{click:t.onApply}})],1)],1)],1)},i=[],r=e("ded3"),n=e.n(r),o=(e("e6cf"),e("9008")),c=e("2f62"),l={name:"page-members-apply",mixins:[o["a"]],data(){return{form:{content:""},modify:!1,splitter:50,submitting:!1}},async mounted(){const t=await this.fetchApplication();t&&(this.modify=!0,this.form.content=t.content)},methods:n()(n()({},Object(c["b"])("members",["apply","fetchApplication"])),{},{async onApply(){if(await this.resetValidation(this.form),!await this.validate(this.form))return;this.submitting=!0;const t=await this.apply(this.form.content);this.submitting=!1,t&&"/members/add/success"!==this.$router.currentRoute.path&&await this.$router.push({path:"/members/add/success"})}})},p=l,f=e("2877"),m=e("9989"),u=e("f09f"),d=e("a370"),h=e("8562"),y=e("cb32"),b=e("27f9"),w=e("4b7e"),g=e("9c40"),q=e("eebe"),k=e.n(q),v=Object(f["a"])(p,s,i,!1,null,"7623535b",null);a["default"]=v.exports;k()(v,"components",{QPage:m["a"],QCard:u["a"],QCardSection:d["a"],QSplitter:h["a"],QAvatar:y["a"],QInput:b["a"],QCardActions:w["a"],QBtn:g["a"]})}}]);