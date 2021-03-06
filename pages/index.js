import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect,useState } from 'react';
import styles from '../styles/Home.module.css'
import {
  FiGithub,
  FiInstagram
} from "react-icons/fi";
import {
  AiOutlineArrowDown
} from "react-icons/ai";
import heroImage from "../public/images/hero-image.png"


export default function Home() {

  const [color, setColor] = useState('blue');
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setColor('red'), [])

  return (
    <div className = "bg-gradient-to-tr pb-10 to-[#3318FF]/95  from-black  backdrop-blur-sm w-screen h-screen flex justify-center relative overflow-x-hidden" >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-[300px] absolute -right-10 h-[300px] -top-52 rounded-full bg-[#A094FF] blur-3xl -z-10'></div>
      <div className='w-[500px] absolute -left-32 h-[500px] -top-52  bg-purple-500/50 blur-[90px] -z-10'></div>
      <div className='w-[600px] absolute -right-32 h-[600px] -bottom-52  bg-purple-500/50 blur-[90px] -z-10'></div>
        {/* <div className='text-md text-white   mb-10 absolute  font-extrabold text-center  md:right-16 md:left-0 left-16 top-16  '>Codebyhenil</div> */}
      <main className='mt-10  ' >
        <Image src={heroImage} alt={"henil mehta, software developer, software engineer, sde, sde1, react js developer"} className="object-contain   mx-auto" layout="responsive"  />
        <div>
          <h1 className='font-bold text-center md:text-[90px] text-6xl text-white mt-5 underline decoration-wavy decoration-4 underline-offset-4 decoration-fuchsia-500'>Coming soon</h1>
        </div>
        <div className= "animate-bounce border border-white text-white  my-10 mt-16 mx-auto relative duration-500 w-10 h-10 rounded-full flex items-center justify-center" >
          
          <AiOutlineArrowDown />
          
        </div>
        <div className='md:max-w-lg  md:mx-auto mx-5 bg-white/80 relative backdrop-blur-sm z-[999] p-5 md:mt-20 mt-20 mb-10 rounded '>
          <div className=' left-0 top-0 absolute w-full h-full bg-purple-700 blur -z-[10] rounded'></div>
          <div className=' left-0 top-0 absolute w-full h-full bg-indigo-700 blur-2xl -z-[10] rounded'></div>
          <div className=' left-0 top-0 absolute w-full h-full bg-gray-100   -z-[10] rounded'></div>

          <div className='text-2xl font-semibold'>Reach me out </div>
          <hr className='max-w-[25px] border border-purple-500' />

          <div className='mt-5  grid gap-2'>
            <a  href="https://github.com/Henil1708"  className="mb-3">
              <p className = 'w-full grid grid-cols-8 divide-x divide-purple-700 duration-150 ease-in-out bg-gradient-to-tl hover:from-purple-300 from-purple-400 to-blue-400 hover:to-blue-400 p-3 rounded shadow-md ' >
                <div className='col-span-1 '><FiGithub className='text-2xl mx-auto' /></div>
                <div className='text-lg col-span-7 pl-5 text-gray-800 font-bold '>@Henil1708</div>
              </p>
            </a>
            <a  href = "https://www.instagram.com/software_developer_henil"
            >
              <p className = 'w-full grid grid-cols-8 divide-x divide-purple-600 duration-150 ease-in-out bg-gradient-to-tl hover:from-purple-300 from-purple-400 to-blue-400 hover:to-blue-400 p-3 rounded shadow-md ' >
                <div className='col-span-1 '><FiInstagram className='text-2xl mx-auto' /></div>
                <div className='text-lg col-span-7 pl-5 text-gray-800 font-bold '>@software_developer_henil</div>
              </p>
            </a>
          </div>

        </div>

      </main>

      
    </div>
  )
}
