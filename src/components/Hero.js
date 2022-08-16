import hero from './hero.png'

function Hero () {
    return (
        <section className='hero-container'>
        <img className='group-img' src={hero} alt="group of photos with various activities" ></img>
        <h1 className='hero-title'>Online Experiences</h1>
        <p className='hero-p'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
       
        </section>
    )
}

export default Hero; 