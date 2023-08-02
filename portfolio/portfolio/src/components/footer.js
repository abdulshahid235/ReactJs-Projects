import git from "../images/github-logo.jpg";
import li from "../images/Linkedin.png";
// import mail from "../images/Mail.png";

function Footer() {
  return (
    <div className="footer">
      {/* <a href="">
        <img id="icon" src={mail} alt="mail" />
      </a> */}
      <a
        href="https://www.linkedin.com/in/abdulshahidmohammed/"
        target="_blank"
      >
        <img id="li-icon" src={li} alt="linkedin" />
      </a>
      <a href="">
        <img id="git-icon" src={git} alt="github" />
      </a>
    </div>
  );
}

export default Footer;
