import Filter from "./components/Filter";
import CountryCard from "./components/CountryCard";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Filter /></div>} />
        <Route path="/filter/:name" element={<CountryCard />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
