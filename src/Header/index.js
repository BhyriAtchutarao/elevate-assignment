import {Link} from "react-router-dom"
import "./index.css"

const Header = () =>{
    return (
        <nav className="nav-header">
      <div className="nav-content">
        

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://thumbs.dreamstime.com/b/background-ss-243085832.jpg"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="nav-menu-mobile">
      
        <ul className="nav-menu-list-mobile">
            <li className="nav-bar-mobile-logo-container">
                <Link to="/">
                    <img
                    className="website-logo"
                    src="https://thumbs.dreamstime.com/b/background-ss-243085832.jpg"
                    alt="website logo"
                    />
                </Link>
            </li>
            <li className="nav-menu-item-mobile">
                <Link to="/" className="nav-link">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                    alt="nav home"
                    className="nav-bar-img"
                />
                </Link>
            </li>
            <li className="nav-menu-item-mobile">
                <Link to="/products" className="nav-link">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                    alt="nav products"
                    className="nav-bar-img"
                />
                </Link>
            </li>
        </ul>
      </div>
    </nav>

    )
}

export default Header