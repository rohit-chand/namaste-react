import { useState } from "react";
import {  resturantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState();
  const [restaurants, setRestaurants] = useState(resturantList)
  const searchRestaurant =() => {
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.info.name.startsWith(searchTxt))
    setRestaurants(filteredRestaurants)
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button className="search-btn" onClick={searchRestaurant}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
