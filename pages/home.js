import React, {
    useRef,
    useEffect
} from 'react'
import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(gsap.plugins.css);


const home = () => {

    const container = useRef(null);
    const hello = useRef(null);
    const world = useRef(null);
    useEffect(() => {
      
        const tl = gsap.timeline();
        tl.to(container.current, { visibility: "visible" });
        tl.fromTo(hello.current,{fontSize:300,opacity:0,duration:500 },{fontSize:180,opacity:1});
        tl.to(world.current,{marginTop:-60,duration:1,ease:"power4"});


        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            animation: tl,
            start: "top top",
            end: "+=4000",
            scrub: true,

            pin: true,
            anticipatePin: 1
        });

    }, [])
    
  return (
      <div className = 'w-screen  bg-black flex items-center relative justify-center text-white text-center h-screen overflow-hidden' >

          <div className='md:text-[160px] invisible text-[90px] font-bold overflow-hidden' ref={container}>
              <h2 ref={hello}>Hello</h2>
              <div className='h-[180px] overflow-hidden -mt--10 '>

              <h2 className='-mt-60 ' ref={world}> World <span className='text-purple-800'>!</span></h2>
              </div>
        </div>
      </div>
  )
}

export default home