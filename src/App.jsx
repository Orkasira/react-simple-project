import "./App.css";
import Header from "./components/Home/Header/Header";
import Features from "./components/Features/Features";
import photo from "./assets/Group.svg";
import { Route, Routes } from "react-router";
import Stories from "./components/Stories/Stories";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer/Footer";

function App() {
  return (
    <>
      <Header icon={photo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stories" element={<Stories />} />
        <Route path="/Features" element={<Features />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
