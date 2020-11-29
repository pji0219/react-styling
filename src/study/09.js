// Dialog 만들기


//App.js
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'; // ThemeProvider를 사용하면 styled-components를 사용하는 모든 컴포넌트에서 색상을 지정할 수 있다.
import Button2 from './components/Button2';
import Dialog from './components/Dialog';

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
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };
 
  return (
    <ThemeProvider theme={{palette}}> {/* ThemeProvider 사용 */}
      <>
        <AppBlock>
          <ButtonGroup>
            <Button2 color="blue" size="small">BUTTON</Button2>
            <Button2 color="pink" size="medium">BUTTON</Button2>
            <Button2 color="gray" size="large">BUTTON</Button2>
          </ButtonGroup>
          <ButtonGroup>
            <Button2 color="blue" size="small" outline>BUTTON</Button2>
            <Button2 color="pink" size="medium" outline>BUTTON</Button2>
            <Button2 color="gray" size="large" outline>BUTTON</Button2> {/* outline = outline={true} */}
          </ButtonGroup>
          <ButtonGroup>
            <Button2 color="blue" size="large" fullWidth>BUTTON</Button2>
           <Button2 color="pink" size="large" fullWidth>BUTTON</Button2>
            <Button2 color="gray" size="large" fullWidth>BUTTON</Button2>
            <Button2 color="pink" size="large" fullWidth onClick={onClick}>삭제</Button2>
          </ButtonGroup>
        </AppBlock>

        <Dialog title="정말로 삭제 하시겠습니까?"
         confirmText="삭제"
         cancelText="취소"
         onConfirm={onConfirm}
         onCancel={onCancel} 
         visible={dialog}

        >
          데이터를 정말로 삭제 하시겠습니까?
        </Dialog>
      </>
   </ThemeProvider>
  );
}

export default App;


//Dialog.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button2 from './Button2';

// 서서히 올라오는 효과
const fadeIn = keyframes`
    from {
        opacity: 0; /* 시작할 때 스타일 */
    }
    to {
        opacity: 1; /* 끝날 때 스타일 */
    }
`;

// 서서히 내려가는 효과
const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

// 아래에서 위로 올라오는 효과
const slideDown =  keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px); 
    }
`;

// 위에서 아래로 내려가는 효과
const slideUp =  keyframes`
    from {
        transform: translateY(200px); 
    }
    to {
        transform: translateY(0px);
    }
`;


const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;

    ${props => props.disappear && css`
        animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;

    /* styled-components 내부에 scss도 선언 가능 */
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props => props.disappear && css`
        animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;    
`;

// Button2 컴포넌트 상속 가능
const ShortMarginButton = styled(Button2)`
    & + & {
        margin-left: 0.5rem;
    }
`;

function Dialog({ title, children, confirmText, cancelText, visible, onConfirm, onCancel }) {
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisble] = useState(visible);

    useEffect(() => {
        // visible: true -> false
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisble(visible);
    }, [localVisible, visible]);

    if(!localVisible && !animate) return null;

    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <ShortMarginButton color="gray" onClick={onCancel} >{cancelText}</ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm} >{confirmText}</ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    cancelText: '취소',
    confirmText: '확인'
}

export default Dialog;