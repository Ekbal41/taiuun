import "./App.css";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Works from "./componants/Works";
import Footer from "./componants/Footer";
import WhyUs from "./componants/WhyUs";
import Counts from "./componants/Counts";
import Testimonial from "./componants/Testimonial";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Navbar />
      <Hero />
      <Works title="All Works" backG="white" btnText="View All Works" />
      <Works title="React Works" backG="" btnText="View All React Works"/>
      <WhyUs />
      <Testimonial />
      <Counts />
      <Footer />

    </>
  );
}

export default App;
