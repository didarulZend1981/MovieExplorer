function SearchBox({ value, onChange }) {
  return (
    <div className="mx-auto max-w-2xl">
      <label
        htmlFor="show-search"
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        Search by title
      </label>

      <input
        id="show-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a show..."
        className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-red-500"
      />
    </div>
  );
}

export default SearchBox;