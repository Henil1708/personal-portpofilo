import React, { useEffect } from 'react'
import Head from 'next/head'
import Intro from '../components/home/Intro'
import Navbar_home from '../components/Navbar/Navbar_home'
import AboutMe from '../components/home/AboutMe'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const home = () => {

    const worksBox = React.createRef(null);
    const works = React.createRef(null);
    const box = React.createRef(null);
    
        useEffect(() => {
            
            const timeline = gsap.timeline();
            
            timeline
                .to(works.current,{
                    opacity: 1,
                    y:"-10px"
                });
                
            ScrollTrigger.create({
                animation: timeline,
                trigger: works.current,
                start: "top 50%",
                end: "bottom ",
                srub:0.5,
            });

            
        }, []);
    
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="this is the blogs for react js developer and a next js developer all the error regarding the development they face are been shown here." />
            </Head>
            <Navbar_home />
            {/* <Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js' strategy='beforeInteractive'></Script>
            <Script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/TimelineMax.min.js' strategy='beforeInteractive'></Script> */}
            <Intro  />
            <AboutMe />
            <section className = 'bg-gradient-to-t from-slate-900 via-purple-900 to-slate-900 h-screen relative pt-32 overflow-x-hidden overflow-y-hidden py-10' ref={worksBox}
            id = "section1" >
                {/* <div className='blur-lg bg-purple-500/50  -top-10 absolute -left-10  w-[200px] h-[200px] rounded-full'></div> */}
                <h1 className='text-center md:text-[80px] text-6xl text-white font-bold -mt-10 mb-5 active w-fit mx-auto' ref={works}>My works</h1>
                <div className='p-4'>
                    <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-lg p-6">
                            {/* <div className="w-full h-full absolute bg-purple-800 -z-[11]  top-0"></div> */}
                        {/* <div  className = 'w-[400px] h-[400px] bg-blue-500 border-8 blur-[150px] rounded-full absolute opacity-75 -bottom-[400px] -left-[250px]' ></div>
                        <div className = 'w-[400px] h-[400px] bg-[#a64af18a] border-8 blur-[150px] rounded-full absolute opacity-75 -bottom-[400px] -right-[250px]' >

                        </div> */}
                        {/* <div className = 'w-[600px] h-[600px] bg-[#72155ebe] border-8 blur-[150px] rounded-full absolute opacity-75 -top-[400px] -right-[250px]' >

                        </div> */}
                    </div>
               </div>
                
            </section>
            </>
  )
}

export default home