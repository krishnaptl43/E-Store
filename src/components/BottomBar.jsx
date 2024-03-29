import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function BottomBar() {
   const cartCount = useSelector((store)=>store.cartData.value)
    return (
        <>
            {/* Bottom Bar Start */}
            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img src={`${window.location.origin}/img/logo.png`} alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button>
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <Link to="/wishlist" className="btn wishlist">
                                    <i className="fa fa-heart" />
                                    <span>(0)</span>
                                </Link>
                                <Link to="/cart" className="btn cart">
                                    <i className="fa fa-shopping-cart" />
                                    <span>({cartCount.length})</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar End */}
        </>
    )
}