import ExclusiveOffers from "../components/exclusive-offers";
import FeaturedDestination from "../components/featured-destination";
import Hero from "../components/hero";
import NewsLatter from "../components/newslatter";
import Testimonial from "../components/testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLatter />
    </>
  );
};

export default Home;
