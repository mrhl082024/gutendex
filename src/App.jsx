import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import MainPage from "./components/MainPage.jsx";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
      <MainPage />
    </>
  );
}

export default App;
