import React from "react";
import { Helmet } from "react-helmet";
import QAHero from "../QAHero";
import QAServiceSection from "../QAServiceSection";
import AppDevProcess from "../AppDevProcess";
import AppFeatureGrid from "../AppFeatureGrid";
import AppTechStack from "../AppTechStack";
import FAQApp from "../FAQApp";

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

      {/* WhyUsApp Start */}
      <QAServiceSection />
      {/* WhyUsApp End */}

      {/* AppTechStack Start */}
      <AppTechStack />
      {/* AppTechStack End */}

      {/* AppTechStack Start */}
      <FAQApp />
      {/* AppTechStack End */}
    </div>
  );
};

export default AppDevService;
