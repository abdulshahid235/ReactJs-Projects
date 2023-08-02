import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <p className="header--card">Digital Card</p>

      {/* <p className="header--skills">Skill Set</p> */}
      <p>
        <Link to="skills" smooth={true} duration={500} offset={-75}>
          Skill Set
        </Link>
      </p>
      <p>
        <Link to="work-exp" smooth={true} duration={500} offset={-75}>
          Work Experience
        </Link>
      </p>
      <p className="header--reachout">React me out!</p>
    </div>
  );
}

export default Header;
