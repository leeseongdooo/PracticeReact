import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [Item, setItem] = useState("AA");

  // Input을 업데이트
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
      setValue(e.target.value)
      console.log(value)
    }

    return {onChange, value};
  }

  const name = useInput("MR");

  return (   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <input type="text" placeholder="name" onChange={name.onChange}/>
          <p>{name.value}</p>
      </header>
    </div>
  );
}

export default App;
