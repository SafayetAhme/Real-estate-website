import { Link } from "react-router-dom";


const HomeContact = () => {
    return (
        <div className="flex gap-8 mb-16 bg-[#020210] px-16 py-12">
            <div className=" pt-8 ">
                <h2 className="text-orange-600 text-2xl">Contact Us</h2>
                <h1 className="text-5xl font-bold py-2 text-[#ffffff] pb-6">Easy to Contact us</h1>
                <p className="w-[520px] pb-10 font-medium text-[#ffffffb7]">is there a problem findign your dream home? Need a guide in buying your first home? or need a consultation on residential issues? just contact us.</p>
                <Link to="/contact">
                    <button className="bg-orange-600 mb-28 hover:shadow-2xl shadow-orange-300 text-white  px-8 py-3 rounded-md ">Contact Us</button>
                </Link>
            </div>
            <div>
                <img src="https://i.ibb.co/4gyLPCr/Group-8-2.png" alt="" />
            </div>
        </div>
    );
};

export default HomeContact;