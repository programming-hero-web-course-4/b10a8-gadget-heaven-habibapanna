import CardList from "../CardList/CardList";
import WishList from "../WishList/WishList";


const ListedCards = ({ card }) => {
    const{ product_image, product_title, price, product_id,description } = card;
    return (
        <div>
            <div className="flex bg-white rounded-xl shadow-xl">
            <div className="card card-side bg-white">
  <figure className="w-2/5 ">
    <img
      src={product_image}
      alt={product_id} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p className="text-gray-500 text-sm">Description: {description}</p>
        <p className="text-gray-500 text-sm">Price: $ {price}</p>
  </div>
</div>

<div>
<button><i class="fa-solid fa-xmark text-red-500 text-xl"></i></button>
</div>
            </div>
            
        </div>
    );
};

export default ListedCards;


