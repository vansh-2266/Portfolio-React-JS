import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./home";
import Contact from "./Contact";
import Workexp from "./Workexp";
import Project from "./Project";
import Education from "./Education";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Project/>} />
        <Route path="/work-experience" element={<Workexp/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
