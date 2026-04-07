import ProductCard from "./ProductCard";
import { resList } from "../../utils/mockData";
import { useEffect, useState } from "react";

const Products = ({restaurantList, setRestaurantList,filteredList,setFilteredList}) => {
  
  const fetchData = async ()=>{
    const dataList = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2541826&lng=75.8370307&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const {data}= await dataList.json()
    setRestaurantList(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredList(data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
    {filteredList.length===0?<div>Loading....</div>:
     <div className="product-list">
      {filteredList.map((restaurant,index) => (
        <ProductCard key={index} restaurant={restaurant} />
      ))}
      </div>
    }
    </>
  );
};

export default Products;
