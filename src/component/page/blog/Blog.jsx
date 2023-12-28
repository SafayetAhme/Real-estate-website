import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import UseAgent from "../../hook/UseAgent";


const Blog = () => {
    const [agent] = UseAgent();
    return (
        <div className="container mx-auto">
            <div className="md:pl-16 py-16">
                <div className="grid md:grid-cols-2 md:gap-0">
                    <h1 className="md:text-5xl text-2xl w-[600px] font-bold pb-6">Welcome to you in our plaground bro!</h1>
                    <h1 className="md:text-5xl text-2xl w-[600px] font-bold text-orange-400 pb-6">Welcome in About Us</h1>
                </div>
                <div className="">
                    <video className="mx-auto rounded-lg " src="https://cdn.pixabay.com/vimeo/673786323/cozy-106674.mp4?width=1280&hash=43019fb54829983081ef5426215bd24ac0441f70" loop autoPlay></video>
                </div>
            </div>

            <div className="px-16 pb-10 text-center">
                <h1 className="text-3xl font-bold pb-1">Our Mission</h1>
                <p className="text-lg">Wee are ready for give you best something</p>
            </div>
            <dir className="grid px-16 items-center pb-12 md:grid-cols-2">
                <div>
                    <img className="pl-8 md:pb-0 pb-6" src="https://i.ibb.co/X31zrg2/Group-9.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold pb-4">Our mission is to provide a dream home or house with best possible feclities.</h1>
                    <p className="pb-4">Ensure your house is clean and well-maintained. First impressions matter to tourists. Highlight the amenities your house offers, such as Wi-Fi, parking, kitchen facilities, and any unique features that could attract tourists. Mention nearby attractions, landmarks, or points of interest. This can be a significant selling point for tourists looking to explore the area.</p>
                    <p>Clearly communicate any safety measures in place, such as fire extinguishers, emergency contact information, and secure entry systems. landmarks, or points of interest. This can be a significant selling point for tourists looking to explore the area.</p>
                </div>
            </dir>

            <div className="w-full">
                <div className="bg-no-repeat md:w-[1200px]" style={{ backgroundImage: 'url(https://i.ibb.co/ctQ81kf/Group-427320624-2.png)' }}>
                    <div className="md:py-[300px] py-[100px] md:px-60 px-8 flex items-center justify-between">
                        <Link to="/contact">
                            <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                {/* purple box */}
                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                    Contact Us
                                </span>
                            </button>
                        </Link>
                        <h1 className="text-white text-2xl scale-125 drop-shadow-2xl bg-[#1D4734] p-4 w-[260px]">Become Our Portner Come Join Us</h1>
                    </div>
                </div>
            </div>

            <div>
                <div className="px-16 pt-20">
                    <div className="grid md:grid-cols-2">
                        <h1 className=" text-3xl font-bold w-[400px]">Meet Our Professional <span className="text-[#eba345]">Agent</span> </h1>
                        <p>Whether you re buying, selling, or renting a property, a skilled agent can provide valuable insights, help you navigate paperwork, and negotiate favorable terms. They act as intermediaries, streamlining the process and often saving clients time and effort.</p>
                    </div>
                    <div className="md:flex gap-9">
                        {
                            agent.map(item =>
                                <div key={item.id} className="py-12">
                                    <img src={item.image} alt="" />
                                    <div className=" py-2 pl-2  bg-[#010411]">
                                        <h1 className="text-xl font-bold text-white">{item.name}</h1>
                                        <p className="flex pl-2 pt-1 text-gray-200 text-base items-center gap-1"><FaPhoneAlt /><span>(888)1234-7890</span></p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className="bg-no-repeat pb-16 p-5 md:ml-[320px]" style={{ backgroundImage: 'url(https://i.ibb.co/3R14NfW/Rectangle-22-1.png)' }}>
                    <h1 className="md:text-3xl text-2xl font-bold text-white md:pl-24">We will help you any time</h1>
                </div>
                <div className=" flex pb-12">
                    <Link to="/contact">
                        <Marquee pauseOnHover={true} speed={50}>
                            <img src="https://i.ibb.co/gWzGB7t/Rectangle-23.png" alt="" />
                        </Marquee>
                    </Link>
                    <Link to="/contact">
                        <Marquee pauseOnHover={true} speed={50}>
                            <img src="https://i.ibb.co/4dbtkvP/Rectangle-24.png" alt="" />
                        </Marquee>
                    </Link>
                    <Link to="/contact">
                        <Marquee pauseOnHover={true} speed={50}>
                            <img src="https://i.ibb.co/Kj2cJq2/Rectangle-25.png" alt="" />
                        </Marquee>
                    </Link>
                    <Link to="/contact">
                        <Marquee pauseOnHover={true} speed={50}>
                            <img src="https://i.ibb.co/zGrkv4h/Rectangle-26.png" alt="" />
                        </Marquee>
                    </Link>
                    <Link to="/contact">
                        <Marquee pauseOnHover={true} speed={50}>
                            <img src="https://i.ibb.co/TH0hW2p/Rectangle-27.png" alt="" />
                        </Marquee>
                    </Link>
                    <Link to="/contact">
                        <Marquee pauseOnHover={true} speed={50}>
                            <img src="https://i.ibb.co/Wy88xwT/Rectangle-28.png" alt="" />
                        </Marquee>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;