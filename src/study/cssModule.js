// css module

// App.js

import React, { useState } from 'react';
import CheckBox from './components/CheckBox';

function App() {
  const [check, setcheck] = useState(false);
  const onChange = e => {
    setcheck(e.target.checked);
  }
 
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}>
        다음 약관에 모두 동의
      </CheckBox>
    </div>
    
  );
}

export default App;


// CheckBox.js

import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md"; // 리액트 아이콘 라이브러리로 아이콘 불러옴
import styles from './CheckBox.module.css';
import classNames from 'classnames/bind'; // classnames/bind는 css 모듈을 사용할 때 더 쉽게 사용하게 해줌

const cx = classNames.bind(styles); // classNames 라이브러리를 사용해서 styles를 넣어주면 클래스에 스타일을 넣어줄 때 styles을 일일히 안 넣어줘도 되서 편리하다.

function CheckBox({ checked, children, ...rest }) {
    return (
        <div className={cx('CheckBox')} >
            <label>
                <input type="checkbox" checked={checked} {...rest}/>
                <div className={cx('icon')}>{checked ? (<MdCheckBox className={cx('checked')}/>) : (<MdCheckBoxOutlineBlank/>) }</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

export default CheckBox;


// CheckBox.module.css

.checkbox {
    display: flex;
    align-items: center;
}

.checkbox label {
    cursor: pointer;
}

.checkbox input { /* checkbox에 있는 input을 숨겨줌 */
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
}

.checkbox span {
    font-size: 1.125rem;
    font-weight: bold;
}

.icon {
    display: flex;
    align-items: center;
    font-size: 2rem; /* 아이콘의 크기는 font-size로 지정해줄 수 있다. */
    margin-right: 0.25rem;
    color: #adb5bd;
}

.checked {
    color: #339af0; /* 체크했을 때의 색 */
}

//////

import React from 'react';
import styled, { css } from 'styled-components'; // 템플릿 리터럴 내의 props 내에서 또 props를 선언하고 싶으면 css를 선언해주면 된다.

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