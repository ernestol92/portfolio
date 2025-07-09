import { Route, Routes } from "react-router-dom";
import "./App.css";
import './i18n'
import PortfolioLayout from './Layout/PortfolioLayout';
import Welcome from "./Pages/Welcome";
import AboutMe from "./Pages/AboutMe";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import RefTest from "./Component/RefTest";
import { useTranslation } from "react-i18next";

const App = () => {
  const {i18n} = useTranslation();
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout/>}>
        <Route index element={<Welcome/>}></Route>
        <Route path="/welcome" element={<Welcome key={i18n.language}/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/reftest" element={<RefTest/>}></Route>
      </Route>
    </Routes>
  )
}

export default App