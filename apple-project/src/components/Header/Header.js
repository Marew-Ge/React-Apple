import React from 'react'
import Logo from "../../resources/images/icons/logo-sm.png";
import Search from "../../resources/images/icons/search-icon-sm.png";
import Cart from "../../resources/images/icons/cart-sm.png";

function Header() {
  return (
    <div>
       <header className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="/"> <img src={Logo} alt="Logo" />
                        </a>

                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/iphone/">iphone </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/ipad/">ipad</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/watch/">watch</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/tv/">tv</a></li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/Music/">Music</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/support/">Support</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link js-scroll-trigger" href="/search/"> <img src={Search} alt="Search" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/cart/"> <img src={Cart}  alt="cart"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
    </div>
  )
}

export default Header
