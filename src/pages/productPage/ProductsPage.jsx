import BreadCrumb from "../../components/BreadCrumb";
import ProductLists from "../../components/sections/ProductLists";

export default function ProductsPage({product}) {
  return (
    <>
    <BreadCrumb/>
    <ProductLists product={product}/>
    </>
  )
}
