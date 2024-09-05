import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../AppDevHeroSection";
import WyUsAppPage from "../WyUsAppPage";
import AppDevProcess from "../AppDevProcess";
import AppFeatureGrid from "../AppFeatureGrid";
import AppTechStack from "../AppTechStack";
import FAQApp from "../FAQApp";
import ContactUsForm from "../ContactUsForm";

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

      <HeroSection />

      <WyUsAppPage />

      <AppDevProcess />

      <AppFeatureGrid />

      <AppTechStack />

      <FAQApp />

      <ContactUsForm />
    </div>
  );
};

export default AppDevService;
