import React, { useState, useEffect } from "react";
import "./Schedule.scss";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import { getAllOpportunities } from "../../util/apiCalls";
import { setUserOpportunities } from "../../actions";
import Opportunities from '../../containers/Opportunities/Opportunities'
import styled from "styled-components";

const ScheduleSection = styled.section`
width: 100%;
background-color: aliceblue;
@media screen and (max-width: 375px) {
  justify-content: space-around;
}
`

const Header = styled.h1`
color: #37474E
font-size: 6em;
margin: 0px;
@media screen and (max-width: 375px) {
  margin: 0px 0px 30px -80px
}
`;

export const Schedule = props => {
  const [isLoading, setLoading] = useState(true);


  const getUserOpp = async () => {
    setLoading(false)
  }

  useEffect(() => {
    getUserOpp()
  }, [])

  return (
    <ScheduleSection className="Schedule">
      <Nav />
    {isLoading &&
       <p>I am loading</p>
    }
    {!isLoading && props.user.role === 'client' &&
      <>
        <Header>Welcome, {props.user.firstname}</Header>
        <Opportunities role={props.user.role}/>
      </>
    }
    {!isLoading && props.user.role === 'volunteer' &&
      <>
        <Header>Welcome, {props.user.firstname}</Header>
        <Opportunities role={props.user.role}/>
      </>
    }
    </ScheduleSection>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  opportunities: state.opportunities
});

export const mapDispatchToProps = dispatch => ({
  setOpportunities: opportunities => dispatch(setUserOpportunities(opportunities))
})

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);