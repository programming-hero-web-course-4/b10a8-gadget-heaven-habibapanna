import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
       <div>
         <div className="hero bg-purple-500 min-h-screen">
        <div className="text-white text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="py-6 text-sm">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!.
            </p>
            <button className="bg-white rounded-3xl text-sm text-purple-700 font-semibold py-2 px-5">Shop Now</button>
          </div>
        </div>
      </div>
      <div className='absolute top-3/4 ml-72 mt-16'>
        <div className=' pt-5 px-5 border-2 border-white rounded-xl max-w-xl mx-auto'>
        <img className='rounded-xl' src={bannerImg} alt="" />
        </div>
      </div>
       </div>
    );
};

export default Banner;