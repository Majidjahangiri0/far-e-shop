import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import _ from 'lodash'

import { getAllProducts, getAllGroups, getAllUsers, getWomen } from './services/productServices'
import { productContext } from './context/productContext'

import { Home, Header, Footer, ToTop, Login, Signin, Checkout, Preloader, ProductShow, ShopServices, Subscribe, ProductArea } from './components'
import CustomizeProductArea from './components/CustomizeProductArea'

// مشکل: وقتی از هوم به صفحه ی دیگری میروم اسکرول خورده

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignin, setShowSignin] = useState(false)
  const [loading, setLoading] = useState(false)

  const [products, setProducts] = useState([])
  const [productsForArea, setProductsForArea] = useState([])
  const [productsForSearch, setProductsForSearch] = useState([])
  const [groups, setGroups] = useState([])
  const [userData, setUserData] = useState([])
  const [women, setWomen] = useState([])

  const [selectedSize, setSelectedSize] = useState('')
  const [query, setQuery] = useState({ text: '' })
  const [cartForCheckout, setCartForCheckout] = useState({})
  const [userForLogin, setUserForLogin] = useState({})
  const [newUserForSignin, setNewUserForSignin] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: productsData } = await getAllProducts()
        const { data: groups } = await getAllGroups()
        const { data: usersData } = await getAllUsers()
        const { data: women } = await getWomen()
        setProducts(productsData)
        setProductsForArea(productsData)
        setProductsForSearch(productsData)
        setWomen(women)
        setGroups(groups)
        setUserData(usersData)
        setLoading(false)
      } catch (err) {
        console.log(err.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const searchProduct = _.debounce((e) => {
    setQuery({ ...query, text: e.target.value })
    setProductsForArea(productsForSearch.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }, 600)

  const chooseSize = (e) => {
    setSelectedSize(e.target.value)
  }

  const hideLoginHandler = () => {
    setShowLogin(false)
    setShowSignin(false)
  }

  // login useEffect
  useEffect(() => {
    const loginSubmitHandler = () => {
      const exist = userData.find((item) => item.username === userForLogin.username)

      if (exist && exist.password === userForLogin.password) {
        console.log(exist)
        console.log('کاربر وارد شد')
      } else if (exist && exist.password !== userForLogin.password) {
        console.log('رمز عبور صحیح نمیباشد')
      } else if (userForLogin.username !== '' && !exist) {
        console.log('نام کاربری وارد شده صحیح نمیباشد')
        // مشکل: در حال ساخت اجرا میشه
      }
    }
    loginSubmitHandler()
  }, [userForLogin])

  // signin useEffect
  useEffect(() => {
    const signinSubmitHandler = () => {
      const exist = userData.find((item) => item.username === newUserForSignin.username || +item.mobile === newUserForSignin.mobile || (item.email !== '' && item.email === newUserForSignin.email))

      if (exist) {
        if (exist.username === newUserForSignin.username) {
          alert('نام کاربری وارد شده قبلا ثبت شده است')
        } else if (+exist.mobile === newUserForSignin.mobile) {
          alert('موبایل وارد شده قبلا ثبت شده است')
        } else if (exist.email === newUserForSignin.email) {
          alert('ایمیل وارد شده قبلا ثبت شده است')
        }
      } else {
        console.log('شما ثبت نام شدید')
        // مشکل: در حال ساخت اجرا میشه
      }
    }
    signinSubmitHandler()
  }, [newUserForSignin])

  const menShirt = products.filter((product) => product.group === '5')
  const tShirts = products.filter((product) => product.group === '1')
  const womenBags = women.filter((product) => product.group === '6')
  const womenCollection = women.filter((product) => product.group === '7')

  if (loading) return <Preloader />

  return (
    <productContext.Provider
      value={{
        showLogin,
        setShowLogin,
        products,
        setProducts,
        productsForArea,
        setProductsForArea,
        groups,
        setGroups,
        selectedSize,
        setSelectedSize,
        query,
        searchProduct,
        chooseSize,
        cartForCheckout,
        setCartForCheckout,
      }}
    >
      <div className="App">
        {showLogin && <Login hideLoginHandler={hideLoginHandler} setShowSignin={setShowSignin} setShowLogin={setShowLogin} setUserForLogin={setUserForLogin} />}
        {showSignin && <Signin hideLoginHandler={hideLoginHandler} setShowSignin={setShowSignin} setShowLogin={setShowLogin} setNewUserForSignin={setNewUserForSignin} />}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:productId" element={<ProductShow />} />
          <Route path="/men-shirt" element={<CustomizeProductArea title="پیراهن مردانه" products={menShirt} />} />
          <Route path="/women-bags" element={<CustomizeProductArea title="کیف های زنانه" products={womenBags} />} />
          <Route path="/t-shirts" element={<CustomizeProductArea title="تیشرت های تابستانه" products={tShirts} />} />
          <Route path="/women-collection" element={<CustomizeProductArea title="کالکشن زنانه" products={womenCollection} />} />
        </Routes>
        <Footer />
        <ToTop />
      </div>
    </productContext.Provider>
  )
}

export default App
