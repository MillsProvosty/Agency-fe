import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { getAllOpportunities, deleteAUser } from "../../util/apiCalls";
import { setUserOpportunities } from "../../actions";
import Opportunities from '../Opportunities/Opportunities'

const Profile = props => {
  const [isLoading, setLoading] = useState(true);

  const { setOpportunities, user } = props

  const getUserOpp = async () => {
    const userOpp = await getAllOpportunities()
    console.log(userOpp)
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
    {!isLoading && user.role === 'client' &&
      <>
        <h1>Welcome {user.firstname}</h1>
        <Opportunities role={user.role}/>
      </>
    }
    {!isLoading && user.role === 'volunteer' &&
      <>
        <h1>Welcome {user.firstname}</h1>
        <Opportunities role={props.user.role}/>
      </>
    }
    <button onClick={() => deleteAUser(user.id)}>Delete Account</button>
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
