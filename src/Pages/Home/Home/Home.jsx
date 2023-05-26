import { Helmet } from "react-helmet-async";
import Banner from "../Bannner/Banner";
import Category from "../Category/Category";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Helmet>
                 <title>Bistro Boss | Home</title>
            </Helmet>
             <div className="mt-20"><Category></Category></div>
             <PopularMenu></PopularMenu>
             <FeaturesItem></FeaturesItem>
             <Testimonials></Testimonials>
        </div>
    );
};

export default Home;