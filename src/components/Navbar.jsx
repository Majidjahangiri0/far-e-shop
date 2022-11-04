import { Link } from 'react-router-dom'

const Navbar = ({ showResNavbar }) => {
  return (
    <div className={`navbar ${showResNavbar ? '' : 'hidden'}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="main-menu">
              <Link to={'/'}>
                <li className="active">خانه</li>
              </Link>
              <li>محصولات</li>
              <li>خدمات</li>
              <li>تماس با ما</li>
              <li>درباره ما</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
