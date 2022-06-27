import React from 'react'
import Image from 'next/image'
const BlogCard = ({ item, index }) => {
    return (
     
            <div className = "col-span-1  bg-white border aspect-auto rounded-md overflow-hidden group " >
                

    

 
            <div className={`bg-white overflow-hidden  h-full font-sans shadow `}>
                
                            {/* {
                                index ==0 ? <div className = 'aspect-video h-56 relative w-full bg-black' >
                    <Image src={'http://localhost:8000/uploads/posts/'+item.image} layout="fill" alt={item.name} className="group-hover:opacity-90 "  objectFit='cover'  />
                            </div> : <div className = 'aspect-square h-32 relative  bg-black' >
                    <Image src={'http://localhost:8000/uploads/posts/'+item.image} layout="fill" alt={item.name} className="group-hover:opacity-90 "  objectFit='cover'  />
                            </div>
                } */}
                 <div className = 'aspect-video h-56 relative w-full bg-black' >
                    <Image src={'http://localhost:8000/uploads/posts/'+item.image} layout="fill" alt={item.name} className="group-hover:opacity-90 "  objectFit='cover'  />
                            </div>
                    <div className="px-3">
                        <h2 className="mt-2 mb-2 font-bold text-2xl font-Heading group-hover:text-blue-600">
                            {item.name}
                        </h2>
                        <div className="mb-4 flex flex-wrap">
                            <div className="mr-2" dangerouslySetInnerHTML={{ __html: item.description}}></div>
                        </div>

                        {/* <p className="text-md text-justify">Some Description</p> */}
                        </div>
                        <div className="p-4 flex flex-wrap items-center">
                        <amp-ad width="100vw" height="320"
     type="adsense"
     data-ad-client="ca-pub-1918308490244896"
     data-ad-slot="6898213515"
     data-auto-format="rspv"
     data-full-width="">
  <div overflow=""></div>
</amp-ad>
                        </div>
                    </div>
                    
            </div>
  )
}

export default BlogCard