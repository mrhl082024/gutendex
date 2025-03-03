import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Homepage from "./components/Homepage.jsx";
import ShowBooks from "./components/ShowBooks.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Book from "./components/Book.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Homepage />} />
          <Route path="Showbooks" element={<ShowBooks />} />
          <Route path="Book" element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
