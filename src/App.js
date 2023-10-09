import './App.css';
import "../src/styles/bootstrap.min.css";
import "../src/styles/animate.min.css";
import "../src/styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import "../src/styles/navbar.css";
import "../src/styles/footer.css";
import "../src/styles/globals.css";
import "../src/styles/responsive.css";
import Navbar from './components/Layout/Navbar';
import HeroSlider from './components/HomePageDemo1/HeroSlider';
import WhoWeAre from './components/HomePageDemo1/WhoWeAre';
import ServiceSlider from './components/Services/ServiceSlider';
import ProjectSlider from './components/Projects/ProjectSlider';
import Testimonials from './components/Testimonials';
import Footer from './components/Layout/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <Navbar />

<HeroSlider />

<WhoWeAre />

<ServiceSlider />
<br />
      <ProjectSlider />

      <Testimonials />

      <Partners />
      <div>
        <Footer className="rounded-4" />
      </div>
    </>
  );
}

export default App;
