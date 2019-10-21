import React, {Component} from "react";
import "./App.scss";
import { FaHandsHelping } from "react-icons/fa";
import { SignInForm } from '../SignInForm/SignInForm';
import { NavLink, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'


class App extends Component {
  constructor() {
    super();
    this.state = {
      hideLanding: false,
      userType: ''
    }
  }

  
  
  displayForms = (userType) => {
    this.setState({hideLanding: !this.state.hideLanding, userType})
  }
  
  render() {
    let forms = null
    if(this.state.hideLanding) {
      forms = (
        <>
          <Route exact path='/user-form' render={() => <SignInForm props={this.state.userType} />}/>
        </>
      )
    }
    return (
      <section className="App">
      {!forms && 
      <>
        <FaHandsHelping size={64}/>
        <h1>Agency</h1>
        <p>is pretty frickin great</p>
        <section>
          <NavLink to='/user-form' onClick={() => this.displayForms('volunteer')}><button className="volunteer">Volunteer</button></NavLink>
          <NavLink to='/user-form' onClick={() => this.displayForms('client')}><button className="client">Client</button></NavLink>
        </section>
      </>
      }
      {forms}
      <Route exact path='/user-dashboard' component={Dashboard}/>
      </section>
    );
  }
}

export default App;
