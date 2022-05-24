import React, {useContext, useEffect, useRef} from 'react';
import { UserDispatch } from '../App';
import useInputs from './useInputs';

function CreateUser() {

  const dispatch = useContext(UserDispatch);

  const nextId = useRef(4);

  const [{ username, email }, onChange, onReset] = useInputs({
    username: '',
    email: ''
  });



  console.log(username);
  console.log(email);
  return (
    <div>
      <input name="username" placeholder="계정명" onChange={onChange} value={username}/>
      <input name="email" placeholder="이메일" onChange={onChange} />
      <button onClick={()=>{
        dispatch({type:'CREATE_USER', user: {
          id: nextId.current,
          username,
          email
        }});
      }}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);;