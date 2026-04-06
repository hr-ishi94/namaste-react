import ProductCard from "./ProductCard";
import { resList } from "../../utils/mockData";
import { useEffect, useState } from "react";

const Products = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2541826&lng=75.8370307&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json,'json')
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
     <div className="product-list">
      {restaurantList.map((restaurant,index) => (
        <ProductCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Products;
