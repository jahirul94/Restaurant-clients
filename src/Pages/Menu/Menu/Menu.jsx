import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuCover from "../../../assets/menu/banner3.jpg"
import dessertsBg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(items => items.category === "dessert")
    const pizza = menu.filter(items => items.category === "pizza")
    const salad = menu.filter(items => items.category === "salad")
    const soup = menu.filter(items => items.category === "soup")
    const offered = menu.filter(items => items.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuCover} title={"OUR MENU"}></Cover>
            <div>
                <SectionTitle heading="TODAY'S OFFER" subHeading="Don't miss"></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            <div className="my-14">
                 <MenuCategory
                   items={dessert}
                   title="dessert"
                   coverImg={dessertsBg}
                 ></MenuCategory>
            </div>
            <div className="my-14">
                 <MenuCategory
                   items={pizza}
                   title="pizza"
                   coverImg={pizzaBg}
                 ></MenuCategory>
            </div>
            <div className="my-14">
                 <MenuCategory
                   items={salad}
                   title="salad"
                   coverImg={saladBg}
                 ></MenuCategory>
            </div>
            <div className="my-14">
                 <MenuCategory
                   items={soup}
                   title="soup"
                   coverImg={soupBg}
                 ></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;