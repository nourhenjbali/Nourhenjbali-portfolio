import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Me from "./components/Me";

const App = () => {
  return (
    <BrowserRouter>
      <div className='z-0'>
        <div className='relative z-0'>
          <Navbar />
          <Hero/>
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
