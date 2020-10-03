(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[14],{370:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(45),i=a(63),r=a(7),s=a(155),c=a(107),p=a(73),d=a(4),u=a(2);const m=d.b.div`
  position: fixed;
  top: 90px;
  bottom: ${e=>e.play>0?"60px":0};
  width: 100%;
  .offical,.global {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: ${u.a["font-size-m"]};
    color: ${u.a["font-color-desc"]};
  }
`,g=d.b.ul`
  margin-top: 10px;
  padding: 0 5px;
  display: ${e=>e.globalRank?"flex":""};
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  background: ${u.a["background-color"]};
  &::after{
    content:"";
    display:block;
    width: 32vw;
  }
`,b=d.b.li`
  display: ${e=>e.tracks.length?"flex":""};
  padding: 3px 0;
  border-bottom: 1px solid ${u.a["border-color"]};
  .img_wrapper{
    width:  ${e=>e.tracks.length?"27vw":"32vw"};
    height: ${e=>e.tracks.length?"27vw":"32vw"};
    border-radius: 3px;
    position: relative;
    .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
    }
    img{
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
    .update_frequecy{
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${u.a["font-size-ss"]};
      color: ${u.a["font-color-light"]};
    }
  }
`,f=d.b.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 10px;
  >li{
    font-size: ${u.a["font-size-s"]};
    color: grey;
    max-width: 64vw;
    ${u.a.noWrap}
  }
`;t.default=Object(o.b)((e=>({rankList:e.getIn(["rank","rankList"]).toJS(),loading:e.getIn(["rank","loading"]),songsCount:e.getIn(["player","playList"]).size})),(e=>({getRankListDataDispatch(){e(Object(s.a)())}})))(n.a.memo((function(e){const{songsCount:t,rankList:a,loading:o}=e,{getRankListDataDispatch:s}=e;Object(l.useEffect)((()=>{s()}),[]);let d=Object(r.d)(a),u=a.slice(0,d),h=a.slice(d);const x=(t,a)=>n.a.createElement(g,{globalRank:a},t.map(((t,a)=>n.a.createElement(b,{key:a,tracks:t.tracks,onClick:()=>{return a=t,void e.history.push({pathname:"/album",state:{albumId:a.id}});var a}},n.a.createElement("div",{className:"img_wrapper"},n.a.createElement("img",{src:t.coverImgUrl,alt:""}),n.a.createElement("div",{className:"decorate"}),n.a.createElement("span",{className:"update_frequecy"},t.updateFrequency)),k(t.tracks))))),k=e=>e.length?n.a.createElement(f,null,e.map(((e,t)=>n.a.createElement("li",{key:t},t+1,". ",e.first," - ",e.second)))):null;let y=o?{display:"none"}:{display:""};return n.a.createElement(m,{play:t},n.a.createElement(p.a,null,n.a.createElement("div",null,n.a.createElement("h1",{className:"offical",style:y}," Official List "),x(u),n.a.createElement("h1",{className:"global",style:y}," Global List "),x(h,!0),o?n.a.createElement(c.a,null):null)),Object(i.a)(e.route.routes))})))}}]);