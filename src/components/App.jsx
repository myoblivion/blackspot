import React, { useState, useEffect } from "react";
import { Route, useLocation, Routes, Link } from "react-router-dom";
import { mockAPI } from "./mockApi/mockApi";
// Components
import NavbarComponent from "../components/navbar";
import HomeComponent from "./home";
import AboutComponent from "./about";
import DirectionComponent from "./direction";
import JobComponent from "./career";
import NewsComponent from "./news";
import ScionComponent from "./scion";
import GoGoWorldComponent from "./gogoworld";
import GoGoChainComponent from "./gogochain";
import GoGoRacingComponent from "./gogoracing";
import SharkHoldemComponent from "./sharkholdem";
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
import AdminComponent from "./bssphadmins";
import AnnouncementPage from "./announcements";
import GameGuidePage from "./gameguide";
import NewsPageComponent from "./newspage";
import GGRnews from "./ggr-news";
import GrandPixGuide from "./grand-pix-guide";
import EditPost from "./editPost";
import EditAnnouncement from "./editAnnouncement";
import GogoSquadEvent from "./gogosquadevent";
import CookieConsent from "react-cookie-consent";
// styles
import "./scss/index.scss";

const Appcomponent = ({}) => {
  const [loading, setLoading] = useState(false);

  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const [posts, setPosts] = useState();
  const [announcements, setAnnouncements] = useState();
  const [gameguide, setGameGuide] = useState();
  const [newspage, setNewsPage] = useState();

  useEffect(() => {
    const request = {
      method: "get",
    };
    mockAPI(request).then((response) => {
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
                  <HomeComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/about"}
              element={
                <React.Suspense fallback="loading....">
                  <AboutComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/direction"}
              element={
                <React.Suspense fallback="loading....">
                  <DirectionComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/career"}
              element={
                <React.Suspense fallback="loading....">
                  <JobComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/news"}
              element={
                <React.Suspense fallback="loading....">
                  <NewsComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/scion"}
              element={
                <React.Suspense fallback="loading....">
                  <ScionComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/gogoworld"}
              element={
                <React.Suspense fallback="loading....">
                  <GoGoWorldComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/gogochain"}
              element={
                <React.Suspense fallback="loading....">
                  <GoGoChainComponent />
                </React.Suspense>
              }
            />
            <Route
              exact
              path={"/gogoracing"}
              element={
                <React.Suspense fallback="loading....">
                  <GoGoRacingComponent />
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
            <Route path="/bssphadmins" element={<AdminComponent />} />
            <Route
              path="/announcements/*"
              element={<AnnouncementPage announcements={announcements} />}
            />
            <Route path="/grand-pix-guide" element={<GrandPixGuide />} />
            <Route path="/gogosquadevent" element={<GogoSquadEvent />} />
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
            <Route
              path="/editAnnouncement/:announcementID"
              exact
              element={<EditAnnouncement />}
            />
            <Route path="/jofpasjofwoepq" exact element={<TestComponent />} />
            <Route path="/sharkholdem/*" element={<SharkHoldemComponent />} />
          </Routes>
          <CookieConsent
            style={{ background: "#080808", color: "#525252" }}
            location="bottom"
            enableDeclineButton
          >
            We use Cookies to make our site work, customize content and your
            experience, provide social media features and measure site usage.{" "}
            <br />
            You can accept or decline by clicking on the buttons below.
            <br />
            For more information please visit our{" "}
            <Link to="/privacy">Privacy & Policy</Link>
          </CookieConsent>
        </div>
      )}
    </>
  );
};

export default Appcomponent;
