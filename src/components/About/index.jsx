import d2photo from '../../images/destinyphoto.jpg'
import "./about.css"
const About = () => {
  return (
    <div className='about-container'>
        <section className='image-container'>
        <img className="d2image"src={d2photo} alt="a d2 photo" />
        </section>
        <section className='content'>
        <p>i aim to create an app that you can easily use to swap your gear, and one day also check other destiny 2 related things</p>
        </section>
    </div>
  )
}

export default About