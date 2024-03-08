import React, { useContext } from 'react'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { useParams, useLocation} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));

  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let category = queryParams.get('category');

  const name = product?.name ?? 'Unknown';
  const image = product?.images ?? 'Unknown';
  const old_price = product?.old_price ?? 'Unknown';
  const new_price = product?.new_price ?? 'Unknown';
  const id = product?.id ?? '';

  return (  
    <div>
      <Breadcrums name={name} category={category}/>
      <ProductDisplay id={id} old_price={old_price} image={image} name={name} new_price={new_price}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
