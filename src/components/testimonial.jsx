import Title from "./title";
import { testimonials } from "../assets/assets";
import StarRating from "./star-rating";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 px-5 md:px-15 lg:px-20 pt-20 pb-30">
      {/* Section Title */}
      <Title
        title="What our guests say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive experiences."
      />

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-20 w-full">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="
              bg-white p-6 rounded-2xl shadow-lg
              max-w-xs w-full
              transition-all hover:shadow-xl hover:-translate-y-1
            "
          >
            {/* User */}
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-playfair text-xl">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.location}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-4">
              <StarRating />
            </div>

            {/* Review */}
            <p className="text-gray-600 leading-relaxed mt-4">
              “{item.review}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
