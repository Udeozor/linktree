import { Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./components/index";
import Contact from "./Pages/contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
