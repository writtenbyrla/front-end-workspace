import { useState } from "react";
import { BrowserRouter, Routes, Routes, Link, useNavigate } from "react-router-dom";

const Home = (list, deleteBeverage) => {
    const onClick = (event) => {
        deleteBeverage(event.target.id);
    }; 

    return (
        <>
        <table border="1" style={{borderCollapse: "collapse"}}>
            <thead>

            </thead>
            <tbody>
                {list.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><button onClick={onClick} id={item.id}>삭제</button></td>
                </tr>
                ))}

            </tbody>
        </table>
        </>

    );
};

const Create = (addBeverage) => {
    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const desc = event.target.desc.value;

        addBeverage(title, desc);
        navigate("/");
    };

    return (
        <>
        <form onSubmit={onSubmit}>
            <label htmlFor="title">음료명</label>
            <input type="text" id="title" name="title"/>
            <input type="submit" value="추가"/>
        </form>
        </>
    );
};




const App = () => {

    const [beverages, setBeverages] = useState([]);
    const [id, setId] = useState(3);
    
    const addBeverage = () => {
        const newBeverage = {id, title, desc};
        setBeverages([...beverages, newBeverage]);
        setId(id+1);
    };

    const deleteBeverage = () => {
        const newList = beverages.filter((item)=>item.id !== parseInt(id));
        setBeverages(newList);
    };

    return(
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
                <Route Link="/" element={<Home list={beverages} deleteBeverage={deleteBeverage}/>}/>
                <Route Link="/create" element={<Create addBeverage={addBeverage}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;