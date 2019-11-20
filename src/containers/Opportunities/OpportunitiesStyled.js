import styled from "styled-components";


export const OpportunityCard = styled.section`
  width: 90%;
  margin: auto;
  display: flex;
  margin-top: 0.5em;
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  align-items: center;
  height: 15vh;
  background-color: aliceblue;
  border: 1px solid #37474e;
  -webkit-box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  -moz-box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  box-shadow: 9px 10px 5px -10px rgba(55, 71, 78, 1);
  border: 1px solid #37474e @media screen and (max-width: 375px) {
    border-right: none;
  }
  @media screen and (display-mode: standalone) {
    border-right: none;
  }
`;

export const OpportunitySection = styled.section`
  width: 100%;
  background-color: white;
  background-attachment: fixed;
`;

export const PTag = styled.p`
  font-size: 1em};
  margin: 0px;
`;

export const Header = styled.h1`
  color: #37474e;
  font-size: 2em;
  margin: 0px;
  @media screen and (max-width: 375px) {
    margin: 0px 0px 30px -80px;
  }
`;

export const ModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: white;
  background-color: #37474e;
  border-radius: 5px;
  font-size: 1em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;
  margin-right: ${props => (props.volunteer ? "20px" : "0px")};
  margin-left: ${props => (props.client ? "20px" : "0px")} @media screen and
    (max-width: 375px) {
    margin: ${props =>
      props.client ? "20px 0px 0px 0px" : "50px 20px 0px 0px"};
  }

  :hover {
    border: 2px solid #37474e;
    color: #37474e;
    background-color: white;
  }
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  height: 100%;
  width: ${props => (props.buttons ? "20%" : "35%")};
`;

export const Container = styled.section`
  width: 100%;
`;

export const Bold = styled.span`
  font-weight: bold;
  color: ${props => (props.fulfill ? "red" : "#37474e")}
`;
