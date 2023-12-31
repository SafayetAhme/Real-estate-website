import { FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import UseAgent from "../../hook/UseAgent";



const AboutUs = () => {
    const [agent] = UseAgent();

    return (
        <div className="container mx-auto">
            <div className="bg-[#1D4734] pb-10 mb-20 pt-24 px-10">
                <div>
                    <div className="grid md:grid-cols-2 items-start">
                        <div className="flex gap-4 pb-8 md:pb-0 items-center">
                            <img className="w-[100px]" src="https://i.ibb.co/QmYjzRv/Group-427320622.png" alt="" />
                            <p className="text-white text-4xl font-secondary">About Us</p>
                        </div>
                        <div>
                            <h1 className="font-primary text-white leading-tight pb-2 font-bold text-5xl">WE'VE FOUND LUXURY <br />HOMES FOR CLIENTS <br />FOR A DECADE.</h1>
                            <p className="text-[#ffffffca] font-secondary pb-9">We take great pride in ansuring the satisfaction of our customers, which is <br />why we guarantee that the products we sell will bring happiness to each <br /> and every customer. Our genuine care for customaer <br /> satisfaction is what sets us apart.</p>
                        </div>
                    </div>
                    <div className="grid -mt-14 items-end md:grid-cols-2">
                        <div>
                            <p className="text-white md:pb-0 py-6 md:pt-0 pt-10 font-secondary">We take great pride in ansuring the satisfaction  <br /> of our customers, which is why we guarantee  <br /> that the products</p>
                            <Link to="/allresout">
                                <button className=" mt-3 px-8  py-3 bg-[#e09e6b] text-white relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                    {/* purple box */}
                                    <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full font-medium text-[#ffffff] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                        Get Started
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div className="flex md:pt-0 pt-6 gap-12">
                            <div>
                                <h1 className="text-white text-5xl font-bold">10<span className="text-[#ffbe8f]">+</span></h1>
                                <p className="text-[#ffffffca] pt-2">Awards Gained</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl font-bold">20<span className="text-[#ffbe8f]">+</span></h1>
                                <p className="text-[#ffffffca] pt-2">Awards Gained</p>
                            </div>
                            <div>
                                <h1 className="text-white text-5xl font-bold">598<span className="text-[#ffbe8f]">+</span></h1>
                                <p className="text-[#ffffffca] pt-2">Awards Gained</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    
                </div>
                <div className="px-16">
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
            <div className="md:flex items-center gap-8 mb-16 bg-[#1D4734] px-16 py-12">
                <div className=" pt-8 ">
                    <h2 className="text-[#E09B6B] text-2xl">Contact Us</h2>
                    <h1 className="text-5xl font-bold py-2 text-[#ffffff] pb-6">Easy to Contact us</h1>
                    <p className="md:w-[520px] w-96 pb-10 font-medium text-[#ffffffb7]">is there a problem findign your dream home? Need a guide in buying your first home? or need a consultation on residential issues? just contact us.</p>
                    <Link to="/contact">
                        <button className=" px-8  py-3 bg-[#e09e6b] text-white relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full font-medium text-[#ffffff] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Contact Us
                            </span>
                        </button>
                    </Link>
                </div>
                <div>
                    <img className="rounded-lg" src="https://i.ibb.co/d2JPgx9/image-96.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs