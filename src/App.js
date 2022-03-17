import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Homepage from "./views/Homepage";
// import Coinpage from "./views/Coinpage";
// import Homepage from "./views/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
