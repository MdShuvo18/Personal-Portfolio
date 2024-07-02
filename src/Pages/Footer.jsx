import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to='/aboutme'><a className="link link-hover">About</a></Link>
                    <Link to='/contact'> <a className="link link-hover">Contact</a></Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.linkedin.com/in/kamruzzaman-shuvo/'>
                            <a>
                                <FaLinkedin></FaLinkedin>
                            </a>
                        </Link>
                        <Link to='https://github.com/MdShuvo18'>
                            <a>
                                <FaGithub></FaGithub>
                            </a>
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Kamruzzaman Shuvo</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;