import call from "../images/call.png";

export default function ReachMe() {
  return (
    <div>
      <div className="call-section">
        <img className="icon" src={call} alt="phone" />
        <div className="details">
          <h4>Call Me</h4>
          <h4>+1 716-348-1644</h4>
        </div>
      </div>
    </div>
  );
}
