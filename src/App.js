import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Main } from "./layouts/Main";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}>
                        <Route path="/" element={<Home />} />
                        <Route path="contact/*" element={<Contact />} />
                        <Route path="portfolio/*" element={<Portfolio />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
