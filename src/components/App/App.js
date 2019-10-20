import React, { Component } from "react";
import "./App.scss";
import { FaHandsHelping } from "react-icons/fa";
import { SignInForm } from "../SignInForm/SignInForm";
import { NavLink, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import About from '../About/About'
import Team from '../Team/Team'
import Schedule from '../Schedule/Schedule'
import History from '../History/History'
import Tasks from '../Tasks/Tasks'



class App extends Component {
  constructor() {
    super();
    this.state = {
      hideLanding: false,
      userType: ""
    };
  }

  displayForms = userType => {
    this.setState({ hideLanding: !this.state.hideLanding, userType });
  };

  render() {
    let forms = null;
    if (this.state.hideLanding) {
      forms = (
        <>
          <Route
            exact
            path="/user-form"
            render={() => <SignInForm props={this.state.userType} />}
          />
        </>
      );
    }
    return (
      <section className="App">
        {!forms && (
          <section className="main">
            <FaHandsHelping size={64} />
            <h1>Agency</h1>
            <p>A Support System In Places</p>
            <section>
              <NavLink
                to="/user-form"
                onClick={() => this.displayForms("volunteer")}
              >
                <button className="volunteer">Volunteer</button>
              </NavLink>
              <NavLink
                to="/user-form"
                onClick={() => this.displayForms("client")}
              >
                <button className="client">Client</button>
              </NavLink>
            </section>
          </section>
        )}
        {forms}
        {/* <Route exact path="/" component={App}/> */}
        <Route exact path="/user-dashboard" component={Dashboard} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/profile" component={Dashboard} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
      </section>
    );
  }
}

export default App;
