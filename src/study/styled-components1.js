// App.js

import React from 'react';
import styled, { css } from 'styled-components'; // 조건부로 props를 여러개 선언하고 싶으면 이렇게 css를 불러와 줘야한다.

const Circle = styled.div` // 원을 만드는 styled-components
  width: 5rem;
  height: 5rem;
  background: ${props => props.color}; // 배경색을 props로 받아옴
  border-radius: 50%;
  ${props => // 크기 props
    props.huge &&
   css`
      width: 10rem;
      height: 10rem;
   `}
`;

function App() {
 
  return (
    <>
      <Circle color="skyblue" />
      <Circle color="blue" huge />
    </>
  );
}

export default App;