import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


const Body = () => {

    const [listOfRestaurants,setListOfRestaurants] = useState([]);

    const[filteredRestaurant,setFilteredRestaurant] = useState([]);

    const [searchText,setSearchText] = useState("");

    console.log("component Rendered")

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
    // "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.99740&lng=79.00110&carousel=true&third_party_vendor=1"
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9010&lng=75.8573&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return (listOfRestaurants.length === 0) ? ( < Shimmer/> )
    :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button 
                    onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick ={() => {
                    // filteredList = resList.filter( 
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setFilteredRestaurant(filteredList);
                    }
                }
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                ))
                }
            </div>
        </div>
    );
}

export default Body;