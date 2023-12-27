import TitleForCart from "./TitleForCart";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from "@mui/material";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="-mt-[340px]">
            <TitleForCart></TitleForCart>
            <div className="px-10">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}

                >
                    <div>
                        <SwiperSlide>
                            <div className="">
                                <div className="card w-[380px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[240px] p-2  rounded-2xl w-full" src="https://i.ibb.co/47tXjD0/image-94.png" alt="Shoes" /></figure>
                                    <div className=" px-3">
                                        <h2 className="text-lg pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin</h2>
                                        <p className="pt-1 pb-3">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                                        <hr className="pb-2" />
                                        <div className="flex pr-1 justify-between">
                                            <h2 className="card-title">
                                                <Rating style={{ maxWidth: 115 }}
                                                    value={""}
                                                    readOnly />
                                            </h2>
                                            <h2 className="text-lg font-bold pb-1">$47.00 / <span className="text-sm text-gray-400">per Night</span> </h2>
                                        </div>
                                        <div className="pb-3">
                                            <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                {/* purple box */}
                                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" flex gap-12 pb-12">
                                <div className="card w-[380px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[240px] p-2  rounded-2xl w-full" src="https://i.ibb.co/47tXjD0/image-94.png" alt="Shoes" /></figure>
                                    <div className=" px-3">
                                        <h2 className="text-lg pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin</h2>
                                        <p className="pt-1 pb-3">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                                        <hr className="pb-2" />
                                        <div className="flex pr-1 justify-between">
                                            <h2 className="card-title">
                                                <Rating style={{ maxWidth: 115 }}
                                                    value={""}
                                                    readOnly />
                                            </h2>
                                            <h2 className="text-lg font-bold pb-1">$47.00 / <span className="text-sm text-gray-400">per Night</span> </h2>
                                        </div>
                                        <div className="pb-3">
                                            <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                {/* purple box */}
                                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" flex gap-12 pb-12">
                                <div className="card w-[380px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[240px] p-2  rounded-2xl w-full" src="https://i.ibb.co/47tXjD0/image-94.png" alt="Shoes" /></figure>
                                    <div className=" px-3">
                                        <h2 className="text-lg pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin</h2>
                                        <p className="pt-1 pb-3">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                                        <hr className="pb-2" />
                                        <div className="flex pr-1 justify-between">
                                            <h2 className="card-title">
                                                <Rating style={{ maxWidth: 115 }}
                                                    value={""}
                                                    readOnly />
                                            </h2>
                                            <h2 className="text-lg font-bold pb-1">$47.00 / <span className="text-sm text-gray-400">per Night</span> </h2>
                                        </div>
                                        <div className="pb-3">
                                            <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                {/* purple box */}
                                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" flex gap-12 pb-12">
                                <div className="card w-[380px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[240px] p-2  rounded-2xl w-full" src="https://i.ibb.co/47tXjD0/image-94.png" alt="Shoes" /></figure>
                                    <div className=" px-3">
                                        <h2 className="text-lg pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin</h2>
                                        <p className="pt-1 pb-3">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                                        <hr className="pb-2" />
                                        <div className="flex pr-1 justify-between">
                                            <h2 className="card-title">
                                                <Rating style={{ maxWidth: 115 }}
                                                    value={""}
                                                    readOnly />
                                            </h2>
                                            <h2 className="text-lg font-bold pb-1">$47.00 / <span className="text-sm text-gray-400">per Night</span> </h2>
                                        </div>
                                        <div className="pb-3">
                                            <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                {/* purple box */}
                                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" flex gap-12 pb-12">
                                <div className="card w-[380px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[240px] p-2  rounded-2xl w-full" src="https://i.ibb.co/47tXjD0/image-94.png" alt="Shoes" /></figure>
                                    <div className=" px-3">
                                        <h2 className="text-lg pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin Aliva Priva Jardin</h2>
                                        <p className="pt-1 pb-3">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                                        <hr className="pb-2" />
                                        <div className="flex pr-1 justify-between">
                                            <h2 className="card-title">
                                                <Rating style={{ maxWidth: 115 }}
                                                    value={""}
                                                    readOnly />
                                            </h2>
                                            <h2 className="text-lg font-bold pb-1">$47.00 / <span className="text-sm text-gray-400">per Night</span> </h2>
                                        </div>
                                        <div className="pb-3">
                                            <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                {/* purple box */}
                                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                    View Details
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
            <div className="w-fit text-center pt-0 md:pl-[579px]">
                <Link to="/allresout">
                    <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                        {/* purple box */}
                        <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                            View All
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;