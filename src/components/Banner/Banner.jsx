import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
      <div className=''>
        <div className="bg-purple-500 rounded-b-xl">
      <div className="pt-10 pb-48">
         <div className="text-white text-center">
           <div className="max-w-3xl mx-auto">
             <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
             <p className="py-6 text-sm">
             Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!.
             </p>
             <button className="bg-white rounded-3xl text-sm text-purple-700 font-semibold py-3 px-8">Shop Now</button>
           </div>
         </div>
       </div>
      </div>
       <div className=''>
       <div className='absolute border-2 mt-10 pt-3 px-3 backdrop-blur-3xl border-white rounded-2xl max-w-xl mx-auto top-80 ml-12 md:top-80 md:ml-28 lg:ml-72'>
        <img className=' rounded-2xl' src={bannerImg} alt="" />
        </div>
       </div>
      </div>
    );
};

export default Banner;