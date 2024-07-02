import Footer from "./Footer";
import Navbar from "./Navbar";

const Education = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 justify-items-center">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="grid grid-cols-1 justify-items-center">
                        <img className="w-24 h-24 rounded-full" src="https://i.ibb.co/Kcgj48f/shuvo.jpg" alt="" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">BSc in Computer Science & Engineering</h2>
                        <p>Eastern University</p>
                        <p>Dhaka, Bangladesh</p>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Education;