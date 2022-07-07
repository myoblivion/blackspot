import React from "react";
import { Link, hash } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import {
  FaUserCircle,
  FaSearch,
  FaWindowClose,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import backgroundimg from "../images/gogoracingbackground/coolbackgroundboiiii.png";
import { HashLink } from "react-router-hash-link";
import img1 from "../images/ggrguide/1.png";
import img2 from "../images/ggrguide/4.png";
import img3 from "../images/ggrguide/5.png";
import img4 from "../images/ggrguide/2.png";
import img5 from "../images/ggrguide/6.png";
import img6 from "../images/ggrguide/7.png";
import img7 from "../images/ggrguide/3.png";
const GrandPixGuide = ({ props, ref }) => {
  return (
    <div className="grandpix wrapper">
      <div className="ggr-purchase-contents">
        <div className="ggr-pcrecontents">
          <div className="ggr-header">
            <div className="ggr-top">
              <div className="ggr-left">
                <Link
                  to="/ggr-guide-list"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <IoIosArrowDropleftCircle />
                </Link>
                <h2>
                  <FaUserCircle /> User
                </h2>
              </div>
              <div className="ggr-right">
                <Link
                  to="/ggrsearch"
                  {...props}
                  ref={ref}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <FaSearch />
                </Link>
              </div>
            </div>
            <img src={backgroundimg} alt="" />
          </div>
          <div className="ggr-purchases">
            <h1>Grand Pix Game Guide</h1>
            <h3>UI Guide</h3>
            <img src={img1} alt="" />
            <p>
              After pressing the Grand Prix button on the lower right of the
              screen, you will be redirected to the Grand Prix menu.
            </p>
            <h3>Grand Pix Main Menu</h3>
            <img src={img2} alt="" />
            <ul>
              <li>
                <h4>1. Admission fee</h4>
              </li>
              <li>
                <ul>
                  <li>
                    - 1 Grand Prix ticket is required in order to participate on
                    this mode.
                  </li>
                </ul>
              </li>
              <li>
                <h4>2. Rewards</h4>
              </li>
              <li>
                {" "}
                <ul>
                  <li>
                    - Podium finishers will be rewarded by specific amount of
                    Diamonds.
                  </li>
                </ul>
              </li>
            </ul>
            <img src={img3} alt="" />
            <ul>
              <li>
                <h4>3. Track Info</h4>
              </li>
              <ul>
                <li>
                  <ul>
                    <li>
                      {" "}
                      - This shows the track that will be used for the Grand
                      Prix.{" "}
                    </li>
                    <li>
                      - The create can select a specific track or leave it
                      randomly.
                    </li>
                  </ul>
                </li>
              </ul>

              <li>
                <h4>4. Quick Join </h4>
              </li>
              <li>
                <ul>
                  <li>
                    - Participating players can easily join a Grand Prix match
                    by pressing this button.
                  </li>
                  <li>
                    - A room must be created before players can quick join.
                  </li>
                </ul>
              </li>
              <li>
                <h4>5. Create</h4>
              </li>
              <li>
                <ul>
                  <li>
                    - A player can be a host of Grand Prix by pressing the
                    “Create” button. Players can join the room by pressing quick
                    join.
                  </li>
                </ul>
              </li>

              <li>
                <h4> 6. Track Selection</h4>
              </li>
              <li>
                <ul>
                  <li>
                    - Several tracks are being displayed in order to be selected
                    by the host.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Grand Prix waiting room</h3>
            <img src={img4} alt="" />
            <ul>
              <li>1. Game Start timer</li>
              <li>
                <ul>
                  <li>
                    - Players have 30 seconds countdown in order to modify and
                    prepare their cars
                  </li>
                </ul>
              </li>
              <li>2. Participants</li>
              <li>(Player with “Crown” icon is the room creator)</li>
              <li>3. Track Info</li>
              <li>4. Chat</li>
              <li>
                <img src={img5} alt="" />
              </li>
              <li>
                <ul>
                  <li>
                    - You can communicate with other players using chat. Chat
                    feature has limited number of characters that can be used to
                    avoid spam.
                  </li>
                </ul>
              </li>
            </ul>
            <h3>Change</h3>
            <ul>
              <li>
                <img src={img6} alt="" />
              </li>
              <li>
                <ul>
                  <li>
                    {" "}
                    - Players can quick modify their cars and characters by
                    tapping the “Change” button.
                  </li>
                </ul>
              </li>
              <li>
                <h4>1. Car Tab </h4>
              </li>
              <li>
                <h4>2. Character Tab</h4>
              </li>
              <li>
                {" "}
                <h4>3. Class Tab (Car/Character)</h4>
              </li>
              <li>
                <ul>
                  <li>
                    - Players can select their modified cars and characters to
                    be used on Grand Prix classified with their class.
                  </li>
                </ul>
              </li>
            </ul>
            <h4>Ready</h4>
            <img src={img7} alt="" />
            <ul>
              <li>
                <ul>
                  <li>
                    - When all players pressed the “Ready” button, game start
                    timer will be skipped to 5 seconds countdown.
                  </li>
                  <li>
                    - Players will be redirected to the race after the
                    countdown.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="bootons">
          <HashLink smooth to="/grand-pix-guide#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </div>
    </div>
  );
};
export default GrandPixGuide;
