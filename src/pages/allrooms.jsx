import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/star-rating";

/* ----------------------- SMALL INPUT COMPONENTS ----------------------- */

const CheckBox = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">
    <input
      type="radio"
      name="sortOption"
      checked={selected}
      onChange={() => onChange(label)}
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

/* ------------------------------ MAIN PAGE ------------------------------ */

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  // Dummy options (bisa dihubungkan dengan filter logic nanti)
  const roomTypes = ["Single bed", "Double bed", "Luxury room", "Family suite"];
  const priceRanges = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];
  const sortOptions = [
    "Price low to high",
    "Price high to low",
    "Newest first",
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-3 md:px-16 lg:px-24 xl:px-32">
      {/* --------------------------- LEFT CONTENT --------------------------- */}
      <div className="w-full lg:w-[70%]">
        {/* PAGE TITLE */}
        <div className="flex flex-col items-start mb-6">
          <h1 className="font-playfair text-3xl md:text-4xl">Hotel rooms</h1>
          <p className="text-sm md:text-base text-gray-500/80 mt-2 max-w-xl">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create memories.
          </p>
        </div>

        {/* LIST OF ROOMS */}
        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start gap-4 py-10 border-b border-gray-400 last:border-0 last:pb-32"
          >
            {/* IMAGE */}
            <img
              src={room.images[0]}
              alt="room"
              title="View room details"
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              className="w-full md:w-1/2 max-h-64 rounded-xl object-cover shadow-md cursor-pointer"
            />

            {/* DETAILS */}
            <div className="flex flex-col gap-2 md:w-1/2">
              <p className="text-gray-500 text-sm">{room.hotel.city}</p>

              <p
                className="cursor-pointer font-medium"
                onClick={() => navigate(`/rooms/${room._id}`)}
              >
                {room.name}
              </p>

              <p className="text-gray-700 text-2xl font-playfair cursor-pointer">
                {room.hotel.name}
              </p>

              <div className="flex items-center">
                <StarRating />
                <p className="ml-2 text-sm text-gray-600">100+ reviews</p>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <img src={assets.locationIcon} alt="location" className="h-4" />
                <span className="text-sm">{room.hotel.address}</span>
              </div>

              {/* AMENITIES */}
              <div className="flex flex-wrap items-center mt-3 mb-4 gap-3">
                {room.amenities.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100"
                  >
                    <img src={facilityIcons[item]} className="h-5 w-5" alt="" />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* PRICE */}
            <p className="text-xl font-medium text-gray-600 whitespace-nowrap">
              ${room.pricePerNight} /night
            </p>
          </div>
        ))}
      </div>

      {/* -------------------------- FILTER SIDEBAR --------------------------- */}
      <div className="bg-white w-80 border border-gray-300 text-gray-700 rounded-md shadow-sm max-lg:mb-10 lg:ml-6">
        {/* FILTER HEADER */}
        <div
          className={`flex items-center justify-between px-5 py-3 border-b ${
            openFilters ? "border-gray-300" : "lg:border-gray-300"
          }`}
        >
          <p className="text-base font-semibold text-black">Filters</p>

          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "Hide" : "Show"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>

        {/* FILTER CONTENT */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          }`}
        >
          {/* POPULAR FILTERS */}
          <div className="px-5 pt-5">
            <p className="font-semibold text-gray-800 mb-2">Popular filters</p>
            {roomTypes.map((type, i) => (
              <CheckBox key={i} label={type} />
            ))}
          </div>

          {/* PRICE FILTERS */}
          <div className="px-5 pt-5">
            <p className="font-semibold text-gray-800 mb-2">Price ranges</p>
            {priceRanges.map((range, i) => (
              <CheckBox key={i} label={`$ ${range}`} />
            ))}
          </div>

          {/* SORT BY */}
          <div className="px-5 pt-5 pb-7">
            <p className="font-semibold text-gray-800 mb-2">Sort by</p>
            {sortOptions.map((option, i) => (
              <RadioButton key={i} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
