import { Helmet } from "react-helmet";

const Statistics = () => {
    return (
        <div className="mb-24">

<Helmet>
                  <meta charSet="utf-8" />
                  <title>Statistics | Gadget Heaven</title>
                  <link rel="canonical" href="https://i.ibb.co.com/MfKXYWX/favicon-16x16.png" />
              </Helmet>

             <div className="bg-purple-500 ">
  <div className="hero-content text-center">
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold text-white">Statistics</h1>
      <p className="py-6 text-gray-200 text-sm">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  </div>
</div>
<div className="text-center mt-12">
    <h1 className="text-purple-600 font-bold text-5xl">No Data To Show Statistics</h1>
</div>

        </div>
    );
};

export default Statistics;