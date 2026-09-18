function Loading() {
  return (
    <div className="flex min-h-64 items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-red-500" />

        <p className="mt-4 text-sm text-slate-400">
          Loading shows...
        </p>
      </div>
    </div>
  );
}

export default Loading;