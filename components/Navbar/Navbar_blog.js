import React,{useEffect,useState} from 'react'
import Link from "next/link"
import {useRouter} from "next/router";
import axios from '../../lib/axios';
import {RiMenu3Fill} from "react-icons/ri"
import {VscClose} from "react-icons/vsc"
import Image from "next/image";
import Logo from "../../public/images/logo/logo.webp"


const Navbar_blog = () => {

  const [category, setCategory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const categoriesFetch = async () => {
    const res = await axios.get('categories?limit='+7);
    setCategory(res.data);
  }

  useEffect(() => {
    categoriesFetch();  
  }, [])
  
  const categoryLink = (link) => {
    return "/blogs/category/" + link;
  }

  return (
      <nav className=' bg-white/80 backdrop-blur-sm shadow  z-50'>
          <div className = ' mx-auto  text-2xl py-3  font-bold px-3' >
            <div className='flex items-center justify-between '>
              <div>
                <Link href={'/blogs'}>
                  <a className = {`flex items-center px-3 py-0 font-bold hover:scale-90  rounded `} >
                    <Image src={"http://localhost:3000/images/logo/logo.webp"} width={200} height={100} objectFit={"contain"} alt={"Create blogs and share your knowledge with other people."} />
                  </a>
                </Link>
              </div>

              <div className='normal-text'>
                <Link href={'/tools'} className="">
                  <a className='text-lg px-10 py-2  bg-purple-800 md:block hidden rounded-md text-white border-4 border-white animate-bounce hover:border-gray-200' >Tools</a>
            </Link>
            <button onClick={()=> setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <VscClose className='text-gray-700' />:<RiMenu3Fill className='text-gray-800' />}
            </button>
              </div>
            </div>
      </div>
      <div className={`md:bg-purple-600 bg-white    md:static ${isOpen ? "static top-[0%]":"-top-[200%] -z-10 fixed"}`}>
       <div className='md:flex md:items-center md:static md:flex-row block normal-text text-sm  md:justify-center'>
          <Link href={"/blogs"} >
            <a className={`px-5 hover:bg-purple-800 font-semibold flex md:block items-center justify-center text-white  py-2 ${router.pathname === "/blogs" && "bg-purple-800 hover:bg-purple-700"}`}>Home</a>
          </Link>
          {
            category.map((item,index) => {
                return (
                <Link key={index} href={`/blogs/category/${item.slug}`}>
                  <a className={`px-5 hover:bg-purple-800 flex md:block items-center justify-center font-semibold text-white  py-2 ${router.query.slug == item.slug && "bg-purple-800 hover:bg-purple-700"}`}>
                      {item.name}
                  </a>
                </Link>
              )
            })
          }
          <Link href={"/blogs/category"} >
            <a className={`px-5 hover:bg-purple-800 flex md:block items-center justify-center font-semibold text-white  py-2`}>Category</a>
          </Link>
        </div>
      </div>
      </nav>
  )
}

export default Navbar_blog

