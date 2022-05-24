import React, {useState} from "react";



function ArraySample() {

    function ArrayForm({users}) {
        return(
            <div>
                <h3>{users.username}</h3>
                <p>{users.email}</p>
            </div>
        )
    }

    const users = [
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
      ];

    return (
        <div>
            <h3>ArraySample</h3>
            
            {/* 1번 Map을 통해서 값을 가져온다 */}
            {/* {users.map((List) => (<ArrayForm users={List} key={List.id}/>))}/ */}
            
            {/* 무작정 적어본다. (비효율) */}
            {/* <div>
                <b>{users[0].id}</b> <span>{users[0].username}</span> 
            </div>

            <div>
                <b>{users[1].id}</b> <span>{users[1].username}</span> 
            </div>

            <div>
                <b>{users[2].id}</b> <span>{users[2].username}</span> 
            </div> */}

            <ArrayForm users={users[0]}/>
            <ArrayForm users={users[1]}/>
            <ArrayForm users={users[2]}/>

            <hr/>
        </div>
    )
}

export default ArraySample