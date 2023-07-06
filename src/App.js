import {HashRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./coponentes/Home";
import Signin from "./coponentes/Signin";
import About from "./coponentes/About";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">


      <HashRouter>
      <marquee behavior="" direction="right">yes its my first project!!</marquee>
      <div>
       <Link to={"/"} > <button>Home</button></Link>
       <Link to={"/signin"}> <button>Sign in</button></Link>
       <Link to={"/about"}> <button>About</button></Link>
      </div>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/about" element={<About/>} />
      </Routes>
      
      </HashRouter>
    </div>
  );
}

export default App;
