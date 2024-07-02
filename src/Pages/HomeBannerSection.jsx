
const HomeBannerSection = () => {
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content justify-between flex-col lg:flex-row">
                    <img
                        src="https://i.ibb.co/zXfzzk8/shuvo.jpg"
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Me!</h1>
                        <p className="py-6">
                            I am a skilled web developer specializing in front-end development with a passion for creating dynamic, responsive web applications. Proficient in <span className="text-lg font-bold">HTML</span>, <span className="text-lg font-bold">CSS</span>, <span className="text-lg font-bold">JavaScript</span>, and modern frameworks like <span className="text-lg font-bold">Tailwind</span> and <span className="text-lg font-bold">React</span>, I build intuitive user interfaces. My expertise extends to backend development with <span className="text-lg font-bold">MongoDB</span> and <span className="text-lg font-bold">Node.js</span>, enabling me to deliver seamless full-stack solutions. Committed to excellence and continuous learning, I stay updated with the latest industry trends to ensure my projects are cutting-edge and future-proof.
                        </p>
                     
                            <a href="/Resume.pdf" download className="relative px-6 py-3 font-bold text-black group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                                <span className="relative">Download Resume</span>
                            </a>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBannerSection;