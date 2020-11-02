// polished 스타일 유틸 함수

// App.js

import React from 'react';
import styled, { ThemeProvider } from 'styled-components'; // ThemeProvider를 사용하면 색상을 지정할 수 있다.
import Button2 from './components/Button2';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
};

function App() {
 
  return (
    <ThemeProvider theme={{palette}}>
      <AppBlock>
        <Button2>BUTTON</Button2>
      </AppBlock>
   </ThemeProvider>
  );
}

export default App;


// Button2.js

// 버전1

import React from 'react';
import styled from 'styled-components';
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
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: ${props => props.theme.palette.blue}; // theme에 있는  blue 색상을 불러옴
    &:hover {
        background: ${props => lighten(0.1, props.theme.palette.blue)}; // lighten 함수 사용
    }
    &:active {
        background: ${props => darken(0.1, props.theme.palette.blue)}; // darken 함수 사용
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


// 버전2

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
    height: 2.25rem;
    font-size: 1rem;

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

function Button2({ children, color, ...rest }) {
return <StyledButton color={color} {...rest}>{children}</StyledButton>;
}

Button2.defaultProps = {
    color:'blue'
};

export default Button2;

// 버전3

import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${({ theme, color }) => { // 비구조화 할당
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

  /* 버튼 간의 간격 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button2({ children, color, ...rest }) {
  return <StyledButton color={color} {...rest}>{children}</StyledButton>;
}

Button2.defaultProps = {
  color: 'blue'
};

export default Button2;