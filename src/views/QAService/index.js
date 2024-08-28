import React from "react";
import Footer from "../../components/Footer";
import QAService from '../../components/QAService/QAService';
const WebDevServices = () => {

  return (
    <>
      {/* Footer Section  */}
      <section>
        <QAService />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default WebDevServices;