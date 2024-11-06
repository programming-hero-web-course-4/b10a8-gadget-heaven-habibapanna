import './CardList.css'

const CardList = ({ card, handleRemove }) => {
    const{ product_image, product_title, price, product_id,description } = card;
    return (
        <div className=''>
            <div className="flex bg-white rounded-xl shadow-xl">
            <div className="card card-side bg-white">
  <figure className="w-2/5 p-5">
    <img
    className=' rounded-lg'
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
<i onClick={() => handleRemove(product_id)} class="fa-solid fa-xmark text-red-500 text-xl py-16 mr-10"></i>
</div>

            </div>
        </div>
    );
};

export default CardList;