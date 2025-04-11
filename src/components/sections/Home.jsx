import {RevealOnScroll} from '../RevealOnScroll';

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
            <div className="text-center z-10 px-4 translate-x-8 md:translate-x-12 lg:translate-x-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent leading-tight">
                    Hi, I'm Sherwyne
                </h1>

                <p className="text-[#ababab] text-lg mb-8 max-w-lg mx-auto">
                    I'm a front-end developer who loves creating clean, scalable web applications.
                    My goal is to build solutions that offer both exceptional performance and
                    a delightful user experience.
                </p>

                <div className="flex justify-center space-x-4">
                    <a 
                        href="#projects" 
                        className="bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,50,50,0.4)]"
                    >
                        View Projects
                    </a>

                    <a 
                        href="#contact" 
                        className="border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,50,50,0.4)] hover:bg-red-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
            
            <img 
                src="Sherwyne Pic.png" 
                alt="Sherwyne's Pic"
                className="absolute left-0 bottom-0 w-64 md:w-96 lg:w-[500px] h-[90%] object-cover shadow-lg z-20"
            />
        </section>
    );
};