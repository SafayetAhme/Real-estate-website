import { Link } from "react-router-dom";


const TitleForCart = () => {
    return (
        <div>
            <div className="flex items-center justify-between px-16 pt-24">
                <div>
                    <p className="text-xl font-medium text-[#E44D09]">Best Choice</p>
                    <h1 className="pt-2 text-4xl font-bold text-[#010411] pb-8">Popular Residences</h1>
                </div>
                <Link to="/allresout">
                    <h1 className="bg-slate-200 px-6 py-2 rounded-md hover:bg-orange-600 hover:text-white">View All</h1>
                </Link>
            </div>
        </div>
    );
};

export default TitleForCart;