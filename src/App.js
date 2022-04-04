import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/Resume/Resume";
import Study from "./components/Study/Study";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to="/portfolio">Chris Márquez</Link>
              </li>
              <li>
                <Link to="/studies">UX Case Study 1</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/studies" element={<Study />}></Route>
            <Route path="/portfolio" element={<Resume />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
