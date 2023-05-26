import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, coverImg, title }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid py-4 mb-8 pt-8 md:grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
              {title && <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-2 my-4">Order now </button></Link>}
        </div>
    );
};

export default MenuCategory;