import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            {/* Nav Bar Start */}
            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <Link to="#" className="navbar-brand">
                            MENU
                        </Link>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto">
                                <Link to="/" className="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to="/product" className="nav-item nav-link">
                                    Products
                                </Link>
                                <Link to="/cart" className="nav-item nav-link">
                                    Cart
                                </Link>
                                <Link to="/checkout" className="nav-item nav-link">
                                    Checkout
                                </Link>
                                <Link to="/my-account" className="nav-item nav-link">
                                    My Account
                                </Link>
                                <div className="nav-item dropdown">
                                    <Link
                                        to="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        More Pages
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link to="/wishlist" className="dropdown-item">
                                            Wishlist
                                        </Link>
                                        <Link to="/login" className="dropdown-item">
                                            Login &amp; Register
                                        </Link>
                                        <Link to="/contact" className="dropdown-item">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-nav ml-auto">
                                <div className="nav-item dropdown">
                                    <Link
                                        to="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        User Account
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link to="#" className="dropdown-item">
                                            Login
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Nav Bar End */}
        </>
    )
}