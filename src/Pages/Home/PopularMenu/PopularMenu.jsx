import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitile/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(items => items.category === "popular")
                setMenu(filterData)
            })
    }, [])
    return (
        <section>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid py-4 mb-8 md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;