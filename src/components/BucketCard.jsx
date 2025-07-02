import React from 'react'

function BucketCard({item}) {
  
  return (
    
    <div className='flex flex-row gap-5 items-center border w-full border-gray-300 10'>
       
        <img

            src={item.image}
            alt="Pizza"
            className="w-75 h-50 rounded-full mr-4 "
          />
          <div className="flex-1 ">
            <p className="font-medium">{item.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">-</button>
            <p className="w-6 text-center">1</p>
            <button className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">+</button>
          </div>
          <p className="text-lg font-semibold text-orange-500">{item.price} ₽</p>
    </div>
  )
}

export default BucketCard
