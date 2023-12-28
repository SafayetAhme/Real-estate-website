import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <div className="">
            <div className="hero min-h-screen  bg-base-200">
                <div className=" items-center px-16 gap-12 md:flex">
                    <div className="">
                        <video className="md:mx-auto rounded-lg md:w-full w-96 " src="https://cdn.pixabay.com/vimeo/673786323/cozy-106674.mp4?width=1280&hash=43019fb54829983081ef5426215bd24ac0441f70" loop autoPlay></video>
                    </div>
                    <div className="card shrink-0 w-96 md:w-[530px] shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl font-bold text-center pb-4">Please Sign In here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-orange-600 hover:text-white">Login</button>
                            </div>
                        </form>
                        <h1 className="text-center pb-12">Do not have any account: <Link className="underline font-bold text-orange-600" to="/signup">Sign Up</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;