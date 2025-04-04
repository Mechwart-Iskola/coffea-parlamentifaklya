import { useEffect, useState } from "react"
import { coffeeType } from "../popularCard/PopularCard"
import ProductCard from "../productCard/ProductCard"
import "./products.css";

const Products = () => {
  {/*Fetcheld be a products.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  const [coffees, setCoffees] = useState<coffeeType[]>([])
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const res = await fetch("products.json");
        const data = await res.json();
        setCoffees(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCoffees();
  },[])
  {/*Hozz létre egy productCard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
		<div id='products' className='products'>
			<h2 className='section__title'>THE MOST <br /> REQUESTED</h2>
			<div className='products__container'>
				{
					coffees.map((coffee, idx) => (
						<ProductCard {...coffee} key={idx}/>
					))
				}
			</div>
		</div>
  )
}

export default Products
