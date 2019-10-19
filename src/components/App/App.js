import React, {Component} from "react";
import "./App.scss";
import { FaHandsHelping } from "react-icons/fa";
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpModal } from '../SignUpModal/SignUpModal';
import { Route } from 'react-router-dom' 

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
          <SignInForm props={this.state.userType} /> 
          <Route exact path='/sign-up' render={() => <SignUpModal props={this.state.userType} />}/>
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
          <button className="volunteer" onClick={() => this.displayForms('volunteer')}>Volunteer</button>
          <button className="client" onClick={() => this.displayForms('client')}>Client</button>
        </section>
      </>
      }
      {forms}
      </section>
    );
  }
}

export default App;
