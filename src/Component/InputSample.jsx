import React, {useState} from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    // 33, 34번에서 value에 넣기 위해 사용
    const {name, nickname} = inputs;
    
    const Change = (e) => {
      const {value, name} = e.target;
      
      setInputs({
        ...inputs,// spread 문법 객체의 내용을 모두 펼쳐서 기존 객체를 복사
        [name]: value // name 키를 가진 값을 value 로 설정
      });
    };
    
    const check = () => {console.log(inputs)};
    
    const Reset = () => {
      setInputs({
        name: '',
        nickname: '',
      })
    }
    
    return (
        <div>
            <h3>InputSample</h3>
            <input type="text" name='name' placeholder="이름" onChange={Change} value={name}/>
            <input type="text" name='nickname' placeholder="닉네임" onChange={Change} value={nickname}/>
            <button onClick={check}>확인</button>
            <button onClick={Reset}>초기화</button>
    
            <div>
                <h5>값: </h5>
                <p>이름: {name}</p>
                <p>닉네임: {nickname}</p>
            </div>
            <hr />
        </div>
    )
}

export default InputSample;