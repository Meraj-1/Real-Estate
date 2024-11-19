import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center '>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt='logo'/>
                <p className='mt-4 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Odit repellendus distinctio numquam laboriosam, voluptate ab?
                 Quaerat sit corporis ducimus perspiciatis culpa in, hic odio, 
                 iure dolorem nemo debitis ut alias.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                 <h3 className='text-white font-bold text-lg mb-4'>Company</h3>
                 <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='#Header' className='hover:text-white'>Home</a>
                    <a href='#About' className='hover:text-white'>About us</a>
                    <a href='#Contacts' className='hover:text-white'>Contact us</a>
                    <a href='#' className='hover:text-white'>Privacy Policy</a>

                 </ul>
            </div>
            <div className='w-full md:w-1/3'>
            <h3 className='text-white font-bold text-lg mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mb-4 max-w-80'>The latest news, article, and resources, sent to your inbox weekly</p>
            <div className='flex gap-2'>
                <input type='email' placeholder='Enter Your email'
                className='p-2 bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2024 © GreatStack. All Right Reserved. 
        </div>
    </div>
  )
}

export default Footer