import './App.css';
import Carousel from './Carousel';
import Content from './Content';
import Navbar from './Navbar';
import NewsLetter from './NewsLetter'
import Footer from './Footer';
import Feeds from './Feeds';
import Wishlist from './Wishlist';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Content />
      <Wishlist />
      <Feeds />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
