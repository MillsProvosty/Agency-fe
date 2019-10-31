import styled from "styled-components";

export const AboutSection = styled.section`
  font-size: 1em;
  background-color: white;
  @media screen and (max-width: 375px) {
    font-size: .75em;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const BigLetters = styled.p`
  margin-top: ${props => (props.first ? "1em" : "2em")};
  font-size: ${props => (props.first ? "2.5em" : "1.5em")};
  margin-bottom: ${props => (props.third ? "2em" : "0em")};

  @media screen and (max-width: 375px) {
    margin-top: ${props => (props.first ? "1em" : "2em")};
    font-size: ${props => (props.first || props.second ? "1.8em" : ".75em")};
    margin-bottom: ${props => (props.third? "2em": "0em")};
  }
`;

export const Options = styled.section`
  margin-top: 2em;
  display: flex;
  @media screen and (max-width: 375px) {
    margin-top: 1rem;
    display:block;
    justify-content: center;
  }
  @media screen and (display-mode: standalone) {
    margin-top: 1rem;
    display:block;
    justify-content: center;
  }
`;

export const MoreOptions = styled.section`
  margin-top: 1em;
  width: 50%;
  border-right: ${props => (props.one ? "1px solid #7A86CB" : "none")};
  @media screen and (max-width: 375px) {
    margin: auto;
    width: 80%
    border-bottom: ${props => (props.one ? "1px solid #7A86CB": "none")}
    border-right: ${props => (props.one ? "none": '')}
  }
  @media screen and (display-mode: standalone) {
    margin: auto;
    width: 80%
    border-bottom: ${props => (props.one ? "1px solid #7A86CB": "none")}
    border-right: ${props => (props.one ? "none": '')}
  }
`;

export const PTag = styled.p`
  font-size: 1.5em;
`;

export const QuickSection = styled.section`
  display: flex;
  width: 75%;
  margin: auto
`


export const Button = styled.button`
  color: white;
  background-color: #7A86CB;
  border-radius: 5px;
  font-size: 2em;
  width: 175px;
  font-family: "Quicksand", sans-serif;
  border: 2px solid white;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-right: ${props => (props.volunteer ? "20px" : "0px")};
  margin-left: ${props => (props.client ? "20px" : "0px")}

  :hover {
    border: 2px solid #7A86CB;
    color: #7A86CB;
    background-color: white;
}
`;
