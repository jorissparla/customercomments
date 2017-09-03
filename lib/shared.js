import styled from 'styled-components';

export const H1 = styled.h1`font-weight: 200;`;

export const Input = styled.input`
  margin-top: 10px;
  margin-right: 10px;
  font-family: Roboto;
  font-size: 16px;
  display: flex;
  width: 20%;
  min-width: 200px;
  height: 34px;
  padding: 6px 12px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  :focus {
    border: 2px solid blue;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-bottom-style: dotted;
  border-bottom-color: lightgrey;
  border-bottom-width: thin;
  alignContent: center;
  ::before': {
    position: relative;
    top: 15px;
    left: 40px;
    width: 20px;
    padding: 1px;
    height: 20;
    border: 3px solid grey;
    backgroundColor: papayawhip;
    borderRadius: 50%
  }`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-left: 30px;
  margin-top: 30px;
  border: 1px solid lightgrey;
  border-radius: 8px;
  boxshadow: 0px 0px 10px black;
`;

export const Button = styled.button`
  width: 20%;
  min-width: 200;
  padding: 15px;
  margin: 10px 0px 10px 0px;
  background: #21a957;
  font-family: Open Sans;
  color: #ececec;
  box-shadow: inset 0px 0px 10px #666464;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 400;
  border-radius: 5px;
  transition: 0.5s;
  text-transform: uppercase;
  justify-content: center;
`;

export const ErrorText = styled.h3`
  font-weight: 200;
  font-family: 'Roboto';
  color: palevioletred;
`;
