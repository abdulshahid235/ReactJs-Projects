import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

// const details = (
//   <div>
//     <img src="React-icon.svg" height="200px" width="200px" />
//     <h1>Fun Facts about React!</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has overall 100k stars on Github</li>
//       <li>is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps</li>
//     </ul>
//   </div>
// );

// function PageDetails() {
//   return (
//     <div>
//       <img src="React-icon.svg" height="200px" width="200px" />
//       <h1>Fun Facts about React!</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has overall 100k stars on Github</li>
//         <li>is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<PageDetails />, document.getElementById("root"));

//Components

function Footer() {
  return (
    <footer>
      <small>Mohammed Development. All rights reserved!</small>
    </footer>
  );
}

function MainComponent() {
  return (
    <div>
      <h1>Reasons I am excited to learn React:</h1>
      <ol>
        <li>Learning React is cool</li>
        <li>The skill is in high demand</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
