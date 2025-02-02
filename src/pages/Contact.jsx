import Header from "../components/common/Header";
import Text from "../components/Content/Text";
import ContactSection from "../components/Content/ContactSectoin";
import LiveGoogleMap from "../components/Content/LiveGoogleMap";
import Footer from "../components/common/Footer";

const Contact = () => {
  return (
    <>
      <div className="">
        <Header />
        <Text />
        <ContactSection />
        <LiveGoogleMap />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
