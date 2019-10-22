import React from 'react';
import './LandingPage.scss';
import { NavLink } from 'react-router-dom';
import { FaHandsHelping } from 'react-icons/fa'


export const LandingPage = ({ displayForms }) => {
  return (
  <section className="main">
  <FaHandsHelping size={64} />
  <h1>Agency</h1>
  <p>A Support System In Places</p>
  <section className="buttons">
    <NavLink
      to="/user-form"
      onClick={() => displayForms("volunteer")}
    >
      <button className="volunteer">Volunteer</button>
    </NavLink>
    <NavLink
      to="/user-form"
      onClick={() => displayForms("client")}
    >
      <button className="client">Client</button>
    </NavLink>
  </section>
</section>
  )
}