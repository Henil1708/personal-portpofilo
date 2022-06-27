import React from 'react'

const BlogSection = ({children}) => {
  return (
    <section className='container mx-auto md:px-3 md:py-2 md:flex md:items-start md:justify-between md:space-x-3'>
      {children}
      <div className='bg-white  flex-[0.2]'>
        <amp-ad width="100vw" height="320"
            type="adsense"
            data-ad-client="ca-pub-1918308490244896"
            data-ad-slot="6080676040"
            data-auto-format="rspv"
            data-full-width="">
            <div overflow=""></div>
        </amp-ad>
      </div>
    </section>
  )
}

export default BlogSection