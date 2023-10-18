import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResults from "./NumResults";

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
