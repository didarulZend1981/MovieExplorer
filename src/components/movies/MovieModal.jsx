
function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-slate-900 p-6 shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-2xl text-white hover:bg-slate-700"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Image */}
        {show.image?.original ? (
          <img
            src={show.image.original}
            alt={show.name}
            className="mb-6 h-80 w-full rounded-xl object-cover"
          />
        ) : (
          <div className="mb-6 flex h-80 w-full items-center justify-center rounded-xl bg-slate-800 text-slate-400">
            No Image Available
          </div>
        )}

        {/* Title */}
        <h2 className="pr-12 text-3xl font-bold text-white">
          {show.name}
        </h2>

        {/* Rating */}
        {show.rating?.average && (
          <p className="mt-3 text-yellow-400">
            ⭐ Rating: {show.rating.average}
          </p>
        )}

        {/* Genres */}
        {show.genres?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {show.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
              >
                {genre}
              </span>
            ))}
          </div>
        )}

        {/* Language */}
        {show.language && (
          <p className="mt-4 text-slate-300">
            <span className="font-semibold">
              Language:
            </span>{" "}
            {show.language}
          </p>
        )}

        {/* Premiered */}
        {show.premiered && (
          <p className="mt-2 text-slate-300">
            <span className="font-semibold">
              Premiered:
            </span>{" "}
            {show.premiered}
          </p>
        )}

        {/* Summary */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white">
            Summary
          </h3>

          <div
            className="mt-3 leading-7 text-slate-400"
            dangerouslySetInnerHTML={{
              __html:
                show.summary || "No summary available.",
            }}
          />
        </div>

      </div>
    </div>
  );
}

export default MovieModal;

