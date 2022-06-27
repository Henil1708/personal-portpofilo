import React, {
    useEffect,
} from 'react'

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Image from "next/image";
import Link from "next/link"
import {
    BiMessageSquareCheck
} from "react-icons/bi";
import heroImage from "../../public/images/hero-image2.png";
import heroImageMobile from "../../public/images/hero-image-mobile.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Intro = () => {

    const box = React.createRef(null);
    const text = React.createRef(null);
    const item1 = React.createRef(null);
    const item2 = React.createRef(null);
    const item3 = React.createRef(null);
    const image = React.createRef(null);

    // const circle = React.createRef(null);

    useEffect(() => { 
        let tl = gsap.timeline();
        

        tl.to(image.current, {
            y: "-10vh",
            opacity: 0
        })
            .to(item1.current, {
                rotate: "8deg"
            })
            .to(item2.current, {
                rotate: "10deg"
            })
            .to(item3.current, {
                rotate: "00deg",
                height: "100vh"
            });
        ScrollTrigger.create({
            animation: tl,
            trigger: box.current,
            start: "top 0%",
            end: "bottom 70%",
            scrub: 2,
        });
    },[box,item1,item2,item3,image]);

  return (
    
      <section id="home">    
          {/* Hello world - hero section starts*/}
          <div ref={box} className='pt-5 w-full overflow-hidden md:h-screen h-[150%] relative  bg-black  '>
                <div ref={item1} className="w-[150%] h-[30%] absolute bg-purple-500/5 -z-[0] -right-20 -bottom-[30%] -rotate-[16deg]"></div>
                <div ref={item2} className="w-[150%] h-[30%] absolute bg-gradient-to-tr from-purple-500 to-blue-600 -z-[0] -right-20 -bottom-[30%] -rotate-[5deg]"></div>
              <div ref={ item3} className="w-[150%] h-[30%] absolute  backdrop-blur bg-purple-500/10 -z-[0] -left-20 -bottom-[20%] rotate-[5deg]"></div>
                <div className="w-[150%] h-[30%] absolute  backdrop-blur bg-purple-500/10 -z-[1] -left-20 -bottom-[20%] rotate-[5deg]"></div>
                {/* <div className="w-full h-full absolute bg-purple-800 -z-[11]  top-0"></div> */}
              <div  className = 'w-[600px] h-[600px] bg-blue-500 border-8 blur-[150px] rounded-full absolute opacity-75 -bottom-[400px] -left-[250px]' ></div>
              <div className = 'w-[600px] h-[600px] bg-[#a64af18a] border-8 blur-[150px] rounded-full absolute opacity-75 -bottom-[400px] -right-[250px]' >

              </div>
              <div className = 'w-[600px] h-[600px] bg-[#72155ebe] border-8 blur-[150px] rounded-full absolute opacity-75 -top-[400px] -right-[250px]' >

              </div>

              <div className='max-w-6xl mx-auto md:flex items-center md:flex-row flex-row-reverse justify-between'>
                   <div className='relative flex w-100 h-[400px] -z-[0] md:hidden md:mt-10' ref={image}>
                  <Image  src={heroImageMobile} layout="fill"  objectFit='contain' priority="beforeLoad" />
              </div>
                    <div className=' max-w-5xl md:mx-auto px-10 w-full z-20  text-white md:mt-32 -mt-20 md:mb-0 mb-[30%] flex-1' ref={text}>
                <p className='cursive text-xl text-gray-400'>My name is </p>
                <h1 className='md:text-[70px] text-[60px] font-black leading-tight'>Henil Mehta</h1>
                <p className='cursive font-thin md:text-xl text-lg  max-w-sm text-[#53CAF0] mb-10'>I am a <span className='text-amber-400'>fullstack developer </span>I have learned everything by my own with having some hands on experience in <span className='text-amber-400'>live projects.</span>  </p>
                    <Link href={"/contact-me"} >
                        <button className='border z-20 text-white border-transparent hover:bg-gradient-to-tr hover:from-gray-800 hover:to-slate-900 bg-gradient-to-tr from-blue-600 to-purple-500 rounded hover:border-white duration-75 p-3 py-2 flex items-center space-x-2 justify-between cursor-pointer'>
                        <span className='mr-2'><BiMessageSquareCheck className='text-4xl text-white ' /></span> Hire me
                        </button>
                    </Link>
              </div>
              <div ref={image} className='flex-1 w-full h-full md:static '>
              <div className='relative invisible w-full md:h-[500px] md:visible md:mt-10'>
                  <Image  src={heroImage} layout="fill" objectFit='contain' priority="beforeLoad" />
              </div>
             
              </div>
              </div>

          </div>
         
          {/* Hello world - hero section ends */}
      </section>
  )
}

export default Intro