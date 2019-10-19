import React from "react";
import "./App.scss";
import { FaHandsHelping } from "react-icons/fa";

function App() {
  return (
    <section className="App">
    <FaHandsHelping size={64}/>
      <h1>Agency</h1>
      <p>is pretty frickin great</p>
      <section>
        <button className="volunteer">Volunteer</button>
        <button className="client">Client</button>
      </section>
    </section>
  );
}

export default App;
