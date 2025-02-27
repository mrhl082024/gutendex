import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/HomePage.jsx";
import ShowBooks from "./components/ShowBooks.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<HomePage />} />
          <Route path="Showbooks" element={<ShowBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
