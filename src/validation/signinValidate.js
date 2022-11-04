import * as Yup from 'yup'

export const signinSchema = Yup.object().shape({
  email: Yup.string().email('آدرس ایمیل معتبر نیست').required('نام کاربری الزامی است'),
  mobile: Yup.number().required(' شماره موبایل الزامی است'),
  username: Yup.string().required('نام کاربری الزامی است'),
  password: Yup.string().required('رمز عبور الزامی است'),
})
