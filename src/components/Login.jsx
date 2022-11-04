import Modal from './UI/Modal'
import './Login.css'
import { loginSchema } from '../validation/loginValidate'

import { useState } from 'react'
import { useFormik } from 'formik'
import { useEffect } from 'react'

const Login = ({ hideLoginHandler, userData, setShowSignin, setShowLogin }) => {
  const [user, setUser] = useState({})

  // const loginInputHandler = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value })
  // }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setUser(values)
    },
  })

  useEffect(() => {
    const loginSubmitHandler = () => {
      const exist = userData.find((item) => item.username === user.username)

      if (exist && exist.password === user.password) {
        console.log(exist)
        console.log('کاربر وارد شد')
      } else {
        console.log('این نام کاربری قبلا ثبت نشده است')
      }
    }
    loginSubmitHandler()
  }, [user])

  return (
    <Modal hideLoginHandler={hideLoginHandler}>
      <div className="login">
        <form className="login-form" onSubmit={formik.handleSubmit}>
          <h3>ورود به حساب کاربری</h3>
          <input type="text" id="username" placeholder="نام کاربری" {...formik.getFieldProps('username')} />
          {formik.touched.username && formik.errors.username ? <div className="text-danger">{formik.errors.username}</div> : null}
          <input type="password" id="password" placeholder="رمز عبور" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
          <div className="form-btn">
            <button id="log-in" type="submit">
              ورود
            </button>
            <button
              onClick={() => {
                setShowSignin(true)
                setShowLogin(false)
              }}
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default Login
