import Banner from "../Bannner/Banner";
import Category from "../Category/Category";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <div className="mt-20"><Category></Category></div>
             <PopularMenu></PopularMenu>
             <FeaturesItem></FeaturesItem>
        </div>
    );
};

export default Home;