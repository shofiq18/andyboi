import Hero from "../components/home/hero";
import HowItWorks from "../components/home/HowItWork";
import StartStoryPage from "../components/home/startYourStory";
import WhySpecialPage from "../components/home/whySpecial";
import YourStoryPage from "../components/home/yourStory";

const page = () => {
  return (
    <div className="">
      <Hero/>
      <HowItWorks/>
      <WhySpecialPage/>
      <YourStoryPage/>
      <StartStoryPage/>
    </div>
  );
};

export default page;