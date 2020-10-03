(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[9],{326:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(4),r=a(7),l=a(2);const s=o.b.div`
  .icon_wrapper {
    position: fixed;
    z-index: 1000;
    margin-top: -10px;
    margin-left: -10px;
    color: ${l.a["theme-color"]};
    font-size: 14px;
    display: none;
    transition: transform 1s cubic-bezier(.62,-0.1,.86,.57);
    transform: translate3d(0, 0, 0);
    >div {
      transition: transform 1s;
    }
  }
`,c=Object(n.forwardRef)(((e,t)=>{const a=Object(n.useRef)(),o=Object(r.l)("transform"),l=e=>{const t=`<div class='icon_wrapper'>${e}</div>`;let a=document.createElement("div");return a.innerHTML=t,a.firstChild};Object(n.useEffect)((()=>{for(let e=0;e<3;e++){let e=l('<div class="iconfont">&#xe642;</div>');a.current.appendChild(e)}[].slice.call(a.current.children).forEach((e=>{e.running=!1,e.addEventListener("transitionend",(function(){this.style.display="none",this.style[o]="translate3d(0, 0, 0)",this.running=!1,this.querySelector("div").style[o]="translate3d(0, 0, 0)"}),!1)}))}),[]);const c=({x:e,y:t})=>{for(let n=0;n<3;n++){let i=[].slice.call(a.current.children)[n];if(!1===i.running){i.style.left=e+"px",i.style.top=t+"px",i.style.display="inline-block",setTimeout((()=>{i.running=!0,i.style[o]="translate3d(0, 750px, 0)",i.querySelector("div").style[o]="translate3d(-40px, 0, 0)"}),20);break}}};return Object(n.useImperativeHandle)(t,(()=>({startAnimation:c}))),i.a.createElement(s,{ref:a})}));t.a=i.a.memo(c)},327:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(4),r=a(2),l=a(24),s=a.n(l);const c=o.b.div`
  position: fixed;
  padding: 5px 10px;
  padding-top: 0;
  height: 40px;
  width: 100%;
  z-index: 100;
  display: flex;
  line-height: 40px;
  color: ${r.a["font-color-light"]};
  /* background-color: ${r.a["theme-color"]}; */
  .back {
    margin-right: 5px;
    font-size: 20px;
    width: 20px;
  }
  >h1 {
    font-size: ${r.a["font-size-l"]};
    font-weight: 700;
  }
`,p=i.a.forwardRef(((e,t)=>{const{handleClick:a,title:n,isMarquee:o}=e;return i.a.createElement(c,{ref:t},i.a.createElement("i",{className:"iconfont back",onClick:a},"\ue655"),o?i.a.createElement("marquee",null,n):i.a.createElement("h1",null,n))}));p.defaultProps={handleClick:()=>{},title:"\u6807\u9898",isMarquee:!1},p.propTypes={handleClick:s.a.func,title:s.a.string,isMarquee:s.a.bool},t.a=i.a.memo(p)},330:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(45),r=a(17),l=a(4),s=a(2);const c=l.b.div`
  border-radius: 10px;
  opacity: 0.98;
  ${""}
  ${e=>e.showBackground?"background: "+s.a["highlight-background-color"]:""};
  .first_line {
    box-sizing: border-box;
    padding: 10px 0;
    margin-left: 10px;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid ${s.a["border-color"]};
    .play_all {
      display: inline-block;
      line-height: 24px;
      color: ${s.a["font-color-desc"]};
      .iconfont {
        font-size: 24px;
        margin-right: 10px;
        vertical-align: top;
      }
      .sum {
        font-size: ${s.a["font-size-s"]};
        color: ${s.a["font-color-desc-v2"]};
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
      background: ${s.a["theme-color"]};
      color: ${s.a["font-color-light"]};
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
      background: ${s.a["background-color"]};
      color: ${s.a["font-color-desc"]};
    }
}
`,p=l.b.ul`
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
      border-bottom: 1px solid ${s.a["border-color"]};
      ${s.a.noWrap()}
      >span {
        ${s.a.noWrap()}
      }
      >span:first-child {
        color: ${s.a["font-color-desc"]};
      }
      >span:last-child {
        font-size: ${s.a["font-size-s"]};
        color: #bba8a8;
      }
    }
  }
`;var d=a(7);const f=i.a.forwardRef(((e,t)=>{const{collectCount:a,showCollect:n,songs:o}=e,{changePlayListDispatch:r,changeCurrentIndexDispatch:l,changeSequencePlayListDispatch:s}=e,{musicAnimation:f}=e,u=o.length,g=(e,t)=>{r(o),s(o),l(t),f(e.nativeEvent.clientX,e.nativeEvent.clientY)};return i.a.createElement(c,{ref:t,showBackground:e.showBackground},i.a.createElement("div",{className:"first_line"},i.a.createElement("div",{className:"play_all",onClick:e=>g(e,0)},i.a.createElement("i",{className:"iconfont"},"\ue6e3"),i.a.createElement("span",null," \u64ad\u653e\u5168\u90e8 ",i.a.createElement("span",{className:"sum"},"(\u5171 ",u," \u9996)"))),n?(m=a,i.a.createElement("div",{className:"add_list"},i.a.createElement("i",{className:"iconfont"},"\ue62d"),i.a.createElement("span",null," \u6536\u85cf (",Math.floor(m/1e3)/10," \u4e07)"))):null),i.a.createElement(p,null,(e=>{let t=[];for(let a=0;a<e.length;a++){let n=e[a];t.push(i.a.createElement("li",{key:n.id,onClick:e=>g(e,a)},i.a.createElement("span",{className:"index"},a+1),i.a.createElement("div",{className:"info"},i.a.createElement("span",null,n.name),i.a.createElement("span",null,n.ar?Object(d.i)(n.ar):Object(d.i)(n.artists)," - ",n.al?n.al.name:n.album.name))))}return t})(o)));var m}));t.a=Object(o.b)(null,(e=>({changePlayListDispatch(t){e(Object(r.d)(t))},changeCurrentIndexDispatch(t){e(Object(r.a)(t))},changeSequencePlayListDispatch(t){e(Object(r.g)(t))}})))(i.a.memo(f))},372:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(45),r=a(315),l=a(115),s=a(36),c=a(326),p=a(327),d=a(107),f=a(73),u=a(330),g=a(4),m=a(2);const h=g.b.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: ${e=>e.play>0?"60px":0};
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #f2f3f4;
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
`,b=g.b.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  transform-origin: top;
  background: url(${e=>e.bgUrl});
  background-size: cover;
  z-index: 50;
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7, 17, 27, 0.3);
  }
`,x=g.b.div`
  position: absolute;
  left: 0; right: 0;
  margin: auto;
  box-sizing: border-box;
  width: 120px;
  height: 40px;
  margin-top: -55px;
  z-index:50;
  background: ${m.a["theme-color"]};
  color: ${m.a["font-color-light"]};
  border-radius: 20px;
  text-align: center;
  font-size: 0;
  line-height: 40px;
  .iconfont {
    display: inline-block;
    margin-right: 10px;
    font-size: 12px;
    vertical-align: 1px;
  }
  .text {
    display: inline-block;
    font-size:14px;
    letter-spacing: 5px;
  }
`,y=g.b.div`
  position: absolute;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  >div {
    position: absolute;
    left: 0;
    width: 100%;
    overflow: visible;
  }
`,v=g.b.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  border-radius: 10px;
  z-index: 50;
`;t.default=Object(o.b)((e=>({artist:e.getIn(["singerInfo","artist"]),songs:e.getIn(["singerInfo","songsOfArtist"]),loading:e.getIn(["singerInfo","loading"]),songsCount:e.getIn(["player","playList"]).size})),(e=>({getSingerDataDispatch(t){e(Object(l.a)(!0)),e(Object(l.b)(t))}})))(i.a.memo((function(e){const{artist:t,songs:a,loading:o,songsCount:l}=e,{getSingerDataDispatch:g}=e,m=t.toJS(),E=a.toJS(),[k,z]=Object(n.useState)(!0),j=Object(n.useRef)(),O=Object(n.useRef)(),w=Object(n.useRef)(),$=Object(n.useRef)(),C=Object(n.useRef)(),I=Object(n.useRef)(),N=Object(n.useRef)(),R=Object(n.useRef)(0);Object(n.useEffect)((()=>{const t=e.history.location.state.artistId;g(t);let a=O.current.offsetHeight;w.current.style.top=a-5+"px",R.current=a,I.current.style.top=a-5-3+"px",$.current.refresh()}),[]);const D=Object(n.useCallback)((()=>{z(!1)}),[]),S=Object(n.useCallback)((e=>{let t=R.current;const a=e.y,n=O.current,i=j.current,o=C.current,r=I.current,l=-(t-5)+s.a,c=Math.abs(a/t);a>0?(n.style.transform=`scale(${1+c})`,i.style.transform=`translate3d(0, ${a}px, 0)`,r.style.top=t-5+a+"px"):a>=l?(r.style.top=t-5-Math.abs(a)+"px",r.style.zIndex=1,n.style.paddingTop="75%",n.style.height=0,n.style.zIndex=-1,i.style.transform=`translate3d(0, ${a}px, 0)`,i.style.opacity=""+(1-2*c)):a<l&&(r.style.top=s.a-5+"px",r.style.zIndex=1,o.style.zIndex=100,n.style.height=s.a+"px",n.style.paddingTop=0,n.style.zIndex=99)}),[]);return i.a.createElement(r.a,{in:k,timeout:300,classNames:"fly",appear:!0,unmountOnExit:!0,onExited:()=>e.history.goBack()},i.a.createElement(h,{play:l},i.a.createElement(p.a,{handleClick:D,title:m.name,ref:C}),i.a.createElement(b,{ref:O,bgUrl:m.picUrl},i.a.createElement("div",{className:"filter"})),i.a.createElement(x,{ref:j},i.a.createElement("i",{className:"iconfont"},"\ue62d"),i.a.createElement("span",{className:"text"}," \u6536\u85cf ")),i.a.createElement(v,{ref:I}),i.a.createElement(y,{ref:w},i.a.createElement(f.a,{onScroll:S,ref:$},i.a.createElement(u.a,{songs:E,showCollect:!1,musicAnimation:(e,t)=>{N.current.startAnimation({x:e,y:t})}}))),i.a.createElement(c.a,{ref:N}),o?i.a.createElement(d.a,null):null))})))}}]);