import styled from "styled-components";

export const Program = styled.p`
  margin: ${props => props.name ? '50px' : '0px'};
  font-weight: ${props => props.name ? 'bold': ''};
  font-size: ${props => props.name ? '2em' : '1.5em'}
`;

export const ProgramSection = styled.section`
  display: flex;
  margin-bottom: 50px;
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
  border: 2px solid darkblue;
`;
