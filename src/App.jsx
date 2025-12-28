import Nav from "./components/Nav";
import "./app.css";
import Header from "./components/sections/header/Header";
import BannerLL from "./components/BannerLL";
import LuminolissPage from "./pages/luminoliss/LuminolissPage";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Nav />
      {/* <BannerLL /> */}
      <Header />
      {/* <LuminolissPage /> */}
      <WhatsAppButton />
    </>
  );
}

export default App;

