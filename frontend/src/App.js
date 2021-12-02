import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./screens/home";
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Home />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
