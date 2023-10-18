import { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { tempMovieData } from "./components/constants";
export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
