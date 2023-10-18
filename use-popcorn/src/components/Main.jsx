import MoviesBox from "./MoviesBox";
import WatchedBox from "./WatchedBox";

const Main = ({ movies }) => {
  return (
    <main className="main">
      <MoviesBox movies={movies} />
      <WatchedBox />
    </main>
  );
};

export default Main;
