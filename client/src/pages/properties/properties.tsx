import { listProperty } from "../../libs/data";
import "./properties.scss";
import { Card, Filter, Map } from "../../components";

const PropertiesPage = () => {
  const data = listProperty;

  return (
    <div className="list-property">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};

export default PropertiesPage;
