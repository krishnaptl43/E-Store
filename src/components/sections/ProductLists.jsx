import { useState } from "react";
import { getFilter } from "../../helper/helper";

export default function ProductLists({product}) {
    const {products} = (product && product)?product:[];
    const {category,brand} = getFilter(products)
    const [filterData,setFilterData] = useState()

    function filterCategories(cate){
      let arr = products?.filter((item)=>item.category===cate)
      setFilterData(arr)
    }

    return (
        <>
            {/*   Product List Start  */}
            <div className="product-view">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-view-top">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="product-search">
                                                    <input type="email" />
                                                    <button><i className="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="product-short">
                                                    <div className="dropdown">
                                                        <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">Newest</a>
                                                            <a href="#" className="dropdown-item">Popular</a>
                                                            <a href="#" className="dropdown-item">Most sale</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="product-price-range">
                                                    <div className="dropdown">
                                                        <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a href="#" className="dropdown-item">$0 to $50</a>
                                                            <a href="#" className="dropdown-item">$51 to $100</a>
                                                            <a href="#" className="dropdown-item">$101 to $150</a>
                                                            <a href="#" className="dropdown-item">$151 to $200</a>
                                                            <a href="#" className="dropdown-item">$201 to $250</a>
                                                            <a href="#" className="dropdown-item">$251 to $300</a>
                                                            <a href="#" className="dropdown-item">$301 to $350</a>
                                                            <a href="#" className="dropdown-item">$351 to $400</a>
                                                            <a href="#" className="dropdown-item">$401 to $450</a>
                                                            <a href="#" className="dropdown-item">$451 to $500</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {((filterData && filterData)?filterData:products)?.map((item,index)=>(
                                    <div className="col-md-4" key={index}>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="#">{item?.title}</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src={item?.thumbnail} style={{height:"160px",width:"100%"}} alt="Product Image" />
                                            </a>
                                            <div className="product-action">
                                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                <a href="#"><i className="fa fa-heart"></i></a>
                                                <a href="#"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>{item?.price}</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                                ))}

                            </div>

                            {/* Pagination Start */}
                            <div className="col-md-12">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/*  Pagination Start */}
                        </div>

                        {/*  Side Bar Start  */}
                        <div className="col-lg-4 sidebar">
                            <div className="sidebar-widget category">
                                <h2 className="title">Category</h2>
                                <nav className="navbar bg-light">
                                    <ul className="navbar-nav">
                                        {category && category.map((item,index)=>(
                                            <li className="nav-item" onClick={()=>{filterCategories(item)}} key={index}>
                                            <a className="nav-link" href="#"><i className="fa fa-female"></i>{item}</a>
                                        </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <div className="sidebar-widget widget-slider">
                                <div className="sidebar-slider normal-slider">
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="#">Product Name</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src="img/product-10.jpg" alt="Product Image" />
                                            </a>
                                            <div className="product-action">
                                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                <a href="#"><i className="fa fa-heart"></i></a>
                                                <a href="#"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>99</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="#">Product Name</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src="img/product-9.jpg" alt="Product Image" />
                                            </a>
                                            <div className="product-action">
                                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                <a href="#"><i className="fa fa-heart"></i></a>
                                                <a href="#"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>99</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="product-title">
                                            <a href="#">Product Name</a>
                                            <div className="ratting">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="product-image">
                                            <a href="product-detail.html">
                                                <img src="img/product-8.jpg" alt="Product Image" />
                                            </a>
                                            <div className="product-action">
                                                <a href="#"><i className="fa fa-cart-plus"></i></a>
                                                <a href="#"><i className="fa fa-heart"></i></a>
                                                <a href="#"><i className="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <div className="product-price">
                                            <h3><span>$</span>99</h3>
                                            <a className="btn" href=""><i className="fa fa-shopping-cart"></i>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar-widget brands">
                                <h2 className="title">Our Brands</h2>
                                <ul>
                                    {brand && brand.map((item,index)=>(
                                        <li key={index}><a href="#">{item}</a><span>(45)</span></li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-widget tag">
                                <h2 className="title">Tags Cloud</h2>
                                <a href="#">Lorem ipsum</a>
                                <a href="#">Vivamus</a>
                                <a href="#">Phasellus</a>
                                <a href="#">pulvinar</a>
                                <a href="#">Curabitur</a>
                                <a href="#">Fusce</a>
                                <a href="#">Sem quis</a>
                                <a href="#">Mollis metus</a>
                                <a href="#">Sit amet</a>
                                <a href="#">Vel posuere</a>
                                <a href="#">orci luctus</a>
                                <a href="#">Nam lorem</a>
                            </div>
                        </div>
                        {/*  Side Bar End */}
                    </div>
                </div>
            </div>
            {/* Product List End */}
        </>
    )
}
