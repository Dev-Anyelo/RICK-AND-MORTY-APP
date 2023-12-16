import Search from "./Search";
import Character from "./Character";
import { Pagination } from "./Pagination";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

export default function CharacterList() {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("page");
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  const [characters, setCharacters] = useState([]);

  const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const SEARCH = `https://rickandmortyapi.com/api/character/?name=${search}`;

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  useEffect(() => {
   try {
      const fetchCharacters = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCharacters(data.results);
      };
      fetchCharacters();
    }
    catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    const searchCharacters = async () => {
     try {
        const response = await fetch(SEARCH);
        const data = await response.json();
        setCharacters(data.results);
      }
      catch (error) {
        console.log(error);
      }
    };
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
        ) : characters.length === 0 ? (
          <div className="w-full h-full py-5 flex justify-center items-center text-xl">
            <Spinner color="gray" size="lg" width="35" height="35" />
          </div>
        ) : (
          characters.map((character) => (
            <Character key={character.id} character={character} />
          ))
        )}
      </div>
    </div>
  );
}
