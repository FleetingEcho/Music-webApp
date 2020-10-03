(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[8],{326:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(4),l=a(7),r=a(2);const c=o.b.div`
  .icon_wrapper {
    position: fixed;
    z-index: 1000;
    margin-top: -10px;
    margin-left: -10px;
    color: ${r.a["theme-color"]};
    font-size: 14px;
    display: none;
    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);
    transform: translate3d(0, 0, 0);
    >div {
      transition: transform 1s;
    }
  }
`,s=Object(n.forwardRef)(((e,t)=>{const a=Object(n.useRef)(),o=Object(l.l)("transform"),r=e=>{const t=`<div class='icon_wrapper'>${e}</div>`;let a=document.createElement("div");return a.innerHTML=t,a.firstChild};Object(n.useEffect)((()=>{for(let e=0;e<3;e++){let e=r('<div class="iconfont">&#xe642;</div>');a.current.appendChild(e)}[].slice.call(a.current.children).forEach((e=>{e.running=!1,e.addEventListener("transitionend",(function(){this.style.display="none",this.style[o]="translate3d(0, 0, 0)",this.running=!1,this.querySelector("div").style[o]="translate3d(0, 0, 0)"}),!1)}))}),[]);const s=({x:e,y:t})=>{for(let n=0;n<3;n++){let i=[].slice.call(a.current.children)[n];if(!1===i.running){i.style.left=e+"px",i.style.top=t+"px",i.style.display="inline-block",setTimeout((()=>{i.running=!0,i.style[o]="translate3d(0, 750px, 0)",i.querySelector("div").style[o]="translate3d(-40px, 0, 0)"}),20);break}}};return Object(n.useImperativeHandle)(t,(()=>({startAnimation:s}))),i.a.createElement(c,{ref:a})}));t.a=i.a.memo(s)},327:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(4),l=a(2),r=a(24),c=a.n(r);const s=o.b.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${l.a["font-color-light"]};
  /* background-color: ${l.a["theme-color"]}; */
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  >h1 {
    font-size: ${l.a["font-size-l"]};
    font-weight: 700;
  }
`,p=i.a.forwardRef(((e,t)=>{const{handleClick:a,title:n,isMarquee:o}=e;return i.a.createElement(s,{ref:t},i.a.createElement("i",{className:"iconfont back",onClick:a},"\ue655"),o?i.a.createElement("marquee",null,n):i.a.createElement("h1",null,n))}));p.defaultProps={handleClick:()=>{},title:"\u6807\u9898",isMarquee:!1},p.propTypes={handleClick:c.a.func,title:c.a.string,isMarquee:c.a.bool},t.a=i.a.memo(p)},330:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(45),l=a(17),r=a(4),c=a(2);const s=r.b.div`
  border-radius: 10px;
  opacity: 0.98;
  ${""}
  ${e=>e.showBackground?"background: "+c.a["highlight-background-color"]:""};
  .first_line {
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${c.a["border-color"]};
    .play_all {
      display: inline-block;
      line-height: 24px;
      color: ${c.a["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: ${c.a["font-size-s"]};
        color: ${c.a["font-color-desc-v2"]};
      }
      >span {
        vertical-align: top;
      }
    }
    .add_list,.isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0; top :0; bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${c.a["theme-color"]};
      color: ${c.a["font-color-light"]};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span {
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected {
      display: flex;
      background: ${c.a["background-color"]};
      color: ${c.a["font-color-desc"]};
    }
}
`,p=r.b.ul`
  >li {
    display: flex;
    height: 60px;
    align-items: center;  
    .index {
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info {
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${c.a["border-color"]};
      ${c.a.noWrap()}
      >span {
        ${c.a.noWrap()}
      }
      >span:first-child {
        color: ${c.a["font-color-desc"]};
      }
      >span:last-child {
        font-size: ${c.a["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`;var d=a(7);const m=i.a.forwardRef(((e,t)=>{const{collectCount:a,showCollect:n,songs:o}=e,{changePlayListDispatch:l,changeCurrentIndexDispatch:r,changeSequencePlayListDispatch:c}=e,{musicAnimation:m}=e,f=o.length,u=(e,t)=>{l(o),c(o),r(t),m(e.nativeEvent.clientX,e.nativeEvent.clientY)};return i.a.createElement(s,{ref:t,showBackground:e.showBackground},i.a.createElement("div",{className:"first_line"},i.a.createElement("div",{className:"play_all",onClick:e=>u(e,0)},i.a.createElement("i",{className:"iconfont"},"\ue6e3"),i.a.createElement("span",null," \u64ad\u653e\u5168\u90e8 ",i.a.createElement("span",{className:"sum"},"(\u5171 ",f," \u9996)"))),n?(g=a,i.a.createElement("div",{className:"add_list"},i.a.createElement("i",{className:"iconfont"},"\ue62d"),i.a.createElement("span",null," \u6536\u85cf (",Math.floor(g/1e3)/10," \u4e07)"))):null),i.a.createElement(p,null,(e=>{let t=[];for(let a=0;a<e.length;a++){let n=e[a];t.push(i.a.createElement("li",{key:n.id,onClick:e=>u(e,a)},i.a.createElement("span",{className:"index"},a+1),i.a.createElement("div",{className:"info"},i.a.createElement("span",null,n.name),i.a.createElement("span",null,n.ar?Object(d.i)(n.ar):Object(d.i)(n.artists)," - ",n.al?n.al.name:n.album.name))))}return t})(o)));var g}));t.a=Object(o.b)(null,(e=>({changePlayListDispatch(t){e(Object(l.d)(t))},changeCurrentIndexDispatch(t){e(Object(l.a)(t))},changeSequencePlayListDispatch(t){e(Object(l.g)(t))}})))(i.a.memo(m))},371:function(e,t,a){"use strict";a.r(t),a.d(t,"HEADER_HEIGHT",(function(){return y}));var n=a(0),i=a.n(n),o=a(45),l=a(315),r=a(7),c=a(2),s=a(113),p=a(4);const d=p.b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${e=>e.play>0?"60px":0};
  z-index: 1000;
  background: #fff;
  transform-origin: right bottom;
  &.fly-enter, &.fly-appear{
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
  &.fly-enter-active, &.fly-appear-active{
    transition: transform .3s;
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit{
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  &.fly-exit-active{
    transition: transform .3s;
    transform: rotateZ(30deg) translate3d(100%, 0, 0);
  }
`,m=p.b.div`
  background-size: 100%;
  padding: 5px 20px;
  padding-bottom: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 275px;
  position: relative;
  .background{
    z-index: -1;
    background: url(${e=>e.background}) no-repeat;
    background-position: 0 0;
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    .filter{
      position: absolute;
      z-index: 10;
      top: 0; left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.2);
    }
  }
  .img_wrapper{
    width: 120px;
    height: 120px;
    position: relative;         
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${c.a["font-size-s"]};
      line-height: 15px;
      color: ${c.a["font-color-light"]};
      .play{
        vertical-align: top;
      }
    }
    img{
      width: 120px;
      height: 120px;
      border-radius:3px;
    }
  }
  .desc_wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    padding: 0 10px;
    .title{
      max-height: 70px;
      color: ${c.a["font-color-light"]};
      font-weight: 700;
      line-height: 1.5;
      font-size: ${c.a["font-size-l"]};
    }
    .person{
      display: flex;
      .avatar{
        width: 20px;
        height: 20px;
        margin-right: 5px;
        img{
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .name {
        line-height: 20px;
        font-size: ${c.a["font-size-m"]};
        color: ${c.a["font-color-desc-v2"]};
      }
    }
  }
`,f=p.b.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 30px 20px 30px;
  margin: -100px 0 0 0;
  >div {
    display: flex;
    flex-direction: column;
    line-height: 20px;
    text-align: center;
    font-size: ${c.a["font-size-s"]};
    color: #3b1f1f;
    color: ${c.a["font-color-light"]};
    ${""}
    font-weight: 500;
    .iconfont {
      font-size: 20px;
    }
  }
`;p.b.div`
  border-radius: 10px;
  opacity: 0.98;
  background: ${c.a["highlight-background-color"]};
  .first_line{
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${c.a["border-color"]};
    .play_all{
      display: inline-block;
      line-height: 24px;
      color: ${c.a["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum{
        font-size: ${c.a["font-size-s"]};
        color: ${c.a["font-color-desc-v2"]};
      }
      >span{
        vertical-align: top;
      }
    }
    .add_list,.isCollected {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0; top :0px; bottom: 0;
      width: 130px;
      line-height: 34px;
      background: ${c.a["theme-color"]};
      color: ${c.a["font-color-light"]};
      font-size: 0;
      border-radius: 3px;
      vertical-align: top;
      .iconfont {
        vertical-align: top;
        font-size: 10px;
        margin: 0 5px 0 10px;
      }
      span{
        font-size: 14px;
        line-height: 34px;
      }
    }
    .isCollected{
      display: flex;
      background: ${c.a["background-color"]};
      color: ${c.a["font-color-desc"]};
    }
}
`,p.b.ul`
  >li{
    display: flex;
    height: 60px;
    align-items: center;  
    .index{
      flex-basis: 60px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    .info{
      box-sizing: border-box;
      flex: 1;
      display: flex;
      height: 100%;
      padding: 5px 0;
      flex-direction: column;
      justify-content: space-around;
      border-bottom: 1px solid ${c.a["border-color"]};
      ${c.a.noWrap()}
      >span{
        ${c.a.noWrap()}
      }
      >span:first-child{
        color: ${c.a["font-color-desc"]};
      }
      >span:last-child{
        font-size: ${c.a["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`;var u=a(330),g=a(327),h=a(73),b=a(107),x=a(326);const y=45;t.default=Object(o.b)((e=>({currentAlbum:e.getIn(["album","currentAlbum"]).toJS(),enterLoading:e.getIn(["album","enterLoading"]),songsCount:e.getIn(["player","playList"]).size,fullScreen:e.getIn(["player","fullScreen"])})),(e=>({getAlbumDataDispatch(t){e(Object(s.a)(!0)),e(Object(s.b)(t))}})))(i.a.memo((function(e){const[t,a]=Object(n.useState)(!0),[o,s]=Object(n.useState)("\u6b4c\u5355"),[p,v]=Object(n.useState)(!1),{songsCount:E,fullScreen:k,currentAlbum:$,enterLoading:z}=e,{getAlbumDataDispatch:w}=e,j=e.history.location.state.albumId;Object(n.useEffect)((()=>{w(j)}),[w,j]);const C=Object(n.useCallback)((()=>{a(!1)}),[]),N=Object(n.useCallback)((e=>{let t=-y,a=Math.abs(e.y/t),n=O.current;e.y<t?(n.style.backgroundColor=c.a["theme-color"],n.style.opacity=Math.min(1,(a-1)/2),s($.name),v(!0)):(n.style.backgroundColor="",n.style.opacity=1,s("\u6b4c\u5355"),v(!1))}),[$]),O=Object(n.useRef)(),_=Object(n.useRef)();return i.a.createElement(n.Fragment,null,!1===k?i.a.createElement(l.a,{in:t,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:e.history.goBack},i.a.createElement(d,{play:E},i.a.createElement(g.a,{ref:O,title:o,handleClick:C,isMarquee:p}),Object(r.k)($)?null:i.a.createElement(h.a,{bounceTop:!1,onScroll:N},i.a.createElement("div",null,i.a.createElement(m,{background:$.coverImgUrl},i.a.createElement("div",{className:"background"},i.a.createElement("div",{className:"filter"})),i.a.createElement("div",{className:"img_wrapper"},i.a.createElement("div",{className:"decorate"}),i.a.createElement("img",{src:$.coverImgUrl,alt:""}),i.a.createElement("div",{className:"play_count"},i.a.createElement("i",{className:"iconfont play"},"\ue885"),i.a.createElement("span",{className:"count"},Object(r.h)($.subscribedCount)))),i.a.createElement("div",{className:"desc_wrapper"},i.a.createElement("div",{className:"title"},$.name),i.a.createElement("div",{className:"person"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:$.creator.avatarUrl,alt:""})),i.a.createElement("div",{className:"name"},$.creator.nickname)))),i.a.createElement(f,null,i.a.createElement("div",null,i.a.createElement("i",{className:"iconfont"},"\ue6ad"),"\u8bc4\u8bba"),i.a.createElement("div",null,i.a.createElement("i",{className:"iconfont"},"\ue86f"),"\u70b9\u8d5e"),i.a.createElement("div",null,i.a.createElement("i",{className:"iconfont"},"\ue62d"),"\u6536\u85cf"),i.a.createElement("div",null,i.a.createElement("i",{className:"iconfont"},"\ue606"),"\u66f4\u591a")),i.a.createElement(u.a,{songs:$.tracks,showCollect:!0,showBackground:!0,collectCount:$.subscribedCount,musicAnimation:(e,t)=>{_.current.startAnimation({x:e,y:t})}}))),z?i.a.createElement(b.a,null):null,i.a.createElement(x.a,{ref:_}))):null)})))}}]);