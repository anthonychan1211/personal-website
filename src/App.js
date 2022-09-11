import { useRef,useState,useEffect } from 'react';
import './App.css'
import About from './component/About';
import Photo from './component/Photo';
import Music from './component/Music';
import Coding from './component/Coding';
import Contact from './component/Contact';
import { ChakraProvider } from '@chakra-ui/react'
import { TriangleUpIcon } from '@chakra-ui/icons'

function App() {
  const [isShownMenu, setisShowMenu] = useState(false)
  
  const handleScroll = (ref) => {
      ref.current?.scrollIntoView({
        behavior: 'smooth',
        
      });
    };

  const aboutRef = useRef(null);
  const musicRef = useRef(null);
  const photoRef = useRef(null);
  const codingRef = useRef(null);
  const contactRef = useRef(null)


  const [isShownTopBtn, setisShownTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
          setisShownTopBtn(true);
        } else {
          setisShownTopBtn(false);
        }
    });
}, []);


  function handleToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  }
  return (
    <>
    {/* main section */}
    <div>
             <main>
    <nav>
        <div className="menu-space"></div>
        <div className="menu-icon" onClick={()=>setisShowMenu(!isShownMenu)}>
          
          <div className="menu-icon-shape"></div>
          <div className="menu-icon-shape"></div>
          <div className="menu-icon-shape"></div>
        </div>
       
        <ul className={isShownMenu?"shown-nav-menu":"hidden-nav-menu"}>
            <li id="about" onClick={()=>{handleScroll(aboutRef)}}>About Anthony</li>
            <li id="music" onClick={()=>{handleScroll(musicRef)}}>As a Musician</li>
            <li id="photo" onClick={()=>{handleScroll(photoRef)}}>As a Photography</li>
            <li id="coding" onClick={()=>{handleScroll(codingRef)}}>As a Web Developer</li>
            <li id="contact" onClick={()=>{handleScroll(contactRef)}}>Contact</li>
        </ul>
      </nav>
      <div className="home-page-container">
        <h1 id="title">Anthony <br></br>Chan</h1>
        <p>Musician | Photographer | Web Developer</p>
        <p>Discovery more:</p>
        <div className="icon-container">
          <img src="instagramIcon.png" alt="InstagramIcon"></img>
          <img src="githubIcon.png" alt="InstagramIcon"></img>
          <img src="linkedinIcon.png" alt="InstagramIcon"></img>
        </div>
      </div>
    </main>
        </div>


      <ChakraProvider>
        <button 
        className={isShownTopBtn? "back-to-top-btn": 'back-to-top-btn-hidden'} 
        onClick={handleToTop} 
        ><TriangleUpIcon w={5} h={5} color="grey"/></button>   
      </ChakraProvider>

<About forwardedRef={aboutRef}/>

{/* divider */}
<div className="divider"></div>
    
<Music forwardedRef={musicRef}/>

{/* divider */}
<div className="divider"></div>

<Photo forwardedRef={photoRef} />


{/* divider */}
<div className="divider"></div>
{/* coding section */}

<Coding forwardedRef={codingRef} />
          


{/* divider */}
<div className="divider"></div>

<Contact forwardedRef={contactRef}/>

{/* divider */}
<div className="divider"></div>


    </>
  )
    


}

export default App;
