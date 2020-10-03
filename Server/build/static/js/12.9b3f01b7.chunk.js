(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[12],{373:function(e,t,a){"use strict";a.r(t);a(342);var i=a(354),n=a.n(i),l=(a(344),a(347)),s=a.n(l),o=a(0),r=a.n(o),c=a(321),m=a(73),p=a(328),g=a(329),u=a(117),b=a(45),d=a(4);const f=d.b.div`
  position: fixed;
  top: 90px;
  bottom: ${e=>e.play>0?"60px":0};
  width: 100%;
  margin-top:3.5px;
  img{
    border-radius:10px;
    height:100px;
  }
`,h=d.b.div`
width:100%;
height:50px;
text-align:center;
border:0px solid #fff;
li{
  color:'#123456';
  float:left;
  margin-left:60px;
  margin-bottom:20px;
  border:2px solid skyblue !important;
  height:25px;
  padding: 0 10px;
  line-height:25px;
  border-radius:20px;
  font-size:16px;
  background-color:skyblue;
  &:hover,&:active,&:focus{
          &{
            outline: none;
          }
          &:before{
            background: red;
          }
        }
}

`,v=d.b.div`
 font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
 font-size:14px;
 line-height:20px;
 margin-bottom:10px;
 .imgInfo{
  height:100px;
   float:right;
   width:60%;
   border-bottom: 1px solid #e6eaea !important;
   div{
  ${""}
   }
 }

`,x=d.b.div`
width:100%;
height:93px;
`;var y=a(107),L=a(63),E=a(346),k=a.n(E),j=a(7);const{TabPane:O}=s.a;let I=[],M=[],S=1,R=0,T=!1,w=0,C=1,q=1,A=!1,J=!1;t.default=Object(b.b)((e=>({mvList:e.getIn(["mvList","mvList"]).toJS(),allMvList:e.getIn(["mvList","allMvList"]).toJS(),selfMvList:e.getIn(["mvList","selfMvList"]).toJS(),enterLoading:e.getIn(["mvList","enterLoading"]),songsCount:e.getIn(["player","playList"]).size})),(e=>({getMvListRequest(){e(Object(u.c)()),e(Object(u.a)(!0))},getAllMvListRequest(t,a){e(Object(u.b)(t,a)),e(Object(u.a)(!0))},getSelfMvListRequest(t){e(Object(u.d)(t)),e(Object(u.a)(!0))}})))(r.a.memo((function(e){const[t,a]=Object(o.useState)("\u6700\u65b0"),[i,l]=Object(o.useState)(0),[u,b]=Object(o.useState)([]),{getMvListRequest:d,getSelfMvListRequest:E,getAllMvListRequest:z}=e,[N,$]=Object(o.useState)(0),{mvList:B,songsCount:H,enterLoading:K}=e;if(0!==B.length&&(I=k()(B)),0===N&&0!==I.length){b(B),$(2)}Object(o.useEffect)((()=>{if("\u6700\u65b0"===t)d(),I=[],M=[],C=0,w=0,b([]),setTimeout((()=>{b(I)}),800);else if("\u5168\u90e8"===t)b([]),M=[],I=[],w=0,q=1,z("\u5168\u90e8","0"),setTimeout((()=>{b(I)}),800);else{if("\u7f51\u6613\u4e91"!==t)return;b([]),M=[],I=[],C=0,q=0,E("0"),setTimeout((()=>{b(I)}),800)}}),[t]);const P=(t,a)=>{e.history.push({pathname:"/play",state:{mvId:t,artistId:a}})};return r.a.createElement(f,{play:H},K&&0===u.length?r.a.createElement(y.a,null):r.a.createElement(m.a,{bounceBottom:J,onScroll:c.forceCheck,pullUp:()=>{R++,(()=>{if(S=1===R)"\u6700\u65b0"===t?(I=[],J=!0,A=!1,M=[]):("\u5168\u90e8"===t?(M.push(...I),I=[],C+=1,z("\u5168\u90e8",10*C)):"\u7f51\u6613\u4e91"===t&&(M.push(...I),I=[],w+=1,E(10*w)),setTimeout((()=>{R=0,M.push(...I),b(M),A=!1,T=!1}),1e3))})()}},r.a.createElement("div",null,r.a.createElement("div",{key:e.location.key},r.a.createElement(h,null,r.a.createElement(s.a,{onTabClick:e=>a(e),defaultActiveKey:t,centered:!0},r.a.createElement(O,{tab:"\u6700\u65b0",key:"\u6700\u65b0"}),r.a.createElement(O,{tab:"\u7f51\u6613\u4e91",key:"\u7f51\u6613\u4e91"}),r.a.createElement(O,{tab:"\u5168\u90e8",key:"\u5168\u90e8"})))),0===u.length?r.a.createElement(n.a,{style:{marginLeft:"50%",marginTop:"40%"}}):u.map(((e,t,a)=>r.a.createElement(v,{onClick:()=>P(e.id,e.artistId),key:t},r.a.createElement(x,null,r.a.createElement("img",{src:e.cover,width:"40%",alt:"music",onClick:()=>P(e.id,e.artistId)}),r.a.createElement("div",{className:"imgInfo"},r.a.createElement("div",{style:{marginLeft:"10px",color:"#0a6fab"}},r.a.createElement("span",{style:{marginRight:"10px",color:"#0a6fab"}},e.name," ")),r.a.createElement("div",null,r.a.createElement("span",{style:{marginLeft:"10px"}},"Artist:",r.a.createElement("span",{style:{color:"#0a6fab"}},e.artistName," "))),r.a.createElement("div",{style:{marginLeft:"10px",marginTop:"8px"}},r.a.createElement(p.a,{icon:g.b,style:{marginRight:"5px"}}),Object(j.h)(e.playCount))))))),K?r.a.createElement(n.a,{style:{marginLeft:"50%"}}):null)),Object(L.a)(e.route.routes))})))}}]);