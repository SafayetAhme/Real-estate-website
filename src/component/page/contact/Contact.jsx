import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div>
            <div className=" mb-32 mt-12 h-[550px]" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/31/74/d4/3174d422f10ae20cf06ee35d4c7953a6.jpg)' }}>
                <div className="text-center pt-16">
                    <h1 className="text-4xl text-[#050415] font-extrabold pb-2">Contact Us</h1>
                    <p className="font-medium">Say hello. Tell us how we can guide you.</p>
                    <Link to="/">
                        <h1 className="bg-slate-200 px-6 md:ml-[580px] mt-2 py-2 rounded-md hover:bg-orange-600 w-24 justify-center hover:text-white">Home</h1>
                    </Link>
                </div>
                <div className="pt-40 ">
                    <div className="bg-[#010411] ml-40 mx-16 md:w-[971px]  p-12">
                        <h1 className="text-white text-4xl font-bold">Our Office</h1>
                        <div className="md:flex gap-36">
                            <div className="pt-8">
                                <h1 className="text-white text-2xl font-medium">Los Angeles</h1>
                                <p className="w-[200px] text-[#ffffffbf] py-4">90 Fifth Avenue, 3rd Floor Los Angeles, CA 1980</p>
                                <p className="w-[200px] text-[#ffffffbf]">90 Fifth Avenue, 3rd Floor Los Angeles, CA 1980</p>
                            </div>
                            <div className="pt-8">
                                <h1 className="text-white text-2xl font-medium">Los Angeles</h1>
                                <p className="w-[200px] text-[#ffffffbf] py-4">90 Fifth Avenue, 3rd Floor Los Angeles, CA 1980</p>
                                <p className="w-[200px] text-[#ffffffbf]">90 Fifth Avenue, 3rd Floor Los Angeles, CA 1980</p>
                            </div>
                            <div className="pt-8">
                                <h1 className="text-white text-2xl font-medium">Los Angeles</h1>
                                <p className="w-[200px] text-[#ffffffbf] py-4">90 Fifth Avenue, 3rd Floor Los Angeles, CA 1980</p>
                                <p className="w-[200px] text-[#ffffffbf]">90 Fifth Avenue, 3rd Floor Los Angeles, CA 1980</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid px-16 gap-6 py-16 grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold pb-6">Send Us A Message</h1>
                    <div className="flex gap-4 pb-4">
                        <input type="name" name="name" placeholder="name" className="input input-bordered w-full " />
                        <input type="email" name="email" placeholder="email" className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-4 pb-4">
                        <input type="text" placeholder="What is this (regarding)?" className="input input-bordered w-full " />
                        <input type="number" placeholder="phone (optional)" className="input input-bordered w-full " />
                    </div>
                    <textarea placeholder="Message" name="message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    <button className="bg-orange-600 px-10 py-3 rounded-lg text-white mt-2">SEND MESSAGE</button>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold pb-6">Send Us A Message</h1>
                    <div>
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="564" height="410" id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;