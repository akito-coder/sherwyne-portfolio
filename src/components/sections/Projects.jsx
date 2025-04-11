import {RevealOnScroll} from '../RevealOnScroll';

export const Projects = () => {
    return (
        <section id="projects" className="py-[50px]">
            <RevealOnScroll>
            <div className="container mx-auto px-4">
                <h1 className="text-[60px] font-semibold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent leading-tight">
                    Projects
                </h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-[50px]">
                    <div className="relative rounded-[10px] overflow-hidden group">
                        <img
                            src="product_landing_img.jpg"
                            alt="Product Landing Page"
                            className="w-full rounded-[10px] block transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#ff004f] rounded-[10px] overflow-hidden flex flex-col items-center justify-center px-10 text-center text-[14px] transition-[height] duration-500 group-hover:h-full">
                            <h3 className="font-medium text-white mb-5">
                                Product Landing Page
                            </h3>
                            <p className="text-white">
                                The goal was to create a visually appealing and engaging page that reflects the power and innovation of the Alienware M18 R2.
                            </p>
                            <a
                                href="https://alienware-prodland.vercel.app/"
                                className="mt-5 text-[#ff004f] text-[18px] bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors duration-500"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>

                    <div className="relative rounded-[10px] overflow-hidden group">
                        <img
                            src="tribute_img.png"
                            alt="Tribute Page"
                            className="w-full rounded-[10px] block transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#ff004f] rounded-[10px] overflow-hidden flex flex-col items-center justify-center px-10 text-center text-[14px] transition-[height] duration-500 group-hover:h-full">
                            <h3 className="font-medium text-white mb-5">
                                Tribute Page
                            </h3>
                            <p className="text-white">
                                This page showcases TenZ's journey, notable achievements, and his contributions to the world of esports.
                            </p>
                            <a
                                href="https://tenz-valorant.vercel.app/"
                                className="mt-5 text-[#ff004f] text-[18px] bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors duration-500"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>


                    <div className="relative rounded-[10px] overflow-hidden group">
                        <img
                            src="technical_documentation_img.png"
                            alt="Technical Documentation Page"
                            className="w-full rounded-[10px] block transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-[#ff004f] rounded-[10px] overflow-hidden flex flex-col items-center justify-center px-10 text-center text-[14px] transition-[height] duration-500 group-hover:h-full">
                            <h3 className="font-medium text-white mb-5">
                                Technical Documentation Page
                            </h3>
                            <p className="text-white">
                                This technical documentation page was crafted to help users learn Python basics in a structured, easy-to-navigate format.
                            </p>
                            <a
                                href="https://python-techdoc.vercel.app/"
                                className="mt-5 text-[#ff004f] text-[18px] bg-white w-[60px] h-[60px] rounded-full flex items-center justify-center transition-colors duration-500"
                            >
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};