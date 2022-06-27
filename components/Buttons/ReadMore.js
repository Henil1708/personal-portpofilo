import React from 'react'
import Link from "next/link";

const ReadMore = ({link}) => {
  return (
      <div className='mt-6'>
          <Link href={link}><a className='py-2 px-5 text-[16px] font-semibold hover:bg-purple-800 bg-purple-600 text-white hover:shadow-2xl shadow-green-200'>Learn more</a></Link>
      </div>

  )
}

export default ReadMore