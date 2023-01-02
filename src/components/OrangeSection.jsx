import './OrangeSection.css'

import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const OrangeSection = ({ products }) => {
  const options = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="px-4 py-3 my-4" style={{ background: 'var(--color-orange)', alignItems: 'center' }}>
      <div className="container">
        <Slider {...options}>
          {products.map((product) => (
            <div key={product.id} className="single-product">
              <div className="orange-product-img">
                <img src={product.image} alt={product.title} />
                <Link to={`/products/${product.id}`} className="product-btn">
                  <button>نمایش کالا</button>
                </Link>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <span>{product.price} تومان</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default OrangeSection
