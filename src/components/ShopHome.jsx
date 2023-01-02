import './ShopHome.css'
import shoplist1 from '../assets/shop-list1.jpg'
import shoplist2 from '../assets/shop-list2.jpg'
import shoplist3 from '../assets/shop-list3.jpg'
import shoplist4 from '../assets/shop-list4.jpg'
import shoplist5 from '../assets/shop-list5.jpg'
import shoplist6 from '../assets/shop-list6.jpg'
import shoplist7 from '../assets/shop-list7.jpg'
import shoplist8 from '../assets/shop-list8.jpg'
import shoplist9 from '../assets/shop-list9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const ShopHome = () => {
  Aos.init()
  return (
    <section className="shop-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
            <div className="shop-home-title">
              <h1>پر فروش</h1>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist1} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist2} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist3} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="shop-home-title">
              <h1>بیشترین بازدید</h1>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist4} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist5} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist6} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="shop-home-title">
              <h1>جدیدترین</h1>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist7} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist8} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="shop-single-item">
              <div className="row shop-item">
                <div className="col-md-6 col-12">
                  <div className="item-img">
                    <img src={shoplist9} alt="" />
                    <div className="img-hover"></div>
                    <button className="img-icon">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="item-content">
                    <h4 className="item-title">این تایتل است که میبینید</h4>
                    <span className="item-price">33$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopHome
