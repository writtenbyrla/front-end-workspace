import { createAction, handleActions } from "redux-actions";

// 액션(Action) : 프로젝트의 상태에 변화를 일으키는 것

// 액션 타입을 정의
// 보통 액션은 대문자로 지정, 모듈이름/액션
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 액션 생성 함수(action creator): 액션 객체를 만들어 주는 함수 => createAction쓰기 가능
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// createAction을 사용하면 더욱 간단하게 액션 생성 함수 선언 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 리듀서(reducer): 변화를 일으키는 함수
// 초깃값 설정
const initialState = {
  counter: 0,
};

// 리듀서 함수 정의
// 리듀서는 파라미터값으로 state, action이 필요함 / state는 반드시 초기값이 들어가야함)
// const counter = (state = initialState, action) => {
//   switch (
//     action.type // action 타입 확인해서
//   ) {
//     case INCREASE: // increase일 경우
//       return {
//         counter: state.counter + 1, // 기본값에서 +1
//       };
//     case DECREASE: // decrease일 경우
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state; // 둘 다 아닐 경우 state 그대로 반환
//   }
// };

// handleActions 사용하여 리듀서 함수 정의
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ counter: state.counter + 1 }),
    [DECREASE]: (state, action) => ({ counter: state.counter - 1 }),
  },
  initialState // 초기값 설정한거는 두번째 파라미터값으로 넣어줌
);
export default counter;
