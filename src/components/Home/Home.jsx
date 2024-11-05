import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { Helmet } from "react-helmet";
const Home = () => {
    return (
        <div>

<Helmet>
                  <meta charSet="utf-8" />
                  <title>Gadget | Gadget Heaven</title>
                  <link rel="canonical" href="https://i.ibb.co.com/MfKXYWX/favicon-16x16.png" />
              </Helmet>

           <Banner></Banner> 
           <Cards></Cards>
        </div>
    );
};

export default Home;