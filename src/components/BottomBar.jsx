export default function BottomBar() {
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
                                <a href="wishlist.html" className="btn wishlist">
                                    <i className="fa fa-heart" />
                                    <span>(0)</span>
                                </a>
                                <a href="cart.html" className="btn cart">
                                    <i className="fa fa-shopping-cart" />
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Bar End */}
        </>
    )
}