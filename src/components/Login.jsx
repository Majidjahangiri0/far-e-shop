import Modal from './UI/Modal'
import './Login.css'
import { loginSchema } from '../validation/loginValidate'

import { useFormik } from 'formik'

const Login = ({ hideLoginHandler, setShowSignin, setShowLogin, setUserForLogin }) => {
  const formik = useFormik({
    initialValues: {
      username: '', 
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (userInput) => {
      setUserForLogin(userInput)
    },
  })

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
