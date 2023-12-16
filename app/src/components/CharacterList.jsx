import { useEffect, useState } from "react";
import Character from "./Character";
import Typography from "@mui/material/Typography";
import { Pagination } from "./Pagination";
import Search from "./Search";

export default function CharacterList() {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("page");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const SEARCH = `https://rickandmortyapi.com/api/character/?name=${search}`;

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
    const getAllCharacters = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setCharacters(data.results);
    };
    setLoading(false);
    getAllCharacters();
  }, [page]);

  useEffect(() => {
    const searchCharacters = async () => {
      const response = await fetch(SEARCH);
      const data = await response.json();
      setCharacters(data.results);
    };
    setLoading(false);
    searchCharacters();
  }, [search]);

  return (
    <div className="xl:px-14">
      <h1 className="text-xl font-semibold md:text-3xl text-gray-900 text-center">
        RICK AND MORTY APP
      </h1>
      <header className="md:mt-16 mt-8 mb-6 md:mb-8 flex gap-3 sm:gap-5 justify-center items-center lg:flex-row flex-col w-full p-0">
        <Search search={search} setSearch={setSearch} />
        <Pagination page={page} setPage={setPage} />
      </header>
      <div className="lg:gap-5 flex-wrap flex gap-3 md:justify-between justify-center items-center w-full lg:mt-10">
        {!characters ? (
          <h1
            variant="h2"
            color={"GrayText"}
            className="w-full text-center py-20 text-lg sm:text-xl md:text-4xl"
          >
            No results founds 👾
          </h1>
        ) : (
          characters.map((character) => (
            <Character key={character.id} character={character} />
          ))
        )}
      </div>
    </div>
  );
}
