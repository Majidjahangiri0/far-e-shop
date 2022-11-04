import './ProductShow.css'
import './Header.css'
import { useGlobalContext } from '../context/productContext'

import { useParams } from 'react-router-dom'

const ProductShow = () => {
  const { products, addToBasket, selectedSize, chooseSize } = useGlobalContext()

  const { productId } = useParams()
  const product = products[productId]
  const { title, image, price, size } = product

  return (
    <div className="product-show">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-4 col-12">
            <div className="product-img">
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="col-lg-7 col-sm-8 col-12">
            <div className="product-content">
              <div className="product-info">
                <h4>{title}</h4>
                <div className="product-size">
                  <select value={selectedSize} onChange={chooseSize}>
                    <option value=""></option>
                    {size[0].s === 0 ? null : <option value="small">s</option>}
                    {size[1].m === 0 ? null : <option value="medium">m</option>}
                    {size[2].l === 0 ? null : <option value="large">l</option>}
                    {size[3].xl === 0 ? null : <option value="xlarge">xl</option>}
                    {size[4].xxl === 0 ? null : <option value="xxlarge">xxl</option>}
                  </select>
                </div>
                <p>{price}</p>
              </div>
              <div className="product-btn">
                <button onClick={() => addToBasket(product, selectedSize)}>افزودن به سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShow
