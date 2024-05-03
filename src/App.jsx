import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { DarkProvider } from "./context/darkmodeContext"; // Import DarkProvider
import DetailCountry from "./components/DetailCountry";

function App() {
  return (
    <BrowserRouter>
      <DarkProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<DetailCountry />} />
          </Routes>
        </div>
      </DarkProvider>
    </BrowserRouter>
  );
}

export default App;
