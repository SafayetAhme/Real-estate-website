import { Link } from "react-router-dom"


const WhyChooseUsSection = () => {
    return (
        <div className="p-[298px] px-10">
            <div className="md:flex font-secondary items-c justify-between">
                <h1 className="text-4xl md:pb-0 pb-3 text-[#1D2121] font-black">Why Choose Us</h1>
                <p>Sit down and relaxed you don’t have to <br /> worry about anything. we got you covered</p>
            </div>
            <div className="md:flex pt-8 md:gap-6">
                <Link to="/aboutus">
                    <div className="bg-[#214f4f14] md:mb-0 mb-5 p-5">
                        <h1 className="text-3xl font-bold pb-2">1.</h1>
                        <p className="text-xl pb-8">
                            We provide the best mortgage rates and online assistence.</p>
                        <div className="flex items-center justify-between">
                            <p className=" text-xl">Learn More</p>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 18L20 6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M16 11.9995L4 11.9995" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8C12 8 16 10.946 16 12C16 13.0541 12 16 12 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </Link>
                <Link to="/aboutus">
                    <div className="bg-[#264f2114] md:mb-0 mb-5 p-5">
                        <h1 className="text-3xl font-bold pb-2">2.</h1>
                        <p className="text-xl pb-8">
                            You can find near me best service and low price.</p>
                        <div className="flex items-center justify-between">
                            <p className=" text-xl">Learn More</p>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 18L20 6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M16 11.9995L4 11.9995" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8C12 8 16 10.946 16 12C16 13.0541 12 16 12 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                </Link>
                <Link to="/aboutus">
                    <div className="bg-[#4f4a2114] p-5">
                        <h1 className="text-3xl font-bold pb-2">3.</h1>
                        <p className="text-xl pb-8">
                            You feel better when you use our service male service.</p>
                        <div className="flex items-center justify-between">
                            <p className=" text-xl">Learn More</p>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 18L20 6" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M16 11.9995L4 11.9995" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 8C12 8 16 10.946 16 12C16 13.0541 12 16 12 16" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default WhyChooseUsSection