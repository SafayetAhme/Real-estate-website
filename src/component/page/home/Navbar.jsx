import { Link } from "react-router-dom";


const Navbar = () => {

    const navlinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allresout">All Resout</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <div>
            <div className="navbar container mx-auto px-10 bg-[#1D4734]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu bg-white menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <img className="w-[50px] h-[38px]" src="https://i.ibb.co/3BQqFwR/Vector-12.png" alt="" />
                        <h1 className="text-white text-2xl">SK BUILDERS</h1>
                    </div>
                </div>
                <div className="navbar-center font-medium text-[#01110A] hidden lg:flex">
                    <ul className="menu rounded-full bg-white menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="rounded-full items-center md:pl-4 md:pr-1 flex gap-4 bg-white">
                        <p className="md:flex hidden md:py-4 items-center md:gap-3">
                            <Link to="/signin">Sign In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </p>
                        <img className="w-[50px] h-[50px] rounded-full" src="https://i.ibb.co/yPcfd1r/man.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;