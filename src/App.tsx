import './App.css'

import Header from '../src/pages/header'
import Home from '../src/pages/home'
import About from '../src/pages/about'
import Services from '../src/pages/services'
import Projects from '../src/pages/projects'
import Contact from '../src/pages/contact'
import Footer from '../src/pages/footer'

function App() {
  return (
    <> 
      <Header/>
      <div className="main">
         <Home/>

         <About/>

         <Services/>

         <Projects/>

         <Contact/>

         <Footer/>     
      </div>
      
      <a href="#" className="scrollup" id="scroll-up">
          <i className="ri-arrow-up-s-line"></i>
      </a>
    </>
  );
}
export default App;
