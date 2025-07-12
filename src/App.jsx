import Navbar from './components/Navbar';
import './App.css'
import Title from './components/title';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Certificate from './components/certificate';
import Contact from './components/Contact';
import Footer from './components/footer';

const App=() => {
  return (
    <>
      <div>
        <Navbar/>
       <Title/>
       <About/>
       <Skill/>
       <Project/>
       <Certificate/>
       <Contact/>
       <Footer/>
      </div>
    </>
  )
}
export default App
