import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.scss";

type PinProps = {
  id: number;
  img: string;
  title: string;
  price: number;
  bedroom: number;
  latitude: number;
  longitude: number;
};

const Pin = (pinInfo: PinProps) => {
  const { id, latitude, longitude, title, img, price, bedroom } = pinInfo;
  return (
    <Marker position={[latitude, longitude]}>
      <Popup className="pin">
        <div className="popup-container">
          <img src={img} alt="property-image" />
          <div className="text-container">
            <Link to={`/${id}`}>{title}</Link>
            <span className="bed">{bedroom} bedroom</span>
            <b>Rp {price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
