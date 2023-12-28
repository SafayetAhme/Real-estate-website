import { Link } from "react-router-dom"


const AboutUsSection = () => {
    return (
        <div className="bg-[#1D4734] pb-10 mb-[300px] pt-24 px-10 -mt-[198px]">
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
    )
}

export default AboutUsSection