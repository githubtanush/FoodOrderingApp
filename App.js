import React from "react";
import ReactDOM from "react-dom/client";

/*
Header 
 - logo
 - navItems
Body 
 - Search 
 - Restaurant Container
 - Restaurant Card
Footer
 - Copyright
 - Links 
 - Address 
 - contact
*/

const resList = [
  {
    "id": "395763",
    "name": "Saini Veg Dhaba",
    "cuisines": ["North Indian"],
    "avgRating": 4.1,
    "cloudinaryImageId": "j1gpleuypqjdpc3i1w76",
    "deliveryTime": 19
  },
  {
    "id": "474995",
    "name": "GCF The Chaap Hub",
    "cuisines": ["Punjabi", "Tandoor"],
    "avgRating": 3.9,
    "cloudinaryImageId": "how1rebycziowrruz4xd",
    "deliveryTime": 25
  },
  {
    "id": "196700",
    "name": "Pizza World",
    "cuisines": ["Pizzas"],
    "avgRating": 4.4,
    "cloudinaryImageId": "ypmz0ffpkqwqbeshm5q4",
    "deliveryTime": 29
  },
  {
    "id": "524229",
    "name": "Shama Chicken Corner",
    "cuisines": ["Biryani", "Hyderabadi", "Mughlai"],
    "avgRating": 4.2,
    "cloudinaryImageId": "mbdrjxyklv646hnsiirj",
    "deliveryTime": 24
  },
  {
    "id": "567246",
    "name": "Baba Chicken",
    "cuisines": ["Tandoor", "Punjabi"],
    "avgRating": 4.2,
    "cloudinaryImageId": "uvhcgg7i2lkfrnmgtzsd",
    "deliveryTime": 30
  },
  {
    "id": "785441",
    "name": "Muscleholics",
    "cuisines": ["Salads", "Healthy Food"],
    "avgRating": 4.6,
    "cloudinaryImageId": "87d7877e4ca8634bcf01b01ca4445061",
    "deliveryTime": 27
  },
  {
    "id": "202844",
    "name": "Spice N Cool (Ridzee IceCream)",
    "cuisines": ["Chinese", "Mughlai"],
    "avgRating": 4.1,
    "cloudinaryImageId": "xfscdoisq4pwosyzvaib",
    "deliveryTime": 29
  },
  {
    "id": "214083",
    "name": "Big 7 Food Plaza",
    "cuisines": ["Chinese", "Pizzas"],
    "avgRating": 4.1,
    "cloudinaryImageId": "hmkfi1mryrmmgtw93beg",
    "deliveryTime": 30
  },
  {
    "id": "162926",
    "name": "Rinku & Vicky Chicken Roll Corner",
    "cuisines": ["rolls"],
    "avgRating": 4.6,
    "cloudinaryImageId": "lstj2eyyh2qnq0o6wg80",
    "deliveryTime": 28
  },
  {
    "id": "515117",
    "name": "Neeta Fish & Chicken Corner",
    "cuisines": ["Punjabi", "Tandoor"],
    "avgRating": 4.5,
    "cloudinaryImageId": "lropoodzr8lkq7lbkfpn",
    "deliveryTime": 23
  },
  {
    "id": "209779",
    "name": "Zayra-The Imperial Poonam Hotel",
    "cuisines": ["Italian", "Pizzas", "Beverages"],
    "avgRating": 4.3,
    "cloudinaryImageId": "qcu6jqs1jm5rqctd0y3w",
    "deliveryTime": 31
  },
  {
    "id": "748674",
    "name": "Classic Bakers",
    "cuisines": ["Bakery"],
    "avgRating": 4.2,
    "cloudinaryImageId": "e1114ef2ed8df79fdf4acaee0ec0b040",
    "deliveryTime": 17
  },
  {
    "id": "207405",
    "name": "Master Chef Fast Food",
    "cuisines": ["Chinese", "Snacks"],
    "avgRating": 4.2,
    "cloudinaryImageId": "bzl9r76teclhpjdkse84",
    "deliveryTime": 19
  },
  {
    "id": "207839",
    "name": "ASF (American Style Fried)",
    "cuisines": ["American", "Snacks", "Fast Food", "Beverages"],
    "avgRating": 4.3,
    "cloudinaryImageId": "l3tbbqdj073ucuwioles",
    "deliveryTime": 37
  },
  {
    "id": "479610",
    "name": "Midway Healthy Meal",
    "cuisines": ["Indian", "Salads", "Beverages", "Snacks", "Healthy Food"],
    "avgRating": 4.5,
    "cloudinaryImageId": "t8ckckygfigj5oks77eo",
    "deliveryTime": 27
  },
  {
    "id": "506879",
    "name": "PB 36 Rolls",
    "cuisines": ["Rolls & Wraps", "Pizzas", "Burgers", "Chinese"],
    "avgRating": 4.3,
    "cloudinaryImageId": "jcp2rchsvftyjcxznl3e",
    "deliveryTime": 28
  },
  {
    "id": "550566",
    "name": "ChaiApps",
    "cuisines": ["Italian", "Pizzas", "Burgers", "Beverages"],
    "avgRating": 3.8,
    "cloudinaryImageId": "usumkkyxrkajqorwu13r",
    "deliveryTime": 30
  },
  {
    "id": "489433",
    "name": "Janjua Restaurant",
    "cuisines": ["Punjabi", "Tandoor", "paneer", "Salad", "Meat", "Burgers", "Beverages"],
    "avgRating": 4.5,
    "cloudinaryImageId": "jrvbkqhk5fcqkyljdyfs",
    "deliveryTime": 27
  },
  {
    "id": "475752",
    "name": "Sarpanch Chicken And Fish Point",
    "cuisines": ["Punjabi", "Tandoor", "Beverages"],
    "avgRating": 4,
    "cloudinaryImageId": "fntjxuqyip3amqdl2tlo",
    "deliveryTime": 27
  }
]
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K8f8hdrZw-SfHxZSG0GogsRClYEHyAqGEg&s"/>
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul> 
            </div>
        </div>
    );
};
const styleCard = {
    backgroundColor : "lightgrey"
};

const RestaurantCard = ({resData}) => {
// some people destructure on the fly some not destructure it 
// and pass it as props
// const RestaurantCard = ({resName,cuisine}) =>{
    // console.log(props);
    // const {resName, cuisine} = props;
    // const {resData} = props; bad way 
    // A good way to write is destructure it 
    // if after argument resData.data then write like resData?.data - this is optional chaining
    const {
        name, 
        cuisines,
        avgRating,
        deliveryTime,
        cloudinaryImageId
    } = resData;

    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style = {{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt = "res-logo"
            src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star rating</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* Restaurant card */}
            {/* <RestaurantCard 
            resName = "Meghana Foods" 
            cuisine = "Biryani, North Indian, Asian"
            />
            <RestaurantCard 
            resName = "KFC"
            cuisine = "Burger, Fast-Food" 
            /> */}
            {/* <RestaurantCard resData = { resList[2] } /> */}
            {
                resList.map((restaurant) => (
                    <RestaurantCard key = { restaurant.id } resData = {restaurant} />
                ))
            }
            </div>
        </div>
    );
}
const Applayout = () => {
    return(
        <div className = "app">
            {/* Header  */}
        <Header/>
            {/* Body  */}
        <Body/>
            {/* Footer */}

        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>)