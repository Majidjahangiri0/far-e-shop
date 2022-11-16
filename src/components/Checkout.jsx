import axios from 'axios'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik'

import { useGlobalContext } from '../context/productContext'
import './Checkout.css'
import { checkoutSchema } from '../validation/checkoutValidate'

// مشکل: فرم ما باتن سابمیت نداره که توی فرمیک انسابمیت کنه
// مشکل: میخوام وقتی روی باتن نهایی کردن کلیک شد محصولاتی که اومدن از موجودیشون کم بشه
// مشکل: رفرش میکنم سبد خرید خالی میشه

const Checkout = () => {
  const { cartForCheckout } = useGlobalContext()

  const formik = useFormik({
    initialValues: { firstname: '', lastname: '', phone: null, email: '', state: '', city: '', address: '', post: null },
    validationSchema: checkoutSchema,
    onSubmit: (user) => {},
  })

  const endingShopHandler = async () => {}

  return (
    <section className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <div className="checkout-form">
              <h2>تکمیل اطلاعات</h2>
              <p>برای تکمیل خرید لطفا فرم زیر را پر کنید.</p>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>نام</label>
                      <input type="text" id="firstname" {...formik.getFieldProps('firstname')} />
                      {formik.touched.firstname && formik.errors.firstname ? <div className="text-danger">{formik.errors.firstname}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>نام خانوادگی</label>
                      <input type="text" id="lastname" {...formik.getFieldProps('lastname')} />
                      {formik.touched.lastname && formik.errors.lastname ? <div className="text-danger">{formik.errors.lastname}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>شماره موبایل</label>
                      <input type="number" id="mobile" {...formik.getFieldProps('mobile')} />
                      {formik.touched.mobile && formik.errors.mobile ? <div className="text-danger">{formik.errors.mobile}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>آدرس ایمیل</label>
                      <input type="email" id="email" {...formik.getFieldProps('email')} />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>استان</label>
                      <input type="text" id="state" {...formik.getFieldProps('state')} />
                      {formik.touched.state && formik.errors.state ? <div className="text-danger">{formik.errors.state}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>شهرستان</label>
                      <input type="text" id="city" {...formik.getFieldProps('city')} />
                      {formik.touched.city && formik.errors.city ? <div className="text-danger">{formik.errors.city}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>آدرس</label>
                      <input type="text" id="address" {...formik.getFieldProps('address')} />
                      {formik.touched.address && formik.errors.address ? <div className="text-danger">{formik.errors.address}</div> : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-group">
                      <label>کد پستی</label>
                      <input type="text" id="post" {...formik.getFieldProps('post')} />
                      {formik.touched.post && formik.errors.post ? <div className="text-danger">{formik.errors.post}</div> : null}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group create-account">
                      <input type="checkbox" name="create-account" />
                      <label>ساخت حساب کاربری</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="order-details">
              <div className="single-widget">
                <h2>مجموع خرید</h2>
                <div className="content">
                  <ul>
                    <li>
                      مجموع محصولات
                      <span>{cartForCheckout.total} تومان</span>
                    </li>
                    <li>
                      هزینه ارسال
                      <span>25000 تومان</span>
                    </li>
                    <li>
                      مجموع
                      <span>{cartForCheckout.total + 25000} تومان</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="single-widget">
                <h2>روش پرداخت</h2>
                <div className="content">
                  <div className="radio-btns">
                    <div className="radio-btn">
                      <input type="radio" name="pay" />
                      <label>درگاه اینترنتی بانک ملت</label>
                    </div>
                    <div className="radio-btn">
                      <input type="radio" name="pay" />
                      <label>درگاه اینترنتی بانک پاسارگاد</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-widget checkout-btn">
                <div className="content">
                  <button onClick={endingShopHandler}>نهایی کردن خرید</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout
