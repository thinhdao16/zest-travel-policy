import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { zestTravelTerms } from '../data/policy';
function Blank() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">

          <div>
            <section>
              <h1>{zestTravelTerms.main.titleMain}</h1>
              <h2 className="font-bold text-lg">Main</h2>
              <p>{zestTravelTerms.main.descriptionMain}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.scopeOfServices.titleMain}</h1>
              <h2 className="font-bold text-lg">Scope of Services</h2>
              <p>{zestTravelTerms.scopeOfServices.description}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.cancellations.userResponsibilities}</h1>
              <h2 className="font-bold text-lg">Cancellations</h2>
              <p>{zestTravelTerms.cancellations.zestTravelsRole}</p>
            </section>

            {/* Continue adding sections for other parts of the zestTravelTerms object */}

            <section>
              <h1>{zestTravelTerms.privacyPolicy.overview}</h1>
              <h2 className="font-bold text-lg">Privacy Policy</h2>
              <p>{zestTravelTerms.privacyPolicy.overview}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.userConduct.respectfulEngagement}</h1>
              <h2 className="font-bold text-lg">User Conduct</h2>
              <p>{zestTravelTerms.userConduct.complianceWithLaws}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.terminationOfService.groundsForTermination}</h1>
              <h2 className="font-bold text-lg">Termination of Service</h2>
              <p>{zestTravelTerms.terminationOfService.accountDeactivation}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.thirdPartyLinks.externalWebsites}</h1>
              <h2 className="font-bold text-lg">Third-Party Links</h2>
              <p>{zestTravelTerms.thirdPartyLinks.externalWebsites}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.governingLaw.jurisdiction}</h1>
              <h2 className="font-bold text-lg">Governing Law</h2>
              <p>{zestTravelTerms.governingLaw.internationalUsers}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.changesToTerms.notificationOfChanges}</h1>
              <h2 className="font-bold text-lg">Changes to Terms</h2>
              <p>{zestTravelTerms.changesToTerms.userResponsibility}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.communicationPreferences.receiptOfCommunications}</h1>
              <h2 className="font-bold text-lg">Communication Preferences</h2>
              <p>{zestTravelTerms.communicationPreferences.optingOut}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.forceMajeure.definition}</h1>
              <h2 className="font-bold text-lg">Force Majeure</h2>
              <p>{zestTravelTerms.forceMajeure.implications}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.feedbackAndSuggestions.userContributions}</h1>
              <h2 className="font-bold text-lg">Feedback and Suggestions</h2>
              <p>{zestTravelTerms.feedbackAndSuggestions.intellectualProperty}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.severability.invalidProvisions}</h1>
              <h2 className="font-bold text-lg">Severability</h2>
              <p>{zestTravelTerms.severability.invalidProvisions}</p>
            </section>

            <section>
              <h1>{zestTravelTerms.entireAgreement.supersedingAgreements}</h1>
              <h2 className="font-bold text-lg">Entire Agreement</h2>
              <p>{zestTravelTerms.entireAgreement.supersedingAgreements}</p>
            </section>

            <section>
              <h1>Contact Information</h1>
              <h2 className="font-bold text-lg">Contact Information</h2>
              <p>{zestTravelTerms.contactInformation}</p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Blank;
