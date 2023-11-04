import About from "../Component/Home/About";
import Banner from "../Component/Home/Banner";
import Services from "../Component/Home/Services/Services";


const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services></Services>
        </div>
    );
};

export default Home;