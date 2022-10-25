import { useState,useEffect,useRef} from 'react'
import emailjs from '@emailjs/browser';
import Resume from './assets/Resume.pdf'
import Logo from './assets/myLogo.png'
import LogoGreen from './assets/myLogoGreen.png'
import Peep from './assets/peep.png'
import PeepGreen from './assets/peepGreen.png'
import {RiMoonFill,RiSunFill,RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import {BsGithub,BsFacebook, BsInstagram, BsLinkedin, BsArrowDown} from 'react-icons/bs'
import {AiFillCaretRight,} from 'react-icons/ai'
import {FaEye,FaCode,FaCodepen} from 'react-icons/fa'
import BootstrapLogo from './assets/bootstraplogo.svg'
import CssLogo from './assets/csslogo.png'
import TailWindLogo from './assets/TailwindLogo.png'
import FireBaseLogo from './assets/firebaselogo.png'
import GitLogo from './assets/gitlogo.png'
import HtmlLogo from './assets/html.png'
import JscriptLogo from './assets/javascriptlogo.png'
import JqueryLogo from './assets/jquerylogo.png'
import ReactJsLogo from './assets/reactjslogo.png'
import PhpLogo from './assets/PhpLogoo.png'
import RestApiLogo from './assets/rest-api-icon.png'
import SqlLogo from './assets/sqllogo.png'
import PhotoShopLogo from './assets/PhotoshopLogo.png'
import IllustratorLogo from './assets/illustratorLogo.png'
import FigmaLogo from './assets/figmaLogo.png'
import { motion, useScroll } from "framer-motion";
import GhibliProj from  './assets/ghibliBg.png';
import MovieProj from  './assets/mobi.png';
import VigorProj from './assets/vigorBg.png'
import ReactProj from './assets/reactProjectss.png'
import SassProj from './assets/SassBg.png'
import GrewardProj from './assets/G-Reward.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import AOS from 'aos';
import 'aos/dist/aos.css';




function App() {
// AOS
useEffect(() => {
  const timer = setTimeout(() => {
    AOS.init();
  }, 5000);
  return () => clearTimeout(timer);
}, []);

// TOGGLE NAV
const [navToggle, setNavToggle] = useState(true)
const handleShow = () => {
  setNavToggle(current  => !current)
  console.log(navToggle)
}
// TOASTIFY OR POPUP 
const emailSubmitted = () => {
  toast.success(`Message Submitted!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
    
}

// EMAIL JS
const form = useRef();
const [userName, setUserName] = useState('')
const [userEmail, setUserEmail] = useState('')
const [userMessage, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    emailSubmitted()
    emailjs.sendForm('service_hgmrl4s', 'template_o6rad4b', form.current, 'VGabaTEXPleWhx0z-')
      .then((result) => {
          console.log(result.text);
          emailSubmitted()
        
      }, (error) => {
          console.log(error.text);
      });
      setUserName('')
      setUserEmail('')
      setMessage('')

    
  };


// DARKMODE
const [darkmode, setDarkMode] = useState(true)
const handleDarkMode = () => {
  setDarkMode(!darkmode)
  if (darkmode) {
  // Whenever the user explicitly chooses light mode
  const bodyElt = document.querySelector("body");
  bodyElt.style.backgroundColor = "#E2DCC8";
  document.documentElement.classList.add('dark')
  } else {
    const bodyElt = document.querySelector("body");
    bodyElt.style.backgroundColor = "#100F0F";

  // Whenever the user explicitly chooses dark mode
  document.documentElement.classList.remove('dark')
  }
}

// MODAL TOGGLER 

const closeModal = () => {
  const modal1 = document.querySelector(".modal1")
  const modal2 = document.querySelector(".modal2")
  const modal3 = document.querySelector(".modal3")
  const modal4 = document.querySelector(".modal4")
  const modal5 = document.querySelector(".modal5")
  const modal6 = document.querySelector(".modal6")
  const overlay = document.querySelector(".overlay_modal")

  modal1.classList.add("hidden")
  modal1.classList.remove("block")

  modal2.classList.add("hidden")
  modal2.classList.remove("block")

  modal3.classList.add("hidden")
  modal3.classList.remove("block")

  modal4.classList.add("hidden")
  modal4.classList.remove("block")

  
  modal5.classList.add("hidden")
  modal5.classList.remove("block")

  modal6.classList.add("hidden")
  modal6.classList.remove("block")

  overlay.classList.add("hidden")
  overlay.classList.remove("block")
}
const handleModal1 = () =>{
  const modal1 = document.querySelector(".modal1")
  const overlay = document.querySelector(".overlay_modal")
  modal1.classList.add("block")
  modal1.classList.remove("hidden")
  overlay.classList.add("block")
  overlay.classList.remove("hidden")
}
const handleModal2 = () =>{
  const modal1 = document.querySelector(".modal2")
  const overlay = document.querySelector(".overlay_modal")
  modal1.classList.add("block")
  modal1.classList.remove("hidden")
  overlay.classList.add("block")
  overlay.classList.remove("hidden")
}

const handleModal3 = () =>{
  const modal1 = document.querySelector(".modal3")
  const overlay = document.querySelector(".overlay_modal")
  modal1.classList.add("block")
  modal1.classList.remove("hidden")
  overlay.classList.add("block")
  overlay.classList.remove("hidden")
}
const handleModal4 = () =>{
  const modal1 = document.querySelector(".modal4")
  const overlay = document.querySelector(".overlay_modal")
  modal1.classList.add("block")
  modal1.classList.remove("hidden")
  overlay.classList.add("block")
  overlay.classList.remove("hidden")
}

const handleModal5 = () =>{
  const modal1 = document.querySelector(".modal5")
  const overlay = document.querySelector(".overlay_modal")
  modal1.classList.add("block")
  modal1.classList.remove("hidden")
  overlay.classList.add("block")
  overlay.classList.remove("hidden")
}

const handleModal6 = () =>{
  const modal1 = document.querySelector(".modal6")
  const overlay = document.querySelector(".overlay_modal")
  modal1.classList.add("block")
  modal1.classList.remove("hidden")
  overlay.classList.add("block")
  overlay.classList.remove("hidden")
}

  // PROGRESS BAR
  const { scrollYProgress } = useScroll()

  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    {/* Same as */}
    <ToastContainer />
    
      {/* LOADING SCREEN */}
    <div className='loading_screen bg-[#100F0F]/100 fixed top-0 w-[100vw] h-[100vh] z-[1000] ' >
     <div class="flex h-screen">
      <div class="m-auto">
        <img src={Logo}  className="h-16 drop-shadow-2xl loading_img"/>
      </div>
     </div>
    </div>

        {/*MOBILE NAVBAR */}
    <div className={`mobile_navbar  ${navToggle ? "hidden" : "block"} block md:hidden bg-[#100F0F]/100 fixed top-0 w-[100vw] h-[100vh] z-[100] `} >
     <div class="flex h-screen">
      <div class="m-auto">
        <ul className='text-white mobile_links_ul text-5xl md:text-6xl text-center'>
          <li onClick={handleShow} className='py-4 '><a className='about_text' data-text="About" href='#about'>About</a></li>
          <li onClick={handleShow} className='py-4 ' ><a className='exp_text' href='#exp' data-text="Experience">Experience</a></li>
          <li onClick={handleShow} className='py-4 ' ><a className='works_text' href='#works' data-text="Works">Works</a></li>
          <li onClick={handleShow} className='py-4 ' ><a className='contact_text' href='#contact' data-text="Contact">Contact</a></li>
        </ul>
      </div>
     </div>
    </div>



    {/* MODAL CONTENTS */}
    <div onClick={closeModal} className="cursor-pointer fixed top-0 z-[199] overlay_modal  h-[100%] w-[100%] bg-black/80 hidden"></div>

    {/* MODAL1 */}
    <div className="modal_wrapper modal1 fixed w-[95vw] md:w-[70vw] lg:w-[50vw] z-[200] hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="modal_box rounded-lg ">
          <img src={ReactProj} className="w-full" />
            <div className="flex items-center justify-between px-2 py-2 bg-[#0F3D3E]">
              <p className='text-[#E2DCC8] argentum text-xl md:text-2xl'>React Simple Projects</p>
                <div className="flex items-center gap-4">
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://github.com/aldrinramores/REACT-SImple_Projects/tree/master"><FaCode/></a>
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://aldrinramores.github.io/REACT-SImple_Projects/"><FaEye/></a>
                </div>
            </div>
       </div>
    </div>

    {/* MODAL2 */}
    <div className="modal_wrapper modal2 fixed w-[95vw] md:w-[70vw] lg:w-[50vw] z-[200] hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="modal_box rounded-lg ">
          <img src={GrewardProj} className="w-full" />
            <div className="flex items-center justify-between px-2 py-2 bg-[#0F3D3E]">
              <p className='text-[#E2DCC8] argentum text-xl md:text-2xl'>G-Reward</p>
                <div className="flex items-center gap-4">
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://github.com/cielzguerrero/Frontend"><FaCode/></a>
                </div>
            </div>
       </div>
    </div>

    {/* MODAL3 */}
    <div className="modal_wrapper modal3 fixed w-[95vw] md:w-[70vw] lg:w-[50vw] z-[200] hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="modal_box rounded-lg ">
          <img src={GhibliProj} className="w-full" />
            <div className="flex items-center justify-between px-2 py-2 bg-[#0F3D3E]">
              <p className='text-[#E2DCC8] argentum text-xl md:text-2xl'>React-Ghibli API</p>
                <div className="flex items-center gap-4">
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://github.com/aldrinramores/ghibli-api/tree/master"><FaCode/></a>
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://aldrinramores.github.io/ghibli-api/"><FaEye/></a>
                </div>
            </div>
       </div>
    </div>

    {/* MODAL4 */}
    <div className="modal_wrapper modal4 fixed w-[95vw] md:w-[70vw] lg:w-[50vw] z-[200] hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="modal_box rounded-lg ">
          <img src={MovieProj} className="w-full" />
            <div className="flex items-center justify-between px-2 py-2 bg-[#0F3D3E]">
              <p className='text-[#E2DCC8] argentum text-xl md:text-2xl'>React-Mobi API</p>
                <div className="flex items-center gap-4">
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://github.com/aldrinramores/REACT-mobi/tree/master"><FaCode/></a>
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://aldrinramores.github.io/REACT-mobi/"><FaEye/></a>
                </div>
            </div>
       </div>
    </div>

       {/* MODAL5 */}
       <div className="modal_wrapper modal5 fixed w-[95vw] md:w-[70vw] lg:w-[50vw] z-[200] hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="modal_box rounded-lg ">
          <img src={VigorProj} className="w-full" />
            <div className="flex items-center justify-between px-2 py-2 bg-[#0F3D3E]">
              <p className='text-[#E2DCC8] argentum text-xl md:text-2xl'>Fitness Website Static</p>
                <div className="flex items-center gap-4">
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://github.com/aldrinramores/Vigor_WebDesign"><FaCode/></a>
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://aldrinramores.github.io/Vigor_WebDesign/"><FaEye/></a>
                </div>
            </div>
       </div>
    </div>

        {/* MODAL6 */}
    <div className="modal_wrapper modal6 fixed w-[95vw] md:w-[70vw] lg:w-[50vw] z-[200] hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       <div className="modal_box rounded-lg ">
          <img src={SassProj} className="w-full" />
            <div className="flex items-center justify-between px-2 py-2 bg-[#0F3D3E]">
              <p className='text-[#E2DCC8] argentum text-xl md:text-2xl'>Scss technical document</p>
                <div className="flex items-center gap-4">
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://github.com/aldrinramores/Technical_Document"><FaCode/></a>
                  <a className=' p-2 text-[#E2DCC8] text-2xl' target="_blank" href="https://aldrinramores.github.io/Technical_Document/"><FaEye/></a>
                </div>
            </div>
       </div>
    </div>

   

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='hero_wrapper h-[100vh] z-[-20]'>
        {/* NAVBAR */}
        <div className='navbar' >
          <div className="wrapper flex items-center justify-between gap-5 p-3 md:p-10">
            <div className="logo_wrapper transition-all ease-linear duration-300 rotate-0 hover:rotate-[360deg] ">
            {darkmode ? (<img src={Logo} alt="arLogo" data-aos="zoom-up" data-aos-easing="ease-out-cubic" data-aos-duration="500"  className='h-8 '/>) 
              : (<img src={LogoGreen} alt="arLogo"  className='h-8 '/>)}
            </div>
              <ul className='nav_links flex items-center gap-4 md:gap-10   font-medium '>
                  <a  href='#about' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100" className='hidden md:block  text-[#E2DCC8] dark:text-[#0F3D3E]'>About</a>
                  <a data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200" href='#exp' className='hidden md:block   text-[#E2DCC8] dark:text-[#0F3D3E]'>Experience</a>
                  <a href='#works' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300" className='hidden md:block   text-[#E2DCC8] dark:text-[#0F3D3E]'>Works</a>
                  <a href='#contact' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="400" className='hidden md:block  text-[#E2DCC8] dark:text-[#0F3D3E]'>Contact</a>
                  <a href={Resume} target = '_blank' className=''data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="500" ><button className='my-2  argentum text-base bg-transparent border-2 px-4 py-1.5 rounded-md border-[#E2DCC8] dark:border-[#0F3D3E] transition-all hover:bg-[#0F3D3E] dark:hover:text-[#E2DCC8] text-[#E2DCC8] dark:text-[#0F3D3E]'>RESUME</button></a>
                  <li className='' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="600"><button onClick={handleDarkMode} className='bg-[#0F3D3E] text-[#E2DCC8] p-3 rounded-lg'>
                    {darkmode ? (<RiSunFill/>) :  (<RiMoonFill/>) }</button></li>
                    <li className='block md:hidden z-[110]' data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="600"><button onClick={handleShow} className='bg-[#0F3D3E] text-[#E2DCC8] p-3 rounded-lg '>
                    {navToggle ? (<RiMenu3Line/>) :  (<RiCloseLine/>) }</button></li>
              </ul>
          </div>
        </div> 
        {/* END OF NAV */}
      
        {/* INTRO */}
        <div className="intro_wrapper max-w-7xl mx-auto mt-10 md:mt-24 ">
          <div className="flex gap-5 flex-col-reverse md:flex-row items-center justify-around px-10 md:px-5">
            <div className="left_container text-[#E2DCC8] dark:text-[#0F3D3E]">
              <p className='text-xl md:text-2xl font-bold text-center md:text-left mb-2 md:mb-5' data-aos="fade-down" data-aos-easing="easing-bicubic">Hi! I'm </p>
              <p className='text-4xl md:text-6xl argentum text-center md:text-left' data-aos="fade-down" data-aos-easing="easing-bicubic" data-aos-delay="100"> ALDRIN RAMORES</p>
              <p className='text-xl md:text-4xl opacity-90 my-2 argentum text-center md:text-left' data-aos="fade-down" data-aos-easing="easing-bicubic" data-aos-delay="200">&lt; Front-End Dev / &gt;</p>
              <p className='my-1 md:my-5 max-w-lg opacity-70 dark:opacity-100 text-sm md:text-lg lg:text-base text-justify  word-spacing md:text-left font-medium' data-aos="fade-down" data-aos-easing="easing-bicubic" data-aos-delay="300">I love building websites with stunning UI. I have a passion on developing website with <span className=' font-bold italic'>Simplicity</span> and upstanding <span className=' font-bold italic'>User Experience</span>.</p>
    
            </div>
            <div className='peep_wrapper' data-aos="zoom-in-up" data-aos-easing="easing-bicubic" data-aos-delay="500">
              {darkmode ? (<img className='h-60 sm:h-[300px] md:h-[400px]' src={Peep} alt="Peep"/>) : (<img className='h-60 sm:h-[300px] md:h-[400px]' src={PeepGreen} alt="Peep"/>)}
            </div>
          </div>
        </div>
        {/* END OF INTRO */}
        
        {/* SOCIALS */}
        <div className="social_wrapper fixed bottom-96 left-12 hidden xl:block">
          <ul className='font-medium text-[#E2DCC8] dark:text-[#0F3D3E] text-2xl flex flex-col gap-8'>
            <a href='https://github.com/aldrinramores' target="_blank" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100" className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><BsGithub/></a>
            <a href='https://www.instagram.com/aaramoress/' target='_blank' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300" className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><BsInstagram/></a>
            <a href='https://codepen.io/aldrinnunal' target='_blank' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300" className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><FaCodepen/></a>
            <a href='https://www.linkedin.com/in/aldrin-ramores-556798202/' target='_blank' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="400" className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><BsLinkedin/></a>
          </ul>
        </div>
        {/* SCROLL DOWN */}
        <div className="scroll-wrapper fixed bottom-96 right-12 hidden xl:block" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="800" data-aos-delay="100">
            <ul className='font-medium text-[#E2DCC8] dark:text-[#0F3D3E] text-md flex flex-col gap-8 justify-between items-center '>
              <li className='vertical-text'>Scroll Down</li>
              <li><BsArrowDown/></li>
            </ul>
        </div>
        {/* END OF SOCIALS */}
      </div>
      
      {/* ABOUT */}
  
      <div className="about_section bg-[#100F0F] dark:bg-[#E2DCC8] py-5" id="about">
          <div className="wrapper max-w-4xl mx-auto px-8 md:px-10">
              <div  className='relative'>
              <p className='on-scroll absolute text-[#E2DCC8] dark:text-[#0F3D3E] opacity-[5%] argentum z-[10] text-4xl sm:text-6xl md:text-8xl left-[-20px] md:left-[-22px] top-[-10px] md:top-[-50px] px-5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1300">ABOUT ME</p>

              <p className= 'z-[20] text-2xl md:text-3xl text-[#E2DCC8] dark:text-[#0F3D3E] argentum horizontal_line'>About Me</p>
              </div>
              
              <p className='text-sm md:text-base py-2 text-[#E2DCC8] dark:text-[#0F3D3E] text-justify word-spacing opacity-70 dark:opacity-100 font-medium'>Hello! I am Aldrin, 22 years old recenty finished Bachelor of Science Major in Information and Technology from Polytechnic University of the Philippines - San Pedro Campus. I gain interest in web development specially on front-end development way back 2020 when i discovered interactive websites like : <a className='font-bold hover:underline'target="_blank" href="https://splinterlands.com/">Splinterlands</a>, <a className='font-bold hover:underline 'target="_blank"  href="http://pierrehermenicolasbuffe.com/en">Pierre Herme X Nicholas Buffe</a> and <a className='font-bold hover:underline' target="_blank"  href="https://zoomquilt.org/">Zoom Quilt</a>. Outside of everything i use to play chess online, guitar, basketball and make pixel arts.</p>
          </div>
      </div>

      {/* TECH STACKS */}
      <div className="about_section bg-[#100F0F] dark:bg-[#E2DCC8] py-10 " >
          <div  className="wrapper max-w-4xl mx-auto px-8 md:px-10 relative">
            <p className='on-scroll  absolute text-[#E2DCC8] dark:text-[#0F3D3E] opacity-[5%] argentum z-[20] text-4xl sm:text-6xl md:text-8xl  left-[8px] md:left-[0px] top-[-10px] md:top-[-50px] px-5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1300" data-aos-delay="100">TECH STACKS</p>

            <p className='onscroll text-2xl md:text-3xl text-[#E2DCC8] dark:text-[#0F3D3E] argentum horizontal_line z-[20]'>Tech Stacks</p>

        
            <div className="stacks grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-5 mt-5">
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full"  >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="100"  data-aos-once="true" src={HtmlLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear" data-aos-delay="200"  data-aos-once="true" src={CssLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full">
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear" data-aos-delay="300"  data-aos-once="true" src={BootstrapLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear" data-aos-delay="400"  data-aos-once="true" src={TailWindLogo} />
              </div>

              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto'data-aos = "fade-up" data-aos-easing="linear" data-aos-delay="500"  data-aos-once="true" src={GitLogo} />
              </div>
              
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="600"  data-aos-once="true" src={JscriptLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="700"  data-aos-once="true" src={JqueryLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="800"  data-aos-once="true" src={ReactJsLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto'data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="900"  data-aos-once="true" src={RestApiLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full">
                <img className='h-28 mx-auto'data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="1000" data-aos-once="true"  src={SqlLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full">
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="1100" data-aos-once="true"  src={PhpLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear"  data-aos-delay="1200" data-aos-once="true"  src={FireBaseLogo} />
              </div>
            </div>

            {/* OTHER SKILLS */}
            <p className='onscroll text-2xl mt-5 md:text-3xl text-[#E2DCC8] dark:text-[#0F3D3E] argentum horizontal_line z-[20]'>Other Skills</p>
            <div className="stacks grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-5 mt-5">
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear" data-aos-once="true"  data-aos-delay="100"  src={PhotoShopLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear" data-aos-once="true"  data-aos-delay="200"  src={IllustratorLogo} />
              </div>
              <div className="mx-auto  p-2 rounded-lg drop-shadow-xl transition-all bg-[#F1F1F1] opacity-90 hover:opacity-100 w-full h-full" >
                <img className='h-28 mx-auto' data-aos = "fade-up" data-aos-easing="linear" data-aos-once="true"  data-aos-delay="300"  src={FigmaLogo} />
              </div>
            </div>
          </div>

        {/* EXPERIENCE */}
        <div className="pt-12" id = "exp"></div>
        <div  className="wrapper max-w-4xl mx-auto px-8 md:px-10 my-24 relative" >
            <p className='on-scroll  absolute text-[#E2DCC8] dark:text-[#0F3D3E] opacity-[5%] argentum z-[20] text-4xl sm:text-6xl md:text-8xl  left-[8px] md:left-[0px] top-[-10px] md:top-[-50px] px-5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1300">EXPERIENCE</p>
            <p className='onscroll text-2xl md:text-3xl text-[#E2DCC8] dark:text-[#0F3D3E] argentum horizontal_line z-[20]'>Experience</p>
              <div className="wrapper  mt-2 text-[#E2DCC8] dark:text-[#0F3D3E]">
                   <a className='text-xl  font-bold hover:underline' target='_blank' href="https://ibuildph.ibuild.ph/portfolio">ibuild.Ph Web Solutions and Services</a>
                   <p className='font-medium text-lg '>Web Developer Intern</p>
                   <p className='opacity-90 font-medium'>May 2022 - July 2022</p>
                      <div className="flex items-center gap-3">
                        <p><AiFillCaretRight/></p>
                        <p className='font-medium'>Basics of Web Development </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p><AiFillCaretRight/></p>
                        <p className='font-medium'>Site Building using DRUPAL</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p><AiFillCaretRight/></p>
                        <p className='font-medium'>Graphic & Web Designing </p>
                      </div>
              </div>
        </div>

        {/* PROJECTS */}
        <div className="pt-12" id ="works"></div>
        <div  className="wrapper max-w-4xl mx-auto px-8 md:px-10  relative" >
            <p className='on-scroll  absolute text-[#E2DCC8] dark:text-[#0F3D3E] opacity-[5%] argentum z-[20] text-4xl sm:text-6xl md:text-8xl  left-[8px] md:left-[0px] top-[-10px] md:top-[-50px] px-5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1300">PROJECTS</p>
            <p className='onscroll text-2xl md:text-3xl text-[#E2DCC8] dark:text-[#0F3D3E] argentum horizontal_line z-[20]'>Projects</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 items-center">

              <div className=" card bg-black drop-shadow-xl relative" data-aos = "fade-down" data-aos-easing="linear"  data-aos-delay="100">
                <img src={ReactProj} className="h-full w-full block" />
                <div onClick={handleModal1} className="absolute w-[100%] h-[100%] bg-[#0F3D3E]/70 transition-all cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100 pt-24 hover:pt-0 ">
                  <button className='text-[#E2DCC8] argentum w-full h-full text-xl'>View Project</button>
                </div>
              </div>

              <div className="card bg-black drop-shadow-xl  relative" data-aos = "fade-down" data-aos-easing="linear" data-aos-delay="200">
                <img src={GrewardProj} className="h-full w-full block" />
                <div onClick={handleModal2} className="absolute w-[100%] h-[100%] bg-[#0F3D3E]/70 transition-all cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100  pt-24 hover:pt-0">
                  <button className='text-[#E2DCC8] argentum w-full h-full text-xl'>View Project</button>
                </div>
              </div>

              <div className="card bg-black drop-shadow-xl relative" data-aos = "fade-down" data-aos-easing="linear" data-aos-delay="300">
                <img src={GhibliProj} className="h-full w-full block" />
                <div onClick={handleModal3} className="absolute w-[100%] h-[100%] bg-[#0F3D3E]/70 transition-all cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100  pt-24 hover:pt-0">
                  <button className='text-[#E2DCC8] argentum  w-full h-full text-xl'>View Project</button>
                </div>
              </div>

              <div className="card bg-black drop-shadow-xl  relative" data-aos = "fade-down" data-aos-easing="linear" data-aos-delay="400">
                <img src={MovieProj} className="h-full w-full block" />
                <div onClick={handleModal4} className="absolute w-[100%] h-[100%] bg-[#0F3D3E]/70 transition-all cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100  pt-24 hover:pt-0">
                  <button className='text-[#E2DCC8] argentum w-full h-full text-xl'>View Project</button>
                </div>
              </div>

              <div className="card bg-black drop-shadow-xl  relative" data-aos = "fade-down" data-aos-easing="linear" data-aos-delay="500">
                <img src={VigorProj} className="h-full w-full block" />
                <div onClick={handleModal5} className="absolute w-[100%] h-[100%] bg-[#0F3D3E]/70 transition-all cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100  pt-24 hover:pt-0">
                  <button className='text-[#E2DCC8] argentum w-full h-full text-xl'>View Project</button>
                </div>
              </div>
             
              <div className="card bg-black drop-shadow-xl  relative" data-aos = "fade-down" data-aos-easing="linear" data-aos-delay="600">
                <img src={SassProj} className="h-full w-full block" />
                <div onClick={handleModal6} className="absolute w-[100%] h-[100%] bg-[#0F3D3E]/70 transition-all cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 hover:opacity-100  pt-24 hover:pt-0">
                  <button className='text-[#E2DCC8] argentum w-full h-full text-xl'>View Project</button>
                </div>
              </div>

            </div>
        </div>

        {/* CONTACT */}
        <div className="pt-12" id ="contact"></div>
        <div  className="wrapper max-w-4xl mx-auto px-8 md:px-10 mt-20 relative">
            <p className='on-scroll  absolute text-[#E2DCC8] dark:text-[#0F3D3E] opacity-[5%] argentum z-[20] text-4xl sm:text-6xl md:text-8xl  left-[8px] md:left-[0px] top-[-10px] md:top-[-50px] px-5' data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="1300">GET IN TOUCH</p>
            <p className='onscroll text-2xl md:text-3xl text-[#E2DCC8] dark:text-[#0F3D3E] argentum horizontal_line z-[20]'>Get in Touch</p>
         

            {/* FORM */}
            <div className="form_wrapper my-10 text-[#E2DCC8] mx-auto dark:text-[#0F3D3E]" data-aos = "fade-up" data-aos-easing="linear">
              <form ref={form} onSubmit={sendEmail} className='font-sans font-medium w-[100%] md:w-[80%] mx-auto'>
             
                  <div class="relative z-0 mb-6 w-full group">
                      <input onChange={(e) => setUserName(e.target.value)}  value= {userName} type="text" name="user_name" id="user_name" class="block py-2.5 px-0 w-full text-sm text--900 bg-transparent border-0 border-b-2 border--300 appearance-none dark:text-[#0F3D3E] dark:border-[#0F3D3E] dark:focus:border--500 focus:outline-none focus:ring-0 focus:border--600 peer" placeholder=" " required />
                      <label for="user_name" class="peer-focus:font-medium absolute text-sm text--500 dark:text--400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text--600 peer-focus:dark:text--500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
                  </div>
                  
              
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={(e) => setUserEmail(e.target.value)}  value= {userEmail} type="email" name="user_email" id="user_email" class="block py-2.5 px-0 w-full text-sm text--900 bg-transparent border-0 border-b-2 border--300 appearance-none dark:text-[#0F3D3E] dark:border-[#0F3D3E] dark:focus:border--500 focus:outline-none focus:ring-0 focus:border--600 peer" placeholder=" " required />
                    <label for="user_email" class="peer-focus:font-medium absolute text-sm text--500 dark:text--400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text--600 peer-focus:dark:text--500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                      <div className='my-5'>
                        <label for="message" className="block mb-2 text-sm font-medium  ">Your message</label>
                        <textarea onChange={(e) => setMessage(e.target.value)}  value= {userMessage} id="message" name='message' rows="4" className='block text-black font-medium  p-2.5 w-full text-sm rounded-lg  drop-shadow-xl " placeholder="Your message...' required></textarea>
                      </div>
                </div>
         
                
                  {/* SUBMIT */}
                <button type="submit" value="Send" class="text-[#E2DCC8]  dark:text-[#0F3D3E] border-2 border-[#E2DCC8] dark:border-[#0F3D3E] font-bold  rounded-lg text-sm w-full  sm:w-auto px-5 py-2.5 text-center ">Submit</button>
              </form>

            </div>

               {/* SOCIALS */}
            <div className="social_wrapper w-full block xl:hidden mt-36">
              <ul className='font-medium text-[#E2DCC8] mx-auto dark:text-[#0F3D3E] text-lg  flex mb-5 justify-center gap-8'>
                <a href='https://github.com/aldrinramores' target='_blank' className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><BsGithub/></a>
                <a href='https://codepen.io/aldrinnunal' target='_blank' className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><FaCodepen/></a>
                <a href='https://www.instagram.com/aaramoress/' target='_blank' className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><BsInstagram/></a>
                <a href='https://www.linkedin.com/in/aldrin-ramores-556798202/' target='_blank' className='opacity-80 hover:opacity-100 cursor-pointer hover:translate-y-[-2px] transition-all'><BsLinkedin/></a>
              </ul>
            </div> 

              <p className='text-[#E2DCC8] dark:text-[#0F3D3E] font-medium text-center text-sm  mb-2 opacity-70 dark:opacity-100'>aldrinramores43@gmail.com</p>
           <p className='text-[#E2DCC8] dark:text-[#0F3D3E] font-medium text-center  mb-8 opacity-70 dark:opacity-100'>© 2022 Aldrin Ramores. All Rights Reserved.</p>
        </div>



      </div>
      
    </>
    
  );
}

export default App;
