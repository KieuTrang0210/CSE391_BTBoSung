// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import News from "./components/news";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
