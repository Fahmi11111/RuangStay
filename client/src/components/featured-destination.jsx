import { roomsDummyData } from "../assets/assets";
import HotelCard from "./hotelcard";
import Title from "./title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center px-5 md:px-15 lg:px-20 bg-slate-50 py-20">
      <Title
        title="Featured Destination"
        subTitle="Discover our handpicked selection of exceptional properties around the world"
      />

      {/* Hotel List */}
      <div className="flex flex-wrap items-center justify-center gap-5 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="
          my-12 px-4 py-2 text-sm font-medium
          border border-gray-500 rounded 
          bg-white hover:bg-gray-100 
          transition-all cursor-pointer
        "
      >
        View all destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
