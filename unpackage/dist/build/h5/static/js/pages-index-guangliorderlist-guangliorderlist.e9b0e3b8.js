(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-guangliorderlist-guangliorderlist"],{"1a28":function(t,n,a){"use strict";a.r(n);var e=a("a0e9"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a},"546c":function(t,n,a){"use strict";a.d(n,"b",(function(){return e})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){}));var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"width95 margin-center "},t._l(t.data,(function(n,e){return a("v-uni-view",{key:e,staticClass:"bg-color-white padding-20 border-radius-15 margin-top-30"},[a("v-uni-navigator",{attrs:{url:"/pages/order/order-look/order-look?time="+n.time+"&mobile="+n.mobile}},[t._l(n.food,(function(n,e){return a("v-uni-image",{key:e,staticStyle:{width:"110rpx",height:"110rpx","margin-right":"10px"},attrs:{src:t.find(n.name),mode:""}})})),a("v-uni-view",{staticClass:"d-row d-jc-between padding-10 padding-bottom-20 border-bottom-2"},[a("v-uni-view",{staticClass:"d-row"},[a("v-uni-view",{staticClass:"d-clo d-jc-between padding-left-10"},[a("h3",[t._v(t._s(n.name)+" "+t._s(n.butt?n.address:""))]),a("v-uni-label",{staticClass:"font20 gray3"},[t._v(t._s(n.mobile))])],1)],1),a("v-uni-view",{staticClass:"d-clo d-ai-end"},[a("v-uni-view",{staticClass:"padding-bottom-20"},[t._v(t._s(n.butt?"外卖配送":"门店自取"))]),a("v-uni-view",[a("v-uni-label",{staticClass:"font24 gray3"},[t._v(t._s(t.formatDateTime(n.time)))])],1)],1)],1),a("v-uni-view",{staticClass:"d-row d-jc-between d-ai-centen padding-10 font30 padding-bottom-10"},[a("v-uni-view",{staticClass:"font22"},[t._v(t._s(n.food.map((function(t){return t.name+"X"+t.number})).join("+")))]),a("v-uni-view",[t._v("¥"),a("v-uni-label",{staticClass:"font-bold font36"},[t._v(t._s(n.total))])],1)],1)],2),a("v-uni-view",{staticClass:"submit",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.shanchu(n.name,n.time)}}},[t._v("删除订单")])],1)})),1)},i=[]},6053:function(t,n,a){"use strict";var e=a("f2e1"),i=a.n(e);i.a},a0e9:function(t,n,a){"use strict";(function(t){a("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("fb6a"),a("99af");var e={data:function(){return{data:[]}},onShow:function(){this.dingdang()},methods:{find:function(t){return"../../../static/shanpin/goods/".concat(t,".jpg")},dingdang:function(){var n=this;uni.showLoading({title:"稍等片刻"}),t.callFunction({name:"getfoodlist"}).then((function(t){console.log(t.result.data),n.data=t.result.data})),uni.hideLoading()},shanchu:function(n,a){uni.showLoading({title:"稍等片刻"}),t.callFunction({name:"foodlistshanchu",data:{name:n,time:a}}),this.dingdang(),uni.hideLoading()},formatDateTime:function(t){var n=new Date(t),a=n.getFullYear(),e=("0"+(n.getMonth()+1)).slice(-2),i=("0"+n.getDate()).slice(-2),o=("0"+n.getHours()).slice(-2),d=("0"+n.getMinutes()).slice(-2),c=("0"+n.getSeconds()).slice(-2);return"".concat(a,"-").concat(e,"-").concat(i," ").concat(o,":").concat(d,":").concat(c)}}};n.default=e}).call(this,a("a9ff")["default"])},ca95:function(t,n,a){"use strict";a.r(n);var e=a("546c"),i=a("1a28");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);a("6053");var d=a("f0c5"),c=Object(d["a"])(i["default"],e["b"],e["c"],!1,null,"4edadb3c",null,!1,e["a"],void 0);n["default"]=c.exports},ee8f:function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"uni-page-head[data-v-4edadb3c],uni-page[data-v-4edadb3c],uni-page-body[data-v-4edadb3c]{background-color:#f7f7f7}body.?%PAGE?%[data-v-4edadb3c]{background-color:#f7f7f7}.bgColor[data-v-4edadb3c]{position:fixed;top:0;left:0;right:0;bottom:0;background:#bbbbf3;z-index:-1}.submit[data-v-4edadb3c]{background-color:pink;color:#000;width:90%;height:%?110?%;margin:0 auto;border-radius:%?60?%;\r\n\t\t\r\n\t\t/* position: fixed; */\r\n\t\t/* bottom: 30rpx; */left:5%;z-index:1000;text-align:center;line-height:%?100?%;font-size:%?32?%}",""]),t.exports=n},f2e1:function(t,n,a){var e=a("ee8f");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("149e92a2",e,!0,{sourceMap:!1,shadowMode:!1})}}]);