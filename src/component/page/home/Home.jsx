import Cart from "./Cart";
import FrequentlyQ from "./FrequentlyQ";
import Hero from "./Hero";
import HomeContact from "./HomeContact";
import Review from "./Review";
import VideoSection from "./VideoSection";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Hero></Hero>
            <Cart></Cart>
            <VideoSection></VideoSection>
            <FrequentlyQ></FrequentlyQ>
            <Review></Review>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;