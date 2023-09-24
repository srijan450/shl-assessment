import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
      <Loader value={false} />
    </div>
  );
}

export default App;
