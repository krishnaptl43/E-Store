import { useEffect } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ProductLists from "../../components/sections/ProductLists";
import { useTitle } from "../../customHook/customHooks";

export default function ProductsPage({product}) {

  const title = useTitle()

    useEffect(() => {
        title("Products")
    }, [title])
  return (
    <>
    <BreadCrumb/>
    <ProductLists product={product}/>
    </>
  )
}
