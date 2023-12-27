
const FrequentlyQ = () => {

    return (
        <div>
            <div className=" py-16 bg-[#1D4734] px-16">
                <h1 className="text-4xl text-white font-bold pb-16 pt-4 w-96">FREQUENTLY ASKED QUESTIONS</h1>
                <div className="collapse collapse-plus bg-[#ffffff10]">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-white text-xl font-medium">
                        WHAT ARE THE PROPERTY TYPE IN HUMZ
                    </div>
                    <div className="collapse-content">
                        <p className=" text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ab nulla adipisci aliquid magnam cupiditate dolore dicta ratione vel doloribus excepturi voluptates dolor nesciunt sit, eum at sint officia impedit nostrum culpa odio ullam? Impedit sint non id aperiam corrupti!</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#ffffff10]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-white text-xl font-medium">
                        WHAT BENEFITS CAN I GET
                    </div>
                    <div className="collapse-content">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum eveniet sunt iure tempore fuga porro, rem repellendus aliquam enim dolorum eaque quae temporibus unde explicabo in optio officiis sint repudiandae. Minima vel adipisci consequatur rerum perferendis fugiat quisquam dicta.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#ffffff10]">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-white text-xl font-medium">
                        HOW DOES BILLING WORK?
                    </div>
                    <div className="collapse-content">
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum eveniet sunt iure tempore fuga porro, rem repellendus aliquam enim dolorum eaque quae temporibus unde explicabo in optio officiis sint repudiandae. Minima vel adipisci consequatur rerum perferendis fugiat quisquam dicta.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentlyQ;