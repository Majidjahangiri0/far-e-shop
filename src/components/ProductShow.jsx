import './ProductShow.css'
import './Header.css'
import { useGlobalContext } from '../context/productContext'

import { useDispatch } from 'react-redux'

import { useParams } from 'react-router-dom'

// مشکل: صفحه رو رفرش که میکنم نابود میشه=>این مشکل حل شد ولی ببین اصولی حل شده یا نه؟

const ProductShow = () => {
  const { products, selectedSize, chooseSize } = useGlobalContext()
  const { productId } = useParams()
  const dispatch = useDispatch()

  // const [product, setProduct] = useState(products[productId])
  const product = products[productId]

  return (
    <div className="product-show">
      <div className="container">
        {product && (
          <div className="row">
            <div className="col-lg-5 col-sm-6  col-12">
              <div className="product-img">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="col-lg-7 col-sm-6 col-12 product-content-col">
              <div className="product-content">
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <div className="product-size">
                    <label>سایز را انتخاب کنید : </label>
                    <select value={product.selectedSize} onChange={chooseSize}>
                      <option value=""></option>
                      {product.size[0].s === 0 ? null : <option value="small">small</option>}
                      {product.size[1].m === 0 ? null : <option value="medium">medium</option>}
                      {product.size[2].l === 0 ? null : <option value="large">large</option>}
                      {product.size[3].xl === 0 ? null : <option value="xlarge">xlarge</option>}
                      {product.size[4].xxl === 0 ? null : <option value="xxlarge">xxlarge</option>}
                    </select>
                  </div>
                  <div className="product-price">
                    <label>قیمت : </label>
                    <p>{product.price} تومان</p>
                  </div>
                </div>
                <div className="product-btn">
                  <button onClick={() => dispatch({ type: 'ADD', payload: product, size: selectedSize })}>افزودن به سبد خرید</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductShow
