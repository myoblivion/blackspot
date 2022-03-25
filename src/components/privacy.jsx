import React, { useEffect } from "react";
import logo from "../images/icons/logo.png";
import antok from "../images/antok.png";
import { HashLink } from "react-router-hash-link";
import {FaRegArrowAltCircleUp} from "react-icons/fa";
const DirectionComponent = ({ currentRoute }) => {
  useEffect(() => {
    document.title = "Black Spot Studio | Privacy Policy";
  }, []);
  return (
    <div className="privacy wrapper">
      <section className="privacy-section">
        <img src={logo} alt="" />
        <div className="section-1">
          <h1>Privacy & Policy </h1>
          <p>
            'Black Spot Studio' (hereinafter referred to as the 'Company')
            values the personal information of its customers and complies with
            relevant laws such as the “Act on Promotion of Information and
            Communications Network Utilization and Information Protection” and
            “Personal Information Protection Act”. “The company has written this
            privacy policy to inform you about the purpose and method of using
            the personal information provided by customers and what measures are
            being taken to protect personal information. This personal
            information processing policy contains various policies related to
            the protection of personal information of the company, and the
            company discloses the personal information processing policy on the
            company website or within the service so that customers can easily
            check it at any time in accordance with the provisions of laws and
            regulations. When the company revises the personal information
            processing policy, the company takes measures to make it easy to
            find out the major changes and the revision date through the notice
            on the website. When a customer registers for a membership or uses
            the service provided by the company, the company prepares a
            procedure for agreeing to the terms of service and personal
            information collection and use guide, and when the customer selects
            “agree” We collect and use personal information.”
          </p>
        </div>
        <div className="section-2">
          <h2>
            1. Items of personal information to be collected and methods of
            collection
          </h2>
          <p>
            The company collects the following personal information to provide
            services.
          </p>
          <ul>
            ● Collected Items
            <li>
              When signing up for game services and using games: ID and
              nickname, device information (model name, OS version, device
              unique identification number), carrier information, store
              information, game version, game and service usage records, access
              records, cookies, payment records, paid Billing information,
              promotion/event participation record, and product delivery related
              information
            </li>
            <li>
              When using Facebook-based services: Facebook email ID, profile
              picture
            </li>
            <li>
              When using customer support service: mobile phone number, name,
              email address
            </li>
          </ul>
          <ul>
            ● How to collect personal information
            <li>
              When the game is first launched after downloading, when connecting
              to a network, when purchasing cash, when registering as a member,
              when using the customer center, during content and service
              promotions/events, when using selfdeveloped content and service
              platforms, when using affiliated platforms Collected through a
              consent system or a separate consent process
            </li>
            <li>
              If consent to additional collection of personal information is
              obtained, only the consented information is collected
            </li>
          </ul>
        </div>
        <div className="section-3">
          <h2> 2. Purpose of collection and use of personal information</h2>
          <p>
            The company uses the collected personal information only for the
            following purposes, and if the purpose of use is changed, the
            company takes necessary measures, such as obtaining separate consent
            in accordance with Article 18 of the Personal Information Protection
            Act. However, if the customer agrees to provide personal information
            to a third party in advance or there is a basis for relevant laws
            and regulations, the company may provide the customer's personal
            information to external parties.
          </p>
          <ul>
            <li>
              ● Implementation of contract for service provision and settlement
              of fees for service{" "}
            </li>
            <li>
              ● Event winning information, event prize delivery, content
              provision, purchase and payment
            </li>
            <li>
              ● Member Management
              <ul>
                <li>
                  Identity verification according to membership service use,
                  prevention of illegal use by bad members and unauthorized use,
                  age verification, confirmation of consent of legal
                  representative when collecting personal information of
                  children under 14 years old, complaint handling, complaint
                  handling, notice delivery, sharing in game Checking the status
                  of content usage, checking to provide separate services for
                  each customer
                </li>
              </ul>
            </li>
            <li>
              ● Used for marketing and advertising, partnership and consignment
              business
              <ul>
                <li>
                  Development and specialization of new services (products),
                  delivery of advertising information such as events, provision
                  of services and advertisements according to demographic
                  characteristics, identification of access frequency or
                  statistics on member service use, and provision of
                  promotion/event services
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="section-4">
          <h2>3. Period of retention and use of personal information</h2>
          <ul>
            <li>
              ● Regarding the personal information collected with the consent of
              the member, the company may retain and use the member's personal
              information while the member's membership is maintained. However,
              for the purpose of recovery and victim protection in the event of
              damage caused by personal information theft, the company may keep
              member information for a maximum of 30 days from the date of
              withdrawal, up to the period set by the individual service, and
              then completely delete it. In addition, there are exceptions in
              cases where the member's consent is obtained individually or in
              the case of preservation in accordance with the provisions of
              related laws, such as the Commercial Act and the Consumer
              Protection Act in Electronic Commerce, etc.
            </li>
            <li>
              ● In accordance with the 「Act on Promotion of Information and
              Communications Network Utilization and Information Protection,
              Etc.」 and the Enforcement Decree of the Act, the company destroys
              personal information, etc. Take the necessary action.
            </li>
            <li>
              ● If the company needs to preserve the customer's personal
              information in accordance with the provisions of the relevant
              laws, the company keeps the information for the period stipulated
              by the relevant laws and regulations. (However, records of service
              use restrictions are kept during the service period.)
            </li>
          </ul>
        </div>
        <div className="section-5">
          <h2>
            4. Procedure and method of destruction of personal information
          </h2>
          <p>
            In principle, the company destroys the information without delay
            after the purpose of collection and use of personal information is
            achieved. The destruction procedure and method are as follows.
          </p>
          <ul>
            <li>
              ● destruction procedure
              <ul>
                <li>
                  If the information entered by the customer for membership
                  registration, etc. has to be kept after the personal
                  information retention period has elapsed or the purpose has
                  been achieved, as stipulated by related laws, the company may
                  move the personal information to a separate database (DB) or
                  It is stored in a different storage location and then
                  destroyed. The company does not use the stored personal
                  information for any other purpose other than those stipulated
                  in the relevant laws.
                </li>
              </ul>
            </li>
            <li>
              ● Destruction method
              <ul>
                <li>
                  ○ Personal information stored in electronic file format is
                  deleted using a technical method that cannot reproduce the
                  record. Personal information printed on paper is shredded with
                  a shredder or destroyed through incineration.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="section-6">
          <h2>5. Measures to ensure the safety of personal information</h2>
          <p>
            The company is taking the following technical and managerial
            measures to ensure safety so that personal information is not lost,
            stolen, leaked, altered or damaged in processing members' personal
            information.
          </p>
          <ul>
            <li>
              ● Administrative measures: Establishment/implementation of
              internal management plan, minimization of processing staff,
              regular in-house training for employees and external training for
              personal information handling personnel, etc
            </li>
            <li>
              ● Technical measures: management of access rights of personal
              information processing system, etc., installation of access
              control system, encryption of unique identification information,
              installation of latest vaccine and security programs, data backup,
              etc.
            </li>
            <li>
              ● Physical measures: Control access and access to computer rooms,
              data storage rooms, etc. However, despite the fact that the
              company has fulfilled its obligation to protect personal
              information, the company is not responsible for any damage not
              attributable to the company, such as the user's negligence or
              accidents in areas not managed by the company.
            </li>
          </ul>
        </div>
        <div className="section-7">
          <h2>6. Provision of personal information to third parties</h2>
          <p>
            In principle, the company does not provide customers' personal
            information to third parties. However, the following cases are
            exceptions.
          </p>
          <ul>
            <li>● If prior consent is obtained</li>
            <li>
              ● In case it is necessary for the settlement of charges for
              service provision, etc
            </li>
            <li>
              ● When there is a request from an investigation agency in
              accordance with the procedures and methods stipulated in the
              relevant laws and regulations or for the purpose of investigation
            </li>
            <li>
              ● When it is necessary for statistical preparation, academic
              research, or market research, and processing is performed so that
              a specific individual cannot be identified
            </li>
          </ul>
        </div>
        <div className="section-8">
          <h2> 7. Entrustment of processing of personal information</h2>
          <p>
            The company may entrust the member's personal information to a
            consignment company for service improvement. In the case of
            consignment contracts, necessary matters are stipulated so that
            members' personal information can be safely managed.
          </p>
          <h3>Consignee and purpose of use</h3>
          <div className="grid-stuff">
            <img src={antok} alt="" />
          </div>
        </div>
        <div className="section-9">
          <h2>
            8. Rights of users and their legal representatives and how to
            exercise them
          </h2>
          <ul>
            <li>
              ● Members and their legal representatives can inquire or modify
              the registered personal information of themselves or children
              under the age of 14 (hereinafter referred to as 'child') at any
              time, and may request cancellation of membership. When consent is
              required for collection, use, provision, etc. of 'child' personal
              information, the company obtains consent from the legal
              representative. For this, the company may request the minimum
              necessary information, such as the name and contact information of
              the legal representative. The personal information of the legal
              representative collected in this way is not used or provided to
              third p
            </li>
            <li>
              ● Members and their legal representatives can withdraw their
              consent to the provision of personal information (withdrawal of
              membership) at any time. A member can withdraw from membership by
              clicking “withdraw member” or “delete account” in the service to
              withdraw consent to the provision of personal information. Members
              and their legal representatives can inquire and correct personal
              information by writing to the company's customer center. In the
              event of a member's request for correction of personal
              information, the company does not use or provide the personal
              information until the correction is completed. In addition, if
              incorrect personal information has already been provided to a
              third party, the company will notify the third party of the result
              of the correction without delay so that the correction is made.
            </li>
            <li>
              ● Personal information deleted at the request of a member or legal
              representative is handled according to the company's terms of use,
              etc., and is not viewed or used for any other purpose.
            </li>
          </ul>
        </div>
        <div className="section-10">
          <h2>
            9. Technical, administrative, and physical protection measures for
            personal information
          </h2>
          <p>
            The company is taking the following technical and administrative
            measures to ensure safety without loss, theft, leakage,
            falsification, or damage to personal information in handling
            members' personal information.
          </p>
          <ul>
            <li>
              ● The company is doing its best to prevent leakage or damage to
              members' personal information by hacking or computer viruses. Data
              are frequently backed up in preparation for damage to personal
              information, and the latest vaccine program is used to prevent
              leakage or damage to customers' personal information or data.
              there is. In addition, an intrusion prevention system is used to
              control unauthorized access from the outside, and we are trying to
              equip all possible technical devices to ensure systemic stability.
            </li>
            <li>
              ● The company always emphasizes compliance with the customer's
              privacy policy. In addition, we check the compliance of the
              company's personal information handling policy and the compliance
              of the person in charge through an in-house dedicated
              organization, and if any problems are found, we are working hard
              to correct them immediately. However, the company is not
              responsible for any problems caused by the leakage of personal
              information due to the member's negligence or problems on the
              Internet.
            </li>
          </ul>
        </div>
        <div className="section-11">
          <h2>10. Civil service related to personal information </h2>
          <p>
            In addition to regular training, the company continues to make
            efforts to improve internal guidelines and systems to prevent
            infringement of personal information. are specifying.
          </p>
          <ul id="thedude">
            ● Personal Information Protection Officer
            <li>Name: Kim Seong-yoon (CEO)</li>
          </ul>
          <p>
            You can report any complaints related to personal information
            protection that occur while using the company's services to the
            person in charge of personal information management or the
            department in charge. Representatives will respond promptly and
            fully to your report. If you need to report or consult on other
            personal information infringement, please contact the following
            organizations.
          </p>
          <ul>
            <li>
              ● Privacy Infringement Report Center (http://privacy.kisa.or.kr /
              118 without area code)
            </li>
            <li>
              ● Personal Information Dispute Mediation Committee
              (http://kopico.go.kr / 1833-6972 without area code)
            </li>
            <li>
              ● Cyber Investigation Division, Supreme Prosecutors' Office
              (http://www.spo.go.kr / 1301 without area code)
            </li>
            <li>
              ● National Police Agency Cyber Security Bureau
              (http://www.ctrc.go.kr / 182 without area code)
            </li>
          </ul>
        </div>
        <div className="section-12">
          <h2>
            11. Matters concerning the installation, operation and rejection of
            automatic personal information collection devices
          </h2>
          <p>
            The company may install and operate a device that automatically
            collects 'cookies' that store and find customer information from
            time to time. A cookie is a very small text file sent to the user's
            browser by the server used to operate the company's site and is
            stored on the user's computer hard disk. The company uses cookies
            for the following purposes:
          </p>
          <ul>
            ● Purpose of use of cookies, etc.
            <li>
              ○ Providing personalized service by identifying information such
              as the number of visits and access frequency of customers using
              cookies
            </li>
          </ul>
          <ul>
            ● Installation/operation and rejection of cookies
            <li>
              ○ Customers have the option to install cookies. Therefore, the
              customer can accept all cookies by setting options in the web
              browser, check each time a cookie is saved, or refuse to save all
              cookies.
            </li>
          </ul>
          <ul>
            ● How to set cookie rejection (in case of Internet Explorer)
            <li>
              ○ Tools at the top of your web browser, Internet Options, Privacy,
              Choose your privacy level
            </li>
          </ul>
          <p>
            However, if the customer refuses to install cookies, there may be
            difficulties in providing the service.
          </p>
        </div>
        <div className="section-13">
          <h3>addendum</h3>
          <p>This privacy policy is effective from October 12, 2021.</p>
          <p>
            The previous Privacy Policy will be replaced by this Privacy Policy.
          </p>
        </div>
        <div className="bootons">
          <HashLink smooth to="/privacy#" id="up">
            <FaRegArrowAltCircleUp />
          </HashLink>
        </div>
      </section>
    </div>
  );
};

export default DirectionComponent;
