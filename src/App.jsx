import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import HomePage from "./components/HomePage.jsx";
import ShowBooks from "./components/ShowBooks.jsx";
import NavigationBar from "./components/NavigationBar.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<HomePage />} />
          <Route path="Showbooks" element={<ShowBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
