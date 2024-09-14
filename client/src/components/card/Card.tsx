import { Link } from "react-router-dom";
import { Property } from "../../types";
import "./card.scss";

const Card = (property: Property) => {
  const { id, img, title, price, address, bathroom, bedroom } = property;

  return (
    <div className="card">
      <Link to={`/${id}`} className="image-container">
        <img src={img} alt="property-photo" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${id}`}>{title}</Link>
        </h2>
        <p className="address">
          <img src="/img/pin.png" alt="pin-icon" />
          <span>{address}</span>
        </p>
        <p className="price">Rp {price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/img/bed.png" alt="bed-icon" />
              <span>{bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/img/bath.png" alt="bath-icon" />
              <span>{bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/img/save.png" alt="save-icon" />
            </div>
            <div className="icon">
              <img src="/img/chat.png" alt="chat-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
