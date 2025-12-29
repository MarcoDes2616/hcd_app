import Nav from "./components/Nav";
import "./app.css";
import Header from "./components/sections/header/Header";
import BannerLL from "./components/BannerLL";
import LuminolissPage from "./pages/luminoliss/LuminolissPage";
import WhatsAppButton from "./components/WhatsAppButton";
import AboutBusiness from "./components/sections/AboutBusiness";
import Distribution from "./components/sections/Distribution";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Nav />
      {/* <BannerLL /> */}
      <Header />
      {/* <LuminolissPage /> */}
      <AboutBusiness />
      <Distribution />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
