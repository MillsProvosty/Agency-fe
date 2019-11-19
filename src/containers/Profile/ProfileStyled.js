import styled from "styled-components";

export const ProfileSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: white;
  background-attachment: fixed;
  @media screen and (max-width: 375px) {
    justify-content: space-around;
  }
`;

export const Header = styled.h1`
color: #37474E
font-size: 2.5em;
margin: 1em;
@media screen and (max-width: 375px) {
  margin: 0px 0px 30px -80px
}
`;
