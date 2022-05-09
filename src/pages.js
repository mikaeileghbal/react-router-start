import React from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getInvoices } from "./data";

const items = [
  {
    id: 1,
    name: "Color1",
    color: "blue",
  },
  {
    id: 2,
    name: "Color2",
    color: "red",
  },
];

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>[Home]</h1>
      {items.map((item) => (
        <p key={item.id}>
          {item.name} {item.color}
          <span
            style={{
              marginLeft: "16px",
              backgroundColor: item.color,
              width: "50px",
              height: "20px",
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/${item.id}`)}
          ></span>
        </p>
      ))}
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[Products]</h1>
    </div>
  );
}

export function Invoices() {
  const invoices = getInvoices();
  return (
    <div>
      <h1>[Invoices]</h1>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ color: "red", display: "block", margin: "1rem 0" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function NotFound404() {
  const location = useLocation();
  return (
    <main>
      <h1>Resource not found at {location.pathname}</h1>
    </main>
  );
}

export function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}

export function History() {
  return (
    <section>
      <h2>Our History</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}
export function Location() {
  return (
    <section>
      <h2>Our Location</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}

export function Messgae() {
  return (
    <section>
      <h2>Send Message</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </section>
  );
}

export function Detail() {
  const navigate = useNavigate();
  let { id } = useParams();
  let foundItem = items.find((item) => item.id === parseInt(id));

  return (
    <div>
      <button type="button" onClick={() => navigate(`/`)}>
        Back home
      </button>
      <p>
        Detail page for id: {foundItem.id} {foundItem.name}
        <span
          style={{
            marginLeft: "16px",
            backgroundColor: foundItem.color,
            width: "500px",
            height: "500px",
            display: "block",
            margin: "16px 0",
          }}
        ></span>
      </p>
    </div>
  );
}
