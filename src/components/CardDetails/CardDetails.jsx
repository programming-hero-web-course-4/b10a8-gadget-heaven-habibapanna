import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredAddList, addToStoredAddWishList } from "../../utility/addToDb";


const CardDetails = () => {

const {product_id} = useParams();
const data = useLoaderData();
const id = parseInt(product_id);
const card = data.find(card => card.product_id === id)
 const { product_id: currentProductId, product_image, product_title,price,description, specification, rating, availability, category } = card;



 const handleAddToCard = (id) => {



    addToStoredAddList(id);
 }
 const handleAddToWishCard = (id) => {



    addToStoredAddWishList(id)
 }


    return (
        <div className="relative mb-96">
            <div>
            <div className="bg-purple-500 relative pb-36">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-white">Product Details</h1>
      <p className="py-6 text-gray-200 text-sm">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  </div>
</div>
            </div>
            <div className="bg-white max-w-4xl mx-auto rounded-xl absolute top-36 md:ml-32">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product_image}
      className="max-w-sm h-[300px]  rounded-lg " />
    <div>
      <h1 className="text-2xl font-bold">{product_title}</h1>
      <h3 className="mt-3 text-sm font-bold">Category: {category}</h3>
      <p className="mt-2 text-sm font-semibold">Price: $ {price} </p>
        <button className="mt-2 mb-2 text-sm px-3 py-1 rounded-3xl border-2 border-green-600 text-green-600">{availability}</button>
      
      <p className="text-sm text-gray-500">{description}</p>
      <p className=" mt-2 font-bold">Specification:</p>
      <p className="text-sm text-gray-500 ">{specification}</p>
      <p className="mt-2 font-bold">Rating <i className="fa-solid fa-square"></i>
      <p>
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
  <p className="ml-2  text-gray-500">{rating}</p>
</div> 
      </p>
       </p>
      <button onClick={() => handleAddToCard(product_id)} className="bg-purple-500 mt-2 text-white font-semibold px-5 py-2 rounded-3xl">Add To Card<i className=" text-white ml-2 fa-solid fa-cart-shopping"></i></button>
      <button onClick={() => handleAddToWishCard(product_id)}><i className="p-2 border-2 ml-2 text-gray-500 rounded-full bg-white fa-regular fa-heart"></i></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;