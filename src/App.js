import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./layouts/Main";
import { Home, Contact, Portfolio } from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
