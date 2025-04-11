import { useState } from 'react';
import {RevealOnScroll} from '../RevealOnScroll';

export const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <section id="about" className="py-20 text-[#ababab]">
            <RevealOnScroll>
            <div className="container mx-auto px-4">
                <div className="flex items-start space-x-8">
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-[60px] font-semibold mb-8 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent leading-tight" >
                            About Me
                        </h1>
                        <p className="text-[#ababab] mb-8">
                            I'm a college student passionate about web development and design. As an aspiring developer, I enjoy creating interactive, engaging websites that combine creativity with functionality. Through my projects, I've honed my skills in HTML, CSS, and JavaScript, and I'm excited to dive deeper into frameworks and responsive design.
                        </p>

                        <div className="flex mb-5 mt-5">
                            <p
                                className={`mr-[50px] text-[18px] font-medium cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#ff004f] after:left-0 after:bottom-[-8px] after:transition-all after:duration-500 ${activeTab === 'skills' ? 'after:w-[50%]' : ''}`}
                                onClick={() => openTab('skills')}
                            >
                                Skills
                            </p>
                            <p
                                className={`mr-[50px] text-[18px] font-medium cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#ff004f] after:left-0 after:bottom-[-8px] after:transition-all after:duration-500 ${activeTab === 'experience' ? 'after:w-[50%]' : ''}`}
                                onClick={() => openTab('experience')}
                            >
                                Experience
                            </p>
                            <p
                                className={`mr-[50px] text-[18px] font-medium cursor-pointer relative after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-[#ff004f] after:left-0 after:bottom-[-8px] after:transition-all after:duration-500 ${activeTab === 'education' ? 'after:w-[50%]' : ''}`}
                                onClick={() => openTab('education')}
                            >
                                Education
                            </p>
                        </div>
                        <div className="h-[200px] overflow-hidden">
                            <div className={`${activeTab === 'skills' ? 'block' : 'hidden'}`}>
                                <ul className="list-none">
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">UI/UX</span>
                                        <br />
                                        Designing Web/App Interfaces
                                    </li>
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">Web Development</span>
                                        <br />
                                        TailwindCSS & ReactJS
                                    </li>
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">Programming Languages</span>
                                        <br />
                                        Java, Python, & Kotlin
                                    </li>
                                </ul>
                            </div>

                            <div className={`${activeTab === 'experience' ? 'block' : 'hidden'}`}>
                                <ul className="list-none">
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">2021 - 2022</span>
                                        <br />
                                        Beehive Notetaker About Programming
                                    </li>
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">2022 - 2023</span>
                                        <br />
                                        Video Editor
                                    </li>
                                </ul>
                            </div>

                            <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
                                <ul className="list-none">
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">2026</span>
                                        <br />
                                        BS Information Technology
                                    </li>
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">2018</span>
                                        <br />
                                        Senior High Graduate at SLU-LHS
                                    </li>
                                    <li className="mb-[10px]">
                                        <span className="text-[#b54769] text-[14px]">2016</span>
                                        <br />
                                        Junior High Graduate at SLU-LHS
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="flex-shrink-0 w-[150px] md:w-[400px]">
                        <img
                            src="user.png"
                            alt="Sherwyne"
                            className="w-full rounded-[15px]"
                        />
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};