// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorProvider } from "./components/ErrorProvider";
import "./styles.css";

// Import template pages
import HomePage from "./pages/Home";
import ExampleFormPage from "./pages/ExampleForm";
import ComponentsPage from "./pages/Components";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <ErrorProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/example-form" element={<ExampleFormPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </ErrorProvider>
    </BrowserRouter>
  );
}

export default App;
