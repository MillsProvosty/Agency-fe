import React, { useState, useEffect } from "react";
import "./App.scss";
import SignInForm from "../SignInForm/SignInForm";
import { Route, Redirect } from "react-router-dom";
import Profile from "../../containers/Profile/Profile";
import About from "../About/About";
import Team from "../Team/Team";
import { connect } from "react-redux";
import Schedule from "../Schedule/Schedule";
import { setRole } from "../../actions";
import LandingPage from "../LandingPage/LandingPage";

const App = props => {

  // const [landing, hideLanding] = useState(false)

  // const displayForms = () => {
  //   hideLanding(!landing);
  // };

  //   let forms = null;
  //   if (landing) {
  //     forms = (
  //       <>
  //         <Route
  //           exact
  //           path="/user-form"
  //           render={() => <SignInForm />}
  //         />
  //       </>
  //     );
  //   }

  const [mainRole, setMainRole] = useState(false);
  const [mainUser, setMainUser] = useState(false);
  const [mainError, setMainError] = useState(false);
  const [mainOpps, setMainOpps] = useState(false)

  useEffect(() => {
    if (props.role) {
      setMainRole(true);
    } else {
      setMainRole(false);
    }
    if (props.user) {
      setMainUser(true);
    } else {
      setMainUser(false);
    }
    if (props.error) {
      setMainError(true);
    } else {
      setMainError(false);
    } 
    if (props.opportunities.length > 0) {
      setMainOpps(true)
    } else {
      setMainOpps(false)
    }
    // return <Route exact path="/user-form" render={() => <SignInForm />}/>
  }, [props.role, props.user, props.error, props.opportunities]);

  return (
    <section className="App">
      {/* {!forms && (
          <Route exact path='/' render={() => <LandingPage displayForms={displayForms} />}/>
        )}
        {forms} */}

      {
        <Route
          path="/profile"
          render={() =>
            mainRole && mainUser ? (
              <Profile />
            ) : (
              <Redirect to="/profile" />
            )
          }
        />
      }

      {/* {
        <Route
          path="/user-form"
          render={() =>
            mainRole && mainError ? (
              <SignInForm errors={props.error} />
            ) : (
              <Redirect to="/profile" />
            )
          }
        />
      } */}

      {
        <Route
          path="/user-form"
          render={() =>
            mainRole && !mainUser ? (
              <SignInForm errors={props.error} />
            ) : (
              <Redirect to="/profile" />
            )
          }
        />
      }

      {
        <Route
          path="/"
          render={() =>
            !mainRole ? <LandingPage /> : <Redirect to="user-form" />
          }
        />
      }

      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/team" component={Team} />
      {/* <Route exact path="/profile" component={Profile} /> */}
      <Route exact path="/about" component={About} />
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  role: state.role,
  opportunities: state.opportunities,
  error: state.error
});

// export const mapDispatchToProps = dispatch => ({
//   setRole: role => dispatch(setRole(role))
// });

export default connect(
  mapStateToProps,
  null
  // mapDispatchToProps
)(App);
