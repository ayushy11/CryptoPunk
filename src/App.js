import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<SignInPage />} exact /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
