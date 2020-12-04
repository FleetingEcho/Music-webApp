(this.webpackJsonpcopy11=this.webpackJsonpcopy11||[]).push([[13],{374:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(107),o=a(328),r=a(329),m=a(114),s=a(45),c=a(4);c.b.div`
  position: fixed;
  top: 90px;
  bottom: ${e=>e.play>0?"60px":0};
  width: 100%;
`;const d=c.b.div`
  width: 100%;
  margin-top:20px;
  ${""}
`,g=c.b.div`
${""}
 font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
 font-size:13px;
 margin-bottom:20px;
 .videoInfo{
   ${""}
   
 }
`,f=(c.b.div`
  width: 100%;
  background-color:skyblue;

`,c.b.div`
  width: 100%;
  .commentTitle{
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    margin-bottom:10px;
    font-size:12px;
  }
  ${""}

`),p=c.b.div`
  font-size:13px;
  width: 100%;
  ${""}
  border-radius:20px;
  overflow:hidden;
  margin-bottom:20px !important;
  div{
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    margin-bottom:10px;
  }
  .userInfo{
    margin-top:10px;
    margin-left:10px;
    float:left;
    line-height:40px;
    heigh:40px;
    width:15%;
    ${""}
  }
  .userName{
    color:#0a6fab;
  }
  .time{
    font-style:italic
  }
  .goRight{
    line-height:17px ;
    padding-top:10px;
    padding-right:10px;
    float:right;
border-bottom: 1px solid #e6eaea !important;
    width:75%
  }
  img{
    height:40px;
    width:40px;
    border-radius:50%;
  }
`;c.b.div`
  width: 100%;
  height:50px;
  img{
    float:left;
    width:60px;
    height:60px;
    border-radius:50%;
    margin-left:10px;
  }
  div{
    color:#0a6fab;
  height:50px;
  line-height:50px;
    float:left;
  display:border-box;
    margin-left: 20px;
    font-size:16px;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  }

`;t.default=Object(s.b)((e=>({mvUrl:e.getIn(["mvPlayer","mvUrl"]),videoComments:e.getIn(["mvPlayer","videoComments"]),hotComments:e.getIn(["mvPlayer","hotComments"]),mvInfo:e.getIn(["mvPlayer","mvInfo"]).toJS(),artistInfo:e.getIn(["mvPlayer","artistInfo"]).toJS(),enterLoading:e.getIn(["mvPlayer","enterLoading"])})),(e=>({getMvUrlRequest(t){e(Object(m.f)(t)),e(Object(m.a)(!0)),e(Object(m.b)(!0))},getMvInfoRequest(t){e(Object(m.e)(t))},getRelatedMvRequest(t){e(Object(m.g)(t))},getMvCommentUrlRequest(t){e(Object(m.d)(t)),e(Object(m.b)(!0))},getArtistInfoRequest(t){e(Object(m.c)(t))}})))(i.a.memo((function(e){let{location:t}=e.history;const a=t.state.mvId,{getMvUrlRequest:m,getMvInfoRequest:s,getRelatedMvRequest:c,getMvCommentUrlRequest:v,getArtistInfoRequest:h}=e,{mvUrl:u,mvInfo:b,artistInfo:x,videoComments:E,hotComments:y,enterLoading:I}=e;return Object(n.useEffect)((()=>{m(a),s(a)}),[m,s,a]),Object(n.useEffect)((()=>{v(a)}),[a]),i.a.createElement(f,null,I?i.a.createElement(l.a,null):i.a.createElement("div",null,i.a.createElement(g,null,i.a.createElement("video",{style:{width:"100%",height:"200px"},controls:"controls",src:u}),i.a.createElement("div",{className:"videoInfo"},i.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px",marginTop:"5px"}},i.a.createElement("span",{style:{color:"#0a6fab",fontSize:"16px"}},b.name)),i.a.createElement("span",{style:{marginLeft:"10px"}},"Artist:"," ",i.a.createElement("span",{style:{color:"#0a6fab"}},b.artistName)," "),i.a.createElement("span",{style:{float:"right",fontStyle:"italic",marginRight:"10px"}},b.publishTime))),i.a.createElement("div",{className:"commentTitle",style:{marginLeft:"10px"}},"\u70ed\u95e8\u8bc4\u8bba: ",y.length," "),y===[]?null:y.map(((e,t,a)=>i.a.createElement(d,{key:e.commentId+t},i.a.createElement(p,null,i.a.createElement("div",{className:"userInfo"},i.a.createElement("img",{src:e.user.avatarUrl,alt:""})),i.a.createElement("div",{className:"goRight"},i.a.createElement("div",{className:"userName"},e.user.nickname," "),i.a.createElement("div",{className:"time"},new Date(e.time).toString().substr(11,10)," ",i.a.createElement("span",{style:{float:"right"}},e.likedCount,i.a.createElement(o.a,{style:{marginLeft:"4px",marginBottom:"2px"},icon:r.a}))),i.a.createElement("div",{className:"content"},e.content," ")))))),i.a.createElement("div",{className:"commentTitle",style:{marginLeft:"10px"}},"\u6700\u65b0\u8bc4\u8bba: ",E.length),E===[]?null:E.map(((e,t,a)=>i.a.createElement(d,{key:e.commentId+t},i.a.createElement(p,null,i.a.createElement("div",{className:"userInfo"},i.a.createElement("img",{src:e.user.avatarUrl,alt:""})),i.a.createElement("div",{className:"goRight"},i.a.createElement("div",null,e.user.nickname," "),i.a.createElement("div",{className:"time"},new Date(e.time).toString().substr(11,10)," ",i.a.createElement("span",{style:{float:"right"}},i.a.createElement(o.a,{icon:r.a}),e.likedCount)),i.a.createElement("div",null,e.content," "))))))))})))}}]);