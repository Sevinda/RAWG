import ClipLoader from "react-spinners/ClipLoader";
import useGames from "../../../hooks/useGames";
import { GameCard } from "../..";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && <p>{error}</p>}

      {isLoading && (
        <ClipLoader
          color="white"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}

      <div className="grid gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
