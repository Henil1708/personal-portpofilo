import React,{useEffect} from 'react'
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const AboutMe = () => {

    const aboutMeDiv = React.createRef(null);
    const hello = React.createRef(null);
    const welcome = React.createRef(null);
    const journey= React.createRef(null);
    const bottomBox1 = React.createRef(null);
    const bottomBox2 = React.createRef(null);
    useEffect(() => {

        let timeline = gsap.timeline();


        timeline
            .to(hello.current, {
                opacity: 0,
                y: "-10vh",
                ease: "power-4"
            })
            .to(welcome.current, {
                display: "block",
                textAlign: "center",
                opacity: 1,
                y: "-5vh"
            })
            .fromTo(aboutMeDiv.current, {
                backgroundColor: "black"
            }, {
                backgroundColor: "blue"
                
            })
            .to(journey.current, {
                opacity: 1
            })
            .to(bottomBox1.current, 2, {
                rotate: "-10deg",
                height: "100%",
                backgroundColor: "black",
                borderTop: "3px solid white",
                
            },"--3")
            .to(bottomBox2.current, 2, {
                rotate: "10deg",
                height: "100%",
                backgroundColor: "black",
                borderTop: "3px solid white",
                
            },"--3");
        
        ScrollTrigger.create({
            animation: timeline,
            trigger: aboutMeDiv.current,
            start: "top 0%",
            end: "bottom 00%",
            scrub: 1,
            pin: true,
        });


        ScrollTrigger.getAll().map(item => item.kill);


        
    }, [aboutMeDiv, hello,welcome,journey]);

  return (
      <>
          <section ref={aboutMeDiv} className=' bg-black h-screen w-full relative backdrop-blur p-5 normal-text overflow-hidden' >
              <div className='w-[200%] -left-10 absolute -bottom-[50%] bg-[blue] ' ref={bottomBox1} ></div>
              <div className='w-[200%] -left-10 absolute -top-[50%] bg-[blue] ' ref={bottomBox2} ></div>
              <h1 ref={hello} className = 'text-[100px] text-left text-white font-[900] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' > Hello world!</h1>
              <h1 ref={welcome} className='md:text-[80px] text-6xl   opacity-0 hidden text-white font-[900] absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[40%] ' >Welcome <span className='opacity-0 text-white  underline decoration-purple-400' ref={journey}>To my journey</span></h1>
              
            </section>
    </>
  )
}

export default AboutMe