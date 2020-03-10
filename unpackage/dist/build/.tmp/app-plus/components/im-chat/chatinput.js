(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/im-chat/chatinput"],{"08f6":function(t,n,e){"use strict";e.r(n);var u=e("a13d"),a=e("69dc");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("7155");var c,o=e("f0c5"),r=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=r.exports},4606:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var n={},e=this;n.engine="iFly",e.inputValue="",plus.speech.startRecognize(n,function(n){t("log",n," at components\\im-chat\\chatinput.vue:30"),e.inputValue+=n},function(n){t("log","语音识别失败："+n.message," at components\\im-chat\\chatinput.vue:33")})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=e}).call(this,e("0de9")["default"])},"69dc":function(t,n,e){"use strict";e.r(n);var u=e("4606"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},7155:function(t,n,e){"use strict";var u=e("85b2"),a=e.n(u);a.a},"85b2":function(t,n,e){},a13d:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return u})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/im-chat/chatinput-create-component',
    {
        'components/im-chat/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("08f6"))
        })
    },
    [['components/im-chat/chatinput-create-component']]
]);
