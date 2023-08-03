import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer";
import SkillSet from "./components/SkillSet";
import WorkExperience from "./components/WorkExperience";
import ReachMe from "./components/ReachMe";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SkillSet />
      <WorkExperience />
      <ReachMe />
      <Footer />
    </div>
  );
}

export default App;
