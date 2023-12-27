import { Link } from "react-router-dom";


const AllResout = () => {
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
            <h2 className="py-1 bg-red-100" />

            {/*  */}

        </div>
    );
};

export default AllResout;