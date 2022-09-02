import React, { useState, useEffect, useRef, LinkProps } from "react";

import { HashLink } from "react-router-hash-link";
import icono from "../images/icons/logo.png";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebook,
  FaMapMarked,
  FaReddit,
  FaRegArrowAltCircleUp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// Example adapted from https://fetch.spec.whatwg.org/#example-headers-class

const TermsAndConditions = ({ props, ref, currentRoute }) => {
  // Title
  useEffect(() => {
    document.title = "Black Spot Studio | Terms of Use";
  }, []);
  return (
    <div className="terms wrapper">
      <section className="terms-section">
        <div className="terms-wrapper">
          <img src={icono} alt="" />
          <h1>Terms of Use</h1>
          <div className="lines"></div>
          <div className="chapter-1">
            <h2>Chapter 1: General Provisions</h2>
            <div className="article-1">
              <h3>Article 1 Purpose</h3>
              <div className="lines"></div>
              <p>
                The purpose of these terms and conditions is to specify rights,
                obligations, and other necessary matters between the company and
                its members in relation to the services provided by Black Spot
                Studio Philippines (the “Company”) using wired and wireless
                communication networks.
              </p>
            </div>
            <div className="article-2">
              <h3>Article 2 Definition</h3>
              <div className="lines"></div>
              <h4>
                {" "}
                The definitions of terms used in these terms and conditions are
                as follows.
              </h4>
              <ul>
                <li>
                  "Company" refers to a person who provides services (contents
                  and other services) to members.
                </li>
                <li>
                  A member means a person who agrees to these terms and
                  conditions and is entitled to use the services (contents and
                  other services) provided by the company.
                </li>
                <li>
                  Temporary members (referred to as guest members) refer to
                  members who use the services (contents and services) provided
                  by the company using the guest login mode without member
                  authentication through the open market.
                </li>
                <li>
                  Among the services, contents refer to information or materials
                  such as codes, characters, figures, colors, voices, sounds,
                  images, and images (including complexes thereof) that are
                  verified by executing the application provided by the company.
                  It refers to services outside of content among the services
                  provided by the company.
                </li>
                <li>
                  ID refers to a combination of letters or numbers determined by
                  the member and approved by the company for identification of
                  the member and use of services (contents and other services).
                </li>
                <li>
                  {" "}
                  PASSWORD refers to a combination of letters or numbers
                  determined by the member himself that matches the ID given to
                  the member to confirm that he or she is a member and to
                  protect the confidentiality.
                </li>
                <li>
                  Paid points are information that can be used as a means of
                  payment when using or purchasing services (contents and other
                  services), and refers to those purchased by a member for a fee
                  from the company or a third party.
                </li>
                <li>
                  Free points are information that can be used as a means of
                  payment when using or purchasing services (contents and other
                  services), and are provided by the company or a third party to
                  members free of charge.
                </li>
              </ul>
              <h4>
                Definitions of terms used in these Terms and Conditions shall be
                governed by relevant laws and other general commercial
                practices, except as provided in each subparagraph of Paragraph
                1.
              </h4>
            </div>
            <div className="article-3">
              <h3>Article 3 Provision of company information, etc.</h3>
              <div className="lines"></div>
              <h4>
                The company posts the following items on the company's website
                so that members can easily find out.
              </h4>
              <ul>
                <li>
                  Representative's name and trade name- Representative Kim
                  Seong-yunTrade name Black Spot Studio
                </li>
                <li>
                  Office address: 26th, Taguig City, 1634, Metro Manila,
                  Philippines
                </li>
                <li>
                  Business registration number, mail-order business report
                  number- Business registration number 156-88-01047
                </li>
                <li>Privacy Policy - Separately Posted</li>
              </ul>
              <h4>
                In relation to the services provided by the company, the
                contents, information, conditions of use, and grades of service
                are displayed on the company's website and sales screen of each
                open market.
              </h4>
            </div>
            <div className="article-4">
              <h3>Article 4 Publication of Terms and Conditions</h3>
              <div className="lines"></div>
              <ul>
                <li>
                  The company must present these terms and conditions when the
                  user runs the service for the first time, and the user must
                  agree to these terms and conditions to use the service
                  normally as a member.
                </li>
                <li>
                  If Paragraphs 1 to 3 are violated, the company cannot claim
                  all or part of these terms and conditions as the content of
                  the contract.
                </li>
              </ul>
            </div>
            <div className="article-5">
              <h3>Article 5 Change of Terms and Conditions</h3>
              <div className="lines"></div>
              <ul>
                {/*  */}
                <li>
                  The company violates the 「Contents Industry Promotion Act」,
                  「Act on Consumer Protection in Electronic Commerce, Etc.」,
                  「Act on Regulation of Terms and Conditions」, 「Guidelines
                  for Protection of Content Users」 set by the Minister of
                  Culture, Sports and Tourism, and other related laws and
                  commercial practices You may change these terms and conditions
                  to the extent that they are not.
                </li>
                <li>
                  When changing the terms and conditions, the company must
                  specify the date of application and the reason for the change,
                  and counting backwards from the date of application, at least
                  7 days (30 days for changes that are unfavorable to users or
                  changes in material matters) for a considerable period of time
                  thereafter It is announced through the initial screen of the
                  service or the company's website.
                </li>
                <li>
                  When changing the terms and conditions, the company assumes
                  that the member has agreed to the changed terms and conditions
                  if the member does not explicitly express his/her intention to
                  reject the company during the notice period in Paragraph 2.
                  However, a member who does not agree to the change of the
                  terms and conditions may withdraw by the method stipulated in
                  these terms and conditions.
                </li>
                <li>
                  Except in cases where the changed terms and conditions are
                  applied due to the revision of related laws, etc., if the
                  member refuses to apply the changed terms and conditions, the
                  company will provide services according to the terms before
                  the change if technically and commercially possible, the terms
                  and conditions before the change We can provide services
                  according to However, if it is technically or commercially
                  difficult to provide the service according to the terms and
                  conditions before the change, the company may compensate the
                  member for damages and terminate the service use contract.
                </li>
                <li>
                  If the member does not agree to the application of the changed
                  terms, the company or the member may cancel the service use
                  contract.
                </li>
              </ul>
            </div>
            <div className="article-6">
              <h3>Article 6 Interpretation of Terms and Conditions</h3>
              <div className="lines"></div>
              <ul>
                <li>
                  The company may determine specific contents not set forth in
                  these terms and conditions through the operation policy, etc.
                  In this case, the operation policy, etc. has a supplementary
                  effect to these terms and conditions. The company shall notify
                  members of the contents of the operation policy by posting it
                  on the service website or providing a connection screen so
                  that members can know.
                </li>
                <li>
                  Regarding matters not stipulated in these Terms and Conditions
                  and interpretation of these Terms and Conditions, please refer
                  to 「Contents Industry Promotion Act」, 「 Act on Consumer
                  Protection in Electronic Commerce, Etc.」, 「Act on Regulation
                  of Terms and Conditions」, as prescribed by the Minister of
                  Culture, Sports and Tourism. Content User Protection
                  Guidelines” and other related laws.
                </li>
              </ul>
            </div>
          </div>
          <div className="chapter-2">
            <h2>
              Chapter 2 Membership registration and protection of personal
              information, etc.
            </h2>
            <div className="article-7">
              <h3>Article 7 Generation of contract of use</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The contract of use is concluded when the user who wants to
                  become a member (hereafter, the applicant for membership)
                  agrees to the contents of these terms and conditions, applies
                  for service use, and the company approves the application.
                </li>
                <li>
                  In principle, the company accepts the user's application for
                  service use. However, the company may not approve the
                  application for use that falls under any of the following
                  subparagraphs, or may cancel the contract of use afterwards.
                  <ul>
                    <li>
                      {" "}
                      In the event that the contents of the application for use
                      are entered falsely or the requirements for application
                      for use are not met.
                    </li>
                    <li>
                      In case the company uses the service through an abnormal
                      or detour in a country where the service has not been
                      provided.
                    </li>
                    <li>
                      When applying for use for the purpose of performing acts
                      prohibited by relevant laws, such as the 「Game Industry
                      Promotion Act.
                    </li>
                    <li>
                      When an application is made for the purpose of impairing
                      social well-being and order or good morals.
                    </li>
                    <li>
                      If you want to use the game service for illegal purposes.
                    </li>
                    <li>
                      If you want to use the game service for the purpose of
                      pursuing profit.
                    </li>
                    <li>
                      In other cases where approval is deemed inappropriate for
                      reasons equivalent to subparagraphs 1 to 6.
                    </li>
                  </ul>
                </li>
                <li>
                  The company may withhold approval until the cause is resolved
                  in any of the following cases.
                  <ul>
                    <li>
                      In case the company's facilities are not available, it is
                      difficult to support a specific terminal, or there is a
                      technical obstacle.
                    </li>
                    <li>
                      In the event of a failure in service, service fee, or
                      payment method.
                    </li>
                    <li>
                      If it is difficult to accept the application for use for
                      other reasons.
                    </li>
                  </ul>
                </li>
                <li>
                  The company classifies members' grades for each content of the
                  service and may provide different service menus and service
                  usage/additional functions for each member grade according to
                  the collected information, such as usage time, frequency, and
                  payment information.
                </li>
              </ul>
            </div>
            <div className="article-8">
              <h3>
                Article 8 Special rules regarding youth membership registration,
                etc.
              </h3>
              <div className="lines"></div>

              <p>
                When a juvenile (including students under the age of 18 and
                currently attending high school under Article 2 of the
                Elementary and Secondary Education Act) uses the service, the
                legal representative of the juvenile to the company reads,
                corrects, and updates the personal information of the juvenile
                request or withdraw consent for membership registration, in
                which case the company will take necessary measures, such as
                destroying the collected personal information of youth.
              </p>
            </div>
            <div className="article-9">
              <h3>
                Article 9 Obligation for member ID and password management.
              </h3>
              <div className="lines"></div>

              <ul>
                <li>
                  Members are responsible for managing member information such
                  as nicknames and passwords used in the service. The member is
                  also responsible for the damage caused by the member's
                  negligence in managing his/her service information or for the
                  illegal use of a third party, and the company is not
                  responsible for it.
                </li>
                <li>
                  The company uses the service when it is determined that there
                  is a risk of personal information leakage in the service
                  provided to the member, is against anti-social or morals, or
                  there is a possibility of being mistaken for the company and
                  the operator of the company, or if it is determined that it is
                  intended to be mistaken for another member may be
                  changed/restricted without prior notice.
                </li>
                <li>
                  If the member recognizes that the service provided by the
                  company is being stolen or used by a third party, the member
                  must immediately notify the company and follow the company's
                  instructions. The company is not responsible for any
                  disadvantages caused by the member not notifying the company
                  or not following the company's instructions even if the member
                  has notified the company.
                </li>
                <li>
                  The company may use the game as a guest member for the
                  convenience of users according to the open market policy.
                  However, when using the game as a guest member, the company
                  does not collect or store the account information and game
                  play information. and the company does not take any
                  responsibility for it.
                </li>
              </ul>
            </div>
            <div className="article-10">
              <h3>Article 10 Collection of information, etc.</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company may collect and use chat contents between members
                  in order to provide smooth service. The company will allow
                  access to this information only when the company deems it
                  necessary for dispute resolution between members, handling
                  civil complaints, or maintaining game order. It can never be
                  read.
                </li>
                <li>
                  The company may collect and utilize terminal settings and
                  specification information such as members to improve service
                  quality such as service operation and program stabilization.
                </li>
                <li>
                  The company may request additional information about
                  individual members for the purpose of improving services and
                  introducing services for members, and the member may agree to
                  the request and provide or reject additional information.
                </li>
              </ul>
            </div>
            <div className="article-11">
              <h3>Article 11 Protection and Use of Personal Information.</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company strives to protect members' personal information
                  in accordance with the relevant laws and regulations, and the
                  protection and use of personal information is in accordance
                  with the relevant laws and the company's personal information
                  processing policy. However, the company's personal information
                  processing policy does not apply to the company's official
                  game service and linked services other than the site.
                </li>
                <li>
                  Depending on the characteristics of the service, the member's
                  nickname, photo, etc. introducing himself/herself may be
                  disclosed.
                </li>
                <li>
                  The company does not provide members' personal information to
                  others without their consent, except in cases where there is a
                  request from the relevant national organization in accordance
                  with relevant laws and regulations.
                </li>
                <li>
                  The company is exempted from liability for damage related to
                  service use caused by leakage of personal information due to
                  reasons attributable to the member.
                </li>
              </ul>
            </div>
          </div>
          <div className="chapter-3">
            <h2>Chapter 3 Service Use Agreement</h2>
            <div className="article-12">
              <h3>
                Article 12 Provision of information on services, etc. and
                establishment of contract for use, etc.
              </h3>
              <div className="lines"></div>

              <ul>
                <li>
                  Before concluding a service use contract, the company clearly
                  indicates so that members can accurately understand the
                  contents, etc., and make transactions without mistakes or
                  errors.
                </li>
                <li>
                  The company notifies the member of the service system and line
                  inspection, the change of the terms and conditions, the
                  service change and operation, the service content
                  update/change, etc. should check the notice from time to time.
                  The company is not responsible for any damage to members
                  caused by not checking the notice. However, if serious and
                  obvious damage to the member is expected, the company may
                  notify it in a separate way.
                </li>
                <li>
                  {" "}
                  The company may reject or withhold approval of the user's
                  application for use if it falls under any of the following
                  subparagraphs. However, the company may reject the application
                  for use by users who fall under subparagraphs 1 to 3.
                  <ul>
                    <li>In case of using someone else's name.</li>
                    <li>
                      If false information is entered or the company does not
                      provide information.
                    </li>
                    <li>
                      If there is no room for service-related facilities or
                      there is a technical or business problem.
                    </li>
                    <li>
                      When the company's consent reaches the user, the service
                      use contract is established.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="article-13">
              <h3>Article 13 Method of payment</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The limit for purchases made through the service is determined
                  according to policies and methods set by mobile carriers, open
                  market operators (stores), payment companies, and the
                  government.
                </li>
                <li>
                  When paying in foreign currency among the payment prices,
                  there may be a difference between the estimated payment amount
                  and the actual billed amount due to exchange rates and
                  purchase store fees.
                </li>
              </ul>
            </div>
            <div className="article-14">
              <h3>Article 14 Use of Paid Services</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The contents or services provided by the company to users are
                  divided into free and paid services.
                </li>
                <li>
                  If a member intends to use paid content or other services, the
                  payment must be made during or at the same time as the
                  application for use.
                </li>
              </ul>
            </div>
            <div className="article-15">
              <h3>Article 15 Fault charge</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  In the event of an overpayment, the company refunds the entire
                  amount in the same way as the payment of the usage fee.
                  However, if refund is not possible in the same way, the
                  company will notify it in advance or afterward, and refund the
                  surcharge according to the member's choice.
                </li>
                <li>
                  In the event of an overpayment due to a cause attributable to
                  the company, the company will refund the full amount
                  regardless of contract costs or fees. However, in the event of
                  an overpayment due to the member's responsibility, the cost of
                  reimbursement of the overpayment is subject to the company's
                  refund policy.
                </li>
                <li>
                  If the company refuses to refund the overpayment claimed by
                  the member, it proves that the usage fee has been properly
                  charged.
                </li>
              </ul>
            </div>
            <div className="article-16">
              <h3>Article 16 Provision and Suspension of Content</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  In principle, the company provides necessary services 24 hours
                  a day, 365 days a year so that members can use the contents
                  according to the service use contract.
                </li>
                <li>
                  The company may divide the content into certain areas and set
                  the available time for each area separately, and in this case,
                  notify the member through notice in advance.
                </li>
                <li>
                  The company may change or suspend some or all of this service
                  at any time if necessary for service operation and planning,
                  and is not responsible for any problems arising from this.
                  However, if it is judged to be unfavorable to the member, the
                  company notifies the member through the e-mail or notice
                  registered by the member at the time of registration or within
                  the service.
                </li>
                <li>
                  The company provides services in situations beyond the
                  company's control, such as wartime, natural disasters, or
                  equivalent national emergency conditions, maintenance,
                  inspection, replacement, or breakdown of information and
                  communication facilities such as computers, communication
                  interruption, system transfer, or in case of significant
                  reasons for operation may be temporarily suspended. In this
                  case, the company notifies the member within the content and
                  service or through e-mail. However, if there is an unavoidable
                  reason that the company cannot notify in advance, it can be
                  notified afterwards.
                </li>
                <li>
                  The company may conduct temporary/regular server inspections
                  if necessary to provide content and services, and the
                  inspection time will follow the notice in accordance with the
                  method set by the company:
                  <ul>
                    <li>
                      If the company notifies the service suspension or failure
                      in advance for reasons such as server maintenance, but the
                      service suspension or failure time exceeds 100 hours, the
                      company extends the service time free of charge for the
                      excess time.
                    </li>
                    <li>
                      In the case of paid services in which it is impossible or
                      difficult to extend the usage time, the company
                      compensates the member for the breakdown of service
                      suspension with equivalent paid or free services, etc. at
                      the company's option.
                    </li>
                  </ul>
                </li>
                <li>
                  The company may terminate the content for any of the following
                  reasons.
                  <ul>
                    <li>
                      In case the provision of game service is prohibited for a
                      specific time or method by related laws.
                    </li>
                    <li>
                      When it is impossible to provide normal game services due
                      to natural disasters, emergencies, power outages, service
                      facility failures, or excessive use of services.
                    </li>
                    <li>
                      In case of serious business necessity, such as division of
                      the company, merger, business transfer, business
                      abolition, deterioration of the profits of the game
                      service, etc.
                    </li>
                  </ul>
                </li>
                <li>
                  In the event that all or part of the content is suspended or
                  terminated, the company notifies the member of the suspension
                  at least 3 days in advance from the date of suspension.
                  However, this is not the case if the service is suspended or
                  terminated for reasons that are difficult to notify in advance
                  by the company.
                </li>
                <li>
                  The member cannot request any compensation from the company
                  for the reason of the suspension of the game service, and the
                  member cannot request a refund for the in-app payment due to
                  the suspension of the service after the service suspension
                  notice.
                </li>
                <li>
                  If the company suspends the mobile game service in accordance
                  with Paragraph 4, the member may claim compensation for free
                  services and services that do not have a period of use (paid
                  services, continuous paid use contracts, fixed-term paid
                  items, etc.) There is not. In addition, for paid
                  items/contents (permanent items or permanent content) and
                  consumable items/contents with no time limit, the period of
                  use of the item is considered until the end of the service
                  notified when the service is discontinued. Members cannot
                  claim compensation or refund for this.
                </li>
              </ul>
            </div>
            <div className="article-17">
              <h3>
                Article 17 Provision of information and transmission of
                advertisements
              </h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company may provide advertisements through game screens,
                  homepages, emails, LMS/SMS, and push notifications in relation
                  to the services provided by the company. E-mails, LMS/SMS, and
                  push notifications with advertisements are sent only to
                  members who have agreed to receive them, and members can
                  express their intention to refuse reception to the company at
                  any time, and the company refuses to receive them We do not
                  serve advertisements against our will.
                </li>
                <li>
                  {" "}
                  The company does not transmit information or advertisements to
                  the member if the member refuses to receive it in accordance
                  with paragraph 1. However, if it is unavoidable in relation to
                  the user's use of the service, the company may transmit
                  related information to the member's information despite
                  refusal of reception pursuant to paragraph 1.
                </li>
              </ul>
            </div>
            <div className="article-18">
              <h3>Article 18 Management and Deletion of Posts</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  Regarding the contents registered/sent by the member
                  himself/herself, the contents registered by other members, and
                  the messages sent between members, the company does not bear
                  the obligation to make and keep backup data for the above
                  data. The member is solely responsible for any damage caused
                  by the material posted by the member, and the company is not
                  responsible for it in any case.
                </li>
                <li>
                  The company may take measures such as deletion, movement, or
                  refusal to register without prior notice for any of the
                  following materials or messages, and may restrict the use of
                  the members who posted the materials or messages and terminate
                  the contract of use, etc. can take action.
                  <ul>
                    <li>
                      If there is an intention to slander other members or a
                      third party, or to damage or steal the reputation.
                    </li>
                    <li>
                      In case of content that violates public order and morals.
                    </li>
                    <li>
                      If the content is recognized as being related to a
                      criminal act.
                    </li>
                    <li>
                      If the content infringes on the company's copyright or a
                      third party's copyright, portrait right, and other
                      intellectual property rights.
                    </li>
                    <li>
                      When a member posts pornography or links to an obscene
                      site.
                    </li>
                    <li> Make money, for commercial advertising posts.</li>
                    <li>If it interferes with the normal service operation.</li>
                    <li>
                      If it does not conform to the company's operating policy.
                    </li>
                    <li>
                      In case it is judged to be in violation of other relevant
                      laws.
                    </li>
                  </ul>
                </li>
                <li>
                  Members are solely responsible for all civil and criminal
                  responsibilities arising from the posting of materials or
                  messages falling under each subparagraph of Paragraph.
                </li>
              </ul>
            </div>
            <div className="article-19">
              <h3>
                Article 19 Publication of advertisements and transactions with
                advertisers.
              </h3>
              <div className="lines"></div>

              <ul>
                <li>
                  A part of the service investment base on which the company can
                  provide services to members may come from revenues from
                  advertisements, etc. Members agree to the posting of
                  advertisements that are exposed when using the service.
                </li>
                <li>
                  The company is not responsible for any loss or damage that
                  occurs as a result of a member's participation in, or
                  communication or transaction with, advertisers posted on the
                  service or through the service.
                </li>
                <li>
                  The company may request additional information about
                  individual members for the purpose of improving/adding
                  services, introducing new services, and conducting
                  promotions/events, and may provide or reject additional
                  information.
                </li>
              </ul>
            </div>
            <div className="article-20">
              <h3>Article 20 Attribution of Copyright, etc.</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  Copyrights and other intellectual property rights for contents
                  produced by the company within the service are owned by the
                  company.
                </li>
                <li>
                  Members may copy, transmit, publish, distribute, broadcast, or
                  otherwise make profit by copying, transmitting, publishing,
                  distributing, broadcasting, or other methods without prior
                  consent of the company or the provider, among the information
                  obtained by using the game service provided by the company,
                  the information belonging to the company or the provider. You
                  must not use it for any purpose or allow a third party to use
                  it.
                </li>
                <li>
                  {" "}
                  Members shall include communication, images, sounds, and all
                  data (hereinafter referred to as user content), including
                  texts of conversations that are shown in the game or uploaded
                  or transmitted by members or other members through game
                  clients or game services in relation to game services. The
                  company is permitted to use it in the following ways and
                  conditions.
                  <ul>
                    <li>
                      Using the user content, changing the editing format, and
                      other transformations (publication, duplication,
                      performance, transmission, distribution, broadcasting,
                      creation of secondary works, etc. can be used in any form,
                      and there are no restrictions on the period and region of
                      use).
                    </li>
                    <li>
                      We do not sell, rent, or transfer user content for the
                      purpose of transaction without the prior consent of the
                      user who created the user content.
                    </li>
                  </ul>
                </li>
                <li>
                  The company does not use the member's user content that is not
                  displayed in the game and is not integrated with the game
                  service (e.g., postings on general bulletin boards, etc.) You
                  can delete content.
                </li>
                <li>
                  If the company determines that the postings in the game
                  service posted or registered by the member fall under the
                  prohibited acts stipulated in these terms and conditions, the
                  company may delete it, move it or refuse to register it
                  without prior notice.
                </li>
                <li>
                  . Members whose legal interests are infringed due to
                  information posted on bulletin boards operated by the company
                  may request the company to delete the information or publish
                  rebuttals. In this case, the company will promptly take
                  necessary measures and notify the applicant.
                </li>
                <li>
                  This provision is effective while the company operates the
                  service and continues to apply even after membership
                  withdrawal.
                </li>
              </ul>
            </div>
          </div>
          <div className="chapter-4">
            <h2>
              Chapter 4 Withdrawal of Members and Restriction of Service Use
            </h2>
            <div className="lines"></div>

            <div className="article-21">
              <h3>Article 21 Withdrawal of Member</h3>
              <p>
                When a member wishes to withdraw from membership, the member
                himself/herself may apply for withdrawal from membership using
                the menu on the service page or through the customer center.
                Upon completion of withdrawal, all member's usage information
                (score, character, item, game money, etc.) is deleted and cannot
                be recovered. However, the company may keep the information for
                a certain period for member protection as stipulated in the
                relevant laws and personal information processing policy.
              </p>
            </div>
            <div className="article-22">
              <h3>Article 22 Reasons for Restriction of Service Use</h3>
              <ul>
                <li>
                  If the company restricts the member's use of the service, the
                  content and scope of the restriction are as follows, and
                  details about this are determined in the company's operating
                  policy.
                  <ul>
                    <li>
                      Restrictions on members' account names, character names,
                      and specific group names in content.
                    </li>
                    <li>Restrictions on chat contents and methods.</li>
                    <li>Restrictions on the use of bulletin boards.</li>
                    <li>Restrictions on how to play the game.</li>
                    <li>
                      Matters deemed necessary by the company for service
                      operation within the scope that does not infringe on the
                      essential rights of other members to use the service.
                    </li>
                  </ul>
                </li>
                <li>
                  In the following cases, the company may limit or suspend the
                  use of the service or terminate the use contract itself
                  without prior notice to the member. In this case, the member
                  cannot claim any rights to the company, including refunds and
                  damages.
                  <ul>
                    <li>
                      In the event of an act that damages the reputation of or
                      disadvantages others.
                    </li>
                    <li>
                      Impersonating an official operator of a service recognized
                      by the company or impersonating an employee of the company
                      or the company Intentionally interfering with the
                      operation of other services.
                    </li>
                    <li>
                      In case of stealing other people's information or
                      registering false information in the personal information
                      required for membership registration.
                    </li>
                    <li>
                      In the case of using the service to violate laws or to
                      impair the well-being, order, and morals of society
                    </li>
                    <li>
                      In case of threatening the electronic transaction order
                      such as harming the rights and interests of others or
                      stealing information using the service, dispose of game
                      data (accounts, characters, game items, etc.) for a fee
                      (transfer, sale, etc.) provision, rental, etc.
                    </li>
                    <li>
                      In case of inconvenience to members by sending spam
                      messages to members for advertising and publicity purposes
                      without the company's permission.
                    </li>
                    <li>
                      . In case of changing the company's client program,
                      hacking the company's server, or arbitrarily changing
                      parts of the website without being granted special
                      authority by the company.
                    </li>
                    <li>
                      When using the service to acquire or use goods in an
                      abnormal way.
                    </li>
                    <li>
                      In case of inducing a visit to a specific site regardless
                      of the intention of service visitors or other members.
                    </li>
                    <li>
                      {" "}
                      If the company attempts to extract the source code by
                      modifying the software provided to users as part of the
                      service, creating derivative works, reverse engineering,
                      decompiling, or other methods.
                    </li>
                    <li>
                      In case of infringing or using in a way that infringes
                      other rights, including intellectual property rights, such
                      as patent rights, trademark rights, copyrights, and trade
                      secrets of a third party.
                    </li>
                    <li>
                      If you collect other people's content and personal
                      information.
                    </li>
                    <li>
                      In case it is recognized as being related to a crime when
                      objectively judged.
                    </li>
                    <li>In case of an act that violates the relevant laws</li>
                    <li>
                      In case of causing or encouraging other users to perform
                      the prohibited acts 1 to 14 above.
                    </li>
                    <li>
                      In case of using the service for other purposes equivalent
                      to subparagraphs 1 to 15.
                    </li>
                  </ul>
                </li>
                <li>
                  In the event that the member acts as in Paragraph 1, the
                  company may restrict the use of the service for the member,
                  group, or terminal based on the verified information.
                </li>
                <li>
                  The company may notify the change of membership in accordance
                  with each subparagraph of Paragraph 1 within the service or on
                  the external service that the member subscribes to and uses by
                  using the company's service.
                </li>
                <li>
                  Members are responsible for compensating for damages caused to
                  the company or other users due to reasons attributable to the
                  preceding paragraph.
                </li>
              </ul>
            </div>
            <div className="article-23">
              <h3>Article 23 Procedures for Restriction of Use</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company determines the specific reasons and procedures for
                  restriction of use in the operation policy, etc. in
                  consideration of various circumstances such as the content,
                  degree, frequency, and result of the violation.
                </li>
                <li>
                  If the company's restrictions on use are justifiable, the
                  company will not compensate the "members" for damages caused
                  by the restrictions on use.
                </li>
                <li>
                  If game information such as goods and items is obtained
                  through a method that is not tolerated by the Company, the
                  Company may take necessary measures such as restriction of use
                  and recovery of goods and items according to the operation
                  policy.
                </li>
                <li>
                  If the company restricts the use of the member, the member is
                  notified of each of the following items by e-mail, electronic
                  memo, in-game service screen, or service website.{" "}
                  <ul>
                    <li>Reason for restriction of use.</li>
                    <li>Type and period of restrictions on use.</li>
                    <li>How to object to restrictions on use.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="article-24">
              <h3>Article 24 Restrictions on Use as Provisional Measures</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company may suspend the member's use of the service until
                  the investigation into the following issues is completed.
                  <ul>
                    <li>
                      When receiving a report related to payment abusing,
                      hacking or theft.
                    </li>
                    <li>
                      If it is reasonably suspected of being an illegal
                      activist, such as an illegal program user, workplace, or
                      bug use.
                    </li>
                    <li>
                      In other cases where provisional measures are necessary
                      for reasons similar to the above.
                    </li>
                  </ul>
                </li>
                <li>
                  In the case of Paragraph 1, if the company determines that
                  there is no reason attributable to the member after the
                  investigation is completed, the company will pay a certain
                  amount in proportion to the service use period and extend the
                  service period for the suspended period only to the members
                  who use it. However, this is not the case if it is found to be
                  an offender under paragraph 1.
                </li>
              </ul>
            </div>
            <div className="article-25">
              <h3>Article 25 Procedure for objection to restrictions on use</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  When a member wishes to dissatisfied with the company's
                  restrictions on use, within 15 days from the date of receiving
                  the notice, he or she must submit an objection to the company
                  stating the reasons for dissatisfaction with the company's
                  usage restrictions in writing or by e-mail or an equivalent
                  method.
                </li>
                <li>
                  The company that has received the objection form in Paragraph
                  1 must respond to the member's reason for dissatisfaction in
                  writing, e-mail, or an equivalent method within 15 days from
                  the date of receipt. However, if it is difficult to respond
                  within 15 days, the company notifies the member of the reason
                  and the processing schedule.
                </li>
                <li>
                  The company must take corresponding measures according to the
                  above answers.
                </li>
              </ul>
            </div>
          </div>
          <div className="chapter-5">
            <h2>
              Chapter 5 Withdrawal of subscription and termination of contract
            </h2>
            <div className="lines"></div>

            <div className="article-26">
              <h3>Article 26 Withdrawal of subscription</h3>
              <ul>
                <li>
                  {" "}
                  In the case of paid services purchased by members, they are
                  divided into contents that can be withdrawn and contents that
                  are restricted from withdrawing subscription can be withdrawn
                  (purchase cancellation) within seven days of the contract
                  signing date or the date of availability of paid services.
                  However, some paid services with equivalent characteristics,
                  such as gifts and events provided free of charge from
                  companies or third parties, and paid content already used or
                  considered to have been used at the time of subscription
                  withdrawal request, may be restricted by.
                </li>
                <li>
                  The withdrawal of subscription for paid services is limited in
                  the following cases.
                  <ul>
                    <li>
                      For items that start to be used immediately after purchase
                      or are applied directly to content and services.
                    </li>
                    <li>
                      In the case of items acquired without payment in the
                      course of normal use of contents and services.
                    </li>
                    <li>
                      If the additional benefit has already been used on an item
                      for which the additional benefit is provided.
                    </li>
                    <li>If some of the items sold in bundles are used.</li>
                    <li>
                      {" "}
                      In the case of capsule-type/probability-type items whose
                      opening behavior can be viewed as use or whose utility is
                      determined upon opening.
                    </li>
                  </ul>
                </li>
                <li>
                  If the content of the content is different from the display,
                  advertising content, or is implemented differently from the
                  contract content, the member may withdraw the application
                  within 30 days from the date of the supply of the content, or
                  within 30 days from the date of the fact that the content is
                  not available.
                </li>
                <li>
                  The withdrawal of the application and the receipt of the
                  refund must be applied through the procedures set forth by the
                  company, and the company will review whether the application
                  is justified and proceed with payment confirmation and
                  processing in accordance with the refund operating policies
                  and procedures of the device, subscription carrier, and each
                  store operator. If a refund is determined through examination,
                  we will calculate the refundable balance and refund the
                  remaining amount, excluding 10% of the refund fee.
                </li>
                <li>
                  If a minor pays for paid services without the consent of the
                  legal representative, the minor or legal representative may
                  cancel the payment. However, if the payment of paid services
                  of a minor is within the scope of the property authorized for
                  disposal by the legal representative, the cancellation is
                  limited. Whether the buyer of the paid service is a minor is
                  determined based on the basis of data such as the terminal
                  where the payment was made, the payment executor information,
                  and the name of the payment method, and the company may, if
                  necessary, require the member to submit documents that can
                  prove the minor and legal representative.
                </li>
                <li>
                  The responsibility for the management of the terminal lies
                  with the member, and it should not be used by acquaintances or
                  third parties. It is not possible to withdraw and refund the
                  application for payments that occur due to mismanagement of
                  the terminal, acceptance of use to a third party.
                </li>
                <li>
                  Charges/call charges incurred while downloading content and
                  using the service are not eligible for refund.
                </li>
                <li>
                  Refunds may be restricted if the contract is canceled for
                  reasons attributable to the member, such as violation of
                  current laws and important terms and conditions.
                </li>
              </ul>
            </div>
            <div className="article-27">
              <h3>Article 27 Effect of withdrawal of subscription</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The member who withdraws the subscription must return the
                  contents provided by the company, and if the same contents
                  remain with the member even if they are returned together such
                  as digital contents, they will be deleted.
                </li>
                <li>
                  When a subscription is withdrawn due to a cause attributable
                  to the member, the cost of returning the content is borne by
                  the member.
                </li>
                <li>
                  The company will refund the payment in the same way as the
                  payment within 3 business days from the date the content is
                  returned. The company will refund the payment within 3
                  business days from the date of receiving the member's
                  intention to withdraw the subscription. If the payment cannot
                  be refunded within 3 business days, the company must inform
                  the reason for this.
                </li>
                <li>
                  When the company delays the refund of the payment to the
                  member, it pays the delayed interest calculated by multiplying
                  the delay period by the interest rate set by the relevant laws
                  (hereinafter referred to as the delay compensation).
                </li>
                <li>
                  If there is a request for withdrawal of subscription due to
                  reasons attributable to the member, the company may deduct the
                  amount corresponding to the profit (amount obtained by the
                  bonus) obtained from the use of the content by the member and
                  refund.
                </li>
                <li>
                  In case of cancellation of subscription due to reasons
                  attributable to the company, the company will refund the
                  amount in the same way as the payment method. However, if it
                  is difficult to implement this due to the market operator, the
                  policy of the market operator will be followed.
                </li>
              </ul>
            </div>
            <div className="article-28">
              <h3>Article 28 Termination of Member's Use Contract</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  A member may cancel or terminate the service use contract in
                  case of any of the following reasons.{" "}
                  <ul>
                    <li>
                      If the content is not provided by the time of delivery.
                    </li>
                    <li>
                      In case the user cannot achieve the purpose of use due to
                      the provision of defective content.
                    </li>
                    <li>
                      If you do not agree to the changed terms and conditions.
                    </li>
                  </ul>
                </li>
                <li>
                  If a member intends to cancel or terminate the service use
                  contract based on Paragraph 1, the member must set a
                  reasonable period to enable the use of the content or request
                  the company to provide flawless content. However, this is not
                  the case if the purpose of the contract cannot be achieved if
                  the member does not receive the content at the time of
                  provision, or if the company has stated in advance that the
                  content will not be provided.
                </li>
              </ul>
            </div>
            <div className="article-29">
              <h3>Article 29 Termination of use contract by the company</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company may terminate the contract of use if the member
                  violates the provisions of these terms and conditions,
                  violates the current law, or causes damage to the company
                  intentionally or negligently.
                </li>
                <li>
                  The company may terminate the use contract or suspend the use
                  of the service by setting a period if the member commits an
                  act falling under any of the following subparagraphs.
                  <ul>
                    <li>
                      If false information is registered when applying for
                      service.
                    </li>
                    <li>
                      In case of intentionally obstructing the operation of the
                      service.
                    </li>
                    <li>
                      If you steal someone else's service ID and password.
                    </li>
                    <li>
                      When a large amount of information is transmitted or
                      advertisement information is transmitted for the purpose
                      of interfering with the stable operation of the service.
                    </li>
                    <li>
                      In case of distributing computer virus programs that cause
                      damage to the company and members.
                    </li>
                    <li>Other matters that violate the service policy.</li>
                  </ul>
                </li>
                <li>
                  If the company cancels or suspends the use contract in
                  accordance with the provisions of this article, the member
                  cannot use the downloaded content, and the previously paid
                  content purchase price, data call fee, monthly service fee,
                  etc. cannot be returned.
                </li>
                <li>
                  In accordance with the 「Act on Promotion of Information and
                  Communications Network Utilization and Information Protection,
                  Etc.」 and the Enforcement Decree of the Act, the company uses
                  personal information to protect the personal information of
                  members who have not used the service for one year in a row
                  (hereinafter referred to as “dormant account”). You can take
                  necessary actions such as destruction.
                </li>
                <li>
                  Notwithstanding Paragraph 4 above, the “Company” may keep
                  personal information of “Members” during that period if a
                  separate period is set in other laws or at the request of the
                  “Member”.
                </li>
              </ul>
            </div>
          </div>
          <div className="chapter-6">
            <h2>Chapter 6 Compensation for Damages and Dispute Resolution</h2>
            <div className="article-30">
              <h3>Article 30 Compensation for Damage</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  The company is not responsible for any damage to members in
                  relation to the contents and services provided to members.
                  However, the case of damage caused by the intention or gross
                  negligence of the company is excluded.
                </li>
                <li>
                  In the case where the company cancels or terminates the
                  contract of use pursuant to Article 25, if the member causes
                  damage to the company, the company may claim the member for
                  damages. However, this is not the case if the member proves
                  that there is no intention or negligence.
                </li>
                <li>
                  If the company enters into a partnership agreement with an
                  individual service provider and agrees to the individual
                  service provided to the member and uses it.
                </li>
              </ul>
            </div>
            <div className="article-31">
              <h3>Article 31 Company's Warranty and Indemnification</h3>
              <div className="lines"></div>

              <ul>
                <li>
                  Among the contents and services provided by the company, free
                  services are excluded from compensation for damages.
                </li>
                <li>
                  The company is exempted from liability if it is unable to
                  provide the service due to natural disasters, war, service
                  suspension of key telecommunication service providers, and
                  other force majeure. In addition, the company is exempted from
                  liability in the event of a game service suspension or failure
                  due to unavoidable reasons such as repair, replacement,
                  regular inspection, construction, etc.
                </li>
                <li>
                  The company is not responsible for any problems arising from
                  the member's content and service usage environment or for any
                  problems arising from the usage environment not attributable
                  to the company.
                </li>
                <li>
                  The company is not responsible for any problems that may arise
                  if the service is stopped or a failure occurs due to
                  unavoidable reasons such as maintenance, replacement, regular
                  inspection, construction, etc. of previously announced service
                  facilities.
                </li>
                <li>
                  The company shall not be held responsible for any disruption
                  to service suspension/use due to reasons attributable to the
                  member.
                </li>
                <li>
                  The company shall not be held responsible for any damages
                  incurred by members due to the inability to use content and
                  services due to causes other than the company's fault.
                </li>
                <li>
                  The company does not guarantee the reliability, legitimacy, or
                  legality of the results provided through the service and the
                  member information entered by the member, and the reliability,
                  accuracy, completeness, and quality of the information, data,
                  and facts posted or transmitted by the member in the service
                  We are not responsible for the contents.
                </li>
                <li>
                  {" "}
                  The company is not responsible for system damage or loss of
                  data or information caused by downloading or accessing
                  specific programs or information using the company's services
                  at the member's own discretion.
                </li>
                <li>
                  {" "}
                  The company is not responsible for any damage caused by the
                  member's poor management of the terminal or consent to the use
                  of a third party.
                </li>
                <li>
                  The company is not responsible for the reliability and
                  accuracy of information, data, facts, etc. posted on the
                  bulletin board by users or third parties. There is no
                  obligation to check or review.
                </li>
                <li>
                  The company is not obligated to intervene in disputes between
                  members or between members and third parties through the
                  service, and is not responsible for compensation for damage
                  caused by this.
                </li>
                <li>
                  The company is not responsible for the member's failure to
                  obtain the expected utility by using the content and service,
                  and the company is not responsible for any damage caused by
                  the selection or use of the service.
                </li>
                <li>
                  {" "}
                  The company may limit the time of game service or game service
                  use according to the member in accordance with related laws
                  and government policies, etc.
                </li>
              </ul>
            </div>
            <div className="article-32">
              <h3>Article 32 [Settlement of Disputes]</h3>
              <div className="lines"></div>
              <ul>
                <li>
                  In consideration of the user's convenience, the company
                  provides instructions on how to present members' opinions or
                  complaints on the in-game setting screen or the service
                  homepage. The company will properly and promptly handle
                  opinions or complaints raised by members, and notify the
                  result. However, if prompt processing is difficult, the
                  company notifies the member of the reason and the processing
                  schedule through the notice in the service or by e-mail,
                  telephone, or writing.
                </li>
                <li>
                  Users can submit each of the following items to the Customer
                  Center.{" "}
                  <ul>
                    <li>
                      Revocation of subscription, cancellation of use contract,
                      etc.
                    </li>
                    <li>User Restriction Appeals</li>
                    <li>
                      General tasks related to the game, such as receiving
                      game-related inquiries and improvements, etc.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="article-33">
              <h3>Article 33 [Jurisdiction and Governing Law]</h3>
              <p>
                These Terms and Conditions shall be governed by and interpreted
                in accordance with the laws of the Republic of Korea, and in the
                event of a lawsuit arising out of a dispute between the company
                and a member, the court of competent jurisdiction shall be the
                court according to the procedure stipulated in the Act.
              </p>
              <div className="addendum">
                <h5>Addendum</h5>
                <ul>
                  <li>Article 1 [Enforcement Date]</li>
                  <li>
                    These Terms and Conditions are effective from August 01,
                    2020.
                  </li>
                  <li>
                    The previous terms of use will be replaced by these terms
                    and conditions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bootons">
            <HashLink smooth to="/terms-of-use#" id="up">
              <FaRegArrowAltCircleUp />
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
