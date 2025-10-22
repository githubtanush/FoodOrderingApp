import { CDN_URL } from "../utils/config";

const styleCard = {
    backgroundColor : "#D3D3D3",
};

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        deliveryTime,
        avgRating,
        costForTwo
    } = resData?.info;

    return (
        <div className="res-card" style = {styleCard}>
        <img 
        className="res-logo" 
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
}

export default RestaurantCard;