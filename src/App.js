import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
