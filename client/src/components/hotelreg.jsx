import { assets, cities } from "../assets/assets";

const HotelReg = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
      <form className="flex bg-white rounded-xl max-w-2xl max-md:mx-2 overflow-hidden">
        {/* Image - only visible on desktop */}
        <img
          src={assets.regImage}
          className="w-1/2 object-cover hidden md:block"
          alt="Register"
        />

        {/* Right Form */}
        <div className="relative flex flex-col items-center md:w-1/2 p-6 md:p-10">
          {/* Close Button */}
          <img
            src={assets.closeIcon}
            className="absolute top-3 right-3 h-4 w-4 cursor-pointer"
            alt="Close"
          />

          <p className="text-2xl font-light mt-5">Register your hotel</p>

          {/* Hotel Name */}
          <div className="w-full mt-4">
            <label htmlFor="name" className="font-medium text-gray-500">
              Hotel
            </label>
            <input
              id="name"
              type="text"
              placeholder="Type here"
              className="border border-gray-400 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light"
              required
            />
          </div>

          {/* Phone */}
          <div className="w-full mt-4">
            <label htmlFor="contact" className="font-medium text-gray-500">
              Phone
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Type here"
              className="border border-gray-400 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light"
              required
            />
          </div>

          {/* Address */}
          <div className="w-full mt-4">
            <label htmlFor="address" className="font-medium text-gray-500">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Type here"
              className="border border-gray-400 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light"
              required
            />
          </div>

          {/* City Select */}
          <div className="w-full mt-4 max-w-60 mr-auto">
            <label htmlFor="city" className="font-medium text-gray-500">
              City
            </label>
            <select
              id="city"
              className="border border-gray-400 rounded w-full px-3 py-2.5 mt-1 outline-indigo-300 font-light"
              required
            >
              <option value="">Select city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button className="bg-indigo-500 hover:bg-indigo-700 transition-all text-white mr-auto px-6 py-3 rounded mt-6">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
