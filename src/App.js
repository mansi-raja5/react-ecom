import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

//pages
import Homepage from "./Pages/Homepage";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Kids from "./Pages/Kids";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Header from "./components/Header";

//css
import "./default.scss";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </MainLayout>
    </div>
  );
}

export default App;
