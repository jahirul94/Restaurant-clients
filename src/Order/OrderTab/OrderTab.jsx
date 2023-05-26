import MenuCard from "../../components/MenuCard/MenuCard";

const OrderTab = ({ items }) => {
    return (
        <div className="lg:grid grid-cols-3 gap-4">
            {
                items.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
            }
        </div>
    );
};

export default OrderTab;