// import React from "react"; 리액트 전체 임포트
import { useState, useEffect } from "react";

const Converter = () => {
  const [number, setNumber] = useState("");
  const [bool, setBool] = useState(true);
  const [text, setText] = useState("invert");

  // input onChange 함수
  const change = (event) => {
    console.log(event.target.value); // 입력값 그대로 console에 찍힘
    setNumber(event.target.value); // 입력값 바뀔때마다 number에 그 값을 넣어줌
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) setText("Invert");
    else setText("Turn Back");
  }, [bool]);

  return (
    <>
      <h1>Time Conventer</h1>
      <div>
        <label>Minutes</label>
        <input
          id="minutes"
          type="number"
          placeholder="Minutes"
          onChange={change}
          disabled={!bool}
          value={bool ? number : Math.floor(number * 60)}
        />
      </div>
      <div>
        <label>Hours</label>
        <input
          id="hours"
          type="number"
          placeholder="Hours"
          onChange={change}
          disabled={bool}
          value={bool ? Math.floor(number / 60) : number}
          // true일때 hour, false면 number 자체
        />
      </div>
      <Btn click={reset} btnText="Reset" backgroundColor="tomato" />
      <Btn click={invert} btnText={text} backgroundColor="skyblue" />
    </>
  );
};

// 하위 컴포넌트로 Btn 따로 뺌(변수명 상위 컴포넌트에서 전달해야함)
const Btn = ({ click, btnText, backgroundColor }) => {
  return (
    <button
      onClick={click} // 위에서 click={invert}로 넘김
      style={{
        //backgroundColor: backgroundColor,
        backgroundColor, // 위에서 똑같이 명시해줬기 때문에 하나만 명시가능
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
      }}
    >
      {btnText}
    </button>
  );
};

export default Converter;
