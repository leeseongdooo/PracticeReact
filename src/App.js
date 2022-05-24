import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import InputSample from './Component/InputSample';
import ArraySample from './Component/ArraySample';
import EffectHook from './Component/EffectHook';
import MemoHook from './Component/MemoHook';

function App() {
  // state설정
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;
  
  // 인풋요소 바뀌였을 때
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  // 기본값
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  // 사용자 추가
  const nextId = useRef(4);
  
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  // 사용자 제거
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };  

    return (
        <div>
          <InputSample/>    
          <ArraySample/>  
          <EffectHook/>
          <MemoHook/>
        </div>
    )
}

export default App;
