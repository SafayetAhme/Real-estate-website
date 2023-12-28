import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="">
            <div className="bg-[#1D4734] h-[520px] md:h-[780px]">
                <div>
                    <h1 className="font-primary font-bold text-4xl md:text-8xl pt-10 pl-10 text-white">EXPERIENCE THE <br />EPITOME OF HOME <br />COMFORT.</h1>
                    <div className="px-10 grid md:grid-cols-2 pt-8 pb-12">
                        <div className="w-[300px] items-start">
                            <img className=" md:pb-0 pb-6  pl-[165px]" src="https://i.ibb.co/LzjJF4f/Group-427320621-2.png" alt="" />
                        </div>
                        <p className="text-[#ffffffbe] font-secondary leading-relaxed ">Discover a world of unparalleled expertise as we navigate the intricacies of property transactions for you. Our global network and personalized approach redefine real estate excellence, ensuring your investment journey is not just smooth but also a testament to our commitment to your success.</p>
                    </div>
                </div>
                <img className="px-10 md:w-full mb-16 md:h-[460px]" src="https://i.ibb.co/8sjHnYq/image-93.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;