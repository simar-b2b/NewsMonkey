import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact key="" path="/" element={<News pageSize={6} category=""/>} />
          <Route exact key="business" path="/business" element={<News pageSize={6} category="Business"/>} />
          <Route exact key="entertainment" path="/entertainment" element={<News pageSize={6} category="Entertainment"/>} />
          <Route exact key="health" path="/health" element={<News pageSize={6} category="Health"/>} />
          <Route exact key="sports" path="/sports" element={<News pageSize={6} category="Sports"/>} />
          <Route exact key="science" path="/" element={<News pageSize={6} category="Science"/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}
