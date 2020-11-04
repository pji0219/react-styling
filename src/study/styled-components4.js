// 버튼 크기

// App.js

import React from 'react';
import styled, { ThemeProvider } from 'styled-components'; // ThemeProvider를 사용하면 styled-components를 사용하는 모든 컴포넌트에서 색상을 지정할 수 있다.
import Button2 from './components/Button2';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
};

function App() {
 
  return (
    <ThemeProvider theme={{palette}}> {/* ThemeProvider 사용 */}
      <AppBlock>
        <ButtonGroup>
          <Button2 color="blue" size="small">BUTTON</Button2>
          <Button2 color="pink" size="medium">BUTTON</Button2>
          <Button2 color="gray" size="large">BUTTON</Button2>
        </ButtonGroup>
      </AppBlock>
   </ThemeProvider>
  );
}

export default App;


// Button2.js

import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished'; // polished의 darken, lighten 함수 불러옴


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
    ${props => 
        props.size === 'large' &&
        css`
            height: 3rem;
            font-size: 1.25rem;
        `}

    ${props => 
        props.size === 'medium' &&
        css`
            height: 2.25rem;
            font-size: 1rem;
        `}
    
    ${props => 
        props.size === 'small' &&
        css`
            height: 1.75rem;
            font-size: 0.875rem;
        `}

    /* 색상 */
    ${props => {
        const color = props.theme.palette[props.color];
        return css`
            background: ${color};
            &:hover {
                background: ${lighten(0.1, color)};
            }
            &:active {
                background: ${darken(0.1, color)};
            }
        `;
    }}

    /* 버튼 간의 간격 */
    & + &{
        margin-left: 1rem;
    }
`;

function Button2({ children, color, size, ...rest }) {
return <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>;
}

export default Button2;