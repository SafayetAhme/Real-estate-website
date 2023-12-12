import { IoLocationSharp } from "react-icons/io5";


const Hero = () => {
    return (
        <div className="">
            <div className="bg-[#010411] px-16 ">
                <div className="flex gap-0">
                    <div>
                        <div className="pt-12">
                            <h1 className="text-white text-5xl font-bold w-[460px] pt-16 pb-6">Discover Most Suitable Property</h1>
                            <p className="text-gray-300 w-[600px]">Find a variety of properties that suit you very easily, forget all difficulties in finding a residance for you</p>

                            <div className="flex bg-white w-[435px] my-4 rounded-lg gap-16">
                                <div className="flex items-center">
                                    <IoLocationSharp className="text-orange-600 text-2xl pl-2 w-10" />
                                    <input type="text" placeholder="Search by location..." className="input" />
                                </div>
                                <button className="-pl-20 bg-[#E44D09] text-white px-8 shadow-xl shadow-orange-950 rounded-md my-1">Search</button>
                            </div>
                        </div>
                        <div className="flex gap-[80px]">
                            <div className="w-[20px]">
                                <h1 className="flex text-4xl"> <span className="text-white">9k</span> <span className="text-[#E44D09]">+</span></h1>
                                <p className="text-gray-500">Premium Product</p>
                            </div>
                            <div className="w-[20px]">
                                <h1 className="flex text-4xl"> <span className="text-white">2k</span> <span className="text-[#E44D09]">+</span></h1>
                                <p className="text-gray-500">Premium Product</p>
                            </div>
                            <div className="w-[20px]">
                                <h1 className="flex text-4xl"> <span className="text-white">28</span> <span className="text-[#E44D09]">+</span></h1>
                                <p className="text-gray-500">Premium Product</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-20 pl-24">
                        <img src="https://i.ibb.co/f08j1nF/Group-4.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Hero;