import TitleForCart from "./TitleForCart";


const Cart = () => {
    return (
        <div>
            <TitleForCart></TitleForCart>
            <div className="px-16 flex gap-12 pb-12">
                <div className="card w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="h-[240px] rounded-xl w-full" src="https://i.pinimg.com/736x/fb/d3/15/fbd3155c1d51cdbb23621828d86a7387.jpg" alt="Shoes" /></figure>
                    <div className=" p-4">
                        <h2 className="text-2xl font-bold pb-1">$47.00</h2>
                        <h2 className="text-xl pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin</h2>
                        <p className="pt-1">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                        <div className="">
                            <button className="w-full py-3 mt-6 rounded-md hover:bg-orange-600 hover:text-white font-medium bg-[#e1e1e1]">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="h-[240px] rounded-xl w-full" src="https://i.pinimg.com/736x/fb/d3/15/fbd3155c1d51cdbb23621828d86a7387.jpg" alt="Shoes" /></figure>
                    <div className=" p-4">
                        <h2 className="text-2xl font-bold pb-1">$47.00</h2>
                        <h2 className="text-xl pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin</h2>
                        <p className="pt-1">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                        <div className="">
                            <button className="w-full py-3 mt-6 rounded-md hover:bg-orange-600 hover:text-white font-medium bg-[#e1e1e1]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-[350px] bg-base-100 shadow-xl">
                    <figure><img className="h-[240px] rounded-xl w-full" src="https://i.pinimg.com/736x/fb/d3/15/fbd3155c1d51cdbb23621828d86a7387.jpg" alt="Shoes" /></figure>
                    <div className=" p-4">
                        <h2 className="text-2xl font-bold pb-1">$47.00</h2>
                        <h2 className="text-xl pt-2 font-medium text-[#4b4b4e] pb-1">Aliva Priva Jardin</h2>
                        <p className="pt-1">If a dog chews shoes whose shoes does he choose shoes whose shoes does he choose?</p>
                        <div className="">
                            <button className="w-full py-3 mt-6 rounded-md hover:bg-orange-600 hover:text-white font-medium bg-[#e1e1e1]">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;