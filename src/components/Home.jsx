import './Home.css'

import { useState } from 'react'

import { Slider, SmallBanner, ProductArea, OrangeSection, ShopHome } from '../components'
import { useGlobalContext } from '../context/productContext'

const Home = () => {
  const { products, setProducts, groups, setProductsForArea, productsForArea, query } = useGlobalContext()

  const [sort, setSort] = useState('')
  const [showByGroup, setShowByGroup] = useState('')
  const [homeProducts, setHomeProducts] = useState(products)

  const sortProducts = (e) => {
    const sort = e.target.value
    setSort(e.target.value)
    if (sort === 'asc') {
      setProductsForArea(productsForArea.sort((a, b) => (+a.id < +b.id ? 1 : -1)))
    }
    if (sort === 'desc') {
      setProductsForArea(productsForArea.sort((a, b) => (+a.id > +b.id ? 1 : -1)))
    }
    if (sort === 'expens') {
      setProductsForArea(productsForArea.sort((a, b) => (+a.price < +b.price ? 1 : -1)))
    }
    if (sort === 'inexpens') {
      setProductsForArea(productsForArea.sort((a, b) => (+a.price > +b.price ? 1 : -1)))
    }
  }

  const showProductsByGroup = (e) => {
    if (e.target.value === '') {
      setShowByGroup('')
      setProductsForArea(products)
    } else {
      setShowByGroup(e.target.value)
      const newData = homeProducts.filter((item) => item.group === e.target.value)
      setProductsForArea(newData)
    }
  }

  return (
    <>
      {query.text.length === 0 && (
        <>
          <Slider />
          <SmallBanner />
        </>
      )}
      {productsForArea.length > 0 ? (
        <ProductArea
          products={productsForArea}
          setProducts={setProducts}
          groups={groups}
          sortProducts={sortProducts}
          sort={sort}
          showProductsByGroup={showProductsByGroup}
          showByGroup={showByGroup}
          query={query}
        />
      ) : (
        <div className="not-found">
          <p>کالایی یافت نشد !</p>
        </div>
      )}
      {query.text.length === 0 && (
        <>
          <OrangeSection />
          <ShopHome />
        </>
      )}
    </>
  )
}

export default Home
