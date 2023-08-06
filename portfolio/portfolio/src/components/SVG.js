import me from "../images/me_port.png";

export default function SVG() {
  return (
    <div className="svg">
      <BlobSVG />
      {/* <BlobBackground /> */}
    </div>
  );
}

const BlobSVG = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stop-color="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="url(#sw-gradient)"
        d="M20.6,-36.9C26.4,-32.3,30.7,-26.3,35,-19.9C39.3,-13.5,43.6,-6.7,44.9,0.7C46.2,8.2,44.5,16.5,39.8,22.2C35.1,27.9,27.5,31.1,20.3,34.2C13.2,37.3,6.6,40.3,-0.5,41.2C-7.6,42.1,-15.2,40.8,-21.1,37C-27,33.2,-31.2,26.8,-34.3,20.2C-37.3,13.6,-39.3,6.8,-40.3,-0.6C-41.4,-8,-41.5,-16,-38,-21.9C-34.6,-27.8,-27.4,-31.5,-20.5,-35.4C-13.5,-39.4,-6.8,-43.5,0.3,-44C7.4,-44.6,14.8,-41.5,20.6,-36.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        // style={{"transition: all 0.3s ease 0s"}}
      ></path>{" "}
    </svg>
  );
};

const BlobBackground = () => {
  const pathData =
    "M20.6,-36.9C26.4,-32.3,30.7,-26.3,35,-19.9C39.3,-13.5,43.6,-6.7,44.9,0.7C46.2,8.2,44.5,16.5,39.8,22.2C35.1,27.9,27.5,31.1,20.3,34.2C13.2,37.3,6.6,40.3,-0.5,41.2C-7.6,42.1,-15.2,40.8,-21.1,37C-27,33.2,-31.2,26.8,-34.3,20.2C-37.3,13.6,-39.3,6.8,-40.3,-0.6C-41.4,-8,-41.5,-16,-38,-21.9C-34.6,-27.8,-27.4,-31.5,-20.5,-35.4C-13.5,-39.4,-6.8,-43.5,0.3,-44C7.4,-44.6,14.8,-41.5,20.6,-36.9Z";

  // Replace 'your_picture_url_here' with the actual URL or base64 data of your picture
  // const pictureURL = "your_picture_url_here";
  //   const imageWidth = "600px";
  return (
    <div className="blob-container">
      <div
        className="blob-shape"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100"><path fill="rgba(248, 117, 55, 1)" d="' +
              pathData +
              '" transform="translate(50 50)" /></svg>'
          )}")`,
        }}
      />
      <img src={me} alt="Your" className="foreground-image" />
    </div>
  );
};
