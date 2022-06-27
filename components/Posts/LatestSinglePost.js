import React from 'react'
import Image from 'next/image'
import ReadMore from '../Buttons/ReadMore'
const LatestSinglePost = ({ post }) => {
    const date = (created_at) =>
    {
        const getDate = new Date(created_at);

        return getDate.getDate()+'-'+getDate.getMonth()+'-'+getDate.getFullYear();
        }
    return (
        <div className='bg-white relative pt-5' >   
          <div className=' md:flex  normal-text '>
                <div className='relative flex-[1.2] md:h-[80vh] h-[40vh]    '>
                <Image src={`http://localhost:8000/uploads/posts/${post.image}`} layout="fill" alt={post.name} objectFit='cover' priority="afterInteractive"  />
                </div>
                <div className='flex-[0.8] md:p-16 p-7 md:flex mt-0 items-center justify-center bg-white md:rounded-md rounded-b-md md:shadow-none shadow '>
                    <div>
                    {/* <h1 className='text-[16px] font-bold normal-text text-gray-600 leading-tight'>Date: {date(post.created_at)}</h1> */}
                    <h1 className='text-lg  normal-font text-purple-600 leading-tight mb-5 font-medium'>FEATURED BLOG</h1>
                    <h1 className='text-[42px] font-bold font-muli leading-tight'>{post.name}</h1>
                    <p className="" >
                        { post.shortDescription}
                    </p>
                    <ReadMore link={`/blogs/${post.slug}`} />
                   </div>
                </div>
          </div>
      </div>
  )
}

export default LatestSinglePost