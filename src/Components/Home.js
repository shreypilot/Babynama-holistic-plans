/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Home = () => {
  return (
    <section className='bg-gray-50 py-48 h-screen '>
        <div className='mx-auto max-w-6xl md:px-4 sm:px-6'>
          <div className='grid lg:grid-cols-2 md:grid-rows-2 items-center  gap-8 py-16  md:py-20'>
            <div className='mx-auto max-w-4xl pb-10  gap-8 lg:py-16 md:grid-cols-2 md:py-20'>
                <h1 className=' font-bold leading-tight mb-6 text-4xl'>
                    Holistic Plans
                </h1>
                <div className='mx-auto max-w-3xl'>
                  <p className='mb-8 font-medium text-gray-600 sm:text-xl md:text-2xl'>Dedicated pediatrician for your baby, personal care plan, Best possible baby care</p>
                   <div className='flex max-w-none gap-4 pt-20'>
                    <button className='flex w-full sm:w-auto'>
                        <a className='w-full text-base font-medium sm:text-lg md:text-xl bg-blue-600 py-4 px-6 rounded-md text-white '>Get Started</a>
                    </button>
                    <button className='flex w-full sm:w-auto'>
                        <a className='w-full text-base border-yellow-500 bg-yellow-600 text-white py-4 px-12 rounded-md font-medium sm:text-lg md:text-xl'>Preview Access</a>
                    </button>
                   </div>
                </div>
            </div>
            <div className='col-span-1  md:row-span-1/2  m-auto max-w-5xl'>
              <img src='https://babynama.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.df001b2e.webp&w=1920&q=75' alt='babynama-holistic-plans' className='mx-auto h-auto w-full rounded-md overflow-y-hidden' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home
