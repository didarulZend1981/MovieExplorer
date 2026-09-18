
import { useEffect, useState } from "react";
import Loading from "../components/common/Loading";
import EmptyState from "../components/common/EmptyState";

import SearchBox from "../components/movies/SearchBox";

import MovieGrid from "../components/movies/MovieGrid";
import MovieModal from "../components/movies/MovieModal";

import {
  fetchShows,
  findShows,
} from "../services/movieApi";

function Movies() {
   const [shows, setShows] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] =useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  



  useEffect(() => {

    async function loadShows() {

      try {

        setLoading(true);

        const data =
          await fetchShows();

        setShows(data);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }
    }

    loadShows();

  }, []);



  async function handleSearch(value) {

    setSearch(value);

    const query =
      value.trim();

    if (!query) {

      try {

        setLoading(true);
        setError("");

        const data =
          await fetchShows();

        setShows(data);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }

      return;
    }


    try {

      setLoading(true);
      setError("");

      const results =
        await findShows(query);

      const matchedShows =
        results.map(
          (item) => item.show
        );

      setShows(matchedShows);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }
  }


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


          
          <SearchBox
          value={search}
          onChange={handleSearch}
        />

        </header>


        <section className="mt-10">


              {loading && <Loading />}


          {!loading && error && (
            <EmptyState
              title="Unable to load shows"
              message={error}
            />
          )}


          {!loading &&
            !error &&
            shows.length === 0 && (
              <EmptyState
                title="No results found"
                message="Try searching with another title."
              />
            )}


          {!loading &&
            !error &&
            shows.length > 0 && (

              <MovieGrid
                shows={shows}
                // onDetails={() => {}}
                onDetails={(shows) => setSelectedMovie(shows)}
              />

            )}

        </section>


      

      </main>

    
             {/* Movie Modal */} 
             {selectedMovie && 
             ( 
             <MovieModal 
                show={selectedMovie} 
                onClose={() => { setSelectedMovie(null); }} 
                
                />
             
             )}
   

    </div>
  );
}

export default Movies;

