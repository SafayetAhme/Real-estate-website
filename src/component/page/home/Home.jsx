import AboutUsSection from "./AboutUsSection";
import AgentInHome from "./AgentInHome";
import Cart from "./Cart";
import FrequentlyQ from "./FrequentlyQ";
import Hero from "./Hero";
import HomeContact from "./HomeContact";
import Review from "./Review";
import VideoSection from "./VideoSection";
import WhyChooseUsSection from "./WhyChooseUsSection";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero></Hero>
            <WhyChooseUsSection></WhyChooseUsSection>
            <AboutUsSection></AboutUsSection>
            <Cart></Cart>
            <VideoSection></VideoSection>
            <FrequentlyQ></FrequentlyQ>
            {/* <AgentInHome></AgentInHome> */}
            <Review></Review>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;