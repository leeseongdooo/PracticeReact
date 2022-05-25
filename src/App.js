import React, {useState, useReducer} from "react";


function App() {

  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if(action.type === 'UP')
    {
      return oldCount + action.number;
    } 
    else if(action.type === 'DOWN')
    {
      return oldCount - action.number;
    } 
    else if(action.type === 'RESET')
    {
      return 0;
    }
  }

  // useReducer 안에 있는 countReducer는 "함수"를 불러오는 역할이다.
  // useReducer 안에 있는 0은 초기값을 의미한다.
  const [count, countDispatch] = useReducer(countReducer, 10);
  
  function down() {
    //'DOWN'은 action을 의미한다.
    countDispatch({type: 'DOWN', number: number});
  }

  function reset() {
    countDispatch({type: 'RESET', number: number});
  }

  function up() {
    countDispatch({type: 'UP', number: number});
  }

  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }

  return(
    <>
      <input type="button" value="-" onClick={down}/>
      <input type="button" value="0" onClick={reset}/>
      <input type="button" value="+" onClick={up}/> 
      <input type="text" value={number} onChange={changeNumber}/>
      <span>{count}</span>
    </>
  )
}

export default App