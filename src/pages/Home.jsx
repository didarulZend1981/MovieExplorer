
import { Link } from "react-router-dom";

function Home() {
  return (
   

      <>

        {/* Hero Section */}
      
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
      <div className="mt-8 flex justify-center">

        <Link
          to="/movies"
          className="inline-flex min-h-12 items-center rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:text-base"
        >
          Explore Movies

          <span className="ml-2 text-lg">
            →
          </span>
        </Link>

      </div>

    </div>

  </div>

</section>





        {/* Features Section */}
        <section className="border-y border-slate-800 bg-slate-900/50">

          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

            <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">

              {/* Feature 1 */}
              <div className="rounded-xl p-2">

                <span className="text-3xl">
                  🔎
                </span>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Quick Search
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
                  Search available shows by title
                  and quickly find relevant results.
                </p>

              </div>


              {/* Feature 2 */}
              <div className="rounded-xl p-2">

                <span className="text-3xl">
                  🎬
                </span>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Browse Shows
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
                  Explore a responsive collection
                  of available shows.
                </p>

              </div>


              {/* Feature 3 */}
              <div className="rounded-xl p-2">

                <span className="text-3xl">
                  ℹ️
                </span>

                <h2 className="mt-4 text-xl font-bold text-white">
                  Detailed View
                </h2>

                <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
                  Open a detailed view with rating,
                  genres, release date and summary.
                </p>

              </div>

            </div>

          </div>

        </section>

      </>

    
  );
}

export default Home;

