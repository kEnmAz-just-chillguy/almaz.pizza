import React from 'react'

function Discount() {
  return (
    <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full flex justify-center items-center py-10 gap-75">
   <div className='flex flex-col items-center gap-3'>
   <img
        src="https://media.istockphoto.com/id/1279801284/photo/three-pizzas-with-salami-cheese-herbs-and-meat.jpg?s=612x612&w=0&k=20&c=P5gBuoBbqSqRB1zdnZlwkkhZepNf4fcwIH4S9lt6e7E="
        className="rounded-full w-175 h-110" />
        <h2 className='font-bold text-2xl text-primary '>Голодное трио</h2>
   </div>
        <p className='w-[500px] text-white  font-semibold text-2xl'>Закажи 3 средние пиццы всего от 999 рублей — собери своё идеальное комбо по суперцене! Это отличная возможность вкусно накормить семью, порадовать друзей или устроить себе настоящий праздник вкуса без лишних затрат. В акцию входят тщательно подобранные пиццы из специального меню, приготовленные из свежих ингредиентов и с любовью. Не упусти шанс насладиться любимыми вкусами по выгодной цене — предложение ограничено!</p>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide4" className="btn btn-circle">❮</a>
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full flex justify-center items-center py-10 gap-75">
   <div className='flex flex-col items-center gap-3'>
   <img
        src="https://www.rewardhospitality.com.au/Images/ProductImages/Medium/3415067-3415068-3415069-lifestyle5.jpg"
        className="rounded-4xl w-[500px] h-[500px]" />
        <h2 className='font-bold text-2xl text-primary '>10% обратно</h2>
   </div>
        <p className='w-[500px] text-white  font-semibold text-2xl'>Забери заказ сам и получи кэшбек 10% на следующую покупку! Выгодное предложение для тех, кто ценит скорость, удобство и экономию. Оформи заказ на сайте, выбери самовывоз и мы вернём часть суммы обратно на твой бонусный счёт. Акция действует и на доставку — получай бонусы, даже не выходя из дома. Бонусы можно использовать при следующих заказах. Не упусти возможность есть вкусно и платить меньше!</p>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide1" className="btn btn-circle">❮</a>
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div>
  
    <div id="slide3" className="carousel-item relative w-full flex justify-center items-center py-10 gap-75">
   <div className='flex flex-col items-center gap-3'>
   <img
        src="https://www.delforno.co.za/images/specials/special-3large.jpg"
        className="rounded-full w-175 h-110" />
        <h2 className='font-bold text-2xl text-primary '>Голодное трио</h2>
   </div>
        <p className='w-[500px] text-white  font-semibold text-2xl'>Закажи 3 средние пиццы всего от 999 рублей — собери своё идеальное комбо по суперцене! Это отличная возможность вкусно накормить семью, порадовать друзей или устроить себе настоящий праздник вкуса без лишних затрат. В акцию входят тщательно подобранные пиццы из специального меню, приготовленные из свежих ингредиентов и с любовью. Не упусти шанс насладиться любимыми вкусами по выгодной цене — предложение ограничено!</p>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide2" className="btn btn-circle">❮</a>
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>

    <div id="slide4" className="carousel-item relative w-full flex justify-center items-center py-10 gap-75">
   <div className='flex flex-col items-center gap-3'>
   <img
        src="https://img.freepik.com/premium-photo/pizza-with-mushrooms-mushrooms-box_198067-762337.jpg"
        className="rounded-4xl w-[500px] h-[500px]" />
        <h2 className='font-bold text-2xl text-primary  '>10% обратно</h2>
   </div>
        <p className='w-[500px] text-white  font-semibold text-2xl'>Забери заказ сам и получи кэшбек 10% на следующую покупку! Выгодное предложение для тех, кто ценит скорость, удобство и экономию. Оформи заказ на сайте, выбери самовывоз и мы вернём часть суммы обратно на твой бонусный счёт. Акция действует и на доставку — получай бонусы, даже не выходя из дома. Бонусы можно использовать при следующих заказах. Не упусти возможность есть вкусно и платить меньше!</p>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">❮</a>
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  )
}

export default Discount
