import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const ShoppingList = ({ setShowCart, cartItems, numberOfItemInCart, onCartBtn, totalAmount }) => {
  const dispatch = useDispatch()

  return (
    <>
      <div className="cart-backdrop" onClick={() => setShowCart(false)}></div>
      <div className="shopping-item ">
        <div className="cart-header">
          <h4>سبد خرید</h4>
          <span>{numberOfItemInCart} کالا</span>
        </div>
        <ul className="shopping-list">
          {cartItems ? (
            cartItems.map((item, idx) => (
              <li key={idx}>
                <div className="cart-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
                <div style={{ width: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                  <button
                    style={{ width: '20px', height: '20px', backgroundColor: 'yellow', border: 'none', textAlign: 'center', fontSize: '13px' }}
                    onClick={() => dispatch({ type: 'INCREASE', payload: item, size: item.selectedSize })}
                  >
                    <i className="fa fa-plus" />
                  </button>
                  <p className="qty">{item.qty} عدد</p>
                  <button
                    style={{ width: '20px', height: '20px', backgroundColor: 'yellow', border: 'none', textAlign: 'center', fontSize: '13px' }}
                    onClick={() => dispatch({ type: 'DECREASE', payload: item, size: item.selectedSize })}
                    disabled={item.qty > 1 ? false : true}
                  >
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <span>{item.price} تومان</span>
                <p className="slc-size">{item.selectedSize}</p>
                <div className="cart-remove-item">
                  <button className="remove-item" title="حذف از سبد" onClick={() => dispatch({ type: 'REMOVE', payload: item, size: item.selectedSize })}>
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
