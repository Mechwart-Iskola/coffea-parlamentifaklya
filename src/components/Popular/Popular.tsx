import { useEffect, useState } from 'react'
import './popular.css'

type Popular = {
  name: string,
  description: string,
  price: string,
  image: string
}

const Popular = () => {
  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/}
  const [populars, setPopulars] = useState<Popular[]>([]);
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
    <section className='popular'>
      <h1 className='section__title'>THE MOST REQUESTED</h1>
        {populars.map(coffe => (
          <div className='popular__coffes'>
            <img src={coffe.image} alt={coffe.description} />
            <h2>{coffe.name}</h2>
            <span>{coffe.price}</span>
            <i className='' />
          </div>
        ))}
    </section>
  )
}

export default Popular
