function EmptyState({
  title = "Nothing found",
  message = "Try another search.",
}) {
  return (
    <div className="flex min-h-64 items-center justify-center">
      <div className="max-w-md text-center">

        <div className="text-5xl">
          🎬
        </div>

        <h2 className="mt-4 text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-slate-400">
          {message}
        </p>

      </div>
    </div>
  );
}

export default EmptyState;