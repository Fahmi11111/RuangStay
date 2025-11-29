import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="
    relative w-full max-w-sm rounded-xl overflow-hidden bg-white
    shadow-[0px_4px_4px_rgba(0,0,0,0.05)]
    text-gray-600 hover:shadow-lg transition-all duration-200
  "
    >
      {/* Image */}
      <img
        src={room.images[0]}
        alt={room.hotel.name}
        loading="lazy"
        className="w-full h-40 md:h-48 object-cover"
      />

      {/* Best Seller Badge */}
      {index % 2 === 0 && (
        <p
          className="
          absolute top-3 left-3 px-3 py-1 text-xs bg-white rounded-full
          font-medium text-gray-700 shadow-sm
        "
        >
          Best seller
        </p>
      )}

      {/* Content */}
      <div className="p-3 pt-5 space-y-2">
        {/* Title + Rating */}
        <div className="flex items-center justify-between">
          <h2 className="font-playfair text-xl font-medium text-gray-800">
            {room.hotel.name}
          </h2>

          <div className="flex items-center gap-1 text-sm">
            <img src={assets.starIconFilled} alt="star" className="w-4" />
            <span>4.5</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <img src={assets.locationIcon} alt="location" className="w-3.5" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-gray-700">
            <span className="text-xl font-semibold">${room.pricePerNight}</span>
            <span className="text-sm text-gray-500"> /night</span>
          </p>

          <button
            className="
              px-4 py-2 text-sm font-medium border border-gray-400 rounded
              hover:bg-gray-50 active:scale-95 transition-all
            "
          >
            Book now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
