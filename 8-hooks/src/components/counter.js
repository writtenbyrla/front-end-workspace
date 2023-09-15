import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// button 자체를 컴포넌트로 만듦
// text, click에 대한 타입 설정 하려면 npm install prop-types 해야함(라이브러리 설치)
// => package.json에서 prop-types 생긴거 확인 가능, import 해주기
const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always"); // useEffect 사용하지 않으면 버튼 누를때마다 reload돼서 always가 계속 찍힘

  // useEffect(() => {함수}, [배열]);
  useEffect(() => {
    console.log("useEffect"); // 배열이 비어있는 경우 처음 1번만 호출
  }, []);

  // counter가 변경될 때마다 호출(배열부분에 counter)
  useEffect(() => {
    console.log("counter change");
  }, [counter]);

  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
          color: "white",
        }}
      >
        Total clicks: {counter}
      </h1>
      <Button text="+1" click={plus} />
      <Button text="-1" click={minus} />

      {/* <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button> */}
    </div>
  );
};

export default Counter;
