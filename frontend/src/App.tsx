import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Button onClick={() => setClickCount(clickCount+1)}>Clicked {clickCount} times
        </Button>
        
      </div>
    </div>
  );
}

export default App;
