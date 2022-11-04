import { Link } from 'react-router-dom'

const ShoppingList = ({ setShowCart, cartItems, setCartItems, numberOfItemInCart, onCartBtn, totalAmount }) => {
  const removeFromBasket = (item, slcSize) => {
    const itemIndex = cartItems.findIndex((element) => element.id === item.id && element.selectedSize === slcSize)
    if (cartItems[itemIndex].qty === 1) {
      setCartItems((prev) => {
        const newState = [...prev]
        newState.splice(itemIndex, 1)
        return newState
      })
    } else {
      setCartItems((prev) => {
        const newState = [...prev]
        const updateItem = { ...newState[itemIndex] }
        --updateItem.qty
        newState[itemIndex] = updateItem
        return newState
      })
    }
  }

  return (
    <>
      <div className="cart-backdrop" onClick={() => setShowCart(false)}></div>
      <div className="shopping-item ">
        <div className="cart-header">
          <h4>سبد خرید</h4>
          <span>{numberOfItemInCart} کالا</span>
        </div>
        <ul className="shopping-list">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <li key={idx}>
                <div className="cart-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <p className="qty">
                  {item.qty} عدد - <span>{item.price} تومان</span>
                </p>
                <p className="slc-size">{item.selectedSize}</p>
                <div className="cart-remove-item">
                  <button className="remove-item" title="حذف از سبد" onClick={() => removeFromBasket(item, item.selectedSize)}>
                    <i className="fa fa-times" />
                  </button>
                  حذف از سبد
                </div>
              </li>
            ))
          ) : (
            <div style={{ fontSize: '14px', textAlign: 'center' }}>سبد خرید خالی است</div>
          )}
        </ul>
        <div className="cart-bottom">
          <div className="cart-total">
            <span>مجموع قیمت</span>
            <span className="total-amount">{totalAmount} تومان</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <button className="cart-btn" disabled={numberOfItemInCart === 0 ? true : false} onClick={onCartBtn}>
              پرداخت
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ShoppingList
