import { useEffect, useState } from "react";
import { restaurantList } from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

// Body Component with Search functionality
const Body = () => {
  // State for search text and filtered restaurants
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Function to handle search
  const handleSearch = () => {
    const filtered = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // Function to reset search
  const handleReset = () => {
    setSearchText("");
    setFilteredRestaurants(restaurantList);
  };

  // Show shimmer while loading
  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      
      <div className="results-info">
        Showing {filteredRestaurants.length} restaurant(s)
      </div>

      <div className="res-container">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.data.id}/>
          ))
        ) : (
          <div className="no-results">
            <h3>No restaurants found</h3>
            <p>Try searching for something else!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;