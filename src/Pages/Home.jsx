import Banner from "../Components/Banner";
import Books from "../Components/Books";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="mt-20">
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;