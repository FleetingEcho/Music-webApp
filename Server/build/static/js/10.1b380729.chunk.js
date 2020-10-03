(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[10],{335:function(e,t,a){e.exports=a.p+"static/media/music.64444b39.png"},367:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(45),r=a(321),l=a.n(r),s=a(63),c=a(111),m=a(73),p=a(107),d=a(366),h=(a(334),a(4)),g=a(2);const u=h.b.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before {
    position: absolute;
    top: -300px;
    height: 400px;
    width: 100%;
    background: ${g.a["theme-color"]};
  }
  .slider-container {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${g.a["theme-color"]};
    }
  }
`;var b=n.a.memo((function(e){const[t,a]=Object(i.useState)(null),{bannerList:o}=e;return Object(i.useEffect)((()=>{if(o.length&&!t){let e=new d.a(".slider-container",{loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination"}});a(e)}}),[o.length,t]),n.a.createElement(u,null,n.a.createElement("div",{className:"before"}),n.a.createElement("div",{className:"slider-container"},n.a.createElement("div",{className:"swiper-wrapper"},o.map(((e,t)=>n.a.createElement("div",{className:"swiper-slide",key:t},n.a.createElement("div",{className:"slider-nav"},n.a.createElement("img",{src:e.pic,width:"100%",height:"100%",alt:"\u63a8\u8350"})))))),n.a.createElement("div",{className:"swiper-pagination"})))})),f=a(14),v=a(7);const w=h.b.div`
  max-width: 100%;
  .title {
    font-weight: 700;
    padding-left: 6px;
    font-size: 14px;
    line-height: 60px;
  }
`,x=h.b.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`,E=h.b.div`
  position: relative;
  width: 32%;

  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,43%,.4),hsla(0,0%,100%,0));
    }
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      right: 2px;
      top: 2px;
      font-size: ${g.a["font-size-s"]};
      line-height: 15px;
      color: ${g.a["font-color-light"]};
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
      overflow: hidden;
      margin-top: 2px;
      padding: 0 2px;
      height: 50px;
      text-align: left;
      font-size: ${g.a["font-size-s"]};
      line-height: 1.4;
      color: ${g.a["font-color-desc"]};
    }
`;var y=n.a.memo(Object(f.g)((function(e){return n.a.createElement(w,null,e.recommendList!==[]?n.a.createElement("h1",{className:"title"}," Recommend List "):null,n.a.createElement(x,null,e.recommendList.map(((t,i)=>n.a.createElement(E,{key:t.id+i,onClick:()=>{return a=t.id,void e.history.push({pathname:"/album",state:{albumId:a}});var a}},n.a.createElement("div",{className:"img_wrapper"},n.a.createElement("div",{className:"decorate"}),n.a.createElement(l.a,{placeholder:n.a.createElement("img",{width:"100%",height:"100%",scr:a(335),alt:"music"})},n.a.createElement("img",{src:t.picUrl+"?param=300x300",width:"100%",height:"100%",alt:"music"})),n.a.createElement("div",{className:"play_count"},n.a.createElement("i",{className:"iconfont play"},"\ue885"),n.a.createElement("span",{className:"count"},Object(v.h)(t.playCount)))),n.a.createElement("div",{className:"desc"},t.name))))))}))),L=a(8);const N=h.b.div`
  position: fixed;
  top: 90px;
  bottom: ${e=>e.play>0?"60px":0};
  width: 100%;
`;t.default=Object(o.b)((e=>({bannerList:e.getIn(["recommend","bannerList"]),recommendList:e.getIn(["recommend","recommendList"]),enterLoading:e.getIn(["recommend","enterLoading"]),songsCount:e.getIn(["player","playList"]).size})),(e=>({getBannerDataDispatch(){e(c.a())},getRecommendListDataDispatch(){e(c.b())}})))(n.a.memo((function(e){const{bannerList:t,recommendList:a,enterLoading:o,songsCount:l}=e,{getBannerDataDispatch:c,getRecommendListDataDispatch:d}=e;Object(i.useEffect)((()=>{t.size||c(),a.size||d(),Object(L.a)().then((t=>{!1!==t.bindings[0].expired&&(alert("login time has expired!"),e.history.push("/"))})).catch((e=>{}))}),[]);const h=t?t.toJS():[],g=a?a.toJS():[];return n.a.createElement(N,{play:l,style:{marginTop:"4px"}},n.a.createElement(m.a,{onScroll:r.forceCheck},n.a.createElement("div",null,n.a.createElement(b,{bannerList:h}),n.a.createElement(y,{recommendList:g}))),o?n.a.createElement(p.a,null):null,Object(s.a)(e.route.routes))})))}}]);