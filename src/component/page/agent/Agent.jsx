import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const Agent = () => {
    return (
        <div>
            <div>
                <div className=" mb-32 mt-12 h-[360px]" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/31/74/d4/3174d422f10ae20cf06ee35d4c7953a6.jpg)' }}>
                    <div className="text-center pt-16">
                        <h1 className="text-4xl text-[#050415] font-extrabold pb-2">Our Agents</h1>
                        <p className="font-medium">pairing the industry s top tecnology with local experise.</p>
                        <Link to="/">
                            <h1 className="bg-slate-200 px-6 md:ml-[580px] mt-2 py-2 rounded-md hover:bg-orange-600 w-24 justify-center hover:text-white">Home</h1>
                        </Link>
                    </div>
                    <div className="pt-20 ">
                        <div className="bg-[#010411] ml-40 mx-16 w-[971px]  p-12">
                            <h1 className="text-white text-4xl font-bold">Find an Agent</h1>
                            <div className="flex items-center gap-8">
                                <div className="pt-8">
                                    <h1 className="text-white text-2xl font-medium pb-2">Location</h1>
                                    <input type="location" placeholder="location" className="p-2 outline-none rounded-md w-[260px]" />
                                </div>
                                <div className="pt-8">
                                    <h1 className="text-white text-2xl font-medium pb-2">Name</h1>
                                    <input type="name" placeholder="name" className="p-2 outline-none rounded-md w-[260px]" />
                                </div>
                                <div className="pt-8">
                                    <h1 className="text-white text-2xl font-medium pb-2">Service Needed</h1>
                                    <input type="service" placeholder="service" className="p-2 outline-none rounded-md w-[260px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-16 pt-20">
                    <h1 className=" text-3xl font-bold">Our All <span className="text-orange-600">Agent</span> </h1>
                    <div className="flex gap-9">
                        <div className=" mb-32 mt-8 w-[260px] pt-[240px] h-[290px]" style={{ backgroundImage: 'url(https://i.ibb.co/rxv3kC7/rakibull.png)' }}>
                            <div className=" py-3 text-center px-9 mx-5 w-[220px] bg-[#010411]">
                                <h1 className="text-xl font-bold text-white">Safayet Ahmed</h1>
                                <p className="flex pl-2 pt-1 text-gray-200 text-base items-center gap-1"><FaPhoneAlt /><span>(888)1234-7890</span></p>
                            </div>
                        </div>
                        <div className=" mb-32 mt-8 w-[260px] pt-[240px] h-[290px]" style={{ backgroundImage: 'url(https://i.ibb.co/hFwcGRS/yeasing.png)' }}>
                            <div className="justify-center py-3 text-center px-9 mx-5 w-[220px] bg-[#010411]">
                                <h1 className="text-xl font-bold text-white">Safayet Ahmed</h1>
                                <p className="flex pl-2 pt-1 text-gray-200 text-base items-center gap-1"><FaPhoneAlt /><span>(888)1234-7890</span></p>
                            </div>
                        </div>
                        <div className=" mb-32 mt-8 w-[260px] pt-[240px] h-[290px]" style={{ backgroundImage: 'url(https://i.ibb.co/fdqTKsx/poros.png)' }}>
                            <div className="justify-center py-3 text-center px-9 mx-5 w-[220px] bg-[#010411]">
                                <h1 className="text-xl font-bold text-white">Safayet Ahmed</h1>
                                <p className="flex pl-2 pt-1 text-gray-200 text-base items-center gap-1"><FaPhoneAlt /><span>(888)1234-7890</span></p>
                            </div>
                        </div>
                        <div className=" mb-32 mt-8 w-[260px] pt-[240px] h-[290px]" style={{ backgroundImage: 'url(https://i.ibb.co/dPP4B0s/safa.png)' }}>
                            <div className="justify-center py-3 text-center px-9 mx-5 w-[220px] bg-[#010411]">
                                <h1 className="text-xl font-bold text-white">Safayet Ahmed</h1>
                                <p className="flex pl-2 pt-1 text-gray-200 text-base items-center gap-1"><FaPhoneAlt /><span>(888)1234-7890</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agent;