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
