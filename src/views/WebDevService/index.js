import React from "react";
import Footer from "../../components/Footer";
import WebDevService from '../../components/WebDevService/WebDevService';
const WebDevServices = () => {

  return (
    <>
      {/* Footer Section  */}
      <section>
        <WebDevService />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default WebDevServices;