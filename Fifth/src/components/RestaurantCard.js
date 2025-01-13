import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div
      className="card"
      onClick={() => {
        window.confirm("Coming Soon .....");
      }}
    >
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="No image available" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>
        ⭐️{avgRating} • {sla.slaString}
      </h4>
    </div>
  );
};
export default RestaurantCard;
