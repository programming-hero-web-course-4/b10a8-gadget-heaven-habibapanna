import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [cards, setCards] = useState([]);

    const [selectCategory, setSelectCategory] = useState("All Product");

useEffect(() => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => setCards(data))
},[]);

const filteredCards = selectCategory === "All Product" ? cards : cards.filter(card => card.category === selectCategory);

    return (
        <div className="mt-72 relative">
            <h2 className="text-center font-bold text-xl mb-8">Explore Cutting-Edge Gadgets</h2>
           <div className="flex gap-5">
           <div className="">
           <div className="card bg-white">
  <div className="card-body">
  <button onClick={() => setSelectCategory("All Product")} className={`rounded-3xl text-sm font-semibold py-2 px-5 ${selectCategory === "All Product" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"}`}>All Product</button>
  <button onClick={() => setSelectCategory("Laptops")} className={`rounded-3xl text-sm font-semibold py-2 px-5 ${selectCategory === "Laptops" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"}`}>Laptops</button>
  <button onClick={() => setSelectCategory("Phones")} className={`rounded-3xl text-sm font-semibold py-2 px-5 ${selectCategory === "Phones" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"}`}>Phones</button>
  <button onClick={() => setSelectCategory("Accessories")} className={`rounded-3xl text-sm font-semibold py-2 px-5 ${selectCategory === "Accessories" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"}`}>Accessories</button>
  <button onClick={() => setSelectCategory("Smart Watches")} className={`rounded-3xl text-sm font-semibold py-2 px-5 ${selectCategory === "Smart Watches" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"}`}>Smart Watches</button>
  <button onClick={() => setSelectCategory("Power Banks")} className={`rounded-3xl text-sm font-semibold py-2 px-5 ${selectCategory === "Power Banks" ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"}`}>Power Banks</button>
  </div>
</div>
           
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {filteredCards.length > 0 ? (
            filteredCards.map(card => <Card card={card} key={card.product_id}></Card>)) : (
                <p className="text-center text-gray-500 font-bold text-3xl col-span-full mt-36">No Products Found for The Selected Category.</p>
            )}
           </div>
           </div>
        </div>
    );
};

export default Cards;