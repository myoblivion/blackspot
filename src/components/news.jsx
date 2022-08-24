// import React, { useEffect } from "react";
// import { HashLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
// import GogoRacing from "../images/icons/Icon_IOS_192.png";
// import GogoWorld from "../images/gogow.jpg";
// import ScionFist from "../images/icons/scionn.png";
// import GogoChain from "../images/icons/ggchain.png";
// // banners

// const NewsComponent = ({ props, ref, currentRoute }) => {
//   // Title
//   useEffect(() => {
//     document.title = "Black Spot Studio | News & Announcement";
//   }, []);
//   return (
//     <div className="news wrapper">
//       <div className="news-wrapper">
//         <h1>News & Announcements</h1>
//         <div className="listn-wrapper">
//           <ul className="news-list">
//             <li>
//               <div className="gleft"></div>
//               <div className="gright">
//                 <h3>Gogo Racing</h3>
//                 <p>See latest news & updates</p>
//                 <Link
//                   to="/gogoracingnews"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </li>
//             <li>
//               <div className="gleft"></div>
//               <div className="gright">
//                 <h3>Scion Fist</h3>
//                 <p>See latest news & updates</p>
//                 <Link
//                   to="/scionnews"
//                   {...props}
//                   ref={ref}
//                   onClick={() => window.scrollTo(0, 0)}
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </li>
//             <li>
//               <div className="gleft"></div>
//               <div className="gright">
//                 <h3>GogoWorld</h3>
//                 <p>See latest news & updates</p>
//                 <span>Read More</span>
//               </div>
//             </li>
//             <li>
//               <div className="gleft"></div>
//               <div className="gright">
//                 <h3>Gogo Chain</h3>
//                 <p>See latest news & updates</p>
//                 <span>Read More</span>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsComponent;

import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// banners
import Banner1 from "../images/banner4l.png";
import Banner2 from "../images/gogoraces.jpg";
import Banner3 from "../images/gogoworlds.jpg";
import Banner4 from "../images/game3.jpg";
import scionchar from "../images/characters/ch11.png";
import scionlogo from "../images/scionlogo.png";
import ggricon from "../images/icons/gogoracing.png";
import ggrcharacter from "../images/edit/ggrc-2.png";
import gogoworldicon from "../images/icons/gogoworld.png";
import gogoworldchar from "../images/characters/Jjiljjil.png";
import gogochainicon from "../images/icons/gogoc.png";
import gogochainchar from "../images/ggr-characters/6-hekhek-costume-1.png";
import {
  FaUserCircle,
  FaSearch,
  FaRegArrowAltCircleUp,
  FaWindowClose,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import icono from "../images/icons/logo.png";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const NewsComponent = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | News & Announcement";
  }, []);
  return (
    <div className="news wrapper">
      <div className="news-wrapper">
        <div className="news-contents">
          <div className="header">
            <h1>News & Announcements</h1>
          </div>
          <div className="news-cards">
            <div className="news-card1">
              <div className="left">
                <img src={ggrcharacter} alt="" />
              </div>
              <div className="right">
                <img src={ggricon} alt="" />
                <h3>See latest news, announcements, patch and guides.</h3>
                <Link
                  to="/gogoracingnews"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="news-card2">
              <div className="left">
                <img src={scionchar} alt="" />
              </div>
              <div className="right">
                <img src={scionlogo} alt="" />
                <h3>See latest news, announcements, patch and guides.</h3>
                <Link
                  to="/scionnews"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="news-card3">
              <div className="left">
                <img src={gogoworldchar} alt="" />
              </div>
              <div className="right">
                <img src={gogoworldicon} alt="" />
                <h3>See latest news, announcements, patch and guides.</h3>
                <p>Read more</p>
              </div>
            </div>
            <div className="news-card4">
              <div className="left">
                <img src={gogochainchar} alt="" />
              </div>
              <div className="right">
                <img src={gogochainicon} alt="" />
                <h3>See latest news, announcements, patch and guides.</h3>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;
