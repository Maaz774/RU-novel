import React from 'react'
import { AiOutlineRight } from "react-icons/ai"; 
import { PiClipboard } from 'react-icons/pi';
import { useSelector } from 'react-redux';

function CookiePolicy() {
  const theme=useSelector((state)=>state.userData.theme)
  return (
    <div>
             <div className={`lg:w-[90%] lg:ml-20 h-full p-4 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-[#f3f6f9] '}`}>
             <div className={` p-8 rounded-md ${theme === 'dark' ? 'bg-[#131313] text-[#FFFFFFCC] ' : 'bg-white '}`}>
             <h1
          className={`
        text-center
        text-2xl sm:text-2xl md:text-2xl lg:text-2xl
        py-4
        px-2
        md:py-6 md:px-4
        ${theme === 'dark' ? ' text-[#C2A970] ' : 'text-[#FFFFFFCC] '}`}  
       
       >
        Cookie Policy
        </h1>
        <p className={`mt-4 font-bold  ${theme === 'dark' ? ' text-[#C2A970] ' : 'text-red-600 '}`}>Cookie Policy </p>
        <p className="mt-4">
    This document informs Users about the technologies that help RU Novel to achieve the purposes described below. Such technologies allow the Owner to access and store information (for example by using a Cookie) or use resources (for example by running a script) on a User’s device as they interact with RU Novel.
  </p>
  <p className="mt-4">
    For simplicity, all such technologies are defined as "Trackers" within this document – unless there is a reason to differentiate. For example, while Cookies can be used on both web and mobile browsers, it would be inaccurate to talk about Cookies in the context of mobile apps as they are a browser-based Tracker. For this reason, within this document, the term Cookies is only used where it is specifically meant to indicate that particular type of Tracker.
  </p>
  <p className="mt-4">
    Some of the purposes for which Trackers are used may also require the User's consent. Whenever consent is given, it can be freely withdrawn at any time following the instructions provided in this document.
  </p>
  <p className="mt-4">
    RU Novel uses Trackers managed directly by the Owner (so-called “first-party” Trackers) and Trackers that enable services provided by a third-party (so-called “third-party” Trackers). Unless otherwise specified within this document, third-party providers may access the Trackers managed by them.
  </p>
  <p className="mt-4">
    The validity and expiration periods of Cookies and other similar Trackers may vary depending on the lifetime set by the Owner or the relevant provider. Some of them expire upon termination of the User’s browsing session.
  </p>
  <p className="mt-4">
    In addition to what’s specified in the descriptions within each of the categories below, Users may find more precise and updated information regarding lifetime specification as well as any other relevant information — such as the presence of other Trackers — in the linked privacy policies of the respective third-party providers or by contacting the Owner.
  </p>
  <p className={`mt-4 font-bold  ${theme === 'dark' ? ' text-[#C2A970] ' : 'text-red-600 '}`}>
    How RU Novel uses Trackers
  </p>
  <p className="mt-4">
    Necessary
  </p>
  <p className="mt-4">
    RU Novel uses so-called “technical” Cookies and other similar Trackers to carry out activities that are strictly necessary for the operation or delivery of the Service.
  </p>

  <p className={`mt-4 font-bold  ${theme === 'dark' ? ' text-[#C2A970] ' : 'text-red-600 '}`}>Trackers managed directly by the Owner</p>

  <ul className="for_boxes space-y-4 mt-6">
      <li>
        <details className="box_primary box_10 expand border border-gray-200 rounded-md p-4">
          <summary className="cursor-pointer flex justify-between items-center text-lg font-semibold w_icon_24 policyicon_purpose_9415936 iub-purpose iub-purpose-9415936">
            <span>localStorage (RU Novel)</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
          </summary>
          <div className="details_body mt-2">
            <div className="wrap">
              <p className="text-sm">
                localStorage allows RU Novel to store and access data right in
                the User's browser with no expiration date.
              </p>
            </div>
            <p className="text-sm mt-2">Personal Data processed: Trackers.</p>
          </div>
        </details>
      </li>

      <li>
        <details className="box_primary box_10 expand border border-gray-200 rounded-md p-4">
          <summary className="cursor-pointer flex justify-between items-center text-lg font-semibold w_icon_24 policyicon_purpose_9415937 iub-purpose iub-purpose-9415937">
            <span>Browser Fingerprinting (RU Novel)</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
          </summary>
          <div className="details_body mt-2">
            <div className="wrap">
              <p className="text-sm">
                Browser Fingerprinting creates an identifier based on a device's
                unique combination of characteristics (e.g. IP address, HTTP
                header, browser properties etc.), that allows to distinguish the
                User from other Users, thereby enabling tracking of the User's
                browsing behavior across the web. Browser Fingerprinting does
                not have an expiration date and cannot be deleted.
              </p>
            </div>
            <p className="text-sm mt-2">Personal Data processed: Trackers.</p>
          </div>
        </details>
      </li>

      <li>
        <details className="box_primary box_10 expand border border-gray-200 rounded-md p-4">
          <summary className="cursor-pointer flex justify-between items-center text-lg font-semibold w_icon_24 policyicon_purpose_9415940 iub-purpose iub-purpose-9415940">
            <span>Preference Cookies (RU Novel)</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
          </summary>
          <div className="details_body mt-2">
            <div className="wrap">
              <p className="text-sm">
                Preference Cookies store the User preferences detected on Royal
                Road in the local domain such as, for example, their timezone
                and region.
              </p>
            </div>
            <p className="text-sm mt-2">Personal Data processed: Trackers.</p>
          </div>
        </details>
      </li>
    </ul>
     
      <p className={`mt-4 font-bold  ${theme === 'dark' ? ' text-[#C2A970] ' : 'text-red-600 '}`}>Trackers managed by third parties</p>

      <details className={`box_primary box_10 definitions expand mt-4 ${theme === 'dark' ? 'bg-[#181818]' : 'bg-gray-200'} p-4`}>
  <summary className="flex items-center justify-between cursor-pointer">
    <h3 id="definitions_and_legal_references" className={`w_icon_24 icon_ribbon p-4 ${theme === 'dark' ? 'text-[#C2A970]' : 'text-red-600'} font-bold text-lg`}>
      Definitions and Legal References
    </h3>
    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-[#C2A970]' : 'text-red-600'} transition-transform duration-300 transform rotate-90`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
  <div className={`details_body space-y-4 ${theme === 'dark' ? 'text-[#FFFFFFCC]' : 'text-gray-800'}`}>
    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Personal Data (or Data) / Personal Information (or Information)</h4>
    <p>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Sensitive Personal Information</h4>
    <p>Sensitive Personal Information means any Personal Information that is not publicly available and reveals information considered sensitive according to the applicable privacy law.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Usage Data</h4>
    <p>Information collected automatically through RU-Novel (or third-party services employed in RU-Novel), which can include: the IP addresses or domain names of the computers utilized by the Users who use RU-Novel, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>User</h4>
    <p>The individual using RU-Novel who, unless otherwise specified, coincides with the Data Subject.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Data Subject</h4>
    <p>The natural person to whom the Personal Data refers.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Data Processor (or Processor)</h4>
    <p>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Data Controller (or Owner)</h4>
    <p>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of RU-Novel. The Data Controller, unless otherwise specified, is the Owner of RU-Novel.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>RU-Novel (or this Application)</h4>
    <p>The means by which the Personal Data of the User is collected and processed.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Service</h4>
    <p>The service provided by RU-Novel as described in the relative terms (if available) and on this site/application.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Sale</h4>
    <p>Sale means any exchange of Personal Information by the Owner to <b>a third party, for monetary or other valuable consideration</b>, as defined by the applicable privacy US state law. Please note that the exchange of Personal Information with a service provider pursuant to a written contract that meets the requirements set by the applicable law does not constitute a Sale of your Personal Information.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Sharing</h4>
    <p>Sharing means any sharing, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a consumer's Personal Information by the business to a <b>third party for cross-context behavioral advertising</b>, whether for monetary or other valuable consideration, including transactions between a business and a third party for cross-context behavioral advertising for the benefit of a business in which no money is exchanged, as defined by the California privacy laws. Please note that the exchange of Personal Information with a service provider pursuant to a written contract that meets the requirements set by the California privacy laws does not constitute sharing of your Personal Information.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Targeted Advertising</h4>
    <p>Targeted advertising means displaying advertisements to a consumer where the advertisement is selected based on Personal Information obtained from that consumer’s activities over time and across nonaffiliated websites or online applications to predict such consumer’s preferences or interests, as defined by the applicable privacy US state law.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>European Union (or EU)</h4>
    <p>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Cookie</h4>
    <p>Cookies are Trackers consisting of small sets of data stored in the User's browser.</p>

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Tracker</h4>
    <p>Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.</p>

    <hr className={`my-4 ${theme === 'dark' ? 'border-[#C2A970]' : 'border-red-600'}`} />

    <h4 className={`text-red-600 font-semibold ${theme === 'dark' ? 'text-[#C2A970]' : ''}`}>Legal Information</h4>
    <p>This privacy statement has been prepared based on provisions of multiple legislations.</p>
    <p>This privacy policy relates solely to RU-Novel, if not stated otherwise within this document.</p>
  </div>
</details>


 



                </div>
                </div>  
    </div>
  )
}

export default CookiePolicy