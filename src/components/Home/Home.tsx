import { homeImages } from '../../data/data';
import './home.css'

const Home = () => {
  {/*A komponens megírásához szükséges css osztályokat a home.css-ben találod.*/}
    
  {/*A kép több másik képből tevődik össze ezeket egy tömbben találod a data mappában.*/}

  {/*A kép hátterében egy alakzat van.*/}

  {/*A gomb mutasson az about részre */}
  return (
    <section id='home' className='home'>
      <h1 className='home__title'>COLD COFFEE</h1>
      <div className='home__images'>
        <div className='home__shape' />
        {homeImages.map((image, idx) => (
          <img key={idx} src={image.src} alt={image.alt} className={image.className} />
        ))}
      </div>
      <img src="/img/home-sticker.svg" className='home__sticker' />
      <div className="home__data">
        <p className='home__description'>
          Find delicious hot and cold coffees with the 
          best varieties, calm the pleasure and enjoy 
          a good coffee, order now.
        </p>
      </div>
    </section>
  )
}

export default Home
