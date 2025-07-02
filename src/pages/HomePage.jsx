import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import Card from "../components/Card";
import Discount from "../components/Discount";
import MenuList from "../components/MenuList";
import Navbar from "../components/Navbar";

function HomePage({ menu, user,changeMenu }) {
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
        className="relative h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/pizza2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 h-full"></div>
        <div className="relative z-10 h-full">
          <Navbar user={user} />
          <MenuList />
          <Discount />
        </div>
      </div>

      <div>
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
                  {/* Sidebar content here */}
                  <p className="text-2xl font-medium">Порици</p>
                  <li className="grid grid-cols-4 gap-4 mt-4 w-full">
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Огромная порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Мини порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Макси порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Семейная порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Одинарная порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Полная порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Порция на двоих</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Порция XL</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Порция XXL</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Детская порция</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Взрослая порция</p>
                    </ul>
                  </li>
                  <p className="text-2xl font-medium mt-10">Добавки</p>
                  <li className="grid grid-cols-4 gap-4 mt-4 w-full">
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: сыр</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: бекон</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: кетчуп</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: майонез</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: халапеньо</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: лук</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: огурцы</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: томаты</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Добавки: салат</p>
                    </ul>
                  
                  </li>
                  <p className="text-2xl font-medium mt-10">Время приготовления </p>
                  <li className="grid grid-cols-4 gap-4 mt-4 w-full">
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">До 10 минут (быстро)</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">
                        10–20 минут (стандарт)
                      </p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Более 20 минут</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Предзаказ на время</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Завтрак (до 11:00)</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Обед ( до 15:00)</p>
                    </ul>
                    <ul className="btn btn-lg hover:btn-primary w-full text-wrap break-words rounded-xl">
                      <p className="text-sm font-bold">Ужин (после 15:00)</p>
                    </ul>
                  </li> 
                  <div className="flex justify-end ">
                 < button onClick={changeMenu} className=" btn-lg btn hover:btn-primary  mt-10"><p className="">Филтер</p></button>
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
          {menu.filter((item) => item.type === "напитки")
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
    </>
  );
}

export default HomePage;
