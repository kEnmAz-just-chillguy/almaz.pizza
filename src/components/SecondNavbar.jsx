import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";

import { IoDiamond } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SecondNavbar() {
    return (
        <div className='sticky top-0 z-50 bg-opacity-80 backdrop-blur-md h-full'>

    <header className="shadow text-black ">

  <div className="flex flex-wrap items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 max-w-screen-xl mx-auto">


 
    <div className="hidden md:inline-block text-black">
      <span className=" mr-2">Среднее время доставки*:</span>
      <span className="font-semibold">00:24:19</span>
    </div>

    <span className="hidden lg:inline-block text-sm text-black">Время работы: с 11:00 до 23:00</span>
          <a href="#" className="text-black font-medium text-sm flex items-center gap-2 hover:text-primary">
    <FaUser />
      <span>Войти в аккаунт</span>
    </a>

    <div className="lg:hidden cursor-pointer">
      <i className="fa-solid fa-bars text-xl"></i>
    </div>
  </div>

  <hr className="border-t border-gray-200" />


  <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
    <Link to={"/"} className='flex items-center gap-3 font-bold text-2xl ' href="/">
    <IoDiamond width="36"/>
    <div>AlmazPizza</div>
    </Link>
    <Link
      to={"/bucket"}
      className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded hover:bg-white hover:text-primary border-2 border-primary transition"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path
          d="M7.781 15.5h12.704a.7.7 0 0 0 .675-.508l2.813-9.8a.697.697 0 0 0-.676-.892H6.158l-.503-2.252A.702.702 0 0 0 4.97 1.5H.703a.701.701 0 1 0 0 1.4h3.701l2.54 11.375A2.101 2.101 0 0 0 5.672 16.2c0 1.158.946 2.1 2.11 2.1h12.703a.701.701 0 1 0 0-1.4H7.78a.702.702 0 0 1-.703-.7c0-.386.316-.7.703-.7Z"
        />
        <path
          d="M7.078 20.4c0 1.158.946 2.1 2.11 2.1 1.163 0 2.11-.942 2.11-2.1 0-1.158-.947-2.1-2.11-2.1-1.164 0-2.11.942-2.11 2.1ZM16.969 20.4c0 1.158.946 2.1 2.11 2.1 1.162 0 2.109-.942 2.109-2.1 0-1.158-.947-2.1-2.11-2.1-1.163 0-2.11.942-2.11 2.1Z"
        />
      </svg>
      <span>0 ₽</span>
    </Link>
  </div>
</header>

    </div>
  )
}

export default SecondNavbar
