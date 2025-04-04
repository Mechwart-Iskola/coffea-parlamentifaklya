import { coffeeType } from '../popularCard/PopularCard';
import "./productcard.css";

const ProductCard = (props: coffeeType) => {
  return (
    <div className='products__card'>
        <div className='products__image'>
            <div className='products__shape'/>
            <img src="/img/ice-img.png" className='products__ice-1'/>
            <img src="/img/ice-img.png" className='products__ice-2'/>
            <img src={props.image} alt="" className='products__coffe'/>
        </div>
        <div className="products__data">
            <h3 className='products__name'>{props.name}</h3>
            <h3 className='products__price'>${props.price}</h3>
            <button className='products__button'><img src="/img/bag.svg" /></button>
        </div>
    </div>
  )
}

export default ProductCard