import React from "react";
import "./App.css";
import { FaHandsHelping } from "react-icons/fa";

function App() {
  return (
    <section className="App">
      <FaHandsHelping />
      <p>Agency is pretty frickin great</p>
      <section>
        <button>Volunteer</button>
        <button>Client</button>
      </section>
    </section>
  );
}

export default App;
