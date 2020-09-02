import React, { lazy, Suspense } from 'react';
// import { Redirect } from "react-router-dom";
// import  PlayerComponent from './../application/MvPlayer/'
import Login from '../components/Login'
import Home from '../application/Home';
const RecommendComponent = lazy(() => import("../application/Recommend/"));
const SingersComponent = lazy(() => import("../application/Singers/"));
const RankComponent = lazy(() => import("../application/Rank/"));
const AlbumComponent = lazy(() => import("../application/Album/"));
const SingerComponent = lazy(() => import("./../application/Singer/"));
const SearchComponent = lazy(() => import("./../application/Search/"));
const LoginComponent=lazy(()=>import("./../components/Login/"));
const VideoComponent=lazy(()=>import("./../application/MV/"));
const PlayerComponent=lazy(()=>import("./../application/MvPlayer/"));
const NotFoundComponent=lazy(()=>import("./../components/404"));
const SuspenseComponent = Component => props => {
  // console.log(props);
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
      
    </Suspense>
  )
}
// export default [
const RouterConfig=[
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        component: SuspenseComponent(LoginComponent),

        },
      {
        path: "/login",
        exact: true,
        component:Login
      },
      {
      path: "/recommend",
      component: SuspenseComponent(RecommendComponent),
    },
    {
      path: "/singers",
      component: SuspenseComponent(SingersComponent),
    },
    {
      path: "/artist",
      component: SuspenseComponent(SingerComponent),
      key: "artist",
    },
    {
      path: "/rank",
      component: SuspenseComponent(RankComponent),
      key: "rank",
    },
    {
      path: "/mv",
      component: SuspenseComponent(VideoComponent),
      key: "video",
    },
    {
      path: "/play",
      key: "mvPlayer",
      component: SuspenseComponent(PlayerComponent),
      // component: PlayerComponent,
    },
    {
      path: "/album",
      key: "album",
      component: SuspenseComponent(AlbumComponent)
    },
    {
      path: "/search",
      key: "search",
      component: SuspenseComponent(SearchComponent)
    },
    {
      path: "*",
      key: "NotFound",
      component: SuspenseComponent(NotFoundComponent)
    }
  ]
  }
]

export default RouterConfig;