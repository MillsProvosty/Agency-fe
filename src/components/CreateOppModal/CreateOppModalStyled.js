import styled from "styled-components";

export const CreateOppForm = styled.form`
  margin: 50px auto;
  height: auto;
  background-color: white;
  border: 1px solid #37474e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding: 20px;
  font-family: "Quicksand", sans-serif;
  color: #7a86cb;

  @media screen and (max-width: 375px) {
    margin: 130px 4px;
    height: auto;
    width: 98%;
    padding: 10px;
  }

  @media screen and (display-mode: standalone) {
    margin: 130px 4px;
    height: auto;
    width: 98%;
    padding: 10px;
  }
`;


export const PTag = styled.p`
  font-size: 2em;
`;

export const Input = styled.input`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  border: 1px solid #37474e;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  margin-top: 10px;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  font-size: 1.5em;
  height: 3em;
  border: 1px solid #37474e;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  margin-top: 10px;
`;

export const Button = styled.button`
  border-radius: 5px;
  font-size: 1.5em;
  height: 2em;
  padding: 5px;
  width: 300px;
  font-family: "Quicksand", sans-serif;
  margin-top: 10px;
  border: 2px solid white;
  color: white;
  background-color: #7a86cb;
  margin-top: 30px

  :hover {
    border: 2px solid #7a86cb;
    color: #7a86cb;
    background-color: white;
  }
`;
