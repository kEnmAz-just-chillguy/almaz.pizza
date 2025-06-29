import React from 'react'

function Card({item,key,addToBucket}) {
  return (
    <div>
 
<div class="w-full max-w-sm bg-white rounded-xl shadow border hover:border-gray-400 transition relative">

 
  {item.label ?  <span
    class="absolute top-4 left-0 bg-red-600 text-white px-3 text-xs  py-2 rounded-r"
  >
   
   {item.label}
  </span> : ""}
  <img src={item.image} alt="Чикен Сладкий Чили" class="w-full h-48 object-contain " />


  <div class="p-4 flex flex-col gap-3 border-t">

    <h3 class="text-lg font-semibold">{item.name}</h3>


    <p class="text-sm text-gray-600">
      {item.description}..
    </p>


    <div class="flex items-center justify-between">
      <button onClick={() => addToBucket(item)} class="btn btn-primary gap-2">
        <span class="hidden sm:inline">Выбрать</span>
        <i class="fa-solid fa-basket-shopping"></i>
      </button>
      <span class="text-primary font-bold">от {item.price} ₽</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Card
