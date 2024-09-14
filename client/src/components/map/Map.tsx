import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";
import { listProperty } from "../../libs/data";

const Map = () => {
  const position = [2.64025, 98.71525] as LatLngExpression;
  const data = listProperty;
  // console.log("properties: " + JSON.stringify(properties));
  return (
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((item) => (
        <Pin key={item.id} {...item} />
      ))}
    </MapContainer>
  );
};

export default Map;
