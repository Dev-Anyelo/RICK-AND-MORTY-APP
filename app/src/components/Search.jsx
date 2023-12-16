import { useEffect } from "react";

export default function Search({ search, setSearch }) {
  useEffect(() => {
    const savedText = localStorage.getItem("search");
    if (savedText) {
      setSearch(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("search", search);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
  };

  return (
    <>
      <div className="w-full px-2 md:px-14">
        <div className="flex sm:gap-3 w-full">
          <form className="w-full lg:max-w-md" onSubmit={handleSubmit}>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class=" block w-full pl-8 p-4 sm:pl-10 text-sm text-gray-900 border border-blue-gray-900 rounded-lg bg-gray-50 focus:ring-blue-gray-900 focus:border-blue-gray-900 outline-none"
                placeholder="Search characters"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-blue-gray-900 hover:bg-blue-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-gray-900 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
