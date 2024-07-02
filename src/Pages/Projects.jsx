
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Projects = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <h2 className="text-5xl font-extrabold text-center">-----My Projects-----</h2>
            <div className="grid lg:grid-cols-3 justify-items-center gap-3">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/684FQtK/icon-learn-bridge.png"
                            alt=""
                            className="rounded-xl w-[304px] h-[304px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LearnBridge</h2>
                        <p>JavaScript || React || Tailwind || Node.js || Mongodb</p>
                        <div className="card-actions">

                            <a href="https://learnbridge-11de6.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-white">Live</span>
                            </a>
                            <Link to='/learnbridge'>
                                <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">View details...</span>
                                </a>
                            </Link>

                        </div>
                        <Link to='https://github.com/MdShuvo18/LearnBridge'>
                            <img className="w-6 h-6 rounded-full" src="https://i.ibb.co/JRQRBNN/github-512.webp" alt="" />
                        </Link>
                    </div>

                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/XJ769Wc/stamped-preview-w7.png"
                            alt=""
                            className="rounded-xl w-[304px] h-[304px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">PulsePost</h2>
                        <p>JavaScript || React || Tailwind || Node.js || Mongodb</p>
                        <div className="card-actions">

                            <a href="https://pulsepost-e00be.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-white">Live</span>
                            </a>
                            <Link to='/pulsepost'>
                                <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">View details...</span>
                                </a>
                            </Link>
                        </div>
                        <Link to='https://github.com/MdShuvo18/PulsePost'>
                            <img className="w-6 h-6 rounded-full" src="https://i.ibb.co/JRQRBNN/github-512.webp" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://i.ibb.co/pvkYNr0/images-1.png"
                            alt=""
                            className="rounded-xl w-[304px] h-[304px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ArtyPot</h2>
                        <p>JavaScript || React || Tailwind || Node.js || Mongodb</p>
                        <div className="card-actions">
                            <a href="https://art-and-craft-store-c1aff.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                <span className="relative group-hover:text-white">Live</span>
                            </a>
                            <Link to='/artypot'>
                                <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">See More...</span>
                                </a>
                            </Link>
                        </div>
                        <Link to='https://github.com/MdShuvo18/ArtyPot'>
                            <img className="w-6 h-6 rounded-full" src="https://i.ibb.co/JRQRBNN/github-512.webp" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;