import "./Navbar.css";
import Darklightmodus from "../Darklightmodus/Darklightmodus";

const Navbar = () => {
  return (
    <nav>
      <a href="#">JS.</a>
      <div>
        <a href="#">projects</a>
        <a href="#">skills</a>
        <a href="#">contact</a>
        <Darklightmodus />
      </div>
    </nav>
  );
};

export default Navbar;
