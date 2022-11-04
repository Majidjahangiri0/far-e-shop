import './Subscribe.css'

import * as Yup from 'yup'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useState, useEffect } from 'react'
import { getAllSubscribers, postSubscriber } from '../services/productServices'
import { useFormik } from 'formik'

const Subscribe = () => {
  const [newEmail, setNewEmail] = useState('')
  const [subscribers, setSubscribers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: subscribers } = await getAllSubscribers()
        setSubscribers(subscribers)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData()
  }, [])

  console.log(subscribers)

  const subSchema = Yup.object().shape({
    email: Yup.string().email('آدرس ایمیل وارد شده معتبر نیست').required('ایمیل خود را وارد کنید'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: subSchema,
    onSubmit: () => {
      const postData = async (e) => {
        if (subscribers.length > 0) {
          alert('ایمیل شما قبلا عضو شده است')
        } else {
          try {
            const { status, data } = await postSubscriber(newEmail)
            if (status === 201) alert('ایمیل شما با موفقیت ثبت شد')
            setNewEmail('')
          } catch (err) {
            console.log(err.message)
          }
        }
      }
      postData()
    },
  })

  Aos.init()
  return (
    <section className="subscribe" data-aos="fade-up" data-aos-delay="600">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="subscribe-content">
              <h4>خبرنامه</h4>
              <p>در خبرنامه ی ما عضو شو و در جریان باش</p>
              <form className="subscribe-form" onSubmit={formik.handleSubmit}>
                <input type="email" id="email" name="email" placeholder="ایمیل خود را وارد کنید" onChange={formik.handleChange} />
                <button className="subscribe-btn" type="submit">
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
