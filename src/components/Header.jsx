import React from 'react';
import { NavBar } from './NavBar/NavBar';
import { FaUser, FaCartShopping } from 'react-icons/fa6';

export const Header = () => {
  return (
    <div className="flex flex-col items-center sm:justify-center lg:w-full">
        <ul className="sm:flex sm:space-x-96 sm:mt-10 lg:mb-10">
          <li className="sm:flex sm:flex-col items-center ">
            <img className="hidden sm:flex sm:w-6 md:w-16" src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-white-pearl-necklace-png-png-image_11624730.png"/>
            <h2 className="hidden sm:flex sm:text-sm sm:font-bold sm:text-yellow-950 md:text-xl">X-Lyn Jewels</h2>
          </li>
          <li>
          <li className="sm:flex space-x-5 lg:absolute lg:top-20">
           <a href=""> <FaUser className=" hidden sm:flex sm:text-md md:text-2xl"/></a>
           <a href=""> <FaCartShopping className="hidden sm:flex sm:text-md md:text-2xl" /></a>
        </li>
          </li>
        </ul>
        <NavBar />
    </div>
  )
}
