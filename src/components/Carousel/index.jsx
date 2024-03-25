import './style.scss'
import btn_carousel from '../../assets/btn_carousel.png'
import { useState } from 'react'

function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === pictures.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? pictures.length - 1 : prev - 1))
  }

  return (
    <div className="carousel">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {pictures.map((slide, index) => (
          <div className="slide" key={index}>
            <img className="slide-img" src={slide} alt="Photos du logement" />
          </div>
        ))}
      </div>
      {/* Control button and position */}
      {pictures.length > 1 && (
        <>
          <img
            className="next"
            onClick={nextSlide}
            src={btn_carousel}
            alt="next slide"
          />
          <img
            className="prev"
            onClick={prevSlide}
            src={btn_carousel}
            alt="previous slide"
          />
          <p className="slide-position">
            {currentSlide + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  )
}

export default Carousel
