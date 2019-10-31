
import styled from "styled-components";
import floatingImg from "./floating.svg";

export const SignIn = styled.section`
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: aliceblue;
  background-repeat: no-repeat;
  background-size: 1000px;
  background-position: center 10vh;
  background-image: url(${floatingImg});
`;

export const ModalStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  width: 100%;
`;

export const Titles = styled.section`
  display: flex;
  @media screen and (max-width: 375px) {
    display: ${props => (props.second ? "block" : "flex")}
    margin: ${props => (props.second ? "0px 50%" : "none")}
  }
  @media screen and (display-mode: standalone) {
    display: block;
    margin: 0px 50%;
  }
`;

export const SignsSection = styled.section`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 43vh;
  margin-top: 27vh;
  background-color: white;
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

export const TitleSection = styled.section`
  display: flex;
  background-color: aliceblue;
  margin-top: 23vh;
  align-items: center;
  width: 80px;
  margin-left: 5%;
`;

export const Headers = styled.h1`
  font-size: ${props => (props.title ? "3em" : "6em")};
  margin: 0px;
  display: flex;
  align-content: flex-start;
  @media screen and (max-width: 375px) {
    font-size: 3rem;
    padding: 0px 5px;
    margin-bottom: 20px;
    display: ${props => (props.SignUp ? "none" : "flex")};
  }
  @media screen and (display-mode: standalone) {
    font-size: 3rem;
    padding: 0px 5px;
    margin-bottom: 20px;
    display: ${props => (props.SignUp ? "none" : "flex")};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  @media screen and (max-width: 375px) {
    border-bottom: 2px solid #37474e;
    padding-bottom: 30px;
    margin-top: 20px;
  }
  @media screen and (display-mode: standalone) {
    border-bottom: 2px solid #37474e;
    padding-bottom: 30px;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 175px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 1em;
  height: 2em;
  border: 1px solid darkgrey;
  padding: 5px;
`;


export const PTag = styled.p`
  font-size: 1em;
  color: tomato;
  margin: 0;
`;

export const Logo = styled.button`
  background-color: white;
  border-radius: 50%;
  border: 1px solid #37474e;
`;

export const Button = styled.button`
  color: white;
  background-color: #7a86cb;
  border-radius: 5px;
  font-size: 2em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;

  :hover {
    border: 2px solid #7a86cb;
    color: #7a86cb;
    background-color: white;
  }

  @media screen and (max-width: 375px) {
    margin-top: 10px;
  }

  @media screen and (display-mode: standalone) {
    margin-top: 10px;
  }
`;