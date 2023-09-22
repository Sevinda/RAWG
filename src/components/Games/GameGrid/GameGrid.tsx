import useGames from "../../../hooks/useGames";
import { GameCard, LoaderSkeletonGame } from "../..";
import { Genre } from "../../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre);

  const loaderCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <p>{error}</p>}

      {isLoading && (
        <div className="grid gap-5 max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loaderCount.map((loader) => (
            <div key={loader}>
              <LoaderSkeletonGame />
            </div>
          ))}
        </div>
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
