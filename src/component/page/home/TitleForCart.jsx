import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


const TitleForCart = () => {
    return (
        <div>
            <div className="flex justify-between px-16 pt-24">
            <div>
                <p className="text-xl font-medium text-[#E44D09]">Best Choice</p>
                <h1 className="pt-2 text-4xl font-bold text-[#010411] pb-8">Popular Residences</h1>
            </div>
            <div className="flex gap-2">
                <div className="outline-1 hover:bg-orange-600 hover:border-orange-600 hover:text-white p-4 border-2 w-[52px] h-[52px] rounded-lg">
                    <div><SlArrowLeft /></div>
                </div>
                <div className="outline-1 hover:bg-orange-600 hover:border-orange-600 hover:text-white p-4 border-2 w-[52px] h-[52px] rounded-lg">
                    <div><SlArrowRight /></div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TitleForCart;