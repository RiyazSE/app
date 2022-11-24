import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
// import GoodNews from './components/GoodNews';
import Navbar from "./components/Navbar";
import World from "./components/world";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container my-3">
          {/* <GoodNews title="my title" description="my desc"/> */}
          <Routes>
            <Route
              path="/"
              element={<World country="in" category="genral" />}
            />
            <Route path="/buisness" element={<World category="business" />} />
            <Route path="/science" element={<World category="science" />} />
            <Route path="/genral" element={<World category="general" />} />
            <Route path="/health" element={<World category="health" />} />
            <Route path="/sports" element={<World category="sports" />} />
            <Route
              path="/entertainment"
              element={<World category="entertainment" />}
            />
            <Route
              path="/technology"
              element={<World category="technology" />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
