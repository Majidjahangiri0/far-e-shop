import './ProductArea.css'
import p2 from '../assets/p2.jpg'
import p4 from '../assets/p4.jpg'
import p6 from '../assets/p6.jpg'
import p8 from '../assets/p8.jpg'
import p10 from '../assets/p10.jpg'
import p12 from '../assets/p12.jpg'
import p14 from '../assets/p14.jpg'
import p16 from '../assets/p16.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import Filter from './Filter'

const ProductArea = ({ products, setProducts, sortProducts, sort, groups, showProductsByGroup, showByGroup, query }) => {
  Aos.init()
  return (
    <section className="product-area">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="600">
          <div className="col-12">
            <div className="section-title">
              <h2>محصولات ترند</h2>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="700">
          <div className="col-12">
            {query.text.length === 0 && <Filter sortProducts={sortProducts} sort={sort} groups={groups} showProductsByGroup={showProductsByGroup} showByGroup={showByGroup} />}
            <div className="content mx-xl-5">
              <div className="row">
                {products.map((product) => (
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

export default ProductArea
