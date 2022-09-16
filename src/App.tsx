import React, {useRef} from 'react';
import Menu from './Components/Menu/Menu';
import AboutPart from './pages/aboutPart/AboutPart';
import ServicePart from './pages/serviePart/ServicePart';
import SpecialistPart from './pages/specialistPart/SpecialistPart';
import StartPage from './pages/startPage/StartPage';
import "./Style/AppStyle.css"

function App() {
  const startPartRef = useRef<HTMLDivElement>(null)
  const aboutPartRef = useRef<HTMLDivElement>(null)
  const servicePartRef = useRef<HTMLDivElement>(null)
  const specialistPartRef = useRef<HTMLDivElement>(null)

  const moveToElement = (idx: number) => {
    switch (idx) {
      case 1:
        window.scrollTo({
          top: aboutPartRef.current?.offsetTop !== undefined ? aboutPartRef.current?.offsetTop - 100 : aboutPartRef.current?.offsetTop,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: servicePartRef.current?.offsetTop !== undefined ? servicePartRef.current?.offsetTop - 100 : servicePartRef.current?.offsetTop,
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: specialistPartRef.current?.offsetTop !== undefined ? specialistPartRef.current?.offsetTop - 100 : specialistPartRef.current?.offsetTop,
          behavior: "smooth",
        });
        break;
    
      default:
        window.scrollTo({
          top: startPartRef.current?.offsetTop !== undefined ? startPartRef.current?.offsetTop - 100 : startPartRef.current?.offsetTop,
          behavior: "smooth",
        });
        break;
    }
    
  } 
  return (
    <div className="App">
      <Menu onClick={moveToElement}/>
      <StartPage refEl={startPartRef}/>
      <AboutPart refEl={aboutPartRef}/>
      <ServicePart refEl={servicePartRef}/>
      <SpecialistPart refEl={specialistPartRef}/>
    </div>
  );
}

export default App;
