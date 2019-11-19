import styled from "styled-components";

export const Program = styled.p`
  background-color: white;
  padding: ${props => props.name ? '50px' : '0px'};
  font-weight: ${props => props.name ? 'bold': ''};
  font-size: ${props => props.name ? '2em' : '1.5em'}
  margin: 0;
`;

export const ProgramSection = styled.section`
  background-color: white;
  display: flex;
  padding-bottom: 50px;
`;

export const Member = styled.section`
  width: 50%;
`;

export const URLSection = styled.section`
  display: flex;
  width: 70%;
  justify-content: space-around;
  margin: 0px auto;
`;

export const Image = styled.img`
  width: 15em;
  border-radius: 50%;
  border: 2px solid #37474e;
`;
