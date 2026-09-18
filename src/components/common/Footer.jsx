function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 lg:px-8">

        <div>
          <h2 className="text-lg font-bold">
            <span className="text-red-500">
              Movie
            </span>
            <span className="text-white">
              Explorer
            </span>
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Discover shows worth watching.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {year} MovieExplorer. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
