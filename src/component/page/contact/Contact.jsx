import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="px-10 container mx-auto">
            <div className=" mt-12 ">
                <div className="pt-2 ">
                    <div className="bg-[#1D4734] ml-40 mx-16 md:w-[971px]  rounded-xl p-12">
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
                    <button className=" mt-3 px-8 w-full py-3 bg-[#e09e6b48] text-black relative inline-flex items-center justify-start overflow-hidden transition-all rounded hover:bg-white group">
                        {/* purple box */}
                        <span className="w-0 h-0 rounded bg-[#e09e6b] border-[#e09e6b] text-white hover:bg-[#e09e6b]  hover:border-[#e09e6b] shadow-lg shadow-[#e09e6b48]...  absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                        <span className="w-full font-medium text-[#444240] transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                            SEND MESSAGE US
                        </span>
                    </button>
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