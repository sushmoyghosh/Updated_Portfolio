import { useEffect } from 'react'; 
import Aos from 'aos'; 
import './App.css';
import Footer from './components/Header/Footer/Footer';
import Hero from './components/Header/UI/Hero';
import SocialLinks from './components/Header/UI/SocialLinks';
import About from './components/Header/UI/About';
import EducationExperience from './components/Header/UI/EducationExperience';
import Portfolio from './components/Header/UI/Portfolio';
import HeaderTwo from './components/Header/UI/HeaderTwo';
import Skill from './components/Header/UI/Skill';
import SkillsTab from './components/Header/UI/SkillsTab';
import Contact from './components/Header/UI/Contact';
import BackToTop from './components/Header/UI/BackToTop';
import Testimonial from './components/Header/UI/Testimonial';

function App() {
  useEffect(() => {
    Aos.init();
  },[]);
  return (
    <div className="App">
    <HeaderTwo/>
    <Hero/>
    <SocialLinks/>
    <About/>
    <EducationExperience/>
    <Portfolio/>
    <BackToTop/>
      
      <Skill/>
      <SkillsTab/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
