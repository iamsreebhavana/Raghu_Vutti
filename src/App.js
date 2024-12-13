import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CollaborationForm from "./components/CollaborationForm";
import Home from "./Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inquiry" element={<CollaborationForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
