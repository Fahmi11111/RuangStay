import { assets } from "../assets/assets";
import Title from "./title";

const NewsLatter = () => {
  return (
    <div
      className="
        w-full max-w-5xl 
        bg-gray-900 text-white 
        rounded-2xl 
        px-4 py-12 md:py-16 
        mx-auto my-30 
        flex flex-col items-center
      "
    >
      {/* Title */}
      <Title title="Stay inspired" />

      {/* Form */}
      <div
        className="
          flex flex-col md:flex-row 
          items-center justify-center 
          gap-4 mt-6 w-full px-2
        "
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="
            w-full max-w-md 
            bg-white/10 
            border border-white/20 
            rounded 
            px-4 py-2.5 
            outline-none 
            placeholder-white/50
          "
        />

        <button
          className="
            flex items-center justify-center 
            gap-2 
            bg-black 
            px-4 md:px-7 py-2.5 
            rounded 
            active:scale-95 
            transition-all 
            group w-full md:w-auto
          "
        >
          Subscribe
          <img
            src={assets.arrowIcon}
            alt="arrow icon"
            className="
              w-3 invert 
              transition-all 
              group-hover:translate-x-1
            "
          />
        </button>
      </div>

      {/* Note */}
      <p className="text-gray-500 mt-6 text-xs text-center px-3">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates.
      </p>
    </div>
  );
};

export default NewsLatter;
