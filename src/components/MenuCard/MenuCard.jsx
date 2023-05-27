

const MenuCard = ({item}) => {
    const {name , price , image , recipe } = item ;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className=" absolute px-3 py-2 rounded-lg right-6 top-6 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline bg-slate-200 text-orange-500 border-0 border-b-2 my-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;