import { BsHeadset } from 'react-icons/bs'
import { FaShoppingBag } from 'react-icons/fa'

const TopBar = ({ setShowCart, setShowLogin, numberOfItemInCart }) => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-12">
            <div className="top-left">
              <ul className="list-main">
                <li>
                  <i>
                    <BsHeadset />
                  </i>
                  0913 000 7777
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  Far-ee@email.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-4 col-12">
            <div className="right-content">
              <ul className="list-main">
                <li className="bag-shopping" onClick={() => setShowCart(true)}>
                  <span className="total-count">{numberOfItemInCart}</span>
                  <i>
                    <FaShoppingBag />
                  </i>
                  سبد خرید
                </li>
                <li>
                  <i className="fa fa-user" />
                  حساب من
                </li>
                <li onClick={() => setShowLogin(true)}>
                  <i className="fa fa-power-off" />
                  ورود
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
