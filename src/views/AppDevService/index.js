import React from "react";
import Footer from "../../components/Footer";
import AppDevService from '../../components/AppDevService/AppDevService';
const AppDevServices = () => {

  return (
    <>
      {/* Footer Section  */}
      <section>
        <AppDevService />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default AppDevServices;