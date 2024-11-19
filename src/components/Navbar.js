import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
const [showMobileMenu, setshowMobileMenu] = useState(false);
useEffect(() => {
if(showMobileMenu){
 document.body.style.overflow = 'hidden'
} else{
 document.body.style.overflow = 'auto'
}
return()=> {
 document.body.style.overflow = 'auto'
}
}, [showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
    <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
      <img src={assets.logo} alt="logo"/>
      <ul className="hidden md:flex  gap-7  text-white">
        <a href="#Home" className="cursor-pointer hover:text-gray-400">Home</a>
        <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
        <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
        <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
      </ul>
      <button className="hidden md:block bg:white px-8 py-2 rounded-full bg-white"> Sign Up</button>
      <img onClick={() => setshowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7" alt="" />
      </div>
      <div className={`md:hidden ${showMobileMenu ?" fixed w-full" : "h-0 w-0" }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6"><img onClick={() => setshowMobileMenu(false)} className="w-6 " src={assets.cross_icon}/></div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block" >Home</a>
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block" >About</a>
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block" >Projects</a>
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block" >Testimonials</a>
        </ul>
      </div>
    </div>
  
  );
};

export default Navbar;