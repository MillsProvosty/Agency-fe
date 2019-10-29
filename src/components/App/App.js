
import React, { useState } from "react";
import "./App.scss";
import SignInForm from "../SignInForm/SignInForm";
import { Route } from "react-router-dom";
import Profile from "../../containers/Profile/Profile";
import About from '../About/About'
import Team from '../Team/Team'
import Schedule from '../Schedule/Schedule'
import LandingPage from "../LandingPage/LandingPage";

const App = () => {

  const [landing, hideLanding] = React.useState(false)

  const displayForms = () => {
    hideLanding(!landing);
  };

    let forms = null;
    if (landing) {
      forms = (
        <>
          <Route
            exact
            path="/user-form"
            render={() => <SignInForm />}
          />
        </>
      );
    }
    return (
      <section className="App">
        {!forms && (
          <Route exact path='/' render={() => <LandingPage displayForms={displayForms} />}/>
        )}
        {forms}
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />

      </section>
    );
  }

export default App;
