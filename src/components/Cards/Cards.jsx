import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

useEffect(() => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[])

    return (
        <div className="mt-12 static">
            <h2 className="text-center font-bold text-xl mb-8">Explore Cutting-Edge Gadgets</h2>
           <div className="flex gap-5">
           <div className="">
           <div className="card bg-white">
  <div className="card-body">
  <button className="bg-purple-500 rounded-3xl text-sm text-white  font-semibold py-2 px-5">All Product</button>
  <button className="bg-gray-100 rounded-3xl text-sm text-gray-500 font-semibold py-2 px-5">Laptops</button>
  <button className="bg-gray-100 rounded-3xl text-sm text-gray-500 font-semibold py-2 px-5">Phones</button>
  <button className="bg-gray-100 rounded-3xl text-sm text-gray-500 font-semibold py-2 px-5">Accessories</button>
  <button className="bg-gray-100 rounded-3xl text-sm text-gray-500 font-semibold py-2 px-5">Smart Watches</button>
  <button className="bg-gray-100 rounded-3xl text-sm text-gray-500 font-semibold py-2 px-5">Chargers</button>
  <button className="bg-gray-100 rounded-3xl text-sm text-gray-500 font-semibold py-2 px-5">Power Banks</button>
  </div>
</div>
           
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                cards.map(card => <Card card={card} key={card.product_id}></Card>)
            }
           </div>
           </div>
        </div>
    );
};

export default Cards;