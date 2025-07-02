import React, { useEffect, useState } from 'react'
import { CiFilter } from "react-icons/ci";
import BucketCard from '../components/BucketCard';

function BucketPage({}) {
  const[inBucket,setInBucket] = useState([])
  useEffect(() => {
    const saved = localStorage.getItem("bucket")
    if(saved) {
      setInBucket(JSON.parse(saved))
     
    }
    
  }, [])

  return (
    <>
<div className="flex justify-center py-8">
      <div className="flex justify-center flex-col">
        <h2 className="font-bold text-2xl mb-4">Ваша Корзина</h2>
        <div className="flex items-center flex-col justify-between py-2 gap-5">
         {inBucket.map((item) => (
          <BucketCard item={item} key={item.id}/>
         ))}
        </div>
        <div className='flex justify-between mt-5'>
          <button className='btn'>Заказать</button>
          <p>ОБш</p>
          </div>
      </div>
    </div>
    </>
  )
}

export default BucketPage
