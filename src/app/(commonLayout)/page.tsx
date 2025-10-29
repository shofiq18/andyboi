import Hero from "../components/home/hero";
import HowItWorks from "../components/home/HowItWork";
import WhySpecialPage from "../components/home/whySpecial";

const page = () => {
  return (
    <div className="">
      <Hero/>
      <HowItWorks/>
      <WhySpecialPage/>
    </div>
  );
};

export default page;