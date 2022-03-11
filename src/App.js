import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderNav from "./components/HeaderNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
      </BrowserRouter>
    </div>
  );
}

export default App;
