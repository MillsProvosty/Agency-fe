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
    {!isLoading && props.user.role === 'client' &&
      <>
        <h1>Welcome {props.user.firstname}</h1>
        <Opportunities role={props.user.role}/>
      </>
    }
    {!isLoading && props.user.role === 'volunteer' &&
      <>
        <h1>Welcome {props.user.firstname}</h1>
        <Opportunities role={props.user.role}/>
      </>
    }
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  opportunities: state.opportunities
});

export const mapDispatchToProps = dispatch => ({
  setOpportunities: opportunities => dispatch(setUserOpportunities(opportunities))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
