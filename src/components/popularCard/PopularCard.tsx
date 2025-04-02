import './popularcard.css'

export type coffeeType = {
  name: string,
  price: string,
  image: string,
}

export interface PopularCoffee extends coffeeType  {
  description: string
}

const PopularCard = (coffee: PopularCoffee) => {
  return (
    <section className='popular__card'>
      <div className='popular__images'>
        <div className='popular__shape'/>
        <img src="/img/bean-img.png" className='popular__bean-1' />
        <img src="/img/bean-img.png" className='popular__bean-2' />
        <img src={coffee.image} className='popular__coffee' />
      </div>
      <div className='popular__data'>
      <h2 className='popular__name'>{coffee.name}</h2>
      <p className='popular__description'>{coffee.description}</p>
      <a href="" className='button button-dark'>Order now: {coffee.price}</a>
      </div>
    </section>
  )
}

export default PopularCard
