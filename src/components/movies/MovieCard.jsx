

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

      <div className="p-5">

        <h2
          className="truncate text-lg font-bold"
          title={show.name}
        >
          {show.name}-title
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
  className="..."
>
  Details
</button>

      </div>

    </article>
  );
}

export default MovieCard;
