import { useEffect } from 'react'
import { useState } from 'react'
import './ToTop.css'

const ToTop = () => {
  const [showToTop, setShowToTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 400) {
        setShowToTop(true)
      } else {
        setShowToTop(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <button onClick={scrollToTop} className={`scrollup ${showToTop ? 'active' : ''}`}>
      <span>
        <i className="fa fa-angle-up"></i>
      </span>
    </button>
  )
}

export default ToTop
