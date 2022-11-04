import './Footer.css'
import { FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="single-footer about">
              <div className="footer-logo">
                <h2>
                  فرعی <span>شاپ</span>
                </h2>
              </div>
              <h4>درباره ما</h4>
              <p className="footer-text">
                ما در فرعی شاپ به آنچه که از سال 1390 به بهترین شکل انجام می دهیم شناخته می شویم: چاپ های با کیفیت بر روی محصولات با کیفیت بالا. آنچه که در سال 1390 به عنوان یک ایده راه اندازی شد، به
                زودی تبدیل به یکی از موفق ترین سرمایه گذاری های چاپ بر روی تیشرت شد. ما به عنوان اولین فروشگاه آنلاین تیشرت در ایران، به تولید منصفانه و روش های شفاف فروش اینترنتی ارزش می دهیم.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <div className="single-footer links">
              <h4>لینک های مفید</h4>
              <ul>
                <li>محصولات جدید</li>
                <li>پر فروش ترین ها</li>
                <li>فروشگاه های ما</li>
                <li>تماس با ما</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <div className="single-footer links">
              <h4>راهنمای مشتریان</h4>
              <ul>
                <li>ارسال</li>
                <li>نکات حقوقی</li>
                <li>قوانین ومقررات</li>
                <li>سایز ها</li>
                <li>نحوه استفاده از کوپن تخفیف</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer social">
              <h4>تماس با ما</h4>
              <div className="footer-contact">
                <ul>
                  <li>اصفهان ,ملک شهر</li>
                  <li>0313 111 2233</li>
                  <li>0913 000 7777</li>
                  <li>far-ee@email.com</li>
                </ul>
              </div>
              <ul className="footer-social-icons">
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaTelegram />
                </li>
                <li>
                  <FaLinkedin />
                </li>
                <li>
                  <FaWhatsapp />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
