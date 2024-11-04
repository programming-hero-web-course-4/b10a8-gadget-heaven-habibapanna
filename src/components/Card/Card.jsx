import { NavLink } from "react-router-dom";


const Card = ({ card }) => {

const{ product_image, product_title, price, category, rating, color,product_id } = card;
     
    return (
        <div>
            <div className="card bg-white h-[380px]">
  <figure className="mt-5 px-5 rounded-xl">
    <img className="rounded-xl w-full h-full"
      src={product_image}
      alt={product_title} />
  </figure>
  <div className="card-body">
    <h2 className="font-bold">{product_title}</h2>
    <div className="text-sm">
    <p className="text-gray-500">Category: {category}</p>
    <p className="text-gray-500">Price: $ {price}</p>
    <p className="text-gray-500 ">Rating: {rating}</p>
    <p className="text-gray-500">Color: {color}</p>
    </div>
    <div className="card-actions">
    <button className="border border-purple-700 rounded-3xl text-sm text-purple-700  font-semibold py-2 px-5"><NavLink to={`/cards/${product_id}`}>View Details</NavLink></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;