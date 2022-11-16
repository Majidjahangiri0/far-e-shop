import Modal from './UI/Modal'

import './Login.css'
import { signinSchema } from '../validation/signinValidate'

import { useFormik } from 'formik'

const Signin = ({ hideLoginHandler, setShowSignin, setShowLogin, setNewUserForSignin }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      mobile: '',
      username: '',
      password: '',
    },
    validationSchema: signinSchema,
    onSubmit: (values) => {
      setNewUserForSignin(values)
      console.log(values)
    },
  })

  return (
    <Modal hideLoginHandler={hideLoginHandler}>
      <div className="signin">
        <form className="signin-form" onSubmit={formik.handleSubmit}>
          <h3>ثبت نام</h3>
          <input type="email" id="email" placeholder="ایمیل" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
          <input type="number" id="mobile" placeholder="شماره موبایل" {...formik.getFieldProps('mobile')} />
          {formik.touched.mobile && formik.errors.mobile ? <div className="text-danger">{formik.errors.mobile}</div> : null}
          <input type="text" id="username" placeholder="نام کاربری" {...formik.getFieldProps('username')} />
          {formik.touched.username && formik.errors.username ? <div className="text-danger">{formik.errors.username}</div> : null}
          <input type="password" id="password" placeholder="رمز عبور" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
          <div className="form-btn">
            <button id="sign-in" type="submit">
              ثبت نام
            </button>
            <button
              onClick={() => {
                setShowLogin(true)
                setShowSignin(false)
              }}
            >
              حساب دارم
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default Signin
