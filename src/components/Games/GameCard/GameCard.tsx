import { IconList, Score } from "../..";
import { Game } from "../../../hooks/useGames";
import getCroppedImageUrl from "../../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-[#202020] overflow-hidden rounded-[10px] shadow">
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="object-contain"
      />
      <div className="px-5 py-5">
        <p className="font-bold text-[20px]">{game.name}</p>

        <div className="flex items-center flex-wrap justify-between mt-3">
          <IconList
            key={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
