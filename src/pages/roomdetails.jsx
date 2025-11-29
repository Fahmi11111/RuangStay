import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/star-rating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  // Fetch room data
  useEffect(() => {
    const selected = roomsDummyData.find((r) => r._id === id);
    if (selected) {
      setRoom(selected);
      setMainImage(selected.images[0]);
    }
  }, [id]);

  if (!room) return <div className="p-10">Room not found.</div>;

  return (
    <div className="py-25 md:py-35 px-3 md:px-15 lg:px-20 xl:px-30">
      {/* Title */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-5xl font-playfair">
          {room.hotel.name}{" "}
          <span className="font-inter text-sm">({room.roomType})</span>
        </h1>

        {/* Badge */}
        <p className="text-xs font-inter py-1 px-2 text-white bg-black rounded-full">
          10% off
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating />
        <p className="ml-2 text-sm">100+ reviews</p>
      </div>

      {/* Address */}
      <div className="flex items-center gap-2 text-gray-500 mt-2">
        <img src={assets.locationIcon} alt="Location Icon" className="h-4" />
        <span>{room.hotel.address}</span>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row mt-5 gap-5">
        {/* Main Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="Main Room"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 lg:w-1/2 w-full">
          {room.images.map((img, index) => (
            <img
              key={index}
              onClick={() => setMainImage(img)}
              src={img}
              alt={`Thumbnail ${index}`}
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer transition-all duration-200 ${
                mainImage === img ? "outline outline-2 outline-black" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Amenities + Price */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10 gap-6">
        {/* Amenities */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-playfair">
            Experience luxury like never before
          </h1>

          <div className="flex flex-wrap items-center mt-3 mb-6 gap-3">
            {room.amenities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-200"
              >
                <img src={facilityIcons[item]} className="h-5 w-5" alt="" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <p className="text-2xl font-medium whitespace-nowrap">
          ${room.pricePerNight}/Night
        </p>
      </div>

      {/* Check Availability Form */}
      <form
        className="
        flex flex-col md:flex-row
        items-start md:items-center justify-between
        bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)]
        p-5 rounded-xl mx-auto mt-15 max-w-5xl gap-6 md:gap-0
      "
      >
        <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-5 text-gray-600">
          {/* Check In */}
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              Check In
            </label>
            <input
              type="date"
              id="checkInDate"
              className="rounded border border-gray-400 px-3 py-2 mt-1 outline-none"
              required
            />
          </div>

          {/* Check Out */}
          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              Check Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              className="rounded border border-gray-400 px-3 py-2 mt-1 outline-none"
              required
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-10 bg-gray-200"></div>

          {/* Guests */}
          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              min="1"
              id="guests"
              className="max-w-20 rounded border border-gray-400 px-3 py-2 mt-1 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="
            bg-primary hover:bg-primary-dull active:scale-95 transition-all
            text-white rounded-md md:px-20 py-3 text-base cursor-pointer
            w-full md:w-auto
          "
        >
          Check availability
        </button>
      </form>

      {/* Specs */}
      <div className="mt-25 space-y-3">
        {roomCommonData.map((spec, index) => (
          <div key={index} className="flex items-start gap-3">
            <img src={spec.icon} className="w-6" alt="" />
            <div>
              <p className="text-base">{spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          a? Enim officiis doloribus eum?
        </p>
      </div>

      {/* Host */}
      <div className="flex items-center gap-4 mt-5">
        <img
          src={room.hotel.owner.image}
          className="h-14 w-14 md:h-18 md:w-18 rounded-full object-cover"
          alt="Host"
        />

        <div>
          <p className="text-lg md:text-xl font-medium">
            Hosted by {room.hotel.name}
          </p>

          <div className="flex items-center gap-2 mt-1">
            <StarRating />
            <p className="text-sm">100+ reviews</p>
          </div>
        </div>
      </div>

      <button className="px-6 py-3 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
        Contact now
      </button>
    </div>
  );
};

export default RoomDetails;
