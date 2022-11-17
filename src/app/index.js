import "./reset.css";
import "./index.css";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionWork from "./components/SectionWork";
import SectionFooter from "./components/SectionFooter";

// import Socials from "./components/Socials";
// import Underline from "./components/Underline";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionAbout />
      <SectionWork />
      <SectionFooter />
    </div>
  );
}

export default App;
