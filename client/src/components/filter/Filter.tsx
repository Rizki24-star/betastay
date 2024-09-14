import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        Search result's for <b>Tuk-Tuk</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Village location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="homestay">Home Stay</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedRoom">Bedroom</label>
          <input type="text" id="bedRoom" name="bedRoom" placeholder="Any" />
        </div>
        <button>
          <img src="/img/search.png" alt="search-icon" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
