import call from "../images/call.png";
import mail from "../images/email.png";

export default function ReachMe() {
  return (
    <div id="reach-me" className="contact-details">
      <h1>Reach Me</h1>
      <div className="reach-me">
        <div className="call-section">
          <img className="icon" src={call} alt="phone" />
          <div className="details">
            <h4>Call Me</h4>
            <h4>+1 716-348-1644</h4>
          </div>
        </div>
        <div className="call-section">
          <img className="icon" src={mail} alt="mail" />
          <div className="details">
            <h4>Email Me</h4>
            <h4>shahidabdul235@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
