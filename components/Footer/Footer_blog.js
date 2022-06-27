import React from 'react'

const Footer_blog = () => {
  return (
    <>
      {/* <section className="py-20 2xl:py-40 bg-white">
  <div className="container px-4 mx-auto">
    <div className="max-w-5xl mx-auto">
      <div className="relative pt-16 px-6 lg:px-24 pb-20 bg-gray-600 rounded-3xl overflow-hidden">
        <img className="absolute top-0 left-0" src="zospace-assets/lines/blue-half-circle.svg" alt="" />
        <img className="hidden lg:block absolute top-0 right-0 mt-6 mr-12" src="zospace-assets/images/stars.svg" alt="" />
        <img className="hidden lg:block absolute top-0 right-0 w-96 h-96 -mt-14 -mr-14" src="zospace-assets/lines/circle.svg" alt="" />
        <div className="relative">
          <span className="text-base lg:text-lg text-white font-bold">More news</span>
          <h3 className="mt-6 mb-12 text-5xl lg:text-6xl text-white font-bold font-heading">Subscribe now</h3>
          <div className="sm:max-w-md mb-8 sm:flex sm:items-center sm:bg-white sm:rounded-full">
            <span className="hidden sm:inline-block pl-2 sm:pl-6 lg:pl-10">
              <svg width="37" height="37" viewbox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="18.5" r="9.5" fill="#1F40FF" fill-opacity="0.15"></circle><circle cx="18.5" cy="18.5" r="18.5" fill="#1F40FF" fill-opacity="0.06"></circle><circle cx="18.5" cy="18.5" r="2.5" fill="#282C36"></circle></svg>
            </span>
            <input className="w-full sm:w-auto mb-4 sm:mb-0 pl-8 sm:pl-4 py-5 rounded-full placeholder-gray-900 font-bold focus:outline-none" type="email" placeholder="Drop your Email" />
            <button className="w-full sm:w-auto ml-auto px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">Subscribe</button>
          </div>
          <p className="text-gray-200">
            <span>The brown fox jumps over</span>
            <span className="text-white">the lazy dog.</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}
      <section className='-mb-28 mt-10 z-[9999] md:max-w-6xl md:mx-auto mx-3 p-10 bg-black  rounded-2xl shadow shadow-blue-800 relative'>


        <h2 className='text-white text-4xl font-bold normal-font mb-2'>Stay updated with our content!</h2>
        <p className='text-[#7d95b3]'>Subscribe to our blog and receive all of the new cool stuff.</p>
        <div className="max-w-md flex items-center bg-white rounded-full mt-4 p-2">
          <input type="email" name="" id="" className='py-2 px-4 flex-grow rounded-full ' placeholder='Type here your email address..'/>
          <button className='px-4 h-full bg-purple-500 py-2 rounded-full font-bold'>Sign up</button>
        </div>
      </section>
    <div className="relative mt-16 bg-blue-500 -z-10 pt-20">
      
      <svg
        className="absolute top-0 -z-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-blue-500"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-white"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                codecrush
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-black-50">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-black-50">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-white">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-white">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-black-50 hover:text-white"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-blue-200 sm:flex-row">
          <p className="text-sm text-white">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-black-100 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-black-100 hover:text-white"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-black-100 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Footer_blog