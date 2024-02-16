import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/productPage/ProductsPage';
import ProductDetailsPage from './pages/productDetails/ProductDetailsPage';


function App() {
  return (
   <>
  <Routes>
    <Route path='/' element={<Layout/>}>
     <Route index element={<HomePage/>}/>
     <Route path='product' element={<ProductsPage/>}/>
     <Route path='productdetails' element={<ProductDetailsPage/>}/>
    </Route>
  </Routes>
   </>
  );
}

export default App;
