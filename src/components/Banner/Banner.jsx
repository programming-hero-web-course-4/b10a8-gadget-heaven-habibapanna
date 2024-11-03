import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
       <div>
         
      <div className=''>
        <div className='md:absolute md:ml-32 md:top-80 md:mt-5 lg:ml-72 border-2 md:pt-3 px-3 bg-transparent border-white rounded-2xl max-w-xl mx-auto'>
        <img className=' rounded-2xl' src={bannerImg} alt="" />
        </div>
      </div>
       </div>
    );
};

export default Banner;