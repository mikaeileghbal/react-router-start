import "./App.css";
import { Routes, Route, Redirect } from "react-router-dom";
import {
  About,
  Contact,
  Events,
  History,
  Home,
  Location,
  NotFound404,
  Products,
  Services,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}>
        <Route path="services" element={<Services />} />
        <Route path="history" element={<History />} />
        <Route path="location" element={<Location />} />
      </Route>
      <Route path="/events" element={<Events />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
