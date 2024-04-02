import React, { useEffect } from 'react'
import { useTitle } from '../../customHook/customHooks'

export default function WishListPage() {

  const title = useTitle()

  useEffect(() => {
    title("Wishlist")
  }, [title])
  return (
    <>
      {/* Wishlist Start */}
      <div className="wishlist-page">
        <div className="container-fluid">
          <div className="wishlist-page-inner">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Add to Cart</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/product-6.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" defaultValue={1} />
                            <button className="btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="btn-cart">Add to Cart</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/product-7.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" defaultValue={1} />
                            <button className="btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="btn-cart">Add to Cart</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/product-8.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" defaultValue={1} />
                            <button className="btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="btn-cart">Add to Cart</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/product-9.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" defaultValue={1} />
                            <button className="btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="btn-cart">Add to Cart</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src="img/product-10.jpg" alt="Image" />
                            </a>
                            <p>Product Name</p>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" defaultValue={1} />
                            <button className="btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>
                          <button className="btn-cart">Add to Cart</button>
                        </td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wishlist End */}
    </>

  )
}
