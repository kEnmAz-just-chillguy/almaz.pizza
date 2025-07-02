import React from 'react'

function Discount() {
  return (
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-6 sm:gap-x-20 py-10 px-4">
    <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
      <img
        src="https://media.istockphoto.com/id/1279801284/photo/three-pizzas-with-salami-cheese-herbs-and-meat.jpg?s=612x612&w=0&k=20&c=P5gBuoBbqSqRB1zdnZlwkkhZepNf4fcwIH4S9lt6e7E="
        className="rounded-full w-full max-w-[300px] sm:max-w-[400px] h-auto"
      />
      <h2 className="font-bold text-2xl text-primary text-center">Голодное трио</h2>
    </div>
    <p className="text-white font-semibold text-lg sm:text-2xl max-w-xl text-center sm:text-left">
      Закажи 3 средние пиццы всего от 999 рублей — собери своё идеальное комбо по суперцене! Это отличная возможность вкусно накормить семью, порадовать друзей или устроить себе настоящий праздник вкуса без лишних затрат...
    </p>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-6 sm:gap-x-20 py-10 px-4">
    <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
      <img
        src="https://www.rewardhospitality.com.au/Images/ProductImages/Medium/3415067-3415068-3415069-lifestyle5.jpg"
        className="rounded-3xl w-full max-w-[400px] h-auto"
      />
      <h2 className="font-bold text-2xl text-primary text-center">10% обратно</h2>
    </div>
    <p className="text-white font-semibold text-lg sm:text-2xl max-w-xl text-center sm:text-left">
      Забери заказ сам и получи кэшбек 10% на следующую покупку! Выгодное предложение для тех, кто ценит скорость, удобство и экономию...
    </p>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-6 sm:gap-x-20 py-10 px-4">
    <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
      <img
        src="https://www.delforno.co.za/images/specials/special-3large.jpg"
        className="rounded-full w-full max-w-[300px] sm:max-w-[400px] h-auto"
      />
      <h2 className="font-bold text-2xl text-primary text-center">Голодное трио</h2>
    </div>
    <p className="text-white font-semibold text-lg sm:text-2xl max-w-xl text-center sm:text-left">
      Закажи 3 средние пиццы всего от 999 рублей — собери своё идеальное комбо по суперцене! Это отличная возможность вкусно накормить семью...
    </p>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full flex flex-wrap sm:flex-nowrap justify-center items-center gap-y-6 sm:gap-x-20 py-10 px-4">
    <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
      <img
        src="https://img.freepik.com/premium-photo/pizza-with-mushrooms-mushrooms-box_198067-762337.jpg"
        className="rounded-3xl w-full max-w-[400px] h-auto"
      />
      <h2 className="font-bold text-2xl text-primary text-center">10% обратно</h2>
    </div>
    <p className="text-white font-semibold text-lg sm:text-2xl max-w-xl text-center sm:text-left">
      Забери заказ сам и получи кэшбек 10% на следующую покупку! Выгодное предложение для тех, кто ценит скорость, удобство и экономию...
    </p>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  )
}

export default Discount
