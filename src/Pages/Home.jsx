
import Footer from "./Footer";
import HomeBannerSection from "./HomeBannerSection";
import Navbar from "./Navbar";
import Skill from "./Skill";


const Home = () => {

    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <HomeBannerSection></HomeBannerSection>
            <Skill></Skill>
            <Footer></Footer>
        </div>
    );
};

export default Home;