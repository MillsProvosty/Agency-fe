import React, { Component } from "react";
import "./App.css";
import { FaHandsHelping } from "react-icons/fa";
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import { NavLink, Route } from 'react-router-dom' 

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
        <FaHandsHelping />
        <p>Agency is pretty frickin great</p>
        <section>
          <NavLink to='/user-form' onClick={() => this.displayForms('volunteer')}><button>Volunteer</button></NavLink>
          <NavLink to='/user-form' onClick={() => this.displayForms('client')}><button>Client</button></NavLink>
        </section>
      </>
      }
      {forms}
      </section>
    );
  }
}

export default App;
