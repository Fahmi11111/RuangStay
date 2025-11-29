import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#f6f9fc] pt-10 px-6 md:px-16 lg:px-24 xl:px-32">
      {/* TOP SECTION */}
      <div className="flex flex-wrap justify-between gap-12 md:gap-8">
        {/* Logo + Description */}
        <div className="max-w-80">
          <img
            src={assets.logo}
            alt="QuickStay Logo"
            className="mb-4 h-8 md:h-10 invert opacity-80"
          />

          <p className="text-sm leading-relaxed text-gray-700">
            Discover the world's most extraordinary places to stay — from
            boutique hotels to luxury villas and private islands.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <img
              src={assets.instagramIcon}
              className="w-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={assets.facebookIcon}
              className="w-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={assets.linkendinIcon}
              className="w-6 cursor-pointer hover:opacity-70"
            />
            <img
              src={assets.twitterIcon}
              className="w-6 cursor-pointer hover:opacity-70"
            />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <p className="font-playfair text-lg text-gray-900">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Partners
              </a>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <p className="font-playfair text-lg text-gray-900">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
            <li>
              <a href="#" className="hover:text-black">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Cancellation Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div className="max-w-80">
          <p className="font-playfair text-lg text-gray-900">STAY UPDATED</p>
          <p className="mt-3 text-sm text-gray-700">
            Subscribe to our newsletter for inspiration and special offers.
          </p>

          <div className="flex items-center mt-4">
            <input
              type="email"
              className="bg-white rounded-l border border-gray-300 h-10 px-3 text-sm w-full outline-none focus:ring-1 focus:ring-gray-400"
              placeholder="Your email"
            />
            <button className="flex items-center justify-center bg-black h-10 w-10 rounded-r hover:bg-gray-800 transition">
              <img src={assets.arrowIcon} className="w-3 invert" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <hr className="border-gray-300 mt-10" />

      {/* COPYRIGHT */}
      <div className="flex flex-col md:flex-row items-center justify-between py-6 text-sm text-gray-700">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">QuickStay</span>. All rights reserved.
        </p>

        <ul className="flex items-center gap-5 mt-3 md:mt-0">
          <li>
            <a href="#" className="hover:text-black">
              Privacy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
