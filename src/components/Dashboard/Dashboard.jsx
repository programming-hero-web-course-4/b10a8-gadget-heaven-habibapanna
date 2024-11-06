import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addToStoredAddWishList, getStoredAddList, getStoredAddWishList } from "../../utility/addToDb";
import CardList from "../CardList/CardList";
import WishList from "../WishList/WishList";
import Modal from "../Modal/Modal";
import {Helmet} from "react-helmet";


const Dashboard = () => {
    
    // purchase
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    // sort
    const [sort, setSort] = useState('');
    const [activeTab, setActiveTab] = useState("card");
    // card list
    const [addList, setAddList] = useState([]);
    // wish list
    const [wishList, setWishList] = useState([]);
    const allCards = useLoaderData();
    useEffect(() => {
        const storedAddList = getStoredAddList() || [];
        const storedWishList = getStoredAddWishList() || [];

        const storedAddListInt = storedAddList.map(id => parseInt(id));

        const storedWishListInt = storedWishList.map(id => parseInt(id));
        // console.log(storedAddList, allCards);

        const addCardList = allCards.filter(card => storedAddListInt.includes(card.product_id));

        const addWishList = allCards.filter(card => storedWishListInt.includes(card.product_id));

        setAddList(addCardList);
        setWishList(addWishList);

    }, [allCards]);

    const handleSort = sortType => {
        setSort(sortType)
            const sortedCardList = [...addList].sort((a, b) => b.price - a.price);
        setAddList(sortedCardList);
        };
    
    
   
    const calculateTotalPrice = () => {
        return addList.reduce((total, item) => total + item.price, 0);
    
    };

    const handlePurchase = () => {
        setIsModalOpen(true);
        setAddList([]);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/");
    };






    return (
        <div>

<Helmet>
                  <meta charSet="utf-8" />
                  <title>Dashboard | Gadget Heaven</title>
                  <link rel="canonical" href="https://i.ibb.co.com/MfKXYWX/favicon-16x16.png" />
              </Helmet>

            <div className="bg-purple-500 ">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                        <p className="py-6 text-gray-200 text-sm">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button onClick={() => setActiveTab("card")} className={`${activeTab === "card" ? "active" : "rounded-3xl border px-5 py-2 text-white"}`}>Card</button>
                        <button onClick={() => setActiveTab("wishlist")} className={`${activeTab === "wishlist" ? "active" : "rounded-3xl border px-5 py-2 text-white"}`}>Wish List</button>
                    </div>
                </div>
            </div>


            {activeTab === "card" ? (
                <>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mt-10">Card</h2>
                        </div>
                        <div className="py-10">
                            <button className="text-black font-bold mr-2">Total cost: ${calculateTotalPrice().toFixed(2)}</button>
                            <button onClick={()=>handleSort('sort by price')} className="rounded-3xl mr-2 border border-purple-600 bg-white text-purple-600 px-5 py-3">Sort by Price<i class="fa-solid fa-sort ml-2"></i></button>
                            <button onClick={handlePurchase}
                            disabled={addList.length === 0 || calculateTotalPrice() === 0 } className="rounded-3xl border bg-purple-600 text-white px-5 py-3 disabled:opacity-50">Purchase</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
                        {
                            addList.map(card => (<CardList  key={card.product_id} card={card}></CardList>))
                        }
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mt-10">Whish List</h2>
                    <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto">
                        {
                            wishList.map(card => (<WishList key={card.product_id} card={card}></WishList>))
                        }
                    </div>
                </>
            )}

            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>

        </div>
    );
};

export default Dashboard;