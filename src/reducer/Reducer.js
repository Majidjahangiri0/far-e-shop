export const Reducer = (cart = [], action) => {
  switch (action.type) {
    case 'ADD':
      if (action.size === '') {
        alert('سایز را انتخاب کنید')
      } else {
        let tempcart = cart.filter((item) => item.id === action.payload.id && item.selectedSize === action.size)
        if (tempcart < 1) {
          return [...cart, { ...action.payload, selectedSize: action.size, qty: 1 }]
        } else {
          alert('در سبد خرید موجود است')
          return cart
        }
      }
    case 'REMOVE':
      let itemIndex = cart.findIndex((item) => item.id === action.payload.id && item.selectedSize === action.size)
      const newCart = [...cart]
      newCart.splice(itemIndex, 1)
      return newCart
    case 'INCREASE':
      const tempcartI = cart.map((item) => (item.id === action.payload.id && item.selectedSize === action.size ? { ...item, qty: item.qty + 1 } : item))
      return tempcartI
    case 'DECREASE':
      const tempcartD = cart.map((item) => (item.id === action.payload.id && item.selectedSize === action.size && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item))
      return tempcartD
    case 'GET':
      const tempcartG = [...action.payload]
      return tempcartG
    default:
      break
  }
}
