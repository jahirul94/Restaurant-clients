import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const filterData = menu.filter(items => items.category === "popular")

    return (
        <section>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid py-4 mb-8 md:grid-cols-2 gap-10">
                {
                    filterData.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;