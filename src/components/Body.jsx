import { useState } from "react";
import Products from "./Products/Products";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList,setFilteredList] = useState([])
  console.log(filteredList,'filtered')
  return (
    <div className="product-body">
      <h1 style={{ padding: "50px" }}>
        Choose the new Receipes of Mama's Kitchen
      </h1>
      <div style={{display:"flex",alignItems:"center",justifyContent:'space-between'}}>

      <button
        style={{
          padding: "10px",
          color: "orange",
          backgroundColor: "white",
          border: "1px solid orange",
          borderRadius: "10px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
        onClick={()=>{
          setFilteredList(restaurantList.filter((item)=>item?.info?.avgRating>4.4))
        }}
        >
        Top Rated!
      </button>
      <div>
        <input type="text" style={{padding:"5px",width:"300px",height:"30px",margin:"10px",borderRadius:"5px"}}/>
        <button style={{padding:"10px",width:"100px",fontSize:"15px",borderRadius:"5px",}}>Search</button>
      </div>
      </div>

      <Products
        restaurantList={restaurantList}
        setRestaurantList={setRestaurantList}
        filteredList={filteredList} 
        setFilteredList={setFilteredList}

      />
    </div>
  );
};

export default Body;
