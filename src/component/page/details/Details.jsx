import { Rating } from "@mui/material";
import { useLoaderData, useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';


const Details = () => {
    const item = useLoaderData();
    const { id } = useParams();
    const cart = item.find(cart => cart._id === id);
    console.log(cart)
    return (
        <div className="p-10 container mx-auto">
            <div className="grid md:grid-cols-2 pb-6 gap-8">
                <div>
                    <Swiper>
                        <SwiperSlide><img className=" md:w-full w-96 h-[502px] rounded-xl" src={cart.image?.[0]} alt="" /></SwiperSlide>
                        <SwiperSlide><img className=" md:w-full w-96 h-[502px] rounded-xl" src={cart.image?.[1]} alt="" /></SwiperSlide>
                        <SwiperSlide><img className=" md:w-full w-96 h-[502px] rounded-xl" src={cart.image?.[2]} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-[#050c17] md:w-full w-96 pb-2">{cart.name}</h1>
                    <p className="text-xl md:w-full w-96 font-primary">{cart.detail}</p>
                    <div className="flex gap-6">
                        <div>
                            <h1 className=" mt-3 pb-1 text-[#030f06c8] font-bold">Bedroom</h1>
                            <div className="flex gap-2 px-4 py-1 rounded-md bg-[#676e6f23] items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 17.5H2" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22 21V12H2V21" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M17 12V9.5H13.5V12" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M10.5 12V9.5H7V12" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M20 12V6C17.7342 4.10935 14.9758 3 12 3C9.0242 3 6.26579 4.10935 4 6V12" stroke="#141B34" stroke-width="1.5" />
                                </svg>
                                <h1 className="text-xl font-medium">{cart.room}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className=" mt-3 pb-1 text-[#030f06c8] font-bold">Bathroom</h1>
                            <div className="flex gap-2 px-4 py-1 rounded-md bg-[#676e6f23] items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 20L5 21M18 20L19 21" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M3 12V13C3 16.2998 3 17.9497 4.02513 18.9749C5.05025 20 6.70017 20 10 20H14C17.2998 20 18.9497 20 19.9749 18.9749C21 17.9497 21 16.2998 21 13V12" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 12H22" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M4 12V5.5234C4 4.12977 5.12977 3 6.5234 3C7.64166 3 8.62654 3.73598 8.94339 4.80841L9 5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M8 6L10.5 4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                                <h1 className="text-xl font-medium">{cart.bathroom}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className=" mt-3 pb-1 text-[#030f06c8] font-bold">SquareFeet</h1>
                            <div className="flex gap-2 px-4 py-1 rounded-md bg-[#676e6f23] items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M9 8C7.7945 8.85994 7 10.3304 7 12C7 13.6696 7.7945 15.1401 9 16M15 8C16.2055 8.85994 17 10.3304 17 12C17 13.6696 16.2055 15.1401 15 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <h1 className="text-xl font-medium">{cart.squareFeet}</h1>
                            </div>
                        </div>
                        <div>
                            <h1 className=" mt-3 pb-1 text-[#030f06c8c8] font-bold">Wifi</h1>
                            <div className="flex gap-2 px-4 py-1 rounded-md bg-[#676e6f23] items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 18.5H12.0118" stroke="#141B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8.25 15.5C10.25 13.5 13.75 13.5 15.75 15.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.5 12.5C14.7324 9.16667 9.5 9.16667 5.5 12.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 9.5C8.31579 4.16669 15.6842 4.16668 22 9.49989" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 ">
                        <h2 className="card-title gap-4 items-center">
                            Ratting
                            <Rating style={{ maxWidth: 115 }}
                                value={cart.rating}
                                readOnly />
                        </h2>
                        <h1 className="pt-2 text-2xl">Price: <span className="font-medium text-amber-500">${cart.price}</span></h1>
                        <div className=" pt-4">
                            <button className=" mt-2 px-14 py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                {/* purple box */}
                                <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                    Book Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-full w-96">
                <hr />
                <h1 className="text-3xl font-medium pb-6 pt-10">What People Day About This</h1>
                {
                    cart.customerReview.map((review, index) =>
                        <div key={review.id}>
                            <div>
                                <p className="bg-teal-50 rounded-md text-lg text-[#41b6bf] font-bold w-fit px-2">{index + 1}</p>
                                <div className="pb-8 pt-8 w-full md:flex gap-16">
                                    <div className="">
                                        <h1 className="font-bold pb-4 text-xl w-[200px]">{review.name}</h1>
                                        <h2 className="card-title">
                                            <Rating style={{ maxWidth: 115 }}
                                                value={review.rating}
                                                readOnly />
                                        </h2>
                                    </div>

                                    <div className="">
                                        <div className=" gap-96 text-">
                                            <h1 className="font-medium pb-4 text-xl text-black">{review.title}</h1>
                                            <div className="flex gap-6 md:gap-44">
                                                <p>{review.details}</p>
                                                <p className="w-[199px] justify-start">{review.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="pb-4" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Details