import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" items-center px-16 gap-12 flex">
                    <div className="">
                        <video className="mx-auto rounded-lg " src="https://cdn.pixabay.com/vimeo/799174132/cabin-150784.mp4?width=1280&hash=1707785ffd394bb5b79b0a5da936759849ff479d" loop autoPlay></video>
                    </div>
                    <div className="card shrink-0 w-[530px] shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl font-bold text-center pb-4">Please Sign Up here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn hover:bg-orange-600 hover:text-white">Sign Up</button>
                            </div>
                        </form>
                        <h1 className="text-center pb-12">Alredy have any account: <Link className="underline font-bold text-orange-600" to="/signin">Sign In</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;