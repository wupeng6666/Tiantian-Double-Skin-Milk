(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order-look-order-look"],{"052f":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-70bae47a]{background-color:#f7f7f7}body.?%PAGE?%[data-v-70bae47a]{background-color:#f7f7f7}.pay[data-v-70bae47a]{background-color:#4f535a;width:90%;height:%?120?%;margin:0 auto;border-radius:%?60?%;position:fixed;bottom:%?30?%;left:5%;z-index:1000}.go[data-v-70bae47a]{width:%?200?%;height:%?90?%;line-height:%?90?%;background-color:#676c73!important;color:#cecece!important;text-align:center;border-radius:%?90?%}.colorWhiteBgBlue[data-v-70bae47a]{background-color:#007aff!important;color:#fff!important}",""]),t.exports=e},"31f3":function(t,e,a){"use strict";a.r(e);var n=a("4d5c"),o=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a},"4d2d":function(t,e,a){"use strict";a.r(e);var n=a("f2e7"),o=a("31f3");for(var i in o)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(i);a("867f");var d=a("f0c5"),r=Object(d["a"])(o["default"],n["b"],n["c"],!1,null,"70bae47a",null,!1,n["a"],void 0);e["default"]=r.exports},"4d5c":function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("fb6a"),a("99af"),a("e25e");var n={data:function(){return{cart:[]}},onLoad:function(t){this.foodlistlook(t)},methods:{maskedMobile:function(t){return t&&11===t.length?t.substring(0,3)+"****"+t.substring(7):t},maskedName:function(t){return t&&t.length>0?t.substring(0,1)+"*":t},formatDateTime:function(t){var e=new Date(t),a=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),o=("0"+e.getDate()).slice(-2),i=("0"+e.getHours()).slice(-2),d=("0"+e.getMinutes()).slice(-2),r=("0"+e.getSeconds()).slice(-2);return"".concat(a,"-").concat(n,"-").concat(o," ").concat(i,":").concat(d,":").concat(r)},foodlistlook:function(e){var a=this;uni.showLoading({title:"加载中"}),t.callFunction({name:"foodlistlook",data:{time:parseInt(e.time),mobile:e.mobile}}).then((function(t){uni.hideLoading(),console.log(t.result.data[0]),a.cart=t.result.data[0]}))}}};e.default=n}).call(this,a("a9ff")["default"])},"867f":function(t,e,a){"use strict";var n=a("df62"),o=a.n(n);o.a},df62:function(t,e,a){var n=a("052f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("4f06").default;o("977d74d0",n,!0,{sourceMap:!1,shadowMode:!1})},f2e7:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"width90 margin-center"},[a("v-uni-view",{staticClass:"bg-color-white padding-20 border-radius-15 margin-top-20 margin-bottom-200"},[a("h2",[t._v(t._s(t.maskedName(t.cart.name)))]),t._l(t.cart.food,(function(e,n){return a("v-uni-view",{key:n,staticClass:"d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2"},[a("v-uni-view",{staticClass:"d-row"},[a("v-uni-view",{staticClass:"d-clo d-jc-between padding-left-10"},[a("h3",[t._v(t._s(e.name))]),a("v-uni-label",{staticClass:"font22 gray4"},[t._v(t._s(e.type))])],1)],1),a("v-uni-view",[a("span",[t._v("X "+t._s(e.number))])])],1)})),a("v-uni-view",{staticClass:"d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2"},[a("v-uni-view",[t._v("配送费")]),a("v-uni-view",[t._v("¥"+t._s(t.cart.butt?1:0))])],1),a("v-uni-view",{staticClass:"d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2"},[a("v-uni-view",[t._v("电话")]),a("v-uni-view",[t._v(t._s(t.maskedMobile(t.cart.mobile)))])],1),a("v-uni-view",{staticClass:"d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2"},[a("v-uni-view",[t._v("地址")]),a("v-uni-view",[t._v(t._s(t.cart.address))])],1),a("v-uni-view",{staticClass:"d-row d-jc-between padding-10 font30 padding-bottom-20 border-bottom-2"},[a("v-uni-view",[t._v("下单时间")]),a("v-uni-view",[t._v(t._s(t.formatDateTime(t.cart.time)))])],1),a("v-uni-view",{staticClass:"d-row d-jc-between d-ai-centen padding-10 padding-top-30"},[a("v-uni-view",{staticClass:"gray3"},[t._v("账单")]),a("v-uni-view",[t._v("小计："),a("v-uni-label",{staticClass:"font-bold font40"},[t._v("¥ "+t._s(t.cart.total))])],1)],1)],2)],1)},o=[]}}]);