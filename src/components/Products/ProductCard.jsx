import { ICON_CDN } from "../../utils/constants"

const ProductCard = ({restaurant}) => {
  
  return (
    <div className="product-card">
        <img className="product-image" src={ICON_CDN+restaurant.info.cloudinaryImageId} alt="productimage" />
        <p>{restaurant?.info?.aggregatedDiscountInfoV3?.header &&restaurant?.info?.aggregatedDiscountInfoV3?.header !== "ITEMS"?restaurant?.info?.aggregatedDiscountInfoV3?.header:''}</p>
        <h2>{restaurant.info.name}</h2>
        <p>
          <span>Rating:{restaurant.info.avgRating}</span>
          <span>{`${restaurant.info?.sla?.slaString||""}`}</span>
        </p>
        <p>{restaurant?.info?.cuisines.join(", ")}</p>
        <h4>{restaurant?.info.areaName}</h4>
    </div>
  )
}

export default ProductCard
