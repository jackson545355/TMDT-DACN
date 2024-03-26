import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Shop from "./Pages/Shop";
// import Cart from "./Pages/Cart";
// import Product from "./Pages/Web-Product";
import Footer from "./Components/Footer/Footer";
// import ShopCategory from "./Pages/ShopCategory";
// import women_banner from "./Components/Assets/banner_women.png";
// import men_banner from "./Components/Assets/banner_mens.png";
// import kid_banner from "./Components/Assets/banner_kids.png";
// import LoginSignup from "./Pages/LoginSignup";
import WebMain from "./Pages/Web_main";
import WebListView from "./Pages/Web_listview";
import WebProduct from "./Pages/Web_Product";

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Shop gender="all" />} /> 
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} /> */}
          <Route path="/" element={<WebMain />} /> 
          <Route path="/product-list" element={<WebListView />} /> 
          <Route path='/product' element={<WebProduct />}>
            <Route path=':productId' element={<WebProduct />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
