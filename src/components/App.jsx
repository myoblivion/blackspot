import React, { useState, useEffect } from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import { mockAPI } from "./mockApi/mockApi";
import PostsLinks from "./postLinks";
import WysiwygDataPersistence from "./PostEditor/wysiwygdatapersistence";
// Components
import NavbarComponent from "../components/navbar";
import HomeComponent from "../components/home";
import AboutComponent from "../components/about";
import DirectionComponent from "./direction";
import JobComponent from "./job";
import NewsComponent from "./news";
import ScionComponent from "./scion";
import GoGoWorldComponent from "./gogoworld";
import GoGoChainComponent from "./gogochain";
import GoGoRacingComponent from "./gogoracing";
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
import SpinTheWheel from "./spin-the-wheel";
import { getLCP, getFID, getCLS } from "web-vitals";
import AdminComponent from "./admin";
import AnnouncementPage from "./announcements";
import GameGuidePage from "./gameguide";
import Post from "./test";
import NewsPageComponent from "./newspage";
import GGRnews from "./ggr-news";
import GrandPixGuide from "./grand-pix-guide";
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
            <Route exact path={"/"} element={<HomeComponent />} />
            <Route path={"/about"} element={<AboutComponent />} />
            <Route path={"/direction"} element={<DirectionComponent />} />
            <Route path="/job" element={<JobComponent />} />
            <Route path="/news" element={<NewsComponent />} />
            <Route path="/scion" element={<ScionComponent />} />
            <Route path="/gogoworld" element={<GoGoWorldComponent />} />
            <Route path="/gogochain" element={<GoGoChainComponent />} />
            <Route path="/gogoracing" element={<GoGoRacingComponent />} />
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
            <Route path="/spin-the-wheel" element={<SpinTheWheel />} />
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
          </Routes>
        </div>
      )}
    </>
  );
};

export default Appcomponent;
