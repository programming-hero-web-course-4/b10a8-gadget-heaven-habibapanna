import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";


const Popular = () => {

    const [carts, setCarts] = useState([]);
     
    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])


    return (
        <div>
<div className="bg-purple-500 ">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-white">Most Popular Collections</h1>
      <p className="py-6 text-gray-200 text-sm">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  </div>
</div>
<div>
<h2 className="text-center text-3xl font-bold mt-10 text-purple-600">The Most Popular Collections</h2>
</div>
<div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {
     carts.map(cart => <Cart cart={cart} key={cart.product_id}></Cart>)   
    }
</div>

        </div>
    );
};

export default Popular;

