function MovieModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 backdrop-blur-sm sm:px-4">

      <div className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-900/90 text-2xl font-light text-slate-300 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400 sm:right-5 sm:top-5"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Image */}
        {show.image?.original ? (
          <div className="relative w-full">
            <img
              src={show.image.original}
              alt={show.name}
              className="w-full max-h-[70vh] rounded-t-2xl object-contain"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="flex h-64 w-full items-center justify-center bg-slate-800 text-slate-400 sm:h-80 md:h-96">
            No Image Available
          </div>
        )}

        {/* Content */}
        <div className="px-5 pb-7 pt-5 sm:px-7 md:px-8">

          {/* Title */}
          <h2
            className="pr-12 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
            title={show.name}
          >
            {show.name}
          </h2>

          {/* Rating */}
          {show.rating?.average && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-3 py-1.5">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm font-semibold text-yellow-300">
                Rating: {show.rating.average}
              </span>
            </div>
          )}

          {/* Genres */}
          {show.genres?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 transition hover:border-indigo-500 hover:text-white sm:text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          {/* Movie Information */}
          <div className="mt-6 grid gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-4 sm:grid-cols-2">

            {/* Language */}
            {show.language && (
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">
                  Language:
                </span>{" "}
                {show.language}
              </p>
            )}

            {/* Premiered */}
            {show.premiered && (
              <p className="text-sm text-slate-300">
                <span className="font-semibold text-white">
                  Premiered:
                </span>{" "}
                {show.premiered}
              </p>
            )}

          </div>

          {/* Summary */}
          <div className="mt-7">
            <h3 className="border-l-4 border-indigo-500 pl-3 text-xl font-bold text-white">
              Summary
            </h3>

            <div
              className="mt-4 text-sm leading-7 text-slate-400 sm:text-base"
              dangerouslySetInnerHTML={{
                __html:
                  show.summary || "No summary available.",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieModal;