// 버튼 만들기

// App.js

import React from 'react';
import styled from 'styled-components';
import Button2 from './components/Button2';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;


function App() {
 
  return (
   <AppBlock>
     <Button2>BUTTON</Button2>
   </AppBlock>
  );
}

export default App;


// button2.js

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight:bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: #228be6;
    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }

    /* 버튼 간의 간격 */
    & + &{
        margin-left: 1rem;
    }
`;

function Button2({ children, ...rest }) {
return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button2;