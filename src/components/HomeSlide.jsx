import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../images/home-slide1.jpg'
import Img2 from '../images/home-slide2.jpg'


export default function HomeSlide() {
  return (
    <Carousel fade className='home-carusel'>
      <Carousel.Item >
        <img
          className="d-block w-100 h-100"
          src={Img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carusel-info container">
            <p className="carusel-info__title">about</p>
            <p className='carusel-info__texts'>AOC provides multiple levels of comprehensive primary ENT care including the diagnosis and management of all diseases of the ears, nose, throat, and sinuses. In addition, AOC provides the full spectrum of subspecialty ENT care including the management of pediatric airway, cancer, skull base surgery, neuro-otology, advanced head and neck surgical and reconstructive procedures, and craniofacial surgery. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="carusel-info">
            <p className="carusel-info__title">about</p>
            <p className='carusel-info__texts'>AOC provides multiple levels of comprehensive primary ENT care including the diagnosis and management of all diseases of the ears, nose, throat, and sinuses. In addition, AOC provides the full spectrum of subspecialty ENT care including the management of pediatric airway, cancer, skull base surgery, neuro-otology, advanced head and neck surgical and reconstructive procedures, and craniofacial surgery. </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  )
}
