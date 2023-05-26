import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Shared/Cover/Cover";
import orderBg from "../../assets/shop/banner2.jpg"
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const [menu] = useMenu();
    const categories = ["salad" , "pizza" , "soup" , "dessert" , "drinks"]
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex , setTabIndex] = useState(initialIndex)
    const dessert = menu.filter(items => items.category === "dessert")
    const pizza = menu.filter(items => items.category === "pizza")
    const salad = menu.filter(items => items.category === "salad")
    const soup = menu.filter(items => items.category === "soup")
    const drinks = menu.filter(items => items.category === "drinks")

    return (
        <div>
            <Helmet>
                 <title>Bistro Boss | Order Food </title>
            </Helmet>
            <Cover img={orderBg} title="Order Foods"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;