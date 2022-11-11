import styled from "styled-components";

export const Button = styled.button`
border: 1px solid grey;
border-radius: 10px;
background-color: white;
cursor: pointer;
font-size: 20px;
width: 100px;
height: 40px;

:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: rgb(131,58,180);

  background: linear-gradient(
    90deg,
    rgb(238, 112, 112) 0%,
    rgb(88, 207, 104) 50%,
    rgb(84, 206, 214) 100%
  );
}
`