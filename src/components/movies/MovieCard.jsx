

//, onDetails
function MovieCard({ show,onDetails }) {
 
  console.log(show,'diteils')
  // console.log(show.summary,'summary');
  const poster =
    show.image?.medium ||
    "https://placehold.co/300x450?text=No+Poster";

  const rating =
    show.rating?.average ?? "N/A";

  const releaseYear =
    show.premiered?.slice(0, 4) ||
    "Unknown";

  const genre =
    show.genres?.[0] ||
    "Uncategorized";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-slate-700">

      <div className="relative overflow-hidden">

        <img
          src={poster}
          alt={show.name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm backdrop-blur">
          ⭐ {rating}
        </span>

      </div>

      <div className="p-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">

        <h2
          className="ml-[10px] truncate text-lg font-bold"
          title={show.name}
        >
          {show.name}
        </h2>

        <div className="mt-2 flex justify-between text-sm text-slate-400">

          <span>
            {releaseYear}
          </span>

          <span>
            {genre}
          </span>

        </div>

        <button
        type="button"
        onClick={() => onDetails(show)}
        className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Details
      </button>

      </div>

    </article>
  );
}

export default MovieCard;
