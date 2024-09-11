import "./layout.scss";
import { Navbar } from "./components";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
