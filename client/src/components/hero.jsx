import React from "react";
import { assets, cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className="
        flex flex-col items-start justify-center
        text-white
        px-6 md:px-12 lg:px-24 xl:px-32
        h-screen
        pt-24 md:pt-28 lg:pt-32
        bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center
      "
    >
      {/* Tagline */}
      <p className="bg-[#49b9ff]/50 px-3 py-1 rounded-full mb-2 text-sm md:text-base">
        The ultimate hotel experience
      </p>

      {/* Title */}
      <h1
        className="
          font-playfair font-bold md:font-extrabold
          text-3xl md:text-5xl lg:text-[60px]
          leading-tight
          max-w-xs md:max-w-xl
        "
      >
        Discover your perfect gateway destination
      </h1>

      {/* Subtitle */}
      <p className="max-w-xs md:max-w-lg mt-3 text-sm md:text-lg lg:text-xl">
        Unparalleled luxury and comfort await at the world’s most exclusive
        hotels and resorts.
      </p>

      {/* Search Box */}
      <form
        className="
          bg-white text-gray-600 
          rounded-xl p-4 mt-6 md:mt-10
          shadow-lg

          grid grid-cols-1 gap-4

          /* TABLET → 2 kolom */
          md:grid-cols-2

          /* DESKTOP → Flex horizontal */
          lg:flex lg:flex-row lg:items-end lg:gap-4

          max-w-full md:max-w-2xl lg:max-w-5xl
        "
      >
        {/* Destination */}
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm">
            <img src={assets.calenderIcon} className="h-4" />
            Destination
          </label>

          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className="
              w-full
              rounded border border-gray-300 
              px-3 py-2 mt-1 text-sm outline-none
            "
            placeholder="Type here"
            required
          />

          <datalist id="destinations">
            {cities.map((city, i) => (
              <option key={i} value={city} />
            ))}
          </datalist>
        </div>

        {/* Check-in */}
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm">
            <img src={assets.calenderIcon} className="h-4" />
            Check in
          </label>

          <input
            id="checkIn"
            type="date"
            className="
              w-full
              rounded border border-gray-300
              px-3 py-2 mt-1 text-sm outline-none
            "
          />
        </div>

        {/* Check-out */}
        <div className="w-full">
          <label className="flex items-center gap-2 text-sm">
            <img src={assets.calenderIcon} className="h-4" />
            Check out
          </label>

          <input
            id="checkOut"
            type="date"
            className="
              w-full
              rounded border border-gray-300
              px-3 py-2 mt-1 text-sm outline-none
            "
          />
        </div>

        {/* Guests */}
        <div className="w-full">
          <label htmlFor="guests" className="text-sm">
            Guests
          </label>

          <input
            id="guests"
            type="number"
            min={1}
            max={4}
            className="
              w-full
              rounded border border-gray-300
              px-3 py-2 mt-1 text-sm outline-none
            "
            placeholder="0"
          />
        </div>

        {/* Search Button */}
        <button
          className="
            flex items-center justify-center gap-1
            bg-black text-white
            rounded-md py-3 px-4
            w-full md:w-full lg:w-auto
            active:scale-[.98]
            transition-all
          "
        >
          <img src={assets.searchIcon} className="h-6" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};

export default Hero;
