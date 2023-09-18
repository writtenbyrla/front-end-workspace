import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
// NavLink는 Link랑 다르게 active 활성화 됨
import { useState } from "react";
import "./App.css"; // css 파일 연결

const Home = ({ list, deleteBeverage }) => {
  console.log(list);
  const onClick = (event) => {
    console.log(event.target.id); // 삭제버튼 클릭 시 id값 출력
    deleteBeverage(event.target.id);
  };
  return (
    <>
      {/* borderCollapse: "collapse" 테이블 border 1줄 처리 */}
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>음료명</th>
            <th>설명</th>
            <th>삭제</th>
          </tr>
        </thead>
        {/* for문 대신 콜백함수 */}
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.desc}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Create = ({ addBeverage }) => {
  // const Create = (prop) => {
  // console.log(prop); // 객체 방식으로 들어감 {addBeverage: ƒ}
  // console.log(prop.addBeverage); 이렇게 받아야 하는데 복잡하니까
  // 상단에서 바로 const Create = ({addBeverage}) => { 이렇게 객체방식으로 함수를 받아버림

  // 추가하면 목록으로 이동하도록 navigate 추가
  const navigate = useNavigate();

  // App 컴포넌트에게 create 컴포넌트가 던질 수 없음(상위->하위 가능, 하위->상위 불가능)
  const onSubmit = (event) => {
    // 순식간에 끝나는 이벤트를 막음
    event.preventDefault();
    const title = event.target.title.value;
    const desc = event.target.desc.value;
    addBeverage(title, desc);
    navigate("/");
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          {/* label for 쓸 경우 에러남 */}
          <label htmlFor="title">음료명 : </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="음료명 입력"
          />
        </div>
        <div>
          <label htmlFor="desc">설명 : </label>
          <input type="text" id="desc" name="desc" placeholder="설명 입력" />
        </div>
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

const App = () => {
  const [id, setId] = useState(3);
  const [beverages, setBeverages] = useState([
    {
      id: 1,
      title: "여수 윤슬 헤이즐넛 콜드브루",
      desc: "윤슬을 형상화한 헤이즐넛 콜드브루",
    },
    {
      id: 2,
      title: "아이스 오렌지 판타지 유스베리 티",
      desc: "상큼한 오렌지와 유시베리, 얼그레이 티의 조화",
    },
  ]);

  const addBeverage = (title, desc) => {
    console.log(title);
    console.log(desc);

    // 새로운 음료 객체 생성
    // const newBeverage = {
    //   id: id,
    //   title: title,
    //   desc: desc,
    // };
    const newBeverage = { id, title, desc };

    console.log(newBeverage);
    setBeverages([...beverages, newBeverage]);
    setId(id + 1);
  };

  const deleteBeverage = (id) => {
    // 넘겨받은 id가 일치하지 않는 경우만 남겨서 새로운 리스트로 만듦
    const newList = beverages.filter((item) => item.id !== parseInt(id));
    setBeverages(newList);
  };

  return (
    <BrowserRouter>
      <h1>Cafe</h1>
      <ul>
        <li>
          <Link to="/">목록</Link>
        </li>
        <li>
          <Link to="/create">추가</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={<Home list={beverages} deleteBeverage={deleteBeverage} />}
        ></Route>
        {/* Create addBeverage={addBeverage} : 함수를 props로 던짐 */}
        <Route path="/create" element={<Create addBeverage={addBeverage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
