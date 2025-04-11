import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com'



export const Contact = () => {

        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: "", 
        });
        

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!");
            setFormData({name: "", email: "", message: ""});
        }).catch(() => alert("Oops! Something went wrong. Please try again.")); 
    };

    return (
        <section id="contact" className="py-20">
            <RevealOnScroll>
            <div className="container mx-auto px-4">
                <div className="flex items-start justify-between space-x-8">
                    <div className="flex flex-col">
                        <h1 className="text-[60px] font-semibold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent leading-tight mb-8">
                            Contact Me
                        </h1>
                        <div className="flex flex-col">
                            <p className="mt-[10px] flex items-center">
                                <i className="fa-solid fa-paper-plane text-[#ff004f] mr-[15px] text-[25px]"></i>
                                sherwynet15@gmail.com
                            </p>
                            <p className="mt-[30px] flex items-center">
                                <i className="fa-solid fa-square-phone text-[#ff004f] mr-[15px] text-[25px]"></i>
                                09507977902
                            </p>
                            <div className="mt-[30px] flex space-x-4">
                                <a
                                    href="https://www.facebook.com/Wyne.15"
                                    className="text-[30px] text-[#ababab] inline-block transition-transform duration-500 hover:text-[#ff004f] hover:-translate-y-[5px]"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a
                                    href="https://x.com/"
                                    className="text-[30px] text-[#ababab] inline-block transition-transform duration-500 hover:text-[#ff004f] hover:-translate-y-[5px]"
                                >
                                    <i className="fa-brands fa-twitter-square"></i>
                                </a>
                                <a
                                    href="https://www.instagram.com/wyyynnne/"
                                    className="text-[30px] text-[#ababab] inline-block transition-transform duration-500 hover:text-[#ff004f] hover:-translate-y-[5px]"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="https://github.com/akito-coder"
                                    className="text-[30px] text-[#ababab] inline-block transition-transform duration-500 hover:text-[#ff004f] hover:-translate-y-[5px]"
                                >
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </div>
                            <a
                                href="Resume-SherwyneTangalin...docx"
                                className="mt-[30px] inline-block bg-[#ff004f] text-white px-[20px] py-[8px] rounded-[6px] font-medium text-[14px] transition-colors duration-500 hover:bg-[#ff004f]/80 w-fit text-center"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <form className="w-[40%] flex flex-col" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full border-0 outline-none bg-[#262626] p-[15px] mb-[15px] text-white text-[18px] rounded-[6px]"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full border-0 outline-none bg-[#262626] p-[15px] mb-[15px] text-white text-[18px] rounded-[6px]"
                        />
                        <textarea
                            name="message"
                            id="message"
                            rows="6"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full border-0 outline-none bg-[#262626] p-[15px] mb-[15px] text-white text-[18px] rounded-[6px]"
                        />
                        <button
                            type="submit"
                            className="bg-[#ff004f] text-white px-[120px] py-[15px] text-[18px] mt-[20px] rounded-[6px] font-medium cursor-pointer transition-colors duration-500 hover:bg-[#ff004f]/80 self-center"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};