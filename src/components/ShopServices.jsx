import './ShopServices.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const ShopServices = () => {
  Aos.init()
  return (
    <section className="shop-services" data-aos="fade-up" data-aos-delay="600">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <i className="fa fa-rocket"></i>
              <div className="service-content">
                <h4>ارسال سریع</h4>
                <p>تحویل سفارش در سریع ترین زمان ممکن</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <i className="fa fa-tags"></i>
              <div className="service-content">
                <h4>تضمین قیمت</h4>
                <p>پایین ترین قیمت در بازار</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <i className="fa fa-lock"></i>
              <div className="service-content">
                <h4>پرداخت امن</h4>
                <p>پرداخت امن از طریق درگاه های بانکی با کلیه کارت های عضو شتاب</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-service">
              <i className="fa fa-money-bill-wave"></i>
              <div className="service-content">
                <h4>ارسال رایگان</h4>
                <p>برای سفارش های بالای 300 هزار تومان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopServices
