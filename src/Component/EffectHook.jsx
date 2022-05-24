import React, {useState, useEffect} from "react";

// 마운트(처음 화면에 나타났을때)
// 언마운트 (화면에서 사라졌을 때)

function User({user, OnRemove})
{

    useEffect(()=>{
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
        console.log('user 가 바뀌기 전..');
        console.log(user);
        }
    }, []);

    return (
        <div>
            <b>{user.username}</b>
            <span> ({user.email})</span>
            <button onClick={()=>{OnRemove(user.id)}}>삭제</button>
        </div>
    )
}

function EffectHook() {

    const [user, setUsers] = useState([
        {
          id: 1,
          username: 'velopert',
          email: 'public.velopert@gmail.com'
        },
        {
          id: 2,
          username: 'tester',
          email: 'tester@example.com'
        },
        {
          id: 3,
          username: 'liz',
          email: 'liz@example.com'
        }
      ]);

      const OnRemove = id => {
          setUsers(user.filter(List=>List.id !== id))
    }

    return (
        <div>
            <h3>EffectHook</h3>
            {user.map((List) => <User key={List.id} OnRemove={OnRemove} user={List}/>)}
            <hr/>
        </div>
    )
}

export default EffectHook;