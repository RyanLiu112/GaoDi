(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12aead3a"],{"0bc6":function(t,e,i){},"1f09":function(t,e,i){},3129:function(t,e,i){"use strict";i("a630"),i("c975"),i("d81d"),i("ac1f"),i("3ca3"),i("5319"),i("1276");var s=i("3835"),n=i("5530"),a=(i("1f09"),i("c995")),r=i("24b2"),o=i("7560"),l=i("58df"),c=i("80d2");e["a"]=Object(l["a"])(a["a"],r["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,i=t.split("@"),n=Object(s["a"])(i,2),a=n[0],r=n[1],o=function(){return e.genStructure(a)};return Array.from({length:r}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var i=this.rootTypes[t]||"";if(t===i);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);i.indexOf(",")>-1?e=this.mapBones(i):i.indexOf("@")>-1?e=this.genBones(i):i&&e.push(this.genStructure(i))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},5311:function(t,e,i){"use strict";var s=i("5607"),n=i("2b0e");e["a"]=n["a"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"6ca7":function(t,e,i){},7622:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{id:"precisetrain",fluid:"",tag:"section"}},[0==t.flag7?[i("v-skeleton-loader",t._b({attrs:{type:"article, actions",height:"500px"}},"v-skeleton-loader",t.attrs,!1))]:[i("v-stepper",{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[i("v-stepper-header",[t._l(t.steps,(function(e){return[i("v-stepper-step",{key:e+"-step",attrs:{complete:t.e1>e,step:e}},[t._v(" 步骤 "+t._s(e)+" ")]),e!==t.steps?i("v-divider",{key:e}):t._e()]}))],2),i("v-stepper-items",t._l(t.steps,(function(e){return i("v-stepper-content",{key:e+"-content",attrs:{step:e}},[1==e?[i("v-list",{attrs:{"two-line":"",flat:""}},[i("v-subheader",{staticStyle:{"font-size":"18px"}},[t._v("请选择题目来源")]),i("v-list-item-group",{attrs:{multiple:""},model:{value:t.sources_choose,callback:function(e){t.sources_choose=e},expression:"sources_choose"}},t._l(t.sources,(function(e){return i("v-list-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(s){var n=s.active;return[i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":n,color:"primary"}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e))])],1)]}}],null,!0)})})),1)],1),i("p",[t._v(t._s(t.sources_choose))])]:t._e(),2==e?[i("v-list",{attrs:{"two-line":"",flat:""}},[i("v-subheader",{staticStyle:{"font-size":"18px"}},[t._v("请选择知识点类型")]),i("v-list-item-group",{key:t.key,attrs:{multiple:""},model:{value:t.categories_choose,callback:function(e){t.categories_choose=e},expression:"categories_choose"}},t._l(t.categories,(function(e,s){return i("v-list-item",{key:s,scopedSlots:t._u([{key:"default",fn:function(s){var n=s.active;return[i("v-list-item-action",[i("v-checkbox",{attrs:{"input-value":n,color:"primary"}})],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e))])],1)]}}],null,!0)})})),1)],1),i("p",[t._v(t._s(t.categories_choose))])]:t._e(),3==e?[i("v-list",{attrs:{"two-line":"",flat:""}},[i("v-subheader",{staticStyle:{"font-size":"18px"}},[t._v("请选择题目难度")]),i("v-list-item-group",{model:{value:t.difficulties_choose,callback:function(e){t.difficulties_choose=e},expression:"difficulties_choose"}},t._l(t.difficulties,(function(e,s){return i("v-list-item",{key:s},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)})),1)],1),i("p",[t._v(t._s(t.difficulties_choose))])]:t._e(),3==e?i("v-btn",{attrs:{color:"primary"},on:{click:t.jump}},[t._v(" 进入答题 ")]):i("v-btn",{attrs:{color:"primary"},on:{click:function(i){return t.nextStep(e)}}},[t._v(" 下一步 ")]),1!=e?i("v-btn",{attrs:{text:""},on:{click:function(i){return t.backStep(e)}}},[t._v("返回上一步")]):t._e()],2)})),1)],1)]],2)},n=[],a=(i("a4d3"),i("e01a"),{name:"precisetrain",data:function(){return{e1:1,steps:3,sources:["全部题库","课本原题","金考卷","5年高考3年模拟","错题本"],categories:[],difficulties:["简单","中等","困难"],sources_choose:[],categories_choose:[],difficulties_choose:"",flag7:1,len:0,paper:[],key:0}},created:function(){this.get_all_category()},watch:{steps:function(t){this.e1>t&&(this.e1=t)},vertical:function(){var t=this;this.e1=2,requestAnimationFrame((function(){return t.e1=1}))}},methods:{get_all_category:function(){var t=this;this.$axios({method:"get",url:"/api/get_all_category/",params:{}}).then((function(e){0==e.data.error_num?(console.log(e.data),t.categories=e.data.cates,setTimeout((function(){t.key++}),1e3)):1==e.data.error_num&&alert("获取类别失败！")}))},onInput:function(t){this.steps=parseInt(t)},nextStep:function(t){this.e1=t+1},backStep:function(t){this.e1=t-1},get:function(t,e){var i=this;if(t<e){var s=new Object;i.$axios({method:"get",url:"/api/get_question/",params:{_id:i.paper[t]}}).then((function(n){if(0==n.data.error_num){if(s.id=i.paper[t],s.des=n.data.description,s.qc=n.data.question_class,"choice"==s.qc){var a=new Array;a[0]=n.data.choice[0].A,a[1]=n.data.choice[0].B,a[2]=n.data.choice[0].C,a[3]=n.data.choice[0].D,s.cho=a}s.ans=n.data.answer,i.$global.paper.push(s),t++,i.get(t,e)}else 1==n.data.error_num&&console.log(t+1,"失败！")}))}else t==e&&console.log(i.$global.paper)},jump:function(){var t=this;this.flag7=0;for(var e=0,i=0;i<t.categories_choose.length;i++)e+=Math.pow(2,t.categories_choose[i]);console.log("pow",e),this.$axios({method:"get",url:"/api/get_paper_by_category/",params:{pow:e,difficulty:t.difficulties_choose}}).then((function(e){0==e.data.error_num?(console.log(e.data),t.$global.paper=e.data.paper,t.$global.q_id=e.data.paper,t.len=e.data.paper.length,t.$global.len=e.data.paper.length,t.$global.paper_name="",t.$router.push({path:"./precisetrainpage"}),t.flag7=1):1==e.data.error_num&&alert("进入答题失败！")}))}}}),r=a,o=i("2877"),l=i("6544"),c=i.n(l),u=i("8336"),p=(i("d3b7"),i("25f0"),i("5530")),h=(i("6ca7"),i("ec29"),i("9d26")),d=i("c37a"),v=i("fe09"),f=v["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},d["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(h["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(p["a"])(Object(p["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),m=i("a523"),g=i("ce7e"),b=i("8860"),_=i("da13"),y=i("1800"),k=i("5d23"),S=i("1baa"),x=i("3129"),V=(i("4de4"),i("b0c0"),i("a9e3"),i("8836"),i("3206")),$=i("a452"),C=i("7560"),I=i("58df"),w=i("d9bd"),O=Object(I["a"])(Object(V["b"])("stepper"),$["a"],C["a"]),j=O.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,vertical:Boolean},data:function(){var t={isBooted:!1,steps:[],content:[],isReverse:!1};return t.internalLazyValue=null!=this.value?this.value:(t[0]||{}).step||1,t},computed:{classes:function(){return Object(p["a"])({"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{internalValue:function(t,e){this.isReverse=Number(t)<Number(e),e&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(w["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(t){"v-stepper-step"===t.$options.name?this.steps.push(t):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content.push(t))},unregister:function(t){"v-stepper-step"===t.$options.name?this.steps=this.steps.filter((function(e){return e!==t})):"v-stepper-content"===t.$options.name&&(t.isVertical=this.vertical,this.content=this.content.filter((function(e){return e!==t})))},stepClick:function(t){var e=this;this.$nextTick((function(){return e.internalValue=t}))},updateView:function(){for(var t=this.steps.length;--t>=0;)this.steps[t].toggle(this.internalValue);for(var e=this.content.length;--e>=0;)this.content[e].toggle(this.internalValue,this.isReverse)}},render:function(t){return t("div",{staticClass:"v-stepper",class:this.classes},this.$slots.default)}}),B=i("0789"),A=i("80d2"),L=Object(I["a"])(Object(V["a"])("stepper","v-stepper-content","v-stepper")),E=L.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var t=this.$vuetify.rtl?!this.isReverse:this.isReverse;return t?B["g"]:B["h"]},styles:function(){return this.isVertical?{height:Object(A["g"])(this.height)}:{}}},watch:{isActive:function(t,e){t&&null==e?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(t){this.isActive&&"height"===t.propertyName&&(this.height="auto")},enter:function(){var t=this,e=0;requestAnimationFrame((function(){e=t.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return t.isActive&&(t.height=e||"auto")}),450)},leave:function(){var t=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return t.height=0}),10)},toggle:function(t,e){this.isActive=t.toString()===this.step.toString(),this.isReverse=e}},render:function(t){var e={staticClass:"v-stepper__content"},i={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(e.directives=[{name:"show",value:this.isActive}]);var s=t("div",i,[this.$slots.default]),n=t("div",e,[s]);return t(this.computedTransition,{on:this.$listeners},[n])}}),T=(i("45fc"),i("a9ad")),D=i("5607"),R=Object(I["a"])(T["a"],Object(V["a"])("stepper","v-stepper-step","v-stepper")),q=R.extend().extend({name:"v-stepper-step",directives:{ripple:D["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(t){return!0!==t()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(t){t.stopPropagation(),this.$emit("click",t),this.editable&&this.stepClick(this.step)},genIcon:function(t){return this.$createElement(h["a"],t)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var t=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(t,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var t=[];return this.hasError?t.push(this.genIcon(this.errorIcon)):this.complete?this.editable?t.push(this.genIcon(this.editIcon)):t.push(this.genIcon(this.completeIcon)):t.push(String(this.step)),t},toggle:function(t){this.isActive=t.toString()===this.step.toString(),this.isInactive=Number(t)<Number(this.step)}},render:function(t){return t("div",{staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},[this.genStep(),this.genLabel()])}}),F=Object(A["i"])("v-stepper__header"),N=Object(A["i"])("v-stepper__items"),P=i("e0c7"),z=Object(o["a"])(r,s,n,!1,null,null,null);e["default"]=z.exports;c()(z,{VBtn:u["a"],VCheckbox:f,VContainer:m["a"],VDivider:g["a"],VList:b["a"],VListItem:_["a"],VListItemAction:y["a"],VListItemContent:k["a"],VListItemGroup:S["a"],VListItemTitle:k["c"],VSkeletonLoader:x["a"],VStepper:j,VStepperContent:E,VStepperHeader:F,VStepperItems:N,VStepperStep:q,VSubheader:P["a"]})},8547:function(t,e,i){"use strict";var s=i("2b0e"),n=i("80d2");e["a"]=s["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:n["j"]}}})},8836:function(t,e,i){},e0c7:function(t,e,i){"use strict";var s=i("5530"),n=(i("0bc6"),i("7560")),a=i("58df");e["a"]=Object(a["a"])(n["a"]).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:Object(s["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return o}));i("4de4"),i("45fc"),i("d3b7"),i("25f0");var s=i("c37a"),n=i("5311"),a=i("8547"),r=i("58df");function o(t){t.preventDefault()}e["a"]=Object(r["a"])(s["a"],n["a"],a["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===s&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-12aead3a.73d486b1.js.map