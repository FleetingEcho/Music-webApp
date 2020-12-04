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
`;var E=a(107),y=a(68),L=a(346),k=a.n(L),j=a(7);const{TabPane:O}=s.a;let I=[],M=[],w=0,S=!1,R=0,T=1,C=1,q=!1,A=!1;t.default=Object(b.b)((e=>({mvList:e.getIn(["mvList","mvList"]).toJS(),allMvList:e.getIn(["mvList","allMvList"]).toJS(),selfMvList:e.getIn(["mvList","selfMvList"]).toJS(),enterLoading:e.getIn(["mvList","enterLoading"]),songsCount:e.getIn(["player","playList"]).size})),(e=>({getMvListRequest(){e(Object(u.c)()),e(Object(u.a)(!0))},getAllMvListRequest(t,a){e(Object(u.b)(t,a)),e(Object(u.a)(!0))},getSelfMvListRequest(t){e(Object(u.d)(t)),e(Object(u.a)(!0))}})))(r.a.memo((function(e){const[t,a]=Object(o.useState)("\u6700\u65b0"),[i,l]=Object(o.useState)(0),[u,b]=Object(o.useState)([]),{getMvListRequest:d,getSelfMvListRequest:L,getAllMvListRequest:J}=e,[z,D]=Object(o.useState)(0),{mvList:N,songsCount:$,enterLoading:B}=e;if(0!==N.length&&(I=k()(N)),0===z&&0!==I.length){b(N),D(2)}Object(o.useEffect)((()=>{if("\u6700\u65b0"===t)d(),I=[],M=[],T=0,R=0,b([]),setTimeout((()=>{b(I)}),800);else if("\u5168\u90e8"===t)b([]),M=[],I=[],R=0,C=1,J("\u5168\u90e8","0"),setTimeout((()=>{b(I)}),800);else{if("\u7f51\u6613\u4e91"!==t)return;b([]),M=[],I=[],T=0,C=0,L("0"),setTimeout((()=>{b(I)}),800)}}),[t]);const H=(t,a)=>{e.history.push({pathname:"/play",state:{mvId:t,artistId:a}})},K=()=>{if("\u6700\u65b0"===t)return I=[],A=!0,q=!1,void(M=[]);"\u5168\u90e8"===t?(M.push(...I),I=[],T+=1,J("\u5168\u90e8",10*T)):"\u7f51\u6613\u4e91"===t&&(M.push(...I),I=[],R+=1,L(10*R)),setTimeout((()=>{w=0,M.push(...I),b(M),q=!1,S=!1}),1e3)};return r.a.createElement(f,{play:$},B&&0===u.length?r.a.createElement(E.a,null):r.a.createElement(m.a,{bounceBottom:A,onScroll:Object(c.forceCheck)(),pullUp:()=>{var e,t,a;t=100,(e=K).lastExec?Date.now()-e.lastExec>t&&(e.lastExec=Date.now(),e.call(a)):(e.lastExec=Date.now(),e.call(a))}},r.a.createElement("div",null,r.a.createElement("div",{key:e.location.key},r.a.createElement(h,null,r.a.createElement(s.a,{onTabClick:e=>a(e),defaultActiveKey:t,centered:!0},r.a.createElement(O,{tab:"\u6700\u65b0",key:"\u6700\u65b0"}),r.a.createElement(O,{tab:"\u5168\u90e8",key:"\u5168\u90e8"}),r.a.createElement(O,{tab:"\u7f51\u6613\u4e91",key:"\u7f51\u6613\u4e91"})))),0===u.length?r.a.createElement(n.a,{style:{marginLeft:"50%",marginTop:"40%"}}):u.map(((e,t,a)=>r.a.createElement(v,{onClick:()=>H(e.id,e.artistId),key:t},r.a.createElement(x,null,r.a.createElement("img",{src:e.cover,width:"40%",alt:"music",onClick:()=>H(e.id,e.artistId)}),r.a.createElement("div",{className:"imgInfo"},r.a.createElement("div",{style:{marginLeft:"10px",color:"#0a6fab"}},r.a.createElement("span",{style:{marginRight:"10px",color:"#0a6fab"}},e.name," ")),r.a.createElement("div",null,r.a.createElement("span",{style:{marginLeft:"10px"}},"Artist:",r.a.createElement("span",{style:{color:"#0a6fab"}},e.artistName," "))),r.a.createElement("div",{style:{marginLeft:"10px",marginTop:"8px"}},r.a.createElement(p.a,{icon:g.b,style:{marginRight:"5px"}}),Object(j.h)(e.playCount))))))),B?r.a.createElement(n.a,{style:{marginLeft:"50%"}}):null)),Object(y.a)(e.route.routes))})))}}]);