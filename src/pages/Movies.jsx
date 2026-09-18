
import { useEffect, useState } from "react";
import MovieGrid from "../components/movies/MovieGrid";

import {
  fetchShows,
  findShows,
} from "../services/movieApi";

function Movies() {
  const [shows, setShows] = useState([]);

  useEffect(() => {

    async function loadShows() {

      const data =
          await fetchShows();

        setShows(data);
    }

    loadShows();

  }, []);


  return (
    <div className="min-h-screen bg-slate-950">

     

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <header className="mb-10 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            Movie Library
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl mb-10">
            Explore Shows
          </h1>

          <p className=" mt-4 text-sm tracking-widest text-slate-400 py-6">
            Browse the collection or search for
            a specific title.
          </p>


          
       

        </header>


        <section className="mt-10">


          {
            shows.length > 0 && (

              <MovieGrid
                shows={shows}
                onDetails={() => {}}
                // onDetails={(shows) => setSelectedMovie(shows)}
              />

            )}
        </section>


      

      </main>

    

   

    </div>
  );
}

export default Movies;

