import { Link } from "react-router-dom";


const HomeContact = () => {
    return (
        <div className="flex items-center gap-8 mb-16 bg-[#1D4734] px-16 py-12">
            <div className=" pt-8 ">
                <h2 className="text-[#E09B6B] text-2xl">Contact Us</h2>
                <h1 className="text-5xl font-bold py-2 text-[#ffffff] pb-6">Easy to Contact us</h1>
                <p className="w-[520px] pb-10 font-medium text-[#ffffffb7]">is there a problem findign your dream home? Need a guide in buying your first home? or need a consultation on residential issues? just contact us.</p>
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
    );
};

export default HomeContact;