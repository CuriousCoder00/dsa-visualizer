import Algos from "./pages/Algos";
import Hero from "./pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import WorkingOnIt from "./pages/WorkingOnIt";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/algos" element={<Algos />} />
        <Route exact path="/algos/*" element={<WorkingOnIt />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
