import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteItemToCart, updateQuantity } from '../../redux/cartSlice'

export default function CartPage() {
  const dispatch = useDispatch()
  let CartData = useSelector((store)=>store.cartData.value)
  const [qty,setQty] = useState()
  console.log(CartData);

  return (
    <>
      {/* Cart Start */}
      <div className="cart-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-page-inner">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead className="thead-dark">
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      {CartData && CartData.map((item,index)=>(
                        <tr key={index}>
                        <td>
                          <div className="img">
                            <a href="#">
                              <img src={item?.thumbnail} alt="Image" />
                            </a>
                            <p>{item?.title}</p>
                          </div>
                        </td>
                        <td>${item?.price}</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus" onClick={()=>{dispatch(updateQuantity({type:"decrement",id:item?.id}))}}>
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" value={item?.quantity} />
                            <button className="btn-plus" onClick={()=>{dispatch(updateQuantity({type:"increment",id:item?.id}))}}>
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>${(item?.price*item?.quantity)}</td>
                        <td>
                          <button onClick={()=>{dispatch(DeleteItemToCart(item.id))}}>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart-page-inner">
                <div className="row">
                  <div className="col-md-12">
                    <div className="coupon">
                      <input type="text" placeholder="Coupon Code" />
                      <button>Apply Code</button>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cart-summary">
                      <div className="cart-content">
                        <h1>Cart Summary</h1>
                        <p>
                          Sub Total<span>${CartData?.reduce((current,item)=>current+item?.price,0)}</span>
                        </p>
                        <p>
                          Shipping Cost<span>$1</span>
                        </p>
                        <h2>
                          Grand Total<span>${CartData?.reduce((current,item)=>current+item?.price,0)+1}</span>
                        </h2>
                      </div>
                      <div className="cart-btn">
                        <button>Update Cart</button>
                        <button>Checkout</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </>

  )
}
