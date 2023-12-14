import { Link } from "react-router-dom";


const AllResout = () => {
    return (
        <div>
            <div className="md:flex md:w-[836px] py-16 px-16 items-center">
                <div>
                    <h1 className="text-5xl font-bold pb-4 w-[450px]">Welcome to you in All Resout</h1>
                    <Link to="/">
                        <button className="bg-orange-100 px-16 py-3 rounded-lg hover:text-white hover:bg-orange-600 text-orange-600 font-bold">Home</button>
                    </Link>
                </div>
                <video className="mx-auto rounded-lg " src="https://cdn.pixabay.com/vimeo/673786323/cozy-106674.mp4?width=1280&hash=43019fb54829983081ef5426215bd24ac0441f70" loop autoPlay></video>
            </div>
            <h2 className="py-1 bg-red-100" />
            <div className=" flex gap-20 md:w-[1350px] px-16 pb-4 pt-12">
                <div>
                    <h1 className="text-2xl font-bold text-orange-600 ">Advance Search</h1>
                </div>
                <div className="flex un md:gap-[466px]">
                    <h1 className="text-xl font-medium">properties Listing</h1>
                    <div className="flex items-center gap-4">
                        <select className="select bg-slate-100 border-gray-300 border-none select-bordered w-full max-w-xs">
                            <option disabled selected>short by Newest</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <div className="border-2 p-2 rounded-lg hover:bg-orange-600 hover:border-orange-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5L20 5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 12L20 12" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 19L14 19" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className="border-2 p-2 rounded-lg hover:bg-orange-600 hover:border-orange-600">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 18C2 16.4596 2 15.6893 2.34673 15.1235C2.54074 14.8069 2.80693 14.5407 3.12353 14.3467C3.68934 14 4.45956 14 6 14C7.54044 14 8.31066 14 8.87647 14.3467C9.19307 14.5407 9.45926 14.8069 9.65327 15.1235C10 15.6893 10 16.4596 10 18C10 19.5404 10 20.3107 9.65327 20.8765C9.45926 21.1931 9.19307 21.4593 8.87647 21.6533C8.31066 22 7.54044 22 6 22C4.45956 22 3.68934 22 3.12353 21.6533C2.80693 21.4593 2.54074 21.1931 2.34673 20.8765C2 20.3107 2 19.5404 2 18Z" stroke="#141B34" stroke-width="1.5" />
                                <path d="M14 18C14 16.4596 14 15.6893 14.3467 15.1235C14.5407 14.8069 14.8069 14.5407 15.1235 14.3467C15.6893 14 16.4596 14 18 14C19.5404 14 20.3107 14 20.8765 14.3467C21.1931 14.5407 21.4593 14.8069 21.6533 15.1235C22 15.6893 22 16.4596 22 18C22 19.5404 22 20.3107 21.6533 20.8765C21.4593 21.1931 21.1931 21.4593 20.8765 21.6533C20.3107 22 19.5404 22 18 22C16.4596 22 15.6893 22 15.1235 21.6533C14.8069 21.4593 14.5407 21.1931 14.3467 20.8765C14 20.3107 14 19.5404 14 18Z" stroke="#141B34" stroke-width="1.5" />
                                <path d="M2 6C2 4.45956 2 3.68934 2.34673 3.12353C2.54074 2.80693 2.80693 2.54074 3.12353 2.34673C3.68934 2 4.45956 2 6 2C7.54044 2 8.31066 2 8.87647 2.34673C9.19307 2.54074 9.45926 2.80693 9.65327 3.12353C10 3.68934 10 4.45956 10 6C10 7.54044 10 8.31066 9.65327 8.87647C9.45926 9.19307 9.19307 9.45926 8.87647 9.65327C8.31066 10 7.54044 10 6 10C4.45956 10 3.68934 10 3.12353 9.65327C2.80693 9.45926 2.54074 9.19307 2.34673 8.87647C2 8.31066 2 7.54044 2 6Z" stroke="#141B34" stroke-width="1.5" />
                                <path d="M14 6C14 4.45956 14 3.68934 14.3467 3.12353C14.5407 2.80693 14.8069 2.54074 15.1235 2.34673C15.6893 2 16.4596 2 18 2C19.5404 2 20.3107 2 20.8765 2.34673C21.1931 2.54074 21.4593 2.80693 21.6533 3.12353C22 3.68934 22 4.45956 22 6C22 7.54044 22 8.31066 21.6533 8.87647C21.4593 9.19307 21.1931 9.45926 20.8765 9.65327C20.3107 10 19.5404 10 18 10C16.4596 10 15.6893 10 15.1235 9.65327C14.8069 9.45926 14.5407 9.19307 14.3467 8.87647C14 8.31066 14 7.54044 14 6Z" stroke="#141B34" stroke-width="1.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/*  */}
            </div>
            {/*  */}
            <div className="w-[330px] px-16">
                <div>
                    <h2 className="text-xl pt-4 pb-2 text-orange-600 font-bold">Price:</h2>
                    <input type="range" min={0} max="100" value="40" className="range range-error" />
                </div>

                <div className="pt-6">
                    <h1 className="text-xl font-bold underline underline-offset-8 text-orange-600 pb-6">Category</h1>

                    <div className="flex mb-2 gap-2 bg-slate-100 py-2 px-3 rounded-md hover:bg-orange-600 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5" />
                            <path d="M11.5 14.5L14 12M14 12L11.5 9.5M14 12H7M17 16V8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex gap-[39px]">
                            <h1 className="font-medium">Apartment</h1>
                            <h1>(12)</h1>
                        </div>
                    </div>

                    <div className="flex mb-2 gap-2 bg-slate-100 py-2 px-3 rounded-md hover:bg-orange-600 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5" />
                            <path d="M11.5 14.5L14 12M14 12L11.5 9.5M14 12H7M17 16V8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex gap-[39px]">
                            <h1 className="font-medium">Vila</h1>
                            <h1>(12)</h1>
                        </div>
                    </div>

                    <div className="flex mb-2 gap-2 bg-slate-100 py-2 px-3 rounded-md hover:bg-orange-600 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5" />
                            <path d="M11.5 14.5L14 12M14 12L11.5 9.5M14 12H7M17 16V8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex gap-[39px]">
                            <h1 className="font-medium">Family</h1>
                            <h1>(12)</h1>
                        </div>
                    </div>

                    <div className="flex mb-2 gap-2 bg-slate-100 py-2 px-3 rounded-md hover:bg-orange-600 hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="#141B34" stroke-width="1.5" />
                            <path d="M11.5 14.5L14 12M14 12L11.5 9.5M14 12H7M17 16V8" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex gap-[39px]">
                            <h1 className="font-medium">office</h1>
                            <h1>(12)</h1>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div>
                    <h1 className="text-xl font-bold underline underline-offset-8 text-orange-600 py-6">Contact Info</h1>
                    <div className="flex gap-2 pb-2 items-center">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.1677 7C22.2774 9.54418 22.2774 12.4558 21.1677 15M2.83226 15C1.72258 12.4558 1.72258 9.54418 2.83226 7" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="#141B34" stroke-width="1.5" />
                                <path d="M12 3.5C16.0588 3.5 19.5 6.92803 19.5 11.0869C19.5 15.312 16.0028 18.277 12.7725 20.2932C12.5371 20.4287 12.2709 20.5 12 20.5C11.7291 20.5 11.4629 20.4287 11.2275 20.2932C8.00325 18.2573 4.5 15.3266 4.5 11.0869C4.5 6.92803 7.9412 3.5 12 3.5Z" stroke="#141B34" stroke-width="1.5" />
                            </svg>
                        </div>
                        <h2 className="font-medium text-gray-600">A-42, Albany, Newyork</h2>
                    </div>
                    <div className="flex gap-2 pb-2 items-center">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.08793 7.57126L1.3527 7.71937L1.35275 7.71962L2.08793 7.57126ZM8 8L8.51137 8.54863L8.92208 8.16582L8.67048 7.6639L8 8ZM4.99233 2L5.6628 1.6639C5.56084 1.4605 5.37205 1.31438 5.14958 1.26667C4.92711 1.21896 4.69501 1.27483 4.51861 1.41855L4.99233 2ZM7.37927 16.6207L7.9098 16.0906L7.90941 16.0902L7.37927 16.6207ZM16.4285 21.9122L16.2801 22.6474L16.2804 22.6474L16.4285 21.9122ZM15.9997 16.0001L16.3358 15.3296L15.8339 15.078L15.4511 15.4887L15.9997 16.0001ZM21.9997 19.0078L22.5812 19.4815C22.7249 19.3051 22.7808 19.073 22.7331 18.8505C22.6854 18.6281 22.5392 18.4393 22.3358 18.3373L21.9997 19.0078ZM1.35275 7.71962C1.64441 9.16491 2.13033 10.5909 3.11985 12.3156L4.42092 11.5692C3.51363 9.98777 3.08368 8.71413 2.82311 7.42289L1.35275 7.71962ZM4.28176 12.491L8.51137 8.54863L7.48863 7.45137L3.25901 11.3938L4.28176 12.491ZM8.67048 7.6639L5.6628 1.6639L4.32185 2.3361L7.32952 8.3361L8.67048 7.6639ZM4.51861 1.41855C3.00645 2.65052 0.736597 4.66102 1.3527 7.71937L2.82316 7.42315C2.40334 5.33917 3.88184 3.87213 5.46605 2.58145L4.51861 1.41855ZM3.11985 12.3156C4.11578 14.0515 5.39178 15.695 6.84914 17.1513L7.90941 16.0902C6.53943 14.7212 5.34646 13.1824 4.42092 11.5692L3.11985 12.3156ZM16.5768 21.177C15.2856 20.9164 14.012 20.4865 12.4306 19.5792L11.6841 20.8803C13.4088 21.8698 14.8348 22.3557 16.2801 22.6474L16.5768 21.177ZM12.606 20.7411L16.5484 16.5115L15.4511 15.4887L11.5087 19.7184L12.606 20.7411ZM15.6636 16.6706L21.6636 19.6783L22.3358 18.3373L16.3358 15.3296L15.6636 16.6706ZM21.4183 18.5341C20.1276 20.1183 18.6606 21.5968 16.5766 21.177L16.2804 22.6474C19.3387 23.2635 21.3492 20.9937 22.5812 19.4815L21.4183 18.5341ZM12.4306 19.5792C10.8174 18.6537 9.27883 17.4606 7.9098 16.0906L6.84874 17.1509C8.305 18.6082 9.94815 19.8843 11.6841 20.8803L12.4306 19.5792Z" fill="#141B34" />
                                <path d="M14 6.83185C15.4232 7.43624 16.5638 8.57677 17.1682 10M14.654 2C18.1912 3.02076 20.9791 5.80852 22 9.34563" stroke="#141B34" stroke-width="1.5" />
                            </svg>

                        </div>
                        <h2 className="font-medium text-gray-600">(+066) 518 - 457 - 5181</h2>
                    </div>
                    <div className="flex gap-2 pb-2 items-center">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19.4989C10.2011 19.4954 9.90159 19.4836 9.09883 19.4634C5.95033 19.3843 4.37608 19.3448 3.24496 18.2094C2.11383 17.0739 2.08114 15.5412 2.01577 12.4756C1.99475 11.4899 1.99474 10.5101 2.01576 9.52438C2.08114 6.45885 2.11382 4.92608 3.24495 3.79065C4.37608 2.65521 5.95033 2.61566 9.09882 2.53656C11.0393 2.48781 12.9607 2.48781 14.9012 2.53657C18.0497 2.61568 19.6239 2.65523 20.7551 3.79066C21.8862 4.92609 21.9189 6.45886 21.9842 9.52439C21.9983 10.1829 22 10.8414 22 11.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 7.5L9.94202 9.23943C11.6572 10.2535 12.3428 10.2535 14.058 9.23943L17 7.5" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.017 19.5233L22 21.5M21.0531 17.0265C21.0531 15.0789 19.4742 13.5 17.5265 13.5C15.5789 13.5 14 15.0789 14 17.0265C14 18.9742 15.5789 20.5531 17.5265 20.5531C19.4742 20.5531 21.0531 18.9742 21.0531 17.0265Z" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h2 className="font-medium text-gray-600">asafayet21@gmail.com</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllResout;