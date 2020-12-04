(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[1],{107:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(2);const c=o.c`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`,s=o.b.div`
  >div {
    position: fixed;
    left: 0; 
    right: 0;  
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60px;
    height: 60px;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${i.a["theme-color"]};
    animation: ${c} 1.4s infinite ease-in;
    z-index: 99;
  }
  >div:nth-child(2) {
    animation-delay: -0.7s;
  }
`;t.a=r.a.memo((function(){return r.a.createElement(s,null,r.a.createElement("div",null),r.a.createElement("div",null))}))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));n(58);var a=n(13),r=n.n(a),o=n(53),i=n(5),c=n(8);const s=()=>e=>{Object(c.f)().then((t=>{e((e=>({type:o.a,data:Object(i.fromJS)(e)}))(t.banners))})).catch((e=>{r.a.error("Failed to fetch Banner List")}))},l=()=>e=>{Object(c.o)().then((t=>{e((e=>({type:o.c,data:Object(i.fromJS)(e)}))(t.result)),e(u(!1))})).catch((e=>{r.a.error("Failed to fetch Recommend List")}))},u=e=>({type:o.b,data:e})},112:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g}));n(58);var a=n(13),r=n.n(a),o=n(5),i=n(8),c=n(43);const s=e=>({type:c.e,data:Object(o.fromJS)(e)}),l=()=>e=>{Object(i.h)(0).then((t=>{const n=t.artists;e(s(n)),e(p(!1)),e(g(!1))})).catch((e=>{r.a.error("Failed to fetch Hot Singer List")}))},u=()=>(e,t)=>{const n=t().getIn(["singers","pageCount"]),a=t().getIn(["singers","singerList"]).toJS();Object(i.h)(n).then((t=>{const n=[...a,...t.artists];e(s(n)),e(h(!1))})).catch((e=>{r.a.error("Failed to refresh Hot Singer List")}))},d=(e,t)=>n=>{Object(i.t)(e,t,0).then((e=>{const t=e.artists;n(s(t)),n(p(!1)),n(g(!1))})).catch((e=>{r.a.error("Failed to fetch Singer List")}))},m=(e,t)=>(n,a)=>{const o=a().getIn(["singers","pageCount"]),c=a().getIn(["singers","singerList"]).toJS();Object(i.t)(e,t,o).then((e=>{const t=[...c,...e.artists];n(s(t)),n(h(!1))})).catch((e=>{r.a.error("Failed to fetch More Singers")}))},f=e=>({type:c.b,data:e}),p=e=>({type:c.a,data:e}),h=e=>({type:c.d,data:e}),g=e=>({type:c.c,data:e})},113:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(5),r=n(8),o=n(65);const i=e=>t=>{Object(r.c)(e).then((e=>{let n=e.playlist;t((e=>({type:o.a,data:Object(a.fromJS)(e)}))(n)),t(c(!1))})).catch((()=>{}))},c=e=>({type:o.b,data:e})},114:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));n(58);var a=n(13),r=n.n(a),o=n(5),i=n(8),c=n(30);const s=e=>t=>{Object(i.b)(e).then((e=>{if(200===e.code){let n=e.data.url;t((e=>({type:c.d,data:e}))(n)),t(f(!1))}})).catch((e=>{r.a.error("Failed to Mv Url")}))},l=e=>t=>{Object(i.p)(e).then((e=>{e.code})).catch((e=>{r.a.error("Failed to Related Mv")}))},u=e=>t=>{Object(i.k)(e).then((e=>{if(200===e.code){let n=e.comments,a=e.hotComments;t({type:c.f,data:a}),t({type:c.g,data:n})}})).catch((e=>{r.a.error("Failed to Mv Comments")}))},d=e=>t=>{Object(i.l)(e).then((e=>{if(200===e.code){let n=e.data;t({type:c.c,data:Object(o.fromJS)(n)}),t(f(!1))}})).catch((e=>{r.a.error("Failed to Mv Info")}))},m=e=>t=>{Object(i.e)(e).then((e=>{if(200===e.code){let n=e.artist;t({type:c.b,data:Object(o.fromJS)(n)})}})).catch((e=>{r.a.error("Failed to fetch Artist Info")}))},f=e=>({type:c.a,data:e}),p=e=>({type:c.h,data:e})},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(54),r=n(5),o=n(8);const i=e=>({type:a.b,data:e}),c=e=>t=>{Object(o.s)(e).then((e=>{t((e=>({type:a.a,data:Object(r.fromJS)(e)}))(e.artist)),t((e=>({type:a.c,data:Object(r.fromJS)(e)}))(e.hotSongs)),t(i(!1))}))}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}));var a=n(42),r=n(5),o=n(8);const i=e=>({type:a.a,data:e}),c=()=>e=>{Object(o.g)().then((t=>{let n=t.result.hots;e((e=>({type:a.b,data:Object(r.fromJS)(e)}))(n))}))},s=e=>t=>{Object(o.w)(e).then((e=>{if(!e)return;let n=e.result||[];t((e=>({type:a.d,data:Object(r.fromJS)(e)}))(n))})),Object(o.q)(e).then((e=>{if(!e)return;let n=e.result.songs||[];t((e=>({type:a.c,data:Object(r.fromJS)(e)}))(n)),t(i(!1))}))}},117:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return d}));n(58);var a=n(13),r=n.n(a),o=n(5),i=n(8),c=n(48);const s=()=>e=>{Object(i.m)().then((t=>{if(200===t.code){let n=t.data;e({type:c.c,data:Object(o.fromJS)(n)}),e(d(!1))}})).catch((()=>{r.a.error("Failed to fetch Mv List")}))},l=(e,t)=>n=>{Object(i.d)(e,t).then((e=>{if(200===e.code){let t=e.data;n({type:c.c,data:Object(o.fromJS)(t)}),n(d(!1))}})).catch((()=>{r.a.error("Failed to fetch Mv List")}))},u=e=>t=>{Object(i.r)(e).then((e=>{if(200===e.code){let n=e.data;t({type:c.c,data:Object(o.fromJS)(n)}),t(d(!1))}})).catch((()=>{r.a.error("Failed to fetch Mv List")}))},d=e=>({type:c.a,data:e})},15:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"g",(function(){return o})),n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"k",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return f}));const a="player/SET_CURRENT_SONG",r="player/SET_FULL_SCREEN",o="player/SET_PLAYING_STATE",i="player/SET_SEQUENCE_PLAYLIST",c="player/SET_PLAYLIST",s="player/SET_PLAY_MODE",l="player/SET_CURRENT_INDEX",u="player/SET_SHOW_PLAYLIST",d="player/INSERT_SONG",m="player/DELETE_SONG",f="player/CHANGE_SPEED"},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return u}));var a=n(5),r=n(8);const o="home/rank/CHANGE_RANK_LIST",i="home/rank/CHANGE_LOADING",c=()=>e=>{Object(r.n)().then((t=>{let n=t&&t.list;e((e=>({type:o,data:Object(a.fromJS)(e)}))(n)),e(s(!1))}))},s=e=>({type:i,data:e}),l=Object(a.fromJS)({rankList:[],loading:!0}),u=(e=l,t)=>{switch(t.type){case o:return e.set("rankList",t.data);case i:return e.set("loading",t.data);default:return e}}},157:function(e,t,n){e.exports=n.p+"static/media/icon.491e3a8d.jpg"},166:function(e,t,n){e.exports=n.p+"static/media/disc.2a5e9e65.png"},167:function(e,t,n){e.exports=n.p+"static/media/needle.047d988b.png"},17:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"i",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"h",(function(){return p})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return g}));var a=n(15),r=n(5),o=n(8);const i=e=>({type:a.e,data:Object(r.fromJS)(e)}),c=e=>({type:a.f,data:e}),s=e=>({type:a.g,data:e}),l=e=>({type:a.j,data:Object(r.fromJS)(e)}),u=e=>({type:a.h,data:Object(r.fromJS)(e)}),d=e=>({type:a.i,data:e}),m=e=>({type:a.a,data:e}),f=e=>({type:a.d,data:e}),p=e=>({type:a.k,data:e}),h=e=>({type:a.b,data:e}),g=e=>t=>{Object(o.u)(e).then((e=>{let n=e.songs[0];t((e=>({type:a.c,data:e}))(n))}))}},171:function(e,t,n){"use strict";n.r(t);n(90);var a=n(70),r=n.n(a),o=(n(172),n(101)),i=n.n(o),c=(n(182),n(163)),s=n.n(c),l=(n(58),n(13)),u=n.n(l),d=n(0),m=n.n(d),f=n(4),p=n(2),h=n(157),g=n.n(h);const b=f.b.div`
height:100%;
border-bottom: 1px solid ${p.a["border-color"]};
background-color: ${p.a["theme-color"]};
width:100%;
${""}
display:flex;
flex-direction:row;
.backImg{
  margin:0 auto;
  margin-top:125px;
  max-width:125px;
  height:100px;
  background:url(${g.a}) no-repeat;
  background-size:100% 100%;
}
${""}
${""}
.nameInput{
  margin-top:40px;
  width:50%;
  margin-left:25%;
  margin-right:25%;
  ${""}
  height:30px;
}

.passwordInput{
  margin-top:30px;
  width:50%;
  margin-left:25%;
  margin-left:25%;
  height:30px;
  ${""}
}
button{
  margin-top:30px;
  width:50%;
  height:40px;
  margin-left:25%
}

`,y=f.b.div`
    width: 100%;
    height:100%;
`;var x=n(31),E=n(14),O=n(8),v=n(7),j=n(316),k=n(317),L=n(161),S=n.n(L);t.default=Object(E.g)((function(e){let[t,n]=Object(d.useState)(""),[a,o]=Object(d.useState)("");const c=Object(d.useRef)(),l=Object(d.useRef)();Object(d.useEffect)((()=>{c.current.focus()}),[]);const f=r=>{if(r&&(t="123",a="234"),""===t||""===a)return u.a.error("username or password cannot be empty",.8);Object(O.x)("13630632377",S()("1!2@oOqQ")).then((t=>{200===t.code?(u.a.success("Login Successfully",.6),Object(v.n)(t.token),Object(v.m)(t.cookie),n(""),o(""),e.history.push("/recommend")):u.a.error("Failed to login")})).catch((e=>{if(e)throw e}))};return m.a.createElement(b,{className:"wrapperLogin"},m.a.createElement(y,null,m.a.createElement("div",{className:"backImg"}),m.a.createElement(i.a,{ref:c,onChange:e=>{n(e.target.value)},className:"nameInput",placeholder:"Enter your username",prefix:m.a.createElement(j.a,{className:"site-form-item-icon"}),suffix:m.a.createElement(s.a,{title:"Case Sensitive"},m.a.createElement(k.a,{style:{color:"rgba(0,0,0,.45)"}}))}),m.a.createElement(i.a.Password,{ref:l,onChange:e=>{o(e.target.value)},className:"passwordInput",placeholder:"input password"}),m.a.createElement("h3",{style:{marginTop:"50px",textAlign:"center"}},m.a.createElement(x.b,{to:"",onClick:()=>{f("temp")}},"Visitor (Log in) ")),m.a.createElement(r.a,{type:"primary",onClick:f},"Login")))}))},174:function(e,t,n){e.exports=n(310)},2:function(e,t,n){"use strict";t.a={"theme-color":"#d44439","theme-color-shadow":"rgba(212, 68, 57, .5)","font-color-light":"#f1f1f1","font-color-desc":"#2E3030","font-color-desc-v2":"#bba8a8","font-size-ss":"10px","font-size-s":"12px","font-size-m":"14px","font-size-l":"14px","font-size-ll":"18px","border-color":"#e4e4e4","border-color-v2":"rgba(228, 228, 228, 0.1)","background-color":"#f2f3f4","background-color-shadow":"rgba(0, 0, 0, 0.3)","highlight-background-color":"#fff",extendClick:()=>"\n    position: relative;\n    &:before {\n      content: '';\n      position: absolute;\n      top: -10px; bottom: -10px; left: -10px; right: -10px;\n    };\n  ",noWrap:()=>"\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  ",bgFull:()=>"\n    background-position: 50%;\n    background-size: contain;\n    background-repeat: no-repeat;\n  "}},30:function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return u}));const a="mvPlayer/GET_VIDEO_COMMENTS",r="mvPlayer/GET_VIDEO_NEWCOMMENTS",o="mvPlayer/GET_MV_URL",i="mvPlayer/GET_RELATED_VIDEOS",c="mvPlayer/GET_ARTIST_INFO",s="mvPlayer/IS_PLAYING_MV",l="mvPlayer/GET_MV_INFO",u="mvPlayer/CHANGE_ENTER_LOADING"},310:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(31),s=n(14),l=(n(58),n(13)),u=n.n(l),d=n(7),m=n(171),f=(n(279),n(168)),p=n.n(f),h=n(68),g=n(45),b=n(17),y=n(8),x=n(315),E=n(36),O=n(4),v=n(2);const j=O.c`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`,k=O.c`
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.1);
  }
  100%{
    transform: scale(1);
  }
`,L=O.b.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background: ${v.a["background-color-shadow"]};
  &.confirm-fade-enter-active{
    animation: ${j} 0.3s;
    .confirm_content{
      animation: ${k} 0.3s
    }
  }
  >div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 100;
    .confirm_content{
      width: 270px;
      border-radius: 13px;
      background: ${v.a["highlight-background-color"]};
      .text{
        padding: 19px 15px;
        line-height: 22px;
        text-align: center;
        font-size: ${v.a["font-size-l"]};
        color: ${v.a["font-color-desc-v2"]};
      }
      .operate{
        display: flex;
        align-items: center;
        text-align: center;
        font-size: ${v.a["font-size-l"]};
        .operate_btn{
          flex: 1;
          line-height: 22px;
          padding: 10px 0;
          border-top: 1px solid ${v.a["border-color"]};
          color: ${v.a["font-color-desc"]};
          &.left{
            border-right: 1px solid ${v.a["border-color"]};
          }
        }
      }
    }
  }
`,S=Object(a.forwardRef)(((e,t)=>{const[n,o]=Object(a.useState)(!1),{text:i,cancelBtnText:c,confirmBtnText:s}=e,{handleConfirm:l}=e;return Object(a.useImperativeHandle)(t,(()=>({show(){o(!0)}}))),r.a.createElement(x.a,{classNames:"confirm-fade",timeout:300,appear:!0,in:n},r.a.createElement(L,{style:{display:n?"block":"none"},onClick:e=>e.stopPropagation()},r.a.createElement("div",null,r.a.createElement("div",{className:"confirm_content"},r.a.createElement("p",{className:"text"},i),r.a.createElement("div",{className:"operate"},r.a.createElement("div",{className:"operate_btn left",onClick:()=>o(!1)},c),r.a.createElement("div",{className:"operate_btn",onClick:()=>{o(!1),l()}},s))))))}));var w=r.a.memo(S),N=n(73);const A=O.b.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${v.a["background-color-shadow"]};
  &.list-fade-enter {
    opacity: 0;
  }
  &.list-fade-enter-active {
    opacity: 1;
    transition: all 0.3s;
  }
  &.list-fade-exit {
    opacity: 1;
  }
  &.list-fade-exit-active {
    opacity: 0;
    transition: all 0.3s;
  }

  .list_wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 1;
    border-radius: 10px 10px 0 0;
    background-color: ${v.a["highlight-background-color"]};
    transform: translate3d(0, 0, 0);
    .list_close {
      text-align: center;
      line-height: 50px;
      background: ${v.a["background-color"]};
      font-size: ${v.a["font-size-l"]};
      color: ${v.a["font-color-desc"]};
    }
  }
`,I=O.b.div`
  height: 400px;
  overflow: hidden;
`,T=O.b.div`
  position: relative;
  padding: 20px 30px 10px 20px;
  .title {
    display: flex;
    align-items: center;
    >div {
      flex:1;
      .text {
        flex: 1;
        font-size: ${v.a["font-size-m"]};
        color: ${v.a["font-color-desc"]};
      }
    }
    .iconfont {
      margin-right: 10px;
      font-size: ${v.a["font-size-ll"]};
      color: ${v.a["theme-color"]};
    }
    .clear {
      ${v.a.extendClick()}
      font-size: ${v.a["font-size-l"]};
    }
  }
`,C=O.b.div`
  .item {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 30px 0 20px;
    overflow: hidden;
    .current {
      flex: 0 0 20px;
      width: 20px;
      font-size: ${v.a["font-size-s"]};
      color: ${v.a["theme-color"]};
    }
    .text {
      flex: 1;
      ${v.a.noWrap()}
      font-size: ${v.a["font-size-m"]};
      color: ${v.a["font-color-desc-v2"]};
      .icon-favorite {
        color: ${v.a["theme-color"]};
      }
    }
    .like {
      ${v.a.extendClick()}
      margin-right: 15px;
      font-size: ${v.a["font-size-m"]};
      color: ${v.a["theme-color"]};
    }
    .delete {
      ${v.a.extendClick()}
      font-size: ${v.a["font-size-s"]};
      color: ${v.a["theme-color"]};
    }
  }
`;var P=Object(g.b)((e=>({currentIndex:e.getIn(["player","currentIndex"]),currentSong:e.getIn(["player","currentSong"]),playList:e.getIn(["player","playList"]),sequencePlayList:e.getIn(["player","sequencePlayList"]),showPlayList:e.getIn(["player","showPlayList"]),mode:e.getIn(["player","mode"])})),(e=>({togglePlayListDispatch(t){e(Object(b.h)(t))},changeCurrentIndexDispatch(t){e(Object(b.a)(t))},changeModeDispatch(t){e(Object(b.e)(t))},changePlayListDispatch(t){e(Object(b.d)(t))},deleteSongDispatch(t){e(Object(b.j)(t))},clearDispatch(){e(Object(b.d)([])),e(Object(b.g)([])),e(Object(b.a)(-1)),e(Object(b.h)(!1)),e(Object(b.b)({})),e(Object(b.f)(!1))}})))(r.a.memo((function(e){const{currentIndex:t,currentSong:n,showPlayList:o,playList:i,mode:c,sequencePlayList:s}=e,{togglePlayListDispatch:l,changeCurrentIndexDispatch:u,changePlayListDispatch:m,changeModeDispatch:f,deleteSongDispatch:p,clearDispatch:h}=e,g=n.toJS(),b=i.toJS(),y=s.toJS(),O=Object(a.useRef)(),v=Object(a.useRef)(),j=Object(a.useRef)(),[k,L]=Object(a.useState)(!1),[S,P]=Object(a.useState)(!0),[D,z]=Object(a.useState)(0),[R,J]=Object(a.useState)(0),[M,q]=Object(a.useState)(0),H=Object(d.l)("transform"),F=Object(a.useCallback)((()=>{L(!0),j.current.style[H]="translate3d(0, 100%, 0)"}),[H]),G=Object(a.useCallback)((()=>{j.current.style.transition="all 0.3s",j.current.style[H]="translate3d(0, 0, 0)"}),[H]),_=Object(a.useCallback)((()=>{j.current.style.transition="all 0.3s",j.current.style[H]="translate3d(0px, 100%, 0px)"}),[H]),Y=Object(a.useCallback)((()=>{L(!1),j.current.style[H]="translate3d(0px, 100%, 0px)"}),[H]),Q=()=>{let e=(c+1)%3;if(0===e){m(y);let e=Object(d.e)(g,y);u(e)}else if(1===e)m(y);else if(2===e){let e=Object(d.o)(y),t=Object(d.e)(g,e);m(e),u(t)}f(e)},B=Object(a.useRef)();return r.a.createElement(x.a,{in:o,timeout:300,classNames:"list-fade",onEnter:F,onEntering:G,onExiting:_,onExited:Y},r.a.createElement(A,{ref:v,style:!0===k?{display:"block"}:{display:"none"},onClick:()=>l(!1)},r.a.createElement("div",{className:"list_wrapper",ref:j,onClick:e=>e.stopPropagation(),onTouchStart:e=>{S&&!R&&(j.current.style.transition="",q(0),z(e.nativeEvent.touches[0].pageY),J(!0))},onTouchMove:e=>{if(!S||!R)return;let t=e.nativeEvent.touches[0].pageY-D;t<0||(q(t),j.current.style[H]=`translate3d(0, ${t}px, 0)`)},onTouchEnd:e=>{J(!1),M>=150?l(!1):(j.current.style.transition="all 0.3s",j.current.style[H]="translate3d(0px, 0px, 0px)")}},r.a.createElement(T,null,r.a.createElement("h1",{className:"title"},(()=>{let e,t;return c===E.f.sequence?(e="&#xe625;",t="\u987a\u5e8f\u64ad\u653e"):c===E.f.loop?(e="&#xe653;",t="\u5355\u66f2\u5faa\u73af"):(e="&#xe61b;",t="\u968f\u673a\u64ad\u653e"),r.a.createElement("div",null,r.a.createElement("i",{className:"iconfont",onClick:e=>Q(e),dangerouslySetInnerHTML:{__html:e}}),r.a.createElement("span",{className:"text",onClick:e=>Q(e)},t))})(),r.a.createElement("span",{onClick:()=>{O.current.show()},className:"iconfont clear"},"\ue63d"))),r.a.createElement(I,null,r.a.createElement(N.a,{ref:B,onScroll:e=>(e=>{let t=0===e.y;P(t)})(e),bounceTop:!1},r.a.createElement(C,null,b.map(((e,n)=>r.a.createElement("li",{className:"item",key:e.id,onClick:()=>(e=>{t!==e&&u(e)})(n)},(e=>{const t=g.id===e.id,n=t?"icon-play":"",a=t?"&#xe6e3;":"";return r.a.createElement("i",{className:"current iconfont "+n,dangerouslySetInnerHTML:{__html:a}})})(e),r.a.createElement("span",{className:"text"},e.name," - ",Object(d.i)(e.ar)),r.a.createElement("span",{className:"like"},r.a.createElement("i",{className:"iconfont"},"\ue601")),r.a.createElement("span",{onClick:t=>((e,t)=>{e.stopPropagation(),p(t)})(t,e),className:"delete"},r.a.createElement("i",{className:"iconfont"},"\ue63d"))))))))),r.a.createElement(w,{ref:O,text:"\u662f\u5426\u5220\u9664\u5168\u90e8\uff1f",cancelBtnText:"\u53d6\u6d88",confirmBtnText:"\u786e\u5b9a",handleConfirm:()=>{h()}})))})));const D=O.b.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 50px;
  /* background: ${v.a["highlight-background-color"]}; */
  &.drop-enter{
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  &.drop-enter-active{
    opacity: 1;
    transition: all 0.3s;
    transform: translate3d(0, 0, 0);
  }
  &.drop-exit-active{
    opacity: 0;
    transition: all 0.3s;
    transform: translate3d(0, 100%, 0);
  }
  .text{
    line-height: 50px;
    text-align: center;
    color: #fff;
    font-size: ${v.a["font-size-l"]};
  }
`,z=Object(a.forwardRef)(((e,t)=>{const[n,o]=Object(a.useState)(!1),[i,c]=Object(a.useState)(""),{text:s}=e;return Object(a.useImperativeHandle)(t,(()=>({show(){i&&clearTimeout(i),o(!0),c(setTimeout((()=>{o(!1)}),2e3))}}))),r.a.createElement(x.a,{in:n,timeout:300,classNames:"drop",unmountOnExit:!0},r.a.createElement(D,null,r.a.createElement("div",{className:"text"},s)))}));var R=r.a.memo(z);const J=/\[(\d{2,}):(\d{2})(?:[\.\:](\d{2,3}))?]/g,M={title:"ti",artist:"ar",album:"al",offset:"offset",by:"by"};function q(){}class H{constructor(e,t=q,n=1){this.lrc=e,this.tags={},this.lines=[],this.handler=t,this.state=0,this.curLineIndex=0,this.speed=n,this.offset=0,this._init()}_init(){this._initTag(),this._initLines()}_initTag(){for(let e in M){const t=this.lrc.match(new RegExp(`\\[${M[e]}:([^\\]]*)]`,"i"));this.tags[e]=t&&(t[1]||"")}}_initLines(){const e=this.lrc.split("\n");for(let t=0;t<e.length;t++){const n=e[t];let a=J.exec(n);if(a){const e=n.replace(J,"").trim();e&&(3===a[3].length&&(a[3]=a[3]/10),this.lines.push({time:60*a[1]*1e3+1e3*a[2]+10*(a[3]||0),txt:e}))}}this.lines.sort(((e,t)=>e.time-t.time))}_findCurLineIndex(e){for(let t=0;t<this.lines.length;t++)if(e<=this.lines[t].time)return t;return this.lines.length-1}_callHandler(e){e<0||this.handler({txt:this.lines[e].txt,lineNum:e})}_playRest(e=!1){let t,n=this.lines[this.curLineIndex];if(e)t=n.time-(+new Date-this.startStamp);else{let e=this.lines[this.curLineIndex-1]?this.lines[this.curLineIndex-1].time:0;t=n.time-e}this.timer=setTimeout((()=>{this._callHandler(this.curLineIndex++),this.curLineIndex<this.lines.length&&1===this.state&&this._playRest()}),t/this.speed)}changeSpeed(e){this.speed=e}play(e=0,t=!1){this.lines.length&&(this.state=1,this.curLineIndex=this._findCurLineIndex(e),this._callHandler(this.curLineIndex-1),this.offset=e,this.startStamp=+new Date-e,this.curLineIndex<this.lines.length&&(clearTimeout(this.timer),this._playRest(t)))}togglePlay(e){1===this.state?(this.stop(),this.offset=e):(this.state=1,this.play(e,!0))}stop(){this.state=0,this.offset=0,clearTimeout(this.timer)}seek(e){this.play(e,!0)}}const F=O.b.div`
  position: relative;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background {
      transform: scale(0.9);
      stroke: ${v.a["theme-color-shadow"]};
    }
    &.progress-bar {
      transform: scale(0.9) rotate(-90deg);
      ${""}
      stroke: ${v.a["theme-color"]};
    }
  }
`;var G=r.a.memo((function(e){const{radius:t,percent:n}=e,a=100*Math.PI,o=(1-n)*a;return r.a.createElement(F,null,r.a.createElement("svg",{width:t,height:t,viewBox:"0 0 100 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{className:"progress-background",r:"50",cx:"50",cy:"50",fill:"transparent"}),r.a.createElement("circle",{className:"progress-bar",r:"50",cx:"50",cy:"50",fill:"transparent",strokeDasharray:a,strokeDashoffset:o})),e.children)}));const _=O.c`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`,Y=O.b.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  background: ${v.a["highlight-background-color"]};
  &.mini-enter {
    transform: translate3d(0, 100%, 0);
  }
  &.mini-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }
  &.mini-exit-active {
    transform: translate3d(0, 100%, 0);
    transition: all .4s
  }
  .icon {
    flex: 0 0 40px;
    width: 70px;
    height: 40px;
    padding: 0 10px 0 20px;
    .imgWrapper {
      float:left;
      width: 100%;
      height: 100%;
      img {
        border-radius: 50%;
        &.play {
          animation: ${_} 10s infinite;
          &.pause {
            animation-play-state: paused;
          }
        }
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    line-height: 20px;
    overflow: hidden;
    .name {
      margin-bottom: 2px;
      font-size: ${v.a["font-size-m"]};
      color: ${v.a["font-color-desc"]};
      ${v.a.noWrap()}
    }
    .desc {
      font-size: ${v.a["font-size-s"]};
      color: ${v.a["font-color-desc-v2"]};
      ${v.a.noWrap()}
    }
  }
  .control {
    flex: 0 0 30px;
    padding: 0 10px;
    .iconfont, .icon-playlist {
      font-size: 30px;
      color: ${v.a["theme-color"]};
    }
    .icon-mini {
      font-size: 16px;
      position: absolute;
      left: 8px;
      top: 8px;
      &.icon-play {
        left: 9px
      }
    }
  }
`;let Q=!1;var B=Object(g.b)((e=>({isPlayingMv:e.getIn(["mvPlayer","isPlayingMv"])})),null)(Object(s.g)(r.a.memo((function(e){let{full:t,song:n,playing:o,percent:i}=e;const{isPlayingMv:c,locations:s}=e,{clickPlaying:l,setFullScreen:u,togglePlayList:m}=e,f=Object(a.useRef)(),p=Object(a.createRef)(),h=Object(a.useRef)(),g=Object(a.useRef)(),b=Object(a.useCallback)((e=>{m(!0),e.stopPropagation()}),[m]);return r.a.createElement(x.a,{in:!t,timeout:300,classNames:"mini",onEnter:()=>{f.current.style.display="flex"},onExited:()=>{f.current.style.display="none"}},r.a.createElement(Y,{ref:f,onClick:()=>u(!0)},r.a.createElement("div",{className:"icon"},r.a.createElement("div",{className:"imgWrapper",ref:h},r.a.createElement("img",{className:"play "+(!0===o?"":"pause"),ref:g,src:n.al.picUrl,width:"40",height:"40",alt:"img"}))),r.a.createElement("div",{className:"text"},r.a.createElement("h2",{className:"name"},n.name),r.a.createElement("p",{className:"desc"},Object(d.i)(n.ar))),r.a.createElement("div",{className:"control"},r.a.createElement(G,{radius:32,percent:i},!0===o?r.a.createElement("i",{className:"icon-mini iconfont icon-pause",onClick:e=>{l(e,!1),Q=!1}},"\ue650"):r.a.createElement("i",{id:"unique",ref:p,className:"icon-mini iconfont icon-play",onClick:e=>(e=>{l(e,!0)})(e)},"\ue61e"))),r.a.createElement("div",{className:"control",onClick:b},r.a.createElement("i",{className:"iconfont"},"\ue640"))))})))),V=n(86),W=n.n(V);const X=O.b.div`
  height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, .3);
    .progress {
      position: absolute;
      height: 100%;
      background: ${v.a["theme-color"]};
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -15px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid ${v.a["border-color"]};
        border-radius: 50%;
        background: ${v.a["theme-color"]};
      }
    }
  }
`;var K=r.a.memo((function(e){const t=Object(d.l)("transform"),{percent:n}=e,{percentChange:o}=e;Object(a.useEffect)((()=>{if(n>=0&&n<=1&&!l.initiated){const e=i.current.clientWidth-m,a=n*e;c.current.style.width=a+"px",s.current.style[t]=`translate3d(${a}px, 0, 0)`}}),[n]);const i=Object(a.useRef)(),c=Object(a.useRef)(),s=Object(a.useRef)(),[l,u]=Object(a.useState)({}),m=16,f=()=>{const e=i.current.clientWidth-m,t=c.current.clientWidth/e;o(t)},p=e=>{c.current.style.width=e+"px",s.current.style.transform=`translate3d(${e}px, 0, 0)`};return r.a.createElement(X,null,r.a.createElement("div",{className:"bar-inner",ref:i,onClick:e=>{const t=i.current.getBoundingClientRect(),n=e.pageX-t.left;p(n),f()}},r.a.createElement("div",{className:"progress",ref:c}),r.a.createElement("div",{className:"progress-btn-wrapper",ref:s,onTouchStart:e=>{const t={initiated:!0};t.startX=e.touches[0].pageX,t.left=c.current.clientWidth,u(t)},onTouchMove:e=>{if(!l.initiated)return;const t=e.touches[0].pageX-l.startX,n=i.current.clientWidth-m,a=Math.min(Math.max(0,l.left+t),n);p(a)},onTouchEnd:e=>{const t=JSON.parse(JSON.stringify(l));t.initiated=!1,u(t),f()}},r.a.createElement("div",{className:"progress-btn"}))))})),U=n(166),Z=n.n(U),$=n(167),ee=n.n($);const te=O.c`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`,ne=O.b.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
  background: ${v.a["background-color"]};
  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.6;
    filter: blur(20px);
    &.layer {
      background: ${v.a["font-color-desc"]};
      opacity: 0.3;
      filter: none;
    }
  }
  &.normal-enter,
  &.normal-exit-done {
    .top {
      transform: translate3d(0, -100px, 0);
    }
    .bottom {
      transform: translate3d(0, 100px, 0);
    }
  }
  &.normal-enter-active,
  &.normal-exit-active {
    .top,
    .bottom {
      transform: translate3d(0, 0, 0);
      transition: all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32);
    }
    opacity: 1;
    transition: all 0.4s;
  }
  &.normal-exit-active {
    opacity: 0;
  }
`,ae=O.b.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid ${v.a["border-color-v2"]};
  ${""}
  padding-bottom: 5px;
  width: 100%;
  height: 8%;
  .back {
    margin-left: 5px;
    z-index: 50;
    .iconfont {
      display: block;
      padding: 9px;
      font-size: 24px;
      color: ${v.a["font-color-desc"]};
      font-weight: bold;
      transform: rotate(90deg);
    }
  }
  .text{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .title {
    line-height: 25px;
    font-size: ${v.a["font-size-l"]};
    color: ${v.a["font-color-desc"]};
    ${v.a.noWrap()};
  }
  .subtitle {
    line-height: 20px;
    font-size: ${v.a["font-size-m"]};
    color: ${v.a["font-color-desc-v2"]};
    ${v.a.noWrap()};
  }
`,re=O.b.div`
  position: fixed;
  width: 100%;
  top: 8%;
  bottom: 170px;
  white-space: nowrap;
  font-size: 0;
  overflow: hidden;
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: all 0.4s;
  }
  .fade-enter-done {
    transition: none;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-exit-done {
    opacity: 0;
  }
`,oe=O.b.div`
  margin: auto;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  .needle{
    position: absolute;
    top: -6.67vw;
    left: 48vw;
    width: 25vw;
    height: 40vw;
    z-index: 100;
    background-image: url(${ee.a});
    ${v.a.bgFull()};
    transform-origin: 4.5vw 4.5vw;
    transition: all 0.3s;
    transform: rotate(0);
    &.pause{
      transform: rotate(-30deg);
    }
  }
  .cd {
    top: 16%;
    position: absolute;
    width: 70%;
    height: 70vw;
    background-image: url(${Z.a});
    border: 4px solid ${v.a["border-color-v2"]};
    border-radius: 50%;
    ${v.a.bgFull()};
    .image {
      position: absolute;
      left: 0;right: 0;
      top: 0;bottom: 0;
      width: 68%;
      height: 68%;
      margin: auto;
      border-radius: 50%;
    }
    .play {
      animation: ${te} 20s linear infinite;
      &.pause{
        animation-play-state: paused;
      }
    }
  }
  .playing_lyric {
    
    position: absolute;
    margin: auto;
    width: 80%;
    top: 95vw;
    font-size: 14px;
    line-height: 20px;
    white-space: normal;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
`,ie=O.b.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* 遮罩 会有模糊效果，看个人喜欢*/
  /* mask-image: -webkit-gradient(linear,left top,left bottom,color-stop(0,hsla(0,0%,100%,0)),color-stop(10%,hsla(0,0%,100%,.6)),color-stop(25%,#fff),color-stop(75%,#fff),color-stop(85%,hsla(0,0%,100%,.6)),to(hsla(0,0%,100%,0)));
  mask-image: linear-gradient(linear,left top,left bottom,color-stop(0,hsla(0,0%,100%,0)),color-stop(10%,hsla(0,0%,100%,.6)),color-stop(25%,#fff),color-stop(75%,#fff),color-stop(85%,hsla(0,0%,100%,.6)),to(hsla(0,0%,100%,0))); */
`,ce=O.b.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  p {
    line-height: 32px;
    color: rgba(255, 255, 255, 0.5);
    white-space: normal;
    font-size: ${v.a["font-size-l"]};
    &.current {
      ${""}
      color: rgb(58 132 160 / 92%);
      font-size:18px;
    }
    &.pure{
      position: relative;
      top: 30vh;
    }
  }
`,se=O.b.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
`,le=O.b.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  padding: 10px 0;
  .time {
    color: ${v.a["font-color-desc"]};
    font-size: ${v.a["font-size-s"]};
    flex: 0 0 30px;
    line-height: 30px;
    width: 30px;
      margin-right:10px;
    &.time-l {
      text-align: left;
    }
    &.time-r {
      text-align: right;
    }
  }
  .progress-bar-wrapper {
    flex: 1;
  }
`,ue=O.b.div`
  display: flex;
  align-items: center;
  .icon {
    font-weight: 300;
    flex: 1;
    color: ${v.a["font-color-desc"]};
    &.disable {
      color: ${v.a["theme-color-shadow"]};
    }
    i {
      font-weight: 300;
      font-size: 30px;
    }
  }
  .i-left {
    text-align: right;
  }
  .i-center {
    padding: 0 20px;
    text-align: center;
    i {
      font-size: 40px;
    }
  }
  .i-right {
    text-align: left;
  }
  .icon-favorite {
    color: ${v.a["theme-color"]};
  }
`,de=O.b.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-around;
  overflow: hidden;
  >span:first-of-type{
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    color: ${v.a["font-color-desc-v2"]};
    font-size: ${v.a["font-size-m"]};
    vertical-align: middle;
  }
`,me=O.b.span`
  flex: 0 0 auto;
  font-size: ${v.a["font-size-m"]};
  padding: 5px 5px;
  border-radius: 10px;
  color:#b17272;
  ${""}
  &.selected{
    color: ${v.a["theme-color"]};
    border: 2px solid ${v.a["theme-color"]};
    opacity: 0.8;
  }
`;let fe=!1;var pe=Object(g.b)((e=>({isPlayingMv:e.getIn(["mvPlayer","isPlayingMv"])})),null)(Object(s.g)(r.a.memo((function(e){const{full:t,song:n,mode:o,percent:i,currentTime:c,duration:s,currentLineNum:l,currentPlayingLyric:u,currentLyric:m,speed:f}=e;let{playing:p}=e;const{changeMode:h,handlePrev:g,handleNext:b,onProgressChange:y,clickPlaying:O,toggleFullScreenDispatch:v,togglePlayListDispatch:j,clickSpeed:k}=e,L=Object(d.l)("transform"),S=Object(a.useRef)(),w=Object(a.useRef)(),A=Object(a.useRef)([]),I=Object(a.useRef)(),[T,C]=Object(a.useState)(0);Object(a.useEffect)((()=>{if(!w.current)return;let e=w.current.getBScroll();if(l>5){let t=A.current[l-5].current;e.scrollToElement(t,1e3)}else e.scrollTo(0,0,1e3)}),[l]);const P=()=>{const e=.8*window.innerWidth,t=40/e;return{x:-(window.innerWidth/2-40),y:window.innerHeight-80-e/2-30,scale:t}},D=Object(a.useCallback)((e=>{O(e,!p),fe=!p}),[O,p]);return r.a.createElement(x.a,{classNames:"normal",in:t,timeout:400,mountOnEnter:!0,onEnter:()=>{S.current.style.display="block";const{x:e,y:t,scale:n}=P();let a={0:{transform:`translate3d(${e}px,${t}px,0) scale(${n})`},60:{transform:"translate3d(0, 0, 0) scale(1.1)"},100:{transform:"translate3d(0, 0, 0) scale(1)"}};W.a.registerAnimation({name:"move",animation:a,presets:{duration:500,easing:"linear"}}),W.a.runAnimation(I.current,"move")},onEntered:()=>{const e=I.current;W.a.unregisterAnimation("move"),e.style.animation=""},onExit:()=>{if(!I.current)return;const e=I.current;e.style.transition="all 0.4s";const{x:t,y:n,scale:a}=P();e.style[L]=`translate3d(${t}px, ${n}px, 0) scale(${a})`},onExited:()=>{if(!I.current)return;const e=I.current;e.style.transition="",e.style[L]="",S.current.style.display="none",C("")}},r.a.createElement(ne,{ref:S},r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:n.al.picUrl+"?param=300x300",width:"100%",height:"100%",alt:"\u6b4c\u66f2\u56fe\u7247"})),r.a.createElement("div",{className:"background layer"}),r.a.createElement(ae,{className:"top"},r.a.createElement("div",{className:"back",onClick:()=>v(!1)},r.a.createElement("i",{className:"iconfont icon-back"},"\ue662")),r.a.createElement("div",{className:"text"},r.a.createElement("h1",{className:"title"},n.name),r.a.createElement("h1",{className:"subtitle"},Object(d.i)(n.ar)))),r.a.createElement(re,{ref:I,onClick:()=>{let e="";e="lyric"!==T?"lyric":"",C(e)}},r.a.createElement(x.a,{timeout:400,classNames:"fade",in:"lyric"!==T},r.a.createElement(oe,{style:{visibility:"lyric"!==T?"visible":"hidden"},playing:p},r.a.createElement("div",{className:"needle "+(p?"":"pause")}),r.a.createElement("div",{className:"cd"},r.a.createElement("img",{className:"image play "+(p?"":"pause"),src:n.al.picUrl+"?param=400x400",alt:""})),r.a.createElement("p",{className:"playing_lyric"},u))),r.a.createElement(x.a,{timeout:400,classNames:"fade",in:"lyric"===T},r.a.createElement(ie,null,r.a.createElement(N.a,{ref:w},r.a.createElement(ce,{style:{visibility:"lyric"===T?"visible":"hidden"},className:"lyric_wrapper"},m?m.lines.map(((e,t)=>(A.current[t]=r.a.createRef(),r.a.createElement("p",{className:"text "+(l===t?"current":""),key:e+t,ref:A.current[t]},e.txt)))):r.a.createElement("p",{className:"text pure"},"\u7eaf\u97f3\u4e50\uff0c\u8bf7\u6b23\u8d4f\u3002")))))),r.a.createElement(se,{className:"bottom"},r.a.createElement(de,null,r.a.createElement("span",{style:{color:"#b17272"}},"Speed"),E.e.map((e=>r.a.createElement(me,{key:e.key,className:""+(f===e.key?"selected":""),onClick:()=>k(e.key)},e.name)))),r.a.createElement(le,null,r.a.createElement("span",{className:"time time-l"},Object(d.f)(c)),r.a.createElement("div",{className:"progress-bar-wrapper"},r.a.createElement(K,{percent:i,percentChange:y})),r.a.createElement("div",{className:"time time-r"},Object(d.f)(s))),r.a.createElement(ue,null,r.a.createElement("div",{className:"icon i-left",onClick:h},r.a.createElement("i",{className:"iconfont",dangerouslySetInnerHTML:{__html:(()=>{let e;return e=o===E.f.sequence?"&#xe625;":o===E.f.loop?"&#xe653;":"&#xe61b;",e})()}})),r.a.createElement("div",{className:"icon i-left",onClick:g},r.a.createElement("i",{className:"iconfont"},"\ue6e1")),r.a.createElement("div",{className:"icon i-center"},r.a.createElement("i",{className:"iconfont",onClick:D,dangerouslySetInnerHTML:{__html:p?"&#xe723;":"&#xe731;"}})),r.a.createElement("div",{className:"icon i-right",onClick:b},r.a.createElement("i",{className:"iconfont"},"\ue718")),r.a.createElement("div",{className:"icon i-right",onClick:()=>j(!0)},r.a.createElement("i",{className:"iconfont"},"\ue640"))))))}))));var he=Object(g.b)((e=>({fullScreen:e.getIn(["player","fullScreen"]),playing:e.getIn(["player","playing"]),currentSong:e.getIn(["player","currentSong"]),showPlayList:e.getIn(["player","showPlayList"]),mode:e.getIn(["player","mode"]),speed:e.getIn(["player","speed"]),currentIndex:e.getIn(["player","currentIndex"]),playList:e.getIn(["player","playList"]),sequencePlayList:e.getIn(["player","sequencePlayList"])})),(e=>({togglePlayingDispatch(t){e(Object(b.f)(t))},toggleFullScreenDispatch(t){e(Object(b.c)(t))},togglePlayListDispatch(t){e(Object(b.h)(t))},changeCurrentIndexDispatch(t){e(Object(b.a)(t))},changeCurrentDispatch(t){e(Object(b.b)(t))},changeModeDispatch(t){e(Object(b.e)(t))},changePlayListDispatch(t){e(Object(b.d)(t))},changeSpeedDispatch(t){e(Object(b.i)(t))}})))(Object(s.g)(r.a.memo((function(e){const[t,n]=Object(a.useState)(0),[o,i]=Object(a.useState)(0),[c,s]=Object(a.useState)(""),[l,m]=Object(a.useState)("");let f=isNaN(t/o)?0:t/o;const{speed:p,currentSong:h,currentIndex:g,playList:b,mode:x,sequencePlayList:O,fullScreen:v}=e;let{playing:j}=e;const{togglePlayingDispatch:k,togglePlayListDispatch:L,changeCurrentIndexDispatch:S,changeCurrentDispatch:w,changePlayListDispatch:N,changeModeDispatch:A,toggleFullScreenDispatch:I,changeSpeedDispatch:T}=e,C=b.toJS(),D=O.toJS(),z=h.toJS(),[J,M]=Object(a.useState)({}),q=Object(a.useRef)(),F=(Object(a.useRef)(),Object(a.useRef)()),G=Object(a.useRef)(),_=Object(a.useRef)(0),Y=Object(a.useRef)(!0);Object(a.useEffect)((()=>{if(!C.length||-1===g||!C[g]||C[g].id===J.id||!Y.current)return;Y.current=!1;let e=C[g];w(e),M(e),s(""),Object(y.v)(e.id).then((e=>{let t=e.data[0].url;q.current.src=t,q.current.autoplay=!0,q.current.playbackRate=p})).catch((e=>{})),k(!0),V(e.id),n(0),i(e.dt/1e3|0)}),[g,C]),Object(a.useEffect)((()=>{j?q.current.play():q.current.pause()}),[j]),Object(a.useEffect)((()=>{v&&G.current&&G.current.lines.length&&Q({lineNum:_.current,txt:G.current.lines[_.current].txt})}),[v]);const Q=({lineNum:e,txt:t})=>{G.current&&(_.current=e,s(t))},V=e=>{let t="";G.current&&G.current.stop(),setTimeout((()=>{Y.current=!0}),3e3),Object(y.i)(e).then((e=>{t=e.lrc&&e.lrc.lyric,t?(G.current=new H(t,Q,p),G.current.play(),_.current=0,G.current.seek(0)):G.current=null})).catch((()=>{G.current="",Y.current=!0,q.current.play()}))},W=(e,n)=>{e.stopPropagation(),k(n),G.current&&G.current.togglePlay(1e3*t)},X=()=>{q.current.currentTime=0,k(!0),q.current.play(),G.current&&G.current.seek(0)},K=()=>{if(1===C.length)return void X();let e=g+1;e===C.length&&(e=0),j||k(!0),S(e)};return r.a.createElement("div",null,Object(d.k)(z)?null:r.a.createElement(pe,{playing:j,full:v,song:z,percent:f,clickPlaying:W,togglePlayListDispatch:L,mode:x,modeText:l,duration:o,currentTime:t,currentLyric:G.current,currentPlayingLyric:c,speed:p,changeMode:()=>{let e=(x+1)%3;if(0===e){N(D);let e=Object(d.e)(z,D);S(e),m("\u987a\u5e8f\u5faa\u73af")}else if(1===e)N(D),m("\u5355\u66f2\u5faa\u73af");else if(2===e){let e=Object(d.o)(D),t=Object(d.e)(z,e);N(e),S(t),m("\u968f\u673a\u64ad\u653e")}A(e),F.current.show()},handlePrev:()=>{if(1===C.length)return void X();let e=g-1;0===e&&(e=C.length-1),j||k(!0),S(e)},handleNext:K,onProgressChange:e=>{const t=e*o;n(t),q.current.currentTime=t,j||k(!0),G.current&&G.current.seek(1e3*t)},currentLineNum:_.current,toggleFullScreenDispatch:I,clickSpeed:e=>{T(e),q.current.playbackRate=e,G.current.changeSpeed(e),G.current.seek(1e3*t)}}),Object(d.k)(z)?null:r.a.createElement(B,{playing:j,full:v,song:z,percent:f,clickPlaying:W,setFullScreen:I,togglePlayList:L}),r.a.createElement(P,{clearPreSong:M.bind(null,{})}),r.a.createElement("audio",{ref:q,onTimeUpdate:e=>{n(e.target.currentTime)},onEnded:()=>{x===E.f.loop?X():K()},onError:()=>{Y.current=!0,K(),u.a.error("Insufficient Authority",.5)}}),r.a.createElement(R,{text:l,ref:F}))})))),ge=n(319),be=n(320),ye=n(318);const xe=O.b.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${v.a["theme-color"]};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`,Ee=O.b.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${v.a["theme-color"]};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`,Oe=O.b.div`
  height: 100%;
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,{confirm:ve}=p.a;let je,ke=!1;const Le=(e,t)=>{if(!0===t)return!0;const{route:n}=e,a=e.location.pathname;return"/"===a||(n.routes.map((e=>{if(e.path===a)return je=!1})),void 0===je&&(je=!0),je)};var Se=Object(s.g)(r.a.memo((function(e){const{route:t}=e;return e.location.pathname,r.a.createElement("div",null,Le(e,ke)?null:r.a.createElement(a.Fragment,null,r.a.createElement(xe,null,r.a.createElement(ge.a,{onClick:()=>{e.history.push("/recommend")}}),r.a.createElement(be.a,{style:{marginLeft:"-42px"},onClick:()=>{!function(e){ve({title:"Confirm",icon:r.a.createElement(ye.a,null),content:"Are you sure to Logout?",centered:!0,onOk(){ke=!0,e.history.push("/"),Object(d.c)(),Object(d.b)()},onCancel(){}})}(e)}}),r.a.createElement("span",{className:"title"},"Netease Music"),r.a.createElement("span",{className:"iconfont search",onClick:()=>e.history.push("/search")},"\ue62b")),r.a.createElement(Ee,null,r.a.createElement(c.c,{to:"/recommend",activeClassName:"selected"},r.a.createElement(Oe,null,r.a.createElement("span",null," \u63a8\u8350 "))),r.a.createElement(c.c,{to:"/singers",activeClassName:"selected"},r.a.createElement(Oe,null,r.a.createElement("span",null," \u6b4c\u624b "))),r.a.createElement(c.c,{to:"/rank",activeClassName:"selected"},r.a.createElement(Oe,null,r.a.createElement("span",null," \u6392\u884c\u699c "))),r.a.createElement(c.c,{to:"/mv",activeClassName:"selected"},r.a.createElement(Oe,null,r.a.createElement("span",null," MV "))))),Object(h.a)(t.routes),Le(e,ke)?null:r.a.createElement(he,null))})));const we=Object(a.lazy)((()=>Promise.all([n.e(6),n.e(10)]).then(n.bind(null,367)))),Ne=Object(a.lazy)((()=>n.e(7).then(n.bind(null,369)))),Ae=Object(a.lazy)((()=>n.e(14).then(n.bind(null,370)))),Ie=Object(a.lazy)((()=>n.e(8).then(n.bind(null,371)))),Te=Object(a.lazy)((()=>n.e(9).then(n.bind(null,372)))),Ce=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,368)))),Pe=Object(a.lazy)((()=>Promise.resolve().then(n.bind(null,171)))),De=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(4),n.e(12)]).then(n.bind(null,373)))),ze=Object(a.lazy)((()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,374)))),Re=Object(a.lazy)((()=>n.e(11).then(n.bind(null,375)))),Je=e=>t=>r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(e,t));var Me=[{path:"/",component:Se,routes:[{path:"/",exact:!0,component:Je(Pe)},{path:"/login",exact:!0,component:m.default},{path:"/recommend",component:Je(we)},{path:"/singers",component:Je(Ne)},{path:"/artist",component:Je(Te),key:"artist"},{path:"/rank",component:Je(Ae),key:"rank"},{path:"/mv",component:Je(De),key:"video"},{path:"/play",key:"mvPlayer",component:Je(ze)},{path:"/album",key:"album",component:Je(Ie)},{path:"/search",key:"search",component:Je(Ce)},{path:"*",key:"NotFound",component:Je(Re)}]}];const qe=O.a`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1565320061289'); /* IE9 */
  src: url('iconfont.eot?t=1565320061289#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1565320061289') format('woff'),
  url('iconfont.ttf?t=1565320061289') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1565320061289#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`,He=O.a`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		${""}
		${""}
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
		height:100%;
	}
	html, body{
		background: #f2f3f4;;
		height:100%;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{
		text-decoration: none;
		color: #fff;
	}
`;var Fe=Object(s.g)((function(e){const t=e.location.pathname;let n;const o=Me[0].routes.some((e=>(n=e.path===t,n)));return Object(d.j)()?o?"/"===t?r.a.createElement(s.a,{to:"/recommend"}):r.a.createElement(a.Fragment,null,r.a.createElement(He,null),r.a.createElement(qe,null),Object(h.a)(Me)):(u.a.error("No such page.."),r.a.createElement(s.a,{to:"/recommend"})):"/"===t?r.a.createElement(a.Fragment,null,Object(h.a)(Me)):r.a.createElement(s.a,{to:"/"})}));var Ge=function(e){return r.a.createElement(c.a,null,r.a.createElement(s.d,null,r.a.createElement(Fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=n(64),Ye=n(169),Qe=n(170),Be=n(53),Ve=n(5);const We=Object(Ve.fromJS)({bannerList:[],recommendList:[],enterLoading:!0});n(111);var Xe=n(43);const Ke=Object(Ve.fromJS)({singerList:[],enterLoading:!0,pullUpLoading:!1,pullDownLoading:!1,pageCount:0});n(112);var Ue=n(155),Ze=n(65);const $e=Object(Ve.fromJS)({currentAlbum:{},enterLoading:!1});n(113);var et=n(30);const tt=Object(Ve.fromJS)({relatedVideos:[],videoComments:[],enterLoading:!1,mvUrl:"",mvInfo:{},hotComments:[],isPlayingMv:!1,artistInfo:{}});n(114);var nt=n(54);const at=Object(Ve.fromJS)({artist:{},songsOfArtist:[],loading:!0});n(115);var rt=n(15);const ot=Object(Ve.fromJS)({fullScreen:!1,playing:!1,sequencePlayList:[],playList:[],mode:E.f.sequence,currentIndex:-1,showPlayList:!1,currentSong:{},speed:1});var it=n(42);const ct=Object(Ve.fromJS)({hotList:[],suggestList:[],songsList:[],enterLoading:!1});n(116);var st=n(48);const lt=Object(Ve.fromJS)({mvList:[],allMvList:[],selfMvList:[],enterLoading:!1});n(117);var ut=Object(Qe.combineReducers)({recommend:(e=We,t)=>{switch(t.type){case Be.a:return e.set("bannerList",t.data);case Be.c:return e.set("recommendList",t.data);case Be.b:return e.set("enterLoading",t.data);default:return e}},singers:(e=Ke,t)=>{switch(t.type){case Xe.e:return e.set("singerList",t.data);case Xe.a:return e.set("enterLoading",t.data);case Xe.d:return e.set("pullUpLoading",t.data);case Xe.c:return e.set("pullDownLoading",t.data);case Xe.b:return e.set("pageCount",t.data);default:return e}},rank:Ue.b,album:(e=$e,t)=>{switch(t.type){case Ze.a:return e.set("currentAlbum",t.data);case Ze.b:return e.set("enterLoading",t.data);default:return e}},mvPlayer:(e=tt,t)=>{switch(t.type){case et.h:return e.set("isPlayingMv",t.data);case et.b:return e.set("artistInfo",t.data);case et.f:return e.set("hotComments",t.data);case et.g:return e.set("videoComments",t.data);case et.e:return e.set("relatedVideos",t.data);case et.a:return e.set("enterLoading",t.data);case et.d:return e.set("mvUrl",t.data);case et.c:return e.set("mvInfo",t.data);default:return e}},singerInfo:(e=at,t)=>{switch(t.type){case nt.a:return e.set("artist",t.data);case nt.c:return e.set("songsOfArtist",t.data);case nt.b:return e.set("loading",t.data);default:return e}},player:(e=ot,t)=>{switch(t.type){case rt.e:return e.set("currentSong",t.data);case rt.f:return e.set("fullScreen",t.data);case rt.g:return e.set("playing",t.data);case rt.j:return e.set("sequencePlayList",t.data);case rt.h:return e.set("playList",t.data);case rt.i:return e.set("mode",t.data);case rt.d:return e.set("currentIndex",t.data);case rt.k:return e.set("showPlayList",t.data);case rt.c:return((e,t)=>{const n=JSON.parse(JSON.stringify(e.get("playList").toJS())),a=JSON.parse(JSON.stringify(e.get("sequencePlayList").toJS()));let r=e.get("currentIndex"),o=Object(d.e)(t,n);if(o===r&&-1!==r)return e;r++,n.splice(r,0,t),o>-1&&(r>o?(n.splice(o,1),r--):n.splice(o+1,1));let i=Object(d.e)(n[r],a)+1,c=Object(d.e)(t,a);return a.splice(i,0,t),c>-1&&(i>c?(a.splice(c,1),i--):a.splice(c+1,1)),e.merge({playList:Object(Ve.fromJS)(n),sequencePlayList:Object(Ve.fromJS)(a),currentIndex:Object(Ve.fromJS)(r)})})(e,t.data);case rt.b:return((e,t)=>{const n=JSON.parse(JSON.stringify(e.get("playList").toJS())),a=JSON.parse(JSON.stringify(e.get("sequencePlayList").toJS()));let r=e.get("currentIndex");const o=Object(d.e)(t,n);n.splice(o,1),o<r&&r--;const i=Object(d.e)(t,a);return a.splice(i,1),e.merge({playList:Object(Ve.fromJS)(n),sequencePlayList:Object(Ve.fromJS)(a),currentIndex:Object(Ve.fromJS)(r)})})(e,t.data);case rt.a:return e.set("speed",t.data);default:return e}},search:(e=ct,t)=>{switch(t.type){case it.b:return e.set("hotList",t.data);case it.d:return e.set("suggestList",t.data);case it.c:return e.set("songsList",t.data);case it.a:return e.set("enterLoading",t.data);default:return e}},mvList:(e=lt,t)=>{switch(t.type){case st.c:return e.set("mvList",t.data);case st.b:return e.set("allMvList",t.data);case st.d:return e.set("selfMvList",t.data);case st.a:return e.set("enterLoading",t.data);default:return e}}});const dt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_e.c;var mt=Object(_e.d)(ut,dt(Object(_e.a)(Ye.a)));i.a.render(r.a.createElement(g.a,{store:mt},r.a.createElement(Ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{}))},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(160),r=n.n(a),o=n(102),i=n.n(o),c=(n(201),n(7));const s=45,l={sequence:0,loop:1,random:2};class u{constructor(e=""){this.baseUrl=e,this.queue={}}getInsideConfig(){return{baseURL:this.baseUrl,headers:{},withCredentials:!0}}destroy(e){delete this.queue[e],Object.keys(this.queue).length}interceptors(e,t){e.interceptors.request.use((e=>{const n=Object(c.j)();Object(c.g)();return n&&(e.headers.token=n),"get"===e.method&&(e.params=e.params||{}),i.a.start(),Object.keys(this.queue).length,this.queue[t]=!0,e}),(e=>Promise.reject(e))),e.interceptors.response.use((e=>{i.a.done(),this.destroy(t);const{data:n}=e;return n}),(e=>(this.destroy(t),Promise.reject(e.response))))}request(e){const t=r.a.create();return e=Object.assign(this.getInsideConfig(),e),this.interceptors(t,e.url),t(e)}}const d=[{key:.75,name:"x0.75"},{key:1,name:"x1"},{key:1.25,name:"x1.25"},{key:1.5,name:"x1.5"},{key:2,name:"x2"}],m=[{name:"\u534e\u8bed\u7537",key:"1001"},{name:"\u534e\u8bed\u5973",key:"1002"},{name:"\u534e\u8bed\u7ec4\u5408",key:"1003"},{name:"\u6b27\u7f8e\u7537",key:"2001"},{name:"\u6b27\u7f8e\u5973",key:"2002"},{name:"\u6b27\u7f8e\u7ec4\u5408",key:"2003"},{name:"\u65e5\u672c\u7537",key:"6001"},{name:"\u65e5\u672c\u5973",key:"6002"},{name:"\u65e5\u672c\u7ec4\u5408",key:"6003"},{name:"\u97e9\u56fd\u7537",key:"7001"},{name:"\u97e9\u56fd\u5973",key:"7002"},{name:"\u97e9\u56fd\u7ec4\u5408",key:"7003"},{name:"\u5176\u4ed6\u7537\u6b4c\u624b",key:"4001"},{name:"\u5176\u4ed6\u5973\u6b4c\u624b",key:"4002"},{name:"\u5176\u4ed6\u7ec4\u5408",key:"4003"}],f=[{key:"A",name:"A"},{key:"B",name:"B"},{key:"C",name:"C"},{key:"D",name:"D"},{key:"E",name:"E"},{key:"F",name:"F"},{key:"G",name:"G"},{key:"H",name:"H"},{key:"I",name:"I"},{key:"J",name:"J"},{key:"K",name:"K"},{key:"L",name:"L"},{key:"M",name:"M"},{key:"N",name:"N"},{key:"O",name:"O"},{key:"P",name:"P"},{key:"Q",name:"Q"},{key:"R",name:"R"},{key:"S",name:"S"},{key:"T",name:"T"},{key:"U",name:"U"},{key:"V",name:"V"},{key:"W",name:"W"},{key:"X",name:"X"},{key:"Y",name:"Y"},{key:"Z",name:"Z"}]},42:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));const a="search/SET_HOT_KEYWRODS",r="search/SET_SUGGEST_LIST",o="search/SET_RESULT_SONGS_LIST",i="search/SET_ENTER_LOADING"},43:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c}));const a="singers/CHANGE_SINGER_LIST",r="singers/PAGE_COUNT",o="singers/ENTER_LOADING",i="singers/PULLUP_LOADING",c="singers/PULLDOWN_LOADING"},48:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i}));const a="mvPlayer/ GET_MV_LIST",r="mvPlayer/ GET_ALL_MV_LIST",o="mvPlayer/ GET_MV_LSELF_IST",i="mvPlayer/CHANGE_ENTER_LOADING"},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));const a="recommend/CHANGE_BANNER",r="recommend/RECOMMEND_LIST",o="recommend/CHANGE_ENTER_LOADING"},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));const a="singer/CHANGE_ARTIST",r="singer/CHANGE_SONGS_OF_ARTIST",o="singer/CHANGE_ENTER_LOADING"},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));const a="album/CHANGE_CURRENT_ALBUM",r="album/CHANGE_ENTER_LOADING"},7:function(e,t,n){"use strict";n.d(t,"h",(function(){return o})),n.d(t,"n",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"j",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"m",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"k",(function(){return h})),n.d(t,"l",(function(){return y})),n.d(t,"f",(function(){return x})),n.d(t,"o",(function(){return E})),n.d(t,"e",(function(){return O}));var a=n(60),r=n.n(a);const o=e=>{if(!(e<0))return e<1e3?e:Math.floor(e/1e3)<1e3?Math.floor(e/100)/10+"K":Math.floor(e/1e5)<1e5?Math.floor(e/1e4)/10+"M":Math.floor(e/1e8)/10+"B"},i=(e,t="NET_EASE_TOKEN")=>{r.a.set(t,e)},c=(e="NET_EASE_TOKEN")=>{r.a.remove(e)},s=(e="NET_EASE_TOKEN")=>r.a.get(e),l=(e="NET_EASE_COOKIE")=>{r.a.remove(e)},u=(e,t="NET_EASE_COOKIE")=>{r.a.set(t,e)},d=(e="NET_EASE_COOKIE")=>r.a.get(e),m=(e,t)=>{let n;return function(...a){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this,a),clearTimeout(n)}),t)}},f=e=>{for(let t=0;t<e.length-1;t++)if(e[t].tracks.length&&!e[t+1].tracks.length)return t+1},p=e=>{let t="";return e.map(((e,n)=>(t+=0===n?e.name:"/"+e.name,e))),t},h=e=>!e||0===Object.keys(e).length;let g=document.createElement("div").style,b=(()=>{let e={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransfrom",ms:"msTransform",standard:"Transform"};for(let t in e)if(void 0!==g[e[t]])return t;return!1})();function y(e){return!1!==b&&("standard"===b?e:b+e.charAt(0).toUpperCase()+e.substr(1))}const x=e=>`${(e|=0)/60|0}:${(e%60).toString().padStart(2,"0")}`;function E(e){let t=[];e.forEach((e=>{t.push(e)}));for(let r=0;r<t.length;r++){let e=(n=0,a=r,Math.floor(Math.random()*(a-n+1)+n)),o=t[r];t[r]=t[e],t[e]=o}var n,a;return t}const O=(e,t)=>t.findIndex((t=>e.id===t.id))},73:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(24),i=n.n(o),c=n(165),s=n(4),l=n(107),u=n(2);const d=s.c`
    0%, 40%, 100%{
      transform: scaleY(0.4);
      transform-origin: center 100%;
    }
    20%{
      transform: scaleY(1);
    }
`,m=s.b.div`
    height: 10px;
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 10px;
    >div {
      display: inline-block;
      background-color: ${u.a["theme-color"]};
      height: 100%;
      width: 1px;
      margin-right:2px;
      animation: ${d} 1s infinite;
    }
    >div:nth-child(2) {
      animation-delay: -0.4s;
    }
    >div:nth-child(3) {
      animation-delay: -0.6s;
    }
    >div:nth-child(4) {
      animation-delay: -0.5s;
    }
    >div:nth-child(5) {
      animation-delay: -0.2s;
    } 

`;var f=r.a.memo((function(){return r.a.createElement(m,null,r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("span",null," Loading..."))})),p=n(7);const h=s.b.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,g=s.b.div`
  position: absolute;
  left:0; right:0;
  bottom: 5px;
  width: 60px;
  height: 60px;
  margin: auto;
  z-index: 100;
`,b=s.b.div`
  position: absolute;
  left:0; right:0;
  top: 0px;
  height: 30px;
  margin: auto;
  z-index: 100;
`,y=Object(a.forwardRef)(((e,t)=>{const[n,o]=Object(a.useState)(),i=Object(a.useRef)(),{direction:s,click:u,refresh:d,bounceTop:m,bounceBottom:y}=e,{pullUp:x,pullDown:E,onScroll:O,pullUpLoading:v,pullDownLoading:j}=e;Object(a.useEffect)((()=>{const e=new c.a(i.current,{scrollX:"Horizontal"===s,scrollY:"vertical"===s,probeType:3,click:u,bounce:{top:m,bottom:y}});return o(e),()=>{o(null)}}),[]),Object(a.useEffect)((()=>{if(n&&O)return n.on("scroll",(e=>{O(e)})),()=>{n.off("scroll")}}),[O,n]);let k=Object(a.useMemo)((()=>Object(p.a)(x,300)),[x]),L=Object(a.useMemo)((()=>Object(p.a)(E,300)),[E]);Object(a.useEffect)((()=>{if(n&&x)return n.on("scrollEnd",(()=>{n.y<=n.maxScrollY+100&&k()})),()=>{n.off("scrollEnd")}}),[x,n]),Object(a.useEffect)((()=>{if(n&&E)return n.on("touchEnd",(e=>{e.y>50&&(n.refresh(),L())})),()=>{n.off("touchEnd")}}),[E,n]),Object(a.useEffect)((()=>{d&&n&&n.refresh()})),Object(a.useImperativeHandle)(t,(()=>({refresh(){n&&(n.refresh(),n.scrollTo(0,0))},getBScroll(){if(n)return n}})));const S=v?{display:""}:{display:"none"},w=j?{display:""}:{display:"none"};return r.a.createElement(h,{ref:i},e.children,r.a.createElement(g,{style:S},r.a.createElement(l.a,null)),r.a.createElement(b,{style:w},r.a.createElement(f,null)))}));y.defaultProps={direction:"vertical",click:!0,refresh:!0,onScroll:null,pullUpLoading:!1,pullDownLoading:!1,pullUp:null,pullDown:null,bounceTop:!0,bounceBottom:!0},y.propTypes={direction:i.a.oneOf(["vertical","Horizontal"]),refresh:i.a.bool,onScroll:i.a.func,pullUp:i.a.func,pullDown:i.a.func,pullUpLoading:i.a.bool,pullDownLoading:i.a.bool,bounceTop:i.a.bool,bounceBottom:i.a.bool};t.a=y},8:function(e,t,n){"use strict";n.d(t,"v",(function(){return o})),n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"x",(function(){return s})),n.d(t,"o",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"t",(function(){return d})),n.d(t,"n",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"s",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return b})),n.d(t,"w",(function(){return y})),n.d(t,"q",(function(){return x})),n.d(t,"m",(function(){return E})),n.d(t,"r",(function(){return O})),n.d(t,"j",(function(){return v})),n.d(t,"d",(function(){return j})),n.d(t,"l",(function(){return k})),n.d(t,"p",(function(){return L})),n.d(t,"k",(function(){return S})),n.d(t,"b",(function(){return w})),n.d(t,"u",(function(){return N}));var a=new(n(36).b),r=n(7);Object(r.g)();const o=e=>a.request({url:"/song/url",method:"get",params:{id:e}}),i=()=>a.request({url:"/banner?type=2",method:"get"}),c=()=>a.request({url:"/login/status",method:"get"}),s=(e,t)=>a.request({url:"/login/cellphone",method:"get",params:{phone:e,md5_password:t}}),l=()=>a.request({url:"/personalized",method:"get"}),u=e=>a.request({url:"/top/artists",method:"get",params:{offset:e}}),d=(e,t,n)=>a.request({url:"/artist/list",method:"get",params:{cat:e,initial:t.toLowerCase(),offset:n}}),m=()=>a.request({url:"/toplist/detail",method:"get"}),f=e=>a.request({url:"/playlist/detail",method:"get",params:{id:e}}),p=e=>a.request({url:"/artist/album",method:"get",params:{limit:"1",id:e}}),h=e=>a.request({url:"/artists",method:"get",params:{id:e}}),g=e=>a.request({url:"/lyric",method:"get",params:{id:e}}),b=()=>a.request({url:"/search/hot",method:"get"}),y=e=>a.request({url:"/search/suggest",method:"get",params:{keywords:e}}),x=e=>a.request({url:"/search",method:"get",params:{keywords:e}}),E=e=>a.request({url:"/mv/first",method:"get",params:{}}),O=e=>a.request({url:"/mv/exclusive/rcmd",method:"get",params:{limit:"10",offset:e}}),v=(e,t)=>a.request({url:"/search",method:"get",params:{type:1004,offset:t,keywords:e}}),j=(e,t)=>a.request({url:"/mv/all",method:"get",params:{limit:"10",area:e,offset:t,order:"\u6700\u65b0"}}),k=e=>a.request({url:"/mv/detail",method:"get",params:{mvid:e}}),L=e=>a.request({url:"/related/allvideo",method:"get",params:{id:e}}),S=e=>a.request({url:"/comment/mv",method:"get",params:{id:e}}),w=e=>a.request({url:"/mv/url",method:"get",params:{id:e,r:"720"}}),N=e=>a.request({url:"/song/detail",method:"get",params:{ids:e}})}},[[174,2,3]]]);