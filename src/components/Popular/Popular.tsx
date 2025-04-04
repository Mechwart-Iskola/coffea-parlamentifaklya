import { useEffect, useState } from 'react'
import './popular.css'
import PopularCard, { PopularCoffee } from '../popularCard/PopularCard'

const Popular = () => {
  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  const [populars, setPopulars] = useState<PopularCoffee[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("popular.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPopulars(data);
      } catch (error: any) {
        setError(error.message);
        console.log(error);
      }
    };

    fetchData();

  }, []);

  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/}
  return (
    <section id='popular' className='popular'>
      <h1 className='section__title'>POPULAR COFFEES</h1>
      <div className='popular__coffes'>
        {
          populars.map((coffe, idx) => (
            <PopularCard {...coffe} key={idx}/>
          ))
        }
      </div>
    </section>
  )
}

export default Popular
