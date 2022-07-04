import './App.css';
import {
    BrowserRouter, Routes, Route
} from 'react-router-dom'
import LandingPage from './landing/LandingPage';
import Layout from './common/Layout';
import Footer from './common/Footer';
import NavigationBar from './common/NavBar'
import About from './about/About'
import Contact from './contact/Contact'
import Reviews from './reviews/Reviews'
import Press from './press/Press'
import News from './news/News'

function App() {
  return (
    <div>
      <NavigationBar />
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="press" element={<Press />} />
                  <Route path="news" element={<News />} />
              </Route>
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
