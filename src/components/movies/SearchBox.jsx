
function SearchBox({ value, onChange }) {
  return (
    <div className="flex w-full justify-center my-[25px] px-[7px]">
      <input
        id="show-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title..."
        className="w-full max-w-2xl rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-center text-white outline-none placeholder:text-slate-500 focus:border-red-500"
      />
    </div>
  );
}

export default SearchBox;

