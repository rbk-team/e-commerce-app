import React from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/ABOUT.jpg';
import Categorie from '../../components/Categorie';
import './About.css'


function About() {
  return (
    <>
    <Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3></h3>
            <p></p>
        </Carousel.Caption>
    </Carousel.Item>
 
</Carousel>

<p className='linee'>__________________________________________________________________________________________________________________________________</p>


<Categorie/>


</>
  )
}

export default About