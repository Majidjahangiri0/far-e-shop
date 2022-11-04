import * as Yup from 'yup'

export const checkoutSchema = Yup.object().shape({
  firstname: Yup.string().required('وارد کردن نام الزامی است'),
  lastname: Yup.string().required('وارد کردن نام خانوادگی الزامی است'),
  mobile: Yup.number().required('وارد کردن شماره موبایل الزامی است'),
  email: Yup.string().email('آدرس ایمیل معتبر نیست'),
  state: Yup.string().required('وارد کردن نام استان الزامی است'),
  city: Yup.string().required('وارد کردن نام شهر الزامی است'),
  address: Yup.string().required('وارد کردن آدرس الزامی است'),
  post: Yup.number().required('وارد کردن کد پستی الزامی است'),
})
