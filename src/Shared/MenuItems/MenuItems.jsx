
const MenuItems = ({ item }) => {
    const { name , image , price , recipe } = item ;

    return (
        <div className="flex space-x-6"> 
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
             <div>
                 <h2 className="uppercase">{name}</h2>
                 <p><small>{recipe}</small></p>
             </div>
             <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;