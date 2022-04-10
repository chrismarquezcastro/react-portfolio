import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

/* Components */
import Resume from "./components/Resume/Resume";
import SecuritySettingsStudy from "./components/SecuritySettingsStudy/SecuritySettingsStudy";
import FirstRedesign from "./components/FirstRedesign/FirstRedesign";

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
                <Link to="/study1">UX Case Study 1</Link>
              </li>
              <li>
                <Link to="/study2">UX Case Study 2</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/study1" element={<SecuritySettingsStudy />}></Route>
            <Route path="/study2" element={<FirstRedesign />} />

            {/* Mobile Case Study */}
            <Route path="/portfolio" element={<Resume />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
