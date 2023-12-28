import { Link } from "react-router-dom";
import UseItem from "../../hook/UseItem";
import { Rating } from "@mui/material";


const AllResout = () => {
    const [item] = UseItem();
    return (
        <div className="container mx-auto">
            <div className="md:flex md:w-[836px] py-16 px-16 items-center">
                <div>
                    <h1 className="text-5xl font-bold pb-4 font-primary w-[450px]">Welcome to you in <br />  All Resout</h1>
                    <Link to="/">
                        <button className=" mt-3 px-8  py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                            {/* purple box */}
                            <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                            <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                Back To Home
                            </span>
                        </button>
                    </Link>
                </div>
                <video className="mx-auto rounded-lg " src="https://cdn.pixabay.com/vimeo/739777069/luxury-home-127983.mp4?width=640&hash=ad0562a56671aacfc8f245614608c80bce3cd96f" loop autoPlay></video>
            </div>
            <hr className="mb-1" />

            {/* All cart */}
            <div>
                <h1 className="font-primary text-3xl pl-10 pt-8 pb-2 font-bold">All Resout Here</h1>
                <div className="grid md:grid-cols-3 px-10">
                    {
                        item.map(cart =>
                            <div key={cart.id} className="">
                                <div className="card mb-10 w-[380px] bg-base-100 shadow-xl">
                                    <figure><img className="h-[240px] p-2  rounded-2xl w-full" src={cart.image} alt="Shoes" /></figure>
                                    <div className=" px-3">
                                        <h2 className="text-lg pt-2 font-medium text-[#4b4b4e] pb-1">{cart.name}</h2>
                                        <p className="pt-1 pb-3">{cart.title}</p>
                                        <hr className="pb-2" />
                                        <div className="flex pr-1 justify-between">
                                            <h2 className="card-title">
                                                <Rating style={{ maxWidth: 115 }}
                                                    value={cart.rating}
                                                    readOnly />
                                            </h2>
                                            <h2 className="text-lg font-bold pb-1">{cart.price} / <span className="text-sm text-gray-400">per Night</span> </h2>
                                        </div>
                                        <Link to={`/detail/${cart._id}`}>
                                            <div className="pb-3">
                                                <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                                                    {/* purple box */}
                                                    <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                                    <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                                                        View Details
                                                    </span>
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default AllResout;