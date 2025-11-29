import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./title";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-5 md:px-15 lg:px-20 xl:px-30 pt-20 pb-30">
      {/* Header: Title + Button */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay."
        />

        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View all offers
          <img
            src={assets.arrowIcon}
            className="transition-all group-hover:translate-x-1"
            alt="Arrow"
          />
        </button>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="
              group relative flex flex-col justify-between
              text-white rounded-xl px-5 pt-12 pb-6
              bg-no-repeat bg-cover bg-center
              overflow-hidden min-h-[320px]
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)]
              transition-shadow
            "
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Discount Badge */}
            <span
              className="
              absolute top-4 left-4 bg-white text-gray-700
              text-xs font-medium px-3 py-1 rounded-full
            "
            >
              {item.priceOff}% Off
            </span>

            {/* Content */}
            <div>
              <p className="text-2xl font-playfair font-medium">{item.title}</p>

              <p className="mt-1 text-sm">{item.description}</p>

              <p className="text-xs text-white/70 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>

            {/* Button */}
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4">
              View offer
              <img
                src={assets.arrowIcon}
                className="invert transition-all group-hover:translate-x-1"
                alt="Arrow"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
