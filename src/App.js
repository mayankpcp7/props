import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "./assets/images/png/dropdown.png";
import more from "./assets/images/png/dropdown.png";
import pic1 from "./assets/images/png/endurance.png";

function App() {
  return (
    <>
      <Navbar bg="bg_black" Dropdown={arrow} d="All page" arrow={more} />
      <About p1="The body is a fascinatingly complex machine composed of different cells, each with its particular set of functions mediated by a centralized system, which is the brain. All cells interact to maintain a controlled and stable environment within the body. Any deviation from that balanced state will trigger bodily reactions to restore equilibrium in the short term otherwise the body will find a way to compensate for its ineffective restoration, leading ultimately to dysfunction, disease and undue tensions." />

      <Navbar
        bg="bg_parrot"
        children={more}
        Dropdown={arrow}
        Project="Project"
        d="project"
      ></Navbar>
      <Navbar bg="bg_red" b="Work" d="All page" Dropdown={arrow} arrow={more} />
    </>
  );
}

export default App;
