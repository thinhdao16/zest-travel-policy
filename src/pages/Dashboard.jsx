import React from "react";
import { useOutletContext } from "react-router-dom";
import Navbar from "../components/Navbar/Index";
import { zestTravelTerms } from '../data/policy';

function Dashboard() {


  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="mainCard">
        <Navbar toggle={sidebarToggle} />
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

      </main>
    </>
  );
}

export default Dashboard;
