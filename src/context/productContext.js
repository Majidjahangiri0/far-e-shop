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
  cartItems: [],
  setCartItems: () => {},
  query: { text: '' },
  addToBasket: () => {},
  searchProduct: () => {},
  chooseSize: () => {},
  cartForCheckout: {},
  setCartForCheckout: () => {},
})

export const useGlobalContext = () => {
  return useContext(productContext)
}
