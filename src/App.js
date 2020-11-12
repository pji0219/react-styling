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
        <ButtonGroup>
          <Button2 color="blue" size="small" outline>BUTTON</Button2>
          <Button2 color="pink" size="medium" outline>BUTTON</Button2>
          <Button2 color="gray" size="large" outline>BUTTON</Button2> {/* outline = outline={true} */}
        </ButtonGroup>
        <ButtonGroup>
          <Button2 color="blue" size="large" fullWidth>BUTTON</Button2>
          <Button2 color="pink" size="large" fullWidth>BUTTON</Button2>
          <Button2 color="gray" size="large" fullWidth>BUTTON</Button2>
        </ButtonGroup>
      </AppBlock>
   </ThemeProvider>
  );
}

export default App;