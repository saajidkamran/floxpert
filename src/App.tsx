import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./pages/adminPage";
import Login from "./pages/Login";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<MainPage />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminPage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
