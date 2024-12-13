import "./App.css";
import About from "./components/About";
import Collaboration from "./components/Collaboration";
import Companies from "./components/Companies";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import RecentWorks from "./components/RecentWorks";
import TestimonialCarousel from "./components/Testimonial";

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
      <Collaboration />
      <TestimonialCarousel />
    </div>
  );
}

export default App;
