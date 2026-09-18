
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiTv } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import FeatureCard from "../components/home/FeatureCard";

function Home() {
  return (
   

      <>

       
      
{/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-red-950">

  <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4 py-16 text-center sm:min-h-[75vh] sm:px-6 sm:py-20 lg:min-h-[78vh] lg:px-8">

    <div className="w-full max-w-3xl">

      {/* Badge */}
      <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-400 sm:text-sm">
        Discover something new
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">

        Find your next

        <span className="block text-red-500">
          favorite show.
        </span>

      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 md:text-xl">
        Explore shows, search for specific titles,
        and discover useful information about
        the shows you want to watch.
      </p>

      {/* Button */}
      <div className="m-8 flex justify-center">

        <Link
          to="/movies"
          className="inline-flex min-h-12 items-center rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:text-base"
        >
          Explore Movies

          <FiArrowRight className="ml-2 text-lg"/>
            
          
        </Link>

      </div>

    </div>

  </div>

</section>





        {/* Features Section */}
        <section className="border-y border-slate-800 bg-slate-900/50 ">

        

            <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:gap-12 h-[200px] px-2 py-[25px]">




                <FeatureCard
                icon={<FiSearch className="text-3xl" />}
                title="Quick Search"
                description="Search available shows by title and quickly find relevant results."
                />

                <FeatureCard
                icon={<FiTv className="text-3xl" />}
                title="Browse Shows"
                description="Explore available shows and discover something new to watch."
                />

                <FeatureCard
                icon={<FiInfo className="text-3xl" />}
                title="View Details"
                description="View useful information about each show before watching."
                />


            </div>

          

        </section>

      </>

    
  );
}

export default Home;

