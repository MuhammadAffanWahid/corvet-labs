import React from "react";
import { Helmet } from "react-helmet";
import QAHero from "../QAHero";
import TestingServiceSection from "../TestingServiceSection";
import QAServiceSection from "../QAServiceSection";
import QAWhyUs from "../QAWhyUs";
import QAFeatures from "../QAFeatures";
import QAEngagement from "../QAEngagement";
import QADevProcess from "../QADevProcess";
import QATechStack from "../QATechStack";
import QAStats from "../QAStats";
import QAFAQ from "../QAFAQ";


const AppDevService = () => {
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <title>Appgen - App & Saas Landing Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="App and Saas Landing Template" />
        <meta
          name="keywords"
          content="Application, Clean, Saas, Dashboard, Bootstrap 5"
        />
        <meta content="Shreethemes" name="author" />
        <meta name="version" content="2.1.0" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link
          href="css/materialdesignicons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="css/tiny-slider.css" />
        <link href="css/tobii.min.css" rel="stylesheet" type="text/css" />
        <link href="css/style.min.css" rel="stylesheet" type="text/css" />
      </Helmet>

      {/* Hero Start */}
      <QAHero/>
      {/* Hero End */}

      {/* TestingServiceSection Start */}
      <TestingServiceSection />
      {/* TestingServiceSection End */}

      {/* QAServiceSection Start */}
      <QAServiceSection />
      {/* QAServiceSection End */}

      {/* QAWhyUs Start */}
      <QAWhyUs />
      {/* QAWhyUs End */}

      {/* QAFeatures Start */}
      <QAFeatures />
      {/* QAFeatures End */}

      {/* QAEngagement Start */}
      <QAEngagement />
      {/* QAEngagement End */}

      {/* QADevProcess Start */}
      <QADevProcess />
      {/* QADevProcess End */}

      {/* QATechStack Start */}
      <QATechStack />
      {/* QATechStack End */}

      {/* QAStats Start */}
      <QAStats />
      {/* QAStats End */}

      {/* QAFAQ Start */}
      <QAFAQ />
      {/* QAFAQ End */}
    </div>
  );
};

export default AppDevService;
