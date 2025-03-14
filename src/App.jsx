import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Research from "./Components/Research";
import Projects from "./Components/Projects";
import ExtentedProject from "./Components/ExtentedProject";
import Skills from "./Components/Skills";
import Certificates from "./Components/Certificates";
// import Leadership from "./Components/Leadership";
import Career from "./Components/Career";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Research />
      <Projects />
      <ExtentedProject />
      <Skills />
      <Certificates />
      {/* <Leadership /> */}
      <Career />
    </>
  );
}

export default App;
