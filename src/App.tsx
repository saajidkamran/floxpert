import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <About />
      <ContactUs />
    </div>
  );
}

export default App;
