import './ProductArea.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const CustomizeProductArea = (props) => {
  Aos.init()
  return (
    <section className="product-area">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="600">
          <div className="col-12">
            <div className="section-title">
              <h2>{props.title}</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="700">
          <div className="col-12">
            <div className="content mx-xl-5">
              <div className="row">
                {props.products.map((product) => (
                  <div key={product.id} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div className="single-product">
                      <div className="product-img">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizeProductArea
