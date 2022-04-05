import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import Homepage from "./views/Homepage";
import Coinpage from "./views/Coinpage";
import {makeStyles} from "@material-ui/core"

function App() {

  const useStyles = makeStyles(()=> ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    }
  })) 

  const classes = useStyles()

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coin/:id" element={<Coinpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
