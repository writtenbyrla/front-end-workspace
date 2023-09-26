import { useState } from "react";
import { BrowseRouter, Routes, Route, Link, useNavigate } from "react";
import "./App.css";

const Home = (list, deleteMovies) => {
  const onClick = (event) => {
    deleteMovies(event.target.id);
  };

  return (
    <>
      <h1>Movies</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={onClick} id={item.id}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const Create = (addMovies) => {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const title = event.target.title.value;
    const genre = event.target.genre.value;
    const date = event.target.date.value;

    addMovies(id, title, genre, date);
    navigate("/");
  };

  return (
    <>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmit}>
        <input type="text" id="id" name="id" placeholder="Input movie id" />
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Input movie title"
        />
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="Input movie genre"
        />
        <input type="date" id="date" name="date" />
        <input type="submit" value="Add Movie" />
      </form>
    </>
  );
};

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Movie 1",
      genre: "Drama",
      release_date: "2022-01-01",
    },
    {
      id: 2,
      title: "Movie 2",
      genre: "Drama",
      release_date: "2022-02-01",
    },
    {
      id: 3,
      title: "Movie 3",
      genre: "Drama",
      release_date: "2022-03-01",
    },
  ]);

  const addMovies = (id, title, genre, release_date) => {
    const newMovie = { id, title, genre, release_date };
    setMovies([...movies, newMovie]);
  };

  const deleteMovies = (id) => {
    const newList = movies.filter((item) => item.id !== parseInt(id));
    setMovies(newList);
  };

  return (
    <BrowseRouter>
      <Link to="/">List</Link>
      <Link to="/Create">Add New Movie</Link>

      <Routes>
        <Route
          path="/"
          element={<Home list={movies} deleteMovies={deleteMovies} />}
        />
        <Route path="/Create" element={<Create addMovies={addMovies} />} />
      </Routes>
    </BrowseRouter>
  );
};

export default App;
