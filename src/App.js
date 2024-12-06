import "./App.css";
import About from "./components/About";
import Companies from "./components/Companies";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RecentWorks from "./components/RecentWorks";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <RecentWorks />
      <Companies />
      <Projects />
    </div>
  );
}

export default App;
