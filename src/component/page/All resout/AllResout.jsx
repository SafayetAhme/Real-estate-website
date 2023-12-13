import { Link } from "react-router-dom";


const AllResout = () => {
    return (
        <div>
            <div className="md:flex w-[836px] py-16 px-16 items-center">
                <div>
                    <h1 className="text-5xl font-bold pb-4 w-[450px]">Welcome to you in All Resout</h1>
                    <Link to="/">
                        <button className="bg-orange-100 px-16 py-3 rounded-lg hover:text-white hover:bg-orange-600 text-orange-600 font-bold">Home</button>
                    </Link>
                </div>
                <video className="mx-auto rounded-lg " src="https://cdn.pixabay.com/vimeo/673786323/cozy-106674.mp4?width=1280&hash=43019fb54829983081ef5426215bd24ac0441f70" loop autoPlay></video>
            </div>
        </div>
    );
};

export default AllResout;