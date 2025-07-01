import React from 'react'
import { FaFire } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { GiSushis } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiChickenLeg } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LuDessert } from "react-icons/lu";
import { GiSaucepan } from "react-icons/gi";


function MenuList() {
  return (
    <div>

<section class="mt-8">
  <div class="container mx-auto max-w-screen-xl px-4">
    <ul class="flex flex-wrap justify-between gap-2 text-base font-medium">

      <li onClick={() => {
        document.getElementById("pizza").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
        <GiFullPizza class="w-6 h-6" />
        <span>Пицца</span>
      </li>
      <li onClick={() => {
        document.getElementById("sushi").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
       <GiSushis class="w-6 h-6" />
        <span>Суши</span>
      </li>
      <li onClick={() => {
        document.getElementById("drink").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
        <RiDrinks2Fill class="w-6 h-6" />
        <span>Напитки</span>
      </li>
      <li onClick={() => {
        document.getElementById("zakuski").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
        <GiChickenLeg class="w-6 h-6" />
        <span>Закуски</span>
      </li>
      <li onClick={() => {
        document.getElementById("combo").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
       <IoFastFoodOutline class="w-6 h-6" />
        <span>Комбо</span>
      </li>
      <li onClick={() => {
        document.getElementById("desert").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
       < LuDessert class="w-6 h-6" />
        <span>Десерты</span>
      </li>
      <li onClick={() => {
        document.getElementById("sauce").scrollIntoView({behavior:"smooth"})
      }}
        class="flex flex-col items-center justify-center w-full max-w-[135px] p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-400 hover:text-primary cursor-pointer transition"
      >
        <GiSaucepan  class="w-6 h-6" />
        <span>Соусы</span>
      </li>
    </ul>
  </div>
</section>

    </div>
  )
}

export default MenuList
