import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import Card from "../components/Card";
import Discount from "../components/Discount";
import MenuList from "../components/MenuList";
import Navbar from "../components/Navbar";

function HomePage({ menu, user, changeMenu,isMenuOpen }) {
  const [bucket, setBucket] = useState([]);


  useEffect(() => {
    const saved = localStorage.getItem("bucket");
    if (saved) {
      setBucket(JSON.parse(saved));
    }
  }, []);

  const addToBucket = (item) => {
    const newBucket = [...bucket, item];
    setBucket(newBucket);
    localStorage.setItem("bucket", JSON.stringify(newBucket));
  };
  return (
    <>
    <div
        className="relative h-full bg-cover bg-center "
        style={{ backgroundImage: "url('/pizza2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 h-full"></div>
        <div className="relative z-10 h-full">
          <Navbar user={user} />
          <MenuList />
          <Discount />
        </div>
      </div>

   <div className="">
   <div className="">
        <div className="flex  justify-between px-16 py-7">
          <h2 id="pizza" className="font-bold text-3xl">
            Пицца
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "пицца")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex  justify-between px-16 py-7">
          <h2 id="sushi" className="font-bold text-3xl">
            Суши
          </h2>
          <div className="">
            {" "}
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn-xl btn hover:btn-primary"
                >
                  {" "}
                  <CiFilter />
                </label>
              </div>{" "}
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

             
                 <ul className="menu bg-base-200 text-base-content min-h-full w-150 p-4">
                 <p className="text-2xl font-medium">Порици</p>
                 <li className="grid grid-cols-4 gap-4 mt-4 w-full">
                   {[
                     "Огромная порция",
                     "Мини порция",
                     "Макси порция",
                     "Семейная порция",
                     "Одинарная порция",
                     "Полная порция",
                     "Порция на двоих",
                     "Порция XL",
                     "Порция XXL",
                     "Детская порция",
                     "Взрослая порция",
                   ].map((text, index) => (
                     <ul
                       key={index}
                       className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl"
                       onClick={(e) =>
                         e.currentTarget.classList.toggle("btn-primary")
                       }
                     >
                       <p className="text-sm font-bold">{text}</p>
                     </ul>
                   ))}
                 </li>

                 <p className="text-2xl font-medium mt-10">Добавки</p>
                 <li className="grid grid-cols-4 gap-4 mt-4 w-full">
                   {[
                     "Добавки: сыр",
                     "Добавки: бекон",
                     "Добавки: кетчуп",
                     "Добавки: майонез",
                     "Добавки: халапеньо",
                     "Добавки: лук",
                     "Добавки: огурцы",
                     "Добавки: томаты",
                     "Добавки: салат",
                   ].map((text, index) => (
                     <ul
                       key={index}
                       className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl"
                       onClick={(e) =>
                         e.currentTarget.classList.toggle("btn-primary")
                       }
                     >
                       <p className="text-sm font-bold">{text}</p>
                     </ul>
                   ))}
                 </li>

                 <p className="text-2xl font-medium mt-10">
                   Время приготовления{" "}
                 </p>
                 <li className="grid grid-cols-4 gap-4 mt-4 w-full">
                   {[
                     "До 10 минут (быстро)",
                     "10–20 минут (стандарт)",
                     "Более 20 минут",
                     "Предзаказ на время",
                     "Завтрак (до 11:00)",
                     "Обед ( до 15:00)",
                     "Ужин (после 15:00)",
                   ].map((text, index) => (
                     <ul
                       key={index}
                       className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl"
                       onClick={(e) =>
                         e.currentTarget.classList.toggle("btn-primary")
                       }
                     >
                       <p className="text-sm font-bold">{text}</p>
                     </ul>
                   ))}
                 </li>

                 <div className="flex justify-end ">
                   <button
                     onClick={changeMenu}
                     className="btn-lg btn hover:btn-primary mt-10"
                   >
                     <p className="">Филтер</p>
                   </button>
                 </div>
               </ul>
              
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "суши")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex  justify-between px-16 py-7">
          <h2 id="drink" className="font-bold text-3xl">
            Напитки
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "напитки")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex  justify-between px-16 py-7">
          <h2 id="zakuski" className="font-bold text-3xl">
            Закуски
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "закуски")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex  justify-between px-16 py-7">
          <h2 id="combo" className="font-bold text-3xl">
            Комбо
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "комбо")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex  justify-between px-16 py-7">
          <h2 id="desert" className="font-bold text-3xl">
            Десерты
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "десерты")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex  justify-between px-16 py-7">
          <h2 id="sauce" className="font-bold text-3xl">
            Соусы
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 ">
          {menu
            .filter((item) => item.type === "соусы")
            .map((item) => (
              <Card item={item} key={item.id} addToBucket={addToBucket} />
            ))}
        </div>
      </div>
   </div>
    </>
  );
}

export default HomePage;
