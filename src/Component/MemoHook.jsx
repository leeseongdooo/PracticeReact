import React, {useState, useEffect, useRef, useMemo} from "react";
import EffectHook from "./EffectHook";

function User({user, setUsers, usersList})
{

    useEffect(()=>{
        console.log(user);
    }, [usersList]);

    function ClickEvent() {
        if(user.active == false)
        {
            setUsers(usersList.map(List => List.id == user.id ? {...List, active: true} : List ));
        } else {
            setUsers(usersList.map(List => List.id == user.id ? {...List, active: false} : List ));
        }
               
    }

    return (
        <div>
            <b style={user.active ? {color: 'green'} : {}} onClick={ClickEvent}>{user.username}</b>
            <span> ({user.email})</span>
            <button>삭제</button>
        </div>
    )
}


// 활성화가 되어있는 사용자 수
function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는중 ");
    return users.filter(user => user.active).length
}

function MemoHook() {

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

    const count = useMemo(() => countActiveUsers(users), [users])
    return (
        <div>
            <h3>MemoHook</h3>
            {users.map((List) => <User user={List} usersList={users} key={users.id} setUsers={setUsers}/>)}
            <div>활성사용자 수 : {count}</div>
        </div>
    );
}

export default MemoHook;