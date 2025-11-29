import React, { useState } from "react";
import Title from "../../components/title";
import { assets } from "../../assets/assets";

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    priceNight: 0,
    amenities: {
      "Free wifi": false,
      "Free breakfeast": false,
      "Room service": false,
      "Mountain view": false,
      "Pool access": false,
    },
  });

  return (
    <form>
      <Title
        align="left"
        font="outfit"
        title="Add room"
        subTitle="Fill in the details carefully n accurate room details, pricing, n amenities, to enhance the user booking experience."
      />

      {/* Images */}
      <p className="text-gray-800 mt-10">Images</p>
      <div className="grid grid-cols-2 sm:flex gap-3 my-3 flex-wrap">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <img
              className="max-h-20 cursor-pointer opacity-70 border rounded"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type */}
      <div className="w-full mt-5">
        <p className="text-gray-500">Room type</p>
        <select
          value={inputs.roomType}
          onChange={(e) => setInputs({ ...inputs, roomType: e.target.value })}
          className="border opacity-80 border-gray-400 mt-1 rounded p-2 w-full"
        >
          <option value="">Select room type</option>
          <option value="Single bed">Single bed</option>
          <option value="Double bed">Double bed</option>
          <option value="Luxury room">Luxury room</option>
          <option value="Family suite">Family suite</option>
        </select>
      </div>

      {/* Price */}
      <div className="mt-5">
        <p className="text-gray-500">
          Price <span className="text-sm">/night</span>
        </p>
        <input
          type="number"
          placeholder="0"
          className="border border-gray-500 mt-1 rounded-full p-2 w-24"
          value={inputs.priceNight}
          onChange={(e) =>
            setInputs({ ...inputs, priceNight: Number(e.target.value) })
          }
        />
      </div>
      <p className="text-black mt-3">Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
          </div>
        ))}
      </div>
      <button className="bg-primary text-white px-8 py-2 rounded mt-5 cursor-pointer">
        Add room
      </button>
    </form>
  );
};

export default AddRoom;
