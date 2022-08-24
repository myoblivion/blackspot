import React, { useState, useEffect } from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import { mockAPI } from "./mockApi/mockApi";
import PostsLinks from "./postLinks";
import WysiwygDataPersistence from "./PostEditor/wysiwygdatapersistence";
// Components
import NavbarComponent from "../components/navbar";
const LazyHomeComponent = React.lazy(() => import("./home"));
const LazyAboutComponent = React.lazy(() => import("./about"));
const LazyDirectionComponent = React.lazy(() => import("./direction"));
const LazyJobComponent = React.lazy(() => import("./career"));
const LazyNewsComponent = React.lazy(() => import("./news"));
const LazyScionComponent = React.lazy(() => import("./scion"));
const LazyGoGoWorldComponent = React.lazy(() => import("./gogoworld"));
const LazyGoGoChainComponent = React.lazy(() => import("./gogochain"));
const LazyGoGoRacingComponent = React.lazy(() => import("./gogoracing"));
import TestComponent from "./jofpasjofwoepq";
import LoadingComponent from "./loading";
import PrivacyComponent from "./privacy";
import ScionNewsComponent from "./scionnews";
import GogoWorldNewsComponent from "./gogoworldnews";
import GogoChainNewsComponent from "./gogochainnews";
import GogoRacingNewsComponent from "./gogoracingnews";
import TermsAndConditions from "./terms-of-use";
import GoGoRacingGuide from "./gogoracing-guide";
import GogoracingGuidelist from "./ggr-guide-list";
import GogoRacingAccountLinking from "./ggr-account-linking";
import GogoRacingUpdateList from "./ggr-update-list";
import GogoRacingUpdates from "./ggr-updates";
import GogoRacingPatch from "./ggr-patch2";
import GogoRacingPatchs from "./ggr-patch3";
import GogoRacingPatch4 from "./ggr-patch4";
import GogoRacingPurchaseGuide from "./ggr-purchase-guide";
import GogoRacingSearch from "./ggrsearch";
import PostPage from "./posts";
import GogoRacingAnnouncementList from "./ggr-announcement-list";
import NotFoundComponent from "./notfound";
import { getLCP, getFID, getCLS } from "web-vitals";
import AdminComponent from "./admin";
import AnnouncementPage from "./announcements";
import GameGuidePage from "./gameguide";
import NewsPageComponent from "./newspage";
import GGRnews from "./ggr-news";
import GrandPixGuide from "./grand-pix-guide";
import EditPost from "./editPost";
import { useParams } from "react-router-dom";

// styles
getCLS(console.log);
getFID(console.log);
getLCP(console.log);
import "./scss/index.scss";

const Appcomponent = ({}) => {
  const [loading, setLoading] = useState(false);

  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);
  const [posts, setPosts] = useState();
  const [announcements, setAnnouncements] = useState();
  const [gameguide, setGameGuide] = useState();
  const [newspage, setNewsPage] = useState();

  useEffect(() => {
    const request = {
      method: "get",
    };
    mockAPI(request).then((response) => {
      console.log(response);
      setPosts(response.data.posts);
      setGameGuide(response.data.gameguide);
      setAnnouncements(response.data.announcements);
      setNewsPage(response.data.newspage);
      window.addEventListener("DOMContentLoaded", () => renderPosts);
    });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className={"main " + newClass}>
          <NavbarComponent currentRoute={newClass} />
          <Routes>
            <Route path={"*"} element={<NotFoundComponent />} />
            <Route
              exact
              path={"/"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyHomeComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/about"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyAboutComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/direction"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyDirectionComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/career"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyJobComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/news"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyNewsComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/scion"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyScionComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/gogoworld"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyGoGoWorldComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/gogochain"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyGoGoChainComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/gogoracing"}
              element={
                <React.Suspense fallback="loading....">
                  <LazyGoGoRacingComponent />
                </React.Suspense>
              }
            />
            <Route path="/privacy" element={<PrivacyComponent />} />
            <Route path="/scionnews" element={<ScionNewsComponent />} />
            <Route path="/gogoworldnews" element={<GogoWorldNewsComponent />} />
            <Route path="/gogochainnews" element={<GogoChainNewsComponent />} />
            <Route
              path="/gogoracingnews"
              element={<GogoRacingNewsComponent />}
            />
            <Route path="/terms-of-use" element={<TermsAndConditions />} />
            <Route path="/gogoracing-guide" element={<GoGoRacingGuide />} />
            <Route
              path="/ggr-update-list/*"
              element={<GogoRacingUpdateList posts={posts} />}
            />
            <Route path="/ggr-updates" element={<GogoRacingUpdates />} />
            <Route path="/ggr-patch2" element={<GogoRacingPatch />} />
            <Route
              path="/ggr-guide-list/*"
              element={<GogoracingGuidelist gameguide={gameguide} />}
            />
            <Route
              path="/ggr-account-linking"
              element={<GogoRacingAccountLinking />}
            />
            <Route path="/ggr-patch3" element={<GogoRacingPatchs />} />
            <Route path="/ggr-patch4" element={<GogoRacingPatch4 />} />
            <Route
              path="/ggr-purchase-guide"
              element={<GogoRacingPurchaseGuide />}
            />
            <Route path="/ggrsearch" element={<GogoRacingSearch />} />
            <Route
              path="/ggr-announcement-list/*"
              element={
                <GogoRacingAnnouncementList announcements={announcements} />
              }
            />
            {/*  */}
            <Route path="/posts/*" element={<PostPage posts={posts} />} />
            <Route path="/admin" element={<AdminComponent />} />
            <Route
              path="/announcements/*"
              element={<AnnouncementPage announcements={announcements} />}
            />
            <Route path="/grand-pix-guide" element={<GrandPixGuide />} />
            <Route
              path="/gameguide/*"
              element={<GameGuidePage gameguide={gameguide} />}
            />
            <Route
              path="/newspage/*"
              element={<NewsPageComponent newspage={newspage} />}
            />
            <Route
              path="/ggr-news/*"
              element={<GGRnews newspage={newspage} />}
            />
            <Route path="/editpost/:postID" exact element={<EditPost />} />
            <Route path="/jofpasjofwoepq" exact element={<TestComponent />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default Appcomponent;
