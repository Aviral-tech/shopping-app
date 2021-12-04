import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/product/:id" element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
