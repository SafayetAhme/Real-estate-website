import { Link } from "react-router-dom";


const Navbar = () => {

    const navlinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allresout">All Resout</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/agent">Agent</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
    </>

    return (
        <div>
            <div className="navbar px-16 bg-[#060821]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <img className="w-[60px] h-[59px] rounded-full" src="https://i.ibb.co/pvHhTQd/Group-1.png" alt="" />
                        <h1 className="text-white text-2xl">Real Estate</h1>
                    </div>
                </div>
                <div className="navbar-center text-white hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className="w-[60px] h-[59px] rounded-full" src="https://i.ibb.co/yPcfd1r/man.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;