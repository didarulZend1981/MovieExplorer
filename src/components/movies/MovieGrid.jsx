import MovieCard from "./MovieCard";

function MovieGrid({ shows, onDetails }) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default MovieGrid;
