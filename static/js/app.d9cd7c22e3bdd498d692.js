webpackJsonp([1],{166:function(n,e,t){t(212);var r=t(24)(t(168),t(225),"data-v-bd26cd6c",null);n.exports=r.exports},168:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(25),s=t.n(r),o=t(173),i=t.n(o),a=t(172),l=t.n(a),u=t(0),c=t.n(u),d=t(222),m=t.n(d),j=t(221),f=t.n(j),h=t(209),g=(t.n(h),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,r=0;r<e.length;r++)if(n.indexOf(e[r])>0){t=!1;break}return t}()),p=c()(new Date).diff(c()("2020年01月22日","YYYY年MM月DD日"),"day")+"天";document.title="给阿敏的小礼物",e.default={name:"app",components:{StyleEditor:m.a,ResumeEditor:f.a},data:function(){return{interval:1,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Hi，肖阿敏！\n* 这么久了，\n* 还见过我的工作，\n* 不知道代码什么？\n* 如这个什么也没有的网页，\n* 就由我来就来加点儿东西吧。 \n* 下面就开始我的表演啦...\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  "+(g?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  "+(g?"left: 0;":"left:0;right:0;margin:auto;")+"\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  "+(g?"-webkit-transform: rotateY(10deg) \n translateZ(-100px); \n transform: rotateY(10deg) \n translateZ(-100px);":"-webkit-transform: rotateX(-10deg) \n translateZ(-100px); \n transform: rotateX(-10deg) \n translateZ(-100px);")+"\n  "+(g?"":"-webkit-transform-origin: 50% 0% 0; \n transform-origin: 50% 0% 0;")+"\n}\n\n/* 再来一张信纸 */\n.resumeEditor{\n  position: fixed; \n  "+(g?"right: 0;":"left:0;right:0;margin:auto;")+"\n  "+(g?"top: 0;":"bottom:2%;")+"\n  padding: .5em;  \n  "+(g?"margin: .5em;":"")+"\n  "+(g?"width: 48%;height: 96%;":"width: 96%;height: 50%;")+"\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  "+(g?"-webkit-transform: rotateY(-10deg) \n translateZ(-100px); \n transform: rotateY(-10deg) \n translateZ(-100px);":"-webkit-transform: rotateX(10deg) \n translateZ(-100px); \n transform: rotateX(10deg) \n translateZ(-100px);")+"\n    "+(g?"":"-webkit-transform-origin: 50% 0% 0; \n transform-origin: 50% 0% 0;")+"\n  }\n/* 我开始写了 */\n\n\n","\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n",'\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* OK。完成！ */\n\n'],currentMarkdown:"",fullMarkdown:"xiaomin × heliang\n----\n\n2020年01月22日。初初见面，齐齐心动。   \n相遇已有 "+p+" 啦\n\n一起呲过的\n----\n\n* 鱼头粉\n\n一起玩过的地方\n----\n\n* 流沙河\n* ……\n\n一起玩过的游戏\n----\n\n1. 跑得快\n2. 跳一跳\n3. 天天象棋\n4. 欢乐五子棋\n5. ……\n\n\n\n> 看，还只这么一点。\n 还有很多故事吗...\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(i.a.mark(function n(){return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new s.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new s.a(function(t,r){var s=e.interval,o=l()(i.a.mark(function e(){var r,a,l,u,c,d=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),l=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-l,c=r.substring(u,u+1)||" ",this.currentStyle+=c,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(o,s)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);o()})},progressivelyShowResume:function(){var n=this;return new s.a(function(e,t){var r=n.fullMarkdown.length,s=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,s)}else e()}()})}}}},169:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(213),s=t.n(r);e.default={data:function(){return{showRose:!0}},props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){var n=this;return this.$nextTick(function(){var e=document.getElementById("names").firstChild;e&&n.enableHtml&&(e.onclick=function(){alert("哈哈哈，恭喜你触发了一个彩蛋"),document.getElementById("app").style.display="none",document.getElementById("rose").style.display="block"})}),this.enableHtml?s()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}},updated:function(){}}},170:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(215),s=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return s.a.highlight(this.code,s.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},171:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(167),s=t(166),o=t.n(s);new r.a({el:"#app",render:function(n){return n(o.a)}})},209:function(n,e){},210:function(n,e){},211:function(n,e){},212:function(n,e){},214:function(n,e,t){function r(n){return t(s(n))}function s(n){var e=o[n];if(!(e+1))throw new Error("Cannot find module '"+n+"'.");return e}var o={"./af":39,"./af.js":39,"./ar":46,"./ar-dz":40,"./ar-dz.js":40,"./ar-kw":41,"./ar-kw.js":41,"./ar-ly":42,"./ar-ly.js":42,"./ar-ma":43,"./ar-ma.js":43,"./ar-sa":44,"./ar-sa.js":44,"./ar-tn":45,"./ar-tn.js":45,"./ar.js":46,"./az":47,"./az.js":47,"./be":48,"./be.js":48,"./bg":49,"./bg.js":49,"./bm":50,"./bm.js":50,"./bn":51,"./bn.js":51,"./bo":52,"./bo.js":52,"./br":53,"./br.js":53,"./bs":54,"./bs.js":54,"./ca":55,"./ca.js":55,"./cs":56,"./cs.js":56,"./cv":57,"./cv.js":57,"./cy":58,"./cy.js":58,"./da":59,"./da.js":59,"./de":62,"./de-at":60,"./de-at.js":60,"./de-ch":61,"./de-ch.js":61,"./de.js":62,"./dv":63,"./dv.js":63,"./el":64,"./el.js":64,"./en-SG":65,"./en-SG.js":65,"./en-au":66,"./en-au.js":66,"./en-ca":67,"./en-ca.js":67,"./en-gb":68,"./en-gb.js":68,"./en-ie":69,"./en-ie.js":69,"./en-il":70,"./en-il.js":70,"./en-nz":71,"./en-nz.js":71,"./eo":72,"./eo.js":72,"./es":75,"./es-do":73,"./es-do.js":73,"./es-us":74,"./es-us.js":74,"./es.js":75,"./et":76,"./et.js":76,"./eu":77,"./eu.js":77,"./fa":78,"./fa.js":78,"./fi":79,"./fi.js":79,"./fo":80,"./fo.js":80,"./fr":83,"./fr-ca":81,"./fr-ca.js":81,"./fr-ch":82,"./fr-ch.js":82,"./fr.js":83,"./fy":84,"./fy.js":84,"./ga":85,"./ga.js":85,"./gd":86,"./gd.js":86,"./gl":87,"./gl.js":87,"./gom-latn":88,"./gom-latn.js":88,"./gu":89,"./gu.js":89,"./he":90,"./he.js":90,"./hi":91,"./hi.js":91,"./hr":92,"./hr.js":92,"./hu":93,"./hu.js":93,"./hy-am":94,"./hy-am.js":94,"./id":95,"./id.js":95,"./is":96,"./is.js":96,"./it":98,"./it-ch":97,"./it-ch.js":97,"./it.js":98,"./ja":99,"./ja.js":99,"./jv":100,"./jv.js":100,"./ka":101,"./ka.js":101,"./kk":102,"./kk.js":102,"./km":103,"./km.js":103,"./kn":104,"./kn.js":104,"./ko":105,"./ko.js":105,"./ku":106,"./ku.js":106,"./ky":107,"./ky.js":107,"./lb":108,"./lb.js":108,"./lo":109,"./lo.js":109,"./lt":110,"./lt.js":110,"./lv":111,"./lv.js":111,"./me":112,"./me.js":112,"./mi":113,"./mi.js":113,"./mk":114,"./mk.js":114,"./ml":115,"./ml.js":115,"./mn":116,"./mn.js":116,"./mr":117,"./mr.js":117,"./ms":119,"./ms-my":118,"./ms-my.js":118,"./ms.js":119,"./mt":120,"./mt.js":120,"./my":121,"./my.js":121,"./nb":122,"./nb.js":122,"./ne":123,"./ne.js":123,"./nl":125,"./nl-be":124,"./nl-be.js":124,"./nl.js":125,"./nn":126,"./nn.js":126,"./pa-in":127,"./pa-in.js":127,"./pl":128,"./pl.js":128,"./pt":130,"./pt-br":129,"./pt-br.js":129,"./pt.js":130,"./ro":131,"./ro.js":131,"./ru":132,"./ru.js":132,"./sd":133,"./sd.js":133,"./se":134,"./se.js":134,"./si":135,"./si.js":135,"./sk":136,"./sk.js":136,"./sl":137,"./sl.js":137,"./sq":138,"./sq.js":138,"./sr":140,"./sr-cyrl":139,"./sr-cyrl.js":139,"./sr.js":140,"./ss":141,"./ss.js":141,"./sv":142,"./sv.js":142,"./sw":143,"./sw.js":143,"./ta":144,"./ta.js":144,"./te":145,"./te.js":145,"./tet":146,"./tet.js":146,"./tg":147,"./tg.js":147,"./th":148,"./th.js":148,"./tl-ph":149,"./tl-ph.js":149,"./tlh":150,"./tlh.js":150,"./tr":151,"./tr.js":151,"./tzl":152,"./tzl.js":152,"./tzm":154,"./tzm-latn":153,"./tzm-latn.js":153,"./tzm.js":154,"./ug-cn":155,"./ug-cn.js":155,"./uk":156,"./uk.js":156,"./ur":157,"./ur.js":157,"./uz":159,"./uz-latn":158,"./uz-latn.js":158,"./uz.js":159,"./vi":160,"./vi.js":160,"./x-pseudo":161,"./x-pseudo.js":161,"./yo":162,"./yo.js":162,"./zh-cn":163,"./zh-cn.js":163,"./zh-hk":164,"./zh-hk.js":164,"./zh-tw":165,"./zh-tw.js":165};r.keys=function(){return Object.keys(o)},r.resolve=s,n.exports=r,r.id=214},221:function(n,e,t){t(211);var r=t(24)(t(169),t(224),"data-v-3539023c",null);n.exports=r.exports},222:function(n,e,t){t(210);var r=t(24)(t(170),t(223),"data-v-23b5cc2c",null);n.exports=r.exports},223:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},224:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.showRose?t("div",[n.enableHtml?t("div",{attrs:{id:"names"},domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])]):n._e()])},staticRenderFns:[]}},225:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[171]);