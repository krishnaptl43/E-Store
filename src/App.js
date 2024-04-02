import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/productPage/ProductsPage';
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';
import CartPage from './pages/cardPage/CartPage';
import WishListPage from './pages/wishListPage/WishListPage';
import CheckOutPage from './pages/checkOut/CheckOutPage';
import MyAccountPage from './pages/myAccount/MyAccountPage';
import LoginPage from './pages/LoginPage';
import ContactUsPage from './pages/contactPage/ContactUsPage';
import SignUpPage from './pages/SignUpPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollTop from './components/ScrollTop';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  const dispatch = useDispatch()
  const [allProducts, setAllProducts] = useState()


  function apiCall() {
    fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        "Accept": "*/*"
      },
    }).then((data) => data.json()).then((data) => { setAllProducts(data) }).catch((e) => { console.log(e) })
  }

  useEffect(() => {
    apiCall()
  }, [])

  // console.log(allProducts);
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductsPage product={allProducts} />} />
          <Route path='productdetails/:id' element={<ProductDetailsPage product={allProducts} />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishListPage />} />

          <Route path='/checkout' element={<PrivateRoute />}>
            <Route index element={<CheckOutPage/>}/>
          </Route>
          <Route path='/my-account' element={<MyAccountPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/signup' element={<SignUpPage />} />
        </Route>
      </Routes>
      <ToastContainer theme='dark' />
    </>
  );
}

export default App;
