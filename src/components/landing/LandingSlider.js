import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import set1 from '../../img/coleccion-bodegones-viaje.jpg';
import set2 from '../../img/conjunto-ropa-mujer-moda-camisa-jeans-bolso-look-moda-hipster-endecha-plana.jpg';
import set3 from '../../img/lugar-trabajo-negocios-accesorios-masculinos-modernos-portatil-blanco.jpg';
import set4 from '../../img/traje-hombre-casual.jpg';
import set5 from '../../img/conjunto-ropa-mujer-moda-camisa-jeans-bolso-look-moda-hipster-endecha-plana.jpg';

function LandingSlider() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className='sliderContainer' style={{ height: '40vh' }}>
      <Slider {...settings}>
        <div>
          <img src={set1} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set2} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set3} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set4} alt='' className='sliderContainer_img' />
        </div>
        <div>
          <img src={set5} alt='' className='sliderContainer_img' />
        </div>
      </Slider>
    </div>
  );
}

export default LandingSlider;
