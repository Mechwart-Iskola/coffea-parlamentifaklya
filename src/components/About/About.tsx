import './about.css'

const About = () => {
  return (
    <section className="about__section" id="aboutus">
    <div className="container grid">   
       <div className="about__data">
          <h2 className="section__title">LEARN MORE <br/> ABOUT US</h2>
          <p className="about__description">
             Welcome to StarCoffee, where coffee is pure passion.
             From bean to cup, we are dedicated to delivering
             excellence in every sip. Join us on a journey of
             flavor and quality, crafted with love to create the
             ultimate coffee experience.
          </p>
          <a href="#popular" className="button">The Best Coffees</a>
       </div>
       <div className="about__images">
          <div className="about__shape"></div>
          <img src="/img/leaf-img.png" alt="image" className="about__leaf-1"/>
          <img src="/img/leaf-img.png" alt="image" className="about__leaf-2"/>
          <img src="/img/about-coffee.png" alt="image" className="about__coffee"/>
       </div>
    </div>
 </section>
  )
}

export default About