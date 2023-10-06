
export default function Character({ character }) {
  return (
    <div
      className="lg:w-56 w-48 h-fit p-1 text-center grid place-items-center gap-2 sm:gap-3 bg-blue-gray-900 rounded-lg hover:cursor-pointer transition duration-700 ease-in-out hover:transform hover:scale-105 hover:border border-blue-800"
      key={character.id}
    >
      <h1 className="md:text-lg text-sm mt-2 lg:mt-4 text-blue-700">{character.name}</h1>
      <p className="text-gray-400 text-xs md:text-sm">
        {character.species} | {character.status}
      </p>
      <p className="text-gray-400 text-xs">{character.origin.name}</p>

      <img
        src={character.image}
        alt={character.name}
        className="rounded-lg w-full h-full"
      />
    </div>
  );
}
