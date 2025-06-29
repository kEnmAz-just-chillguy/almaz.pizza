import React, { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import Card from "../components/Card";
import Discount from "../components/Discount";
import MenuList from "../components/MenuList";
import Navbar from "../components/Navbar";

function HomePage({ menu }) {
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
          <Navbar />
          <MenuList />
          <Discount />
        </div>
      </div>

    

     <div>
      <div className="flex  justify-between px-16 py-7">
        <h2 className="font-bold text-3xl">Пицца</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
        <h2 className="font-bold text-3xl">Суши</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
        <h2 className="font-bold text-3xl">Напитки</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
        <h2 className="font-bold text-3xl">Закуски</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
        <h2 className="font-bold text-3xl">Комбо</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
        <h2 className="font-bold text-3xl">Десерты</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
        <h2 className="font-bold text-3xl">Соусы</h2>
        <button className="btn font-bold text-4xl hover:btn-primary">
          <CiFilter />
        </button>
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
