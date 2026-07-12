function Topbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">

      <div>
        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back 
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
          B
        </div>

        <span className="font-semibold">
          Bibisha
        </span>

      </div>

    </header>
  );
}

export default Topbar;