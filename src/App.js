import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
 
  return (
    <div className="App">
      <div className="buttons">
        <Button size="small" outline={true}>BUTTON</Button> {/* outline을 true로 설정*/}
        <Button color="gray" outline={true}>BUTTON</Button>
        <Button color="pink" size="large" outline={true}>BUTTON</Button>
      </div>
      <div className="buttons">
        <Button size="large" fullWidth={true}>BUTTON</Button> {/* fullWidth를 true */}
        <Button color="gray" size="large" fullWidth={true}>BUTTON</Button>
        <Button 
        color="pink" 
        size="large" 
        fullWidth={true} 
        onClick={ () => {
          console.log('클릭!');
        }}
        onMouseMove={ () => {
          console.log('마우스 무브!');
        }}
        >
          BUTTON
        </Button>
      </div>
    </div>
    
  );
}

export default App;
