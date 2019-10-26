import React from "react";
import "./Profile.scss";
import Nav from "../Nav/Nav";
import { connect } from 'react-redux';

const Profile = (props) => {
  return (
    <section className="Profile">
        <Nav />
      <section className="container-dash">
        <p>Hello {props.user.first_name}</p>
      </section>
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Profile);
