import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import _ from 'lodash'

import { getAllProducts, getAllGroups, getAllUsers, getWomen } from './services/productServices'
import { productContext } from './context/productContext'

import { Home, Header, Footer, ToTop, Login, Signin, Checkout, Preloader, ProductShow, ShopServices, Subscribe, ProductArea } from './components'
import CustomizeProductArea from './components/CustomizeProductArea'

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
  const [cartItems, setCartItems] = useState([])
  const [query, setQuery] = useState({ text: '' })
  const [cartForCheckout, setCartForCheckout] = useState({})

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

  const addToBasket = (item, slcSize) => {
    if (slcSize === '') {
      alert('سایز را انتخاب کنید')
    } else {
      const exist = cartItems.find((element) => element.id === item.id && element.selectedSize === slcSize)
      if (exist) {
        setCartItems((prev) => prev.map((element) => (element.id === item.id && element.selectedSize === slcSize ? { ...exist, qty: exist.qty + 1 } : element)))
      } else {
        setCartItems([...cartItems, { ...item, qty: 1, selectedSize: slcSize }])
      }
    }
  }

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
        cartItems,
        setCartItems,
        query,
        addToBasket,
        searchProduct,
        chooseSize,
        cartForCheckout,
        setCartForCheckout,
      }}
    >
      <div className="App">
        {showLogin && <Login hideLoginHandler={hideLoginHandler} userData={userData} setShowSignin={setShowSignin} setShowLogin={setShowLogin} />}
        {showSignin && <Signin hideLoginHandler={hideLoginHandler} userData={userData} setUserData={setUserData} setShowSignin={setShowSignin} setShowLogin={setShowLogin} />}
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
        <ShopServices />
        <Subscribe />
        <Footer />
        <ToTop />
      </div>
    </productContext.Provider>
  )
}

export default App
