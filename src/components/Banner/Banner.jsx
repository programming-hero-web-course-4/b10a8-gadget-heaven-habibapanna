import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
      <div className=''>
        <div className="bg-purple-500 rounded-b-xl">
      <div className="pt-10">
         <div className="text-white text-center">
           <div className="max-w-3xl mx-auto">
             <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
             <p className="py-6 text-sm">
             Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!.
             </p>
             <button className="bg-white rounded-3xl text-sm text-purple-700 font-semibold py-2 px-5">Shop Now</button>
           </div>
         </div>
       </div>
        <div className='bg-stone-100'>
        <div className='bg-purple-400 max-w-xl mx-auto rounded-2xl'>
        <div className='relative border-2 mt-10 pt-3 px-3  backdrop-blur-lg border-white rounded-2xl max-w-xl mx-auto'>
        <img className=' rounded-2xl' src={bannerImg} alt="" />
        </div>
      </div>
        </div>
      </div>
       <div className=''>
      
       </div>
      </div>
    );
};

export default Banner;