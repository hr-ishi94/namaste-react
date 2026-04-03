import ProductCard from "./ProductCard";
import { resList } from "../../utils/mockData";
import { useState } from "react";

const Products = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
     <div className="product-list">
      {restaurantList.map((restaurant,index) => (
        <ProductCard key={index} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default Products;
