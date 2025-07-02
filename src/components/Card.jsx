import React from 'react'

function Card({item,key,addToBucket}) {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-gray-100 border border-gray-300 hover:shadow-xl transition duration-300 relative">

    {item.label && (
      <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] px-3 py-1 rounded-full shadow">
        {item.label}
      </span>
    )}
  
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-44 object-contain bg-white p-4"
    />
  
    <div className="p-5 flex flex-col gap-2">
  
      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
  
      <p className="text-sm text-gray-600 leading-snug">
        {item.description}..
      </p>
  
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => addToBucket(item)}
          className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition"
        >
          <span className="hidden sm:inline">Выбрать</span>
          <i className="fa-solid fa-basket-shopping"></i>
        </button>
        <span className="text-primary font-semibold text-base">
          от {item.price} ₽
        </span>
      </div>
    </div>
  </div>
  
  )
}

export default Card
