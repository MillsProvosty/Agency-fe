import styled from "styled-components";

export const NavBar = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #37474e;
  color: aliceblue;
  height: 100px;
`;

export const LogoSection = styled.section`
  color: aliceblue;
  display: flex;
  margin: 10px;
  font-size: 1.5em;
  align-items: center;
`;

export const PTag = styled.p`
  font-size: 2em;
  margin: 0;
`;

export const PLinks = styled.p`
  font-size: 1.5em;
  color: aliceblue;
  margin-top: 1.5em;
`;

export const Logo = styled.button`
  background-color: #37474e;
  border-radius: 50%;
  border: 2px solid white;
`;

export const LinksSection = styled.section`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
`;
