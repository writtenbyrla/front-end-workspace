//import { useState } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../store/modules/counter";

// button 자체를 컴포넌트로 만듦
const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

// useSelector, useDispatch 사용시 props 로 지정했던  ({ counter, increase, decrease }) 필요없음
//const Counter = ({ counter, increase, decrease }) => {
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  //const [counter, setCounter] = useState(0);

  // const plus = () => {
  //   setCounter(counter + 1);
  // };
  // const minus = () => {
  //   setCounter(counter - 1);
  // };

  return (
    <div>
      <h1>Total clicks: {counter}</h1>
      {/* <Button text="+1" click={(increase)} /> */}
      <Button text="+1" click={() => dispatch(increase())} />
      {/* <Button text="-1" click={decrease} /> */}
      <Button text="+1" click={() => dispatch(decrease())} />
    </div>
  );
};

// useSelector, useDispatch 사용하면 mapStateToProps, mapDispatchToProps 필요 없음
// 초기값 지정했던 counter 가지고 오는 역할
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
});

// 액션 생성 함수를 dispatch로 불러옴
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log("increase");
    dispatch(increase());
  },
  decrease: () => {
    console.log("decrease");
    dispatch(decrease());
  },
});

// connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
