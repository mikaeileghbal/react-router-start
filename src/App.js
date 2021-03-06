import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Invoice, {
  About,
  Contact,
  Detail,
  Events,
  History,
  Home,
  Invoices,
  Location,
  Messgae,
  NotFound404,
  Products,
  Services,
} from "./pages";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>React Router</h1>
        <TopNavigator />
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="services" element={<Services />} />
            <Route path="history" element={<History />} />
            <Route path="location" element={<Location />} />
          </Route>
          <Route path="about/message" element={<Messgae />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/invoices" element={<Invoices />}>
            <Route path=":invoiceID" element={<Invoice />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path=":id" element={<Detail />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

function TopNavigator() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/events">events</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
