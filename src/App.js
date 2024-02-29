import "./App.css";
import Carousel from "./Carousel";
import Content from "./Content";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Feeds from "./Feeds";
import Wishlist from "./Wishlist";
import Blog from './Blog'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <Content />
              <Wishlist />
              <Feeds />
              <NewsLetter />
            </>
          }
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
