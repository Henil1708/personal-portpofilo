import React, { useEffect } from 'react'
import {Link} from 'react-scroll';
import { BiMessageSquareCheck } from "react-icons/bi";
import {useRouter} from "next/router";

const Navbar_home = () => {
  const router = useRouter();
  // const navBarDownAnimation = React.createRef(null); 
  // useEffect(() => { 
  //   gsap.fromTo(navBarDownAnimation.current,{duration: 2, y: -100,ease:"power3"},{ y: 0 });

    

  // }, [navBarDownAnimation]);
  
  return (
      <nav className='fixed top-0 left-0  w-screen text-white md:px-3 z-50'>
          <div className = 'flex items-center justify-between px-4 max-w-6xl bg-black/50 backdrop-blur mx-auto relative p-3 md:rounded-b-md ' >
          <Link  activeClass="activeHome"
      to={`home`}
     spy={true}
     smooth={true}
     offset={-100}
     duration={500} className="cursor-pointer"><a className='hover:text-slate-300 text-white font-mono leading-tight '>codebyhenil</a></Link>
          <ul className='flex items-center justify-end space-x-5 text-[14px] leading-3 text-gray-400'>
          {/* <a href={"/blogs"} >Blogs</a> */}
          <Link
      activeClass="active"
      to={`section1`}
     spy={true}
     smooth={true}
     offset={-80}
     duration={100} className="cursor-pointer">
         Works
     </Link>
          {/* {/* <Link href={"/home"}>
            <a className={`${router.pathname==="/home" ? "text-white":"text-gray-600" }`}>
              Home
            </a>
          </Link>
          <Link href={"/about-me"}>
            <a className={`${router.pathname==="/about-me" ? "text-white":"text-gray-600" }`}>
              About me
            </a>
          </Link>
          <Link href={"/home"}>
            Home
          </Link> */}
          <Link to={"contact-us"} spy={true} offset={-100} duration={200} >
            <p className='border text-white border-transparent bg-gradient-to-tr from-gray-800 to-slate-900 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-purple-500 rounded hover:border-transparent border-white duration-75 p-3 py-2 flex items-center space-x-2 justify-between cursor-pointer'>
              <span className='mr-2'><BiMessageSquareCheck className='text-4xl text-white ' /></span> Hire me
            </p>
          </Link> 
          </ul>
          
        </div>
      </nav>
  )
}

export default Navbar_home