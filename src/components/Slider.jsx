import './Slider.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Slider = () => {
  Aos.init()
  return (
    <section className="slider" data-aos="fade-up">
      <div className="bg-slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <div className="text-inner">
                <div className="row">
                  <div className="col-lg-7 col-12">
                    <div className="hero-text">
                      <h1>
                        <span>تخفیف ویژه تا % 50 </span>
                        پیراهن مردانه
                      </h1>
                      <p>جنس عالی و درجه یک و کیفیت دوخت بالا</p>
                      <Link to={'/men-shirt'}>
                        <button className="slider-btn">! همین حالا بخرید</button>
                      </Link>
                    </div>
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

export default Slider
