import { Link } from "react-router-dom";


const WelcomeBanner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://i.ibb.co/Kcgj48f/shuvo.jpg"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-semibold">Hi, this is!!! <br />
                            <span className="text-5xl font-bold">Kamruzzaman Shuvo</span>
                        </h1>
                        <p className="py-6">
                            I am a Web Developer from Bangladesh.
                        </p>
                  
                        <Link to='/aboutme'>
                            <a href="#_" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Get Start</span>
                                <span className="relative invisible">Get Start</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeBanner;