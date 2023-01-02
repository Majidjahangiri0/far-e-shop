import './SmallBanner.css'
import miniBanner1 from '../assets/mini-banner1.jpg'
import miniBanner2 from '../assets/mini-banner2.jpg'
import miniBanner3 from '../assets/mini-banner3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const SmallBanner = () => {
  Aos.init()

  return (
    <section className="small-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
            <div className="single-banner">
              <img src={miniBanner1} alt="" />
              <div className="content">
                <p>کالکشن مردانه</p>
                <h3>
                  کالکشن
                  <br />
                  سفر تابستانه مردانه
                </h3>
                <Link to={'/t-shirts'}>
                  <button>حالا ببین</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="single-banner">
              <img src={miniBanner2} alt="" />
              <div className="content">
                <p>کالکشن کیف</p>
                <h3>
                  کیف های فوق العاده
                  <br />
                  زنانه
                </h3>
                <Link to={'/women-bags'}>
                  <button>حالا ببین</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="single-banner">
              <img src={miniBanner3} alt="" />
              <div className="content">
                <p>فروش فوق العاده</p>
                <h3>
                  کالکشن زنانه
                  <br />
                  تا 40 درصد تخفیف
                </h3>
                <Link to={'/women-collection'}>
                  <button>حالا ببین</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SmallBanner
