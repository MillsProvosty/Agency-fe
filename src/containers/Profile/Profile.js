import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { getAllOpportunities } from "../../util/apiCalls";
import { setUserOpportunities } from "../../actions";
import Opportunities from '../Opportunities/Opportunities'

const Profile = props => {

  const [isLoading, setLoading] = useState(true);

  const { setOpportunities } = props

  const getUserOpp = async () => {
    const userOpp = await getAllOpportunities()
    setOpportunities(userOpp)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getUserOpp()
  }, [])


  return (
    <section className="Profile">
      <Nav />
    {isLoading &&
       <p>I am loading</p>
    }
    {!isLoading && 
      <>
        <h1>Welcome {props.user.first_name}</h1>
        <Opportunities role={'client'}/>
      </>
    }
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  setOpportunities: opportunities => dispatch(setUserOpportunities(opportunities))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
