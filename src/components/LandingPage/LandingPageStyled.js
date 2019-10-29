import styled from "styled-components";
import balloonImg from "./air_support.svg";

  export const Button = styled.button`
    color: white;
    background-color: #37474e;
    border-radius: 5px;
    font-size: 2em;
    width: 175px;
    font-family: "Quicksand", sans-serif;
    border: 2px solid white;
    margin-top: 30px;
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

  export const PTag = styled.p`
    font-size: 2em;
    margin: 2px;
  `;

  export const Header = styled.h1`
    color: #37474E
    font-size: 6em;
    margin: 0px;
    @media screen and (max-width: 375px) {
      margin: 0px 0px 30px -80px
    }
  `;

  export const Section = styled.section`
    height: 100vh;
    width: 100%;
    background-color: aliceblue;
    background-repeat: no-repeat;
    background-size: 1000px;
    background-position: top center;
    background-image: url(${balloonImg});
    @media screen and (max-width: 375px) {
      justify-content: space-around;
    }
  `;

  export const Logo = styled.button`
  margin-top:100px;
  border-radius: 50%;
  border: 3px solid #37474e;
  `
