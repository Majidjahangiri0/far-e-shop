import { useContext, createContext } from 'react'

export const productContext = createContext({
  showLogin: false,
  setShowLogin: () => {},
  products: [],
  setProducts: () => {},
  productsForArea: [],
  setProductsForArea: () => {},
  groups: [],
  setGroups: () => {},
  selectedSize: '',
  setSelectedSize: () => {},
  query: { text: '' },
  searchProduct: () => {},
  chooseSize: () => {},
  cartForCheckout: {},
  setCartForCheckout: () => {},
})

export const useGlobalContext = () => {
  return useContext(productContext)
}
