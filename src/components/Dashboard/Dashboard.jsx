import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAddList } from "../../utility/addToDb";
import Card from "../Card/Card";
import ListedCards from "../ListedCards/ListedCards";
import CardList from "../CardList/CardList";
import WishList from "../WishList/WishList";


const Dashboard = () => {
    const [activeTab, setActiveTab] = useState([]);
    const [addList, setAddList] = useState([]);
const allCards = useLoaderData();
useEffect(() =>{
    const storedAddList = getStoredAddList();
const storedAddListInt = storedAddList.map(id => parseInt(id));
    console.log(storedAddList, allCards);

    const handleCardList = (id) => {

    }

    const addCardList = allCards.filter(card => storedAddListInt.includes(card.product_id));

    setAddList(addCardList);

} ,[])

    return (
        <div>
            <div className="bg-purple-500 ">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      <p className="py-6 text-gray-200 text-sm">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      {/* <div role="tablist" className="tabs tabs-boxed">
  <a role="tab" className="tab">Card</a>
  <a role="tab" className="tab tab-active">Wish List</a>
  
</div> */}
      <button onClick={() => setActiveTab("card")} className={`${activeTab === "card" ? "active" : ""}`}>Card</button>
      <button onClick={() => setActiveTab("wishlist")} className={`tab-button ${activeTab === "wishlist" ? "active" : ""}`}>Wish List</button>
    </div>
  </div>
</div>
            <h2 className="text-2xl font-bold mt-10">Card: {addList.length}</h2>
            <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
                {
                    addList.map(card => <ListedCards card={card} key={card.product_id}></ListedCards>)
                }
            </div>
            
            {activeTab === "card" ? <CardList></CardList> : <WishList></WishList>}
        
            
        </div>
    );
};

export default Dashboard;