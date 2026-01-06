import Nav from "./components/Nav";
import "./app.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";

function App() {
   return (
    <HashRouter>
      {/* <Loading openModal={isLoading} /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
