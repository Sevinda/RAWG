import useGenres, { Genre } from "../../../hooks/useGenres";
import getCroppedImageUrl from "../../../services/image-url";
import { LoaderSkeletonGenre } from "../..";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();

  const loaderCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <div>
      <h2 className="text-[30px] font-bold mb-5">Genres</h2>
      {isLoading &&
        loaderCount.map((loader) => (
          <div key={loader}>
            <LoaderSkeletonGenre />
          </div>
        ))}

      {genres.map((genre) => (
        <button
          key={genre.id}
          className={
            genre.id === selectedGenre?.id
              ? "flex items-center gap-4 mb-3 scale-110"
              : "flex items-center gap-4 mb-3 hover:scale-105"
          }
          onClick={() => onSelectGenre(genre)}
        >
          <img
            src={getCroppedImageUrl(genre.image_background)}
            alt={genre.name}
            className="w-11 h-11 object-cover rounded-md"
          />
          <p className="flex items-center pl-3 shadow rounded-md bg-gray-100 dark:bg-[#202020] w-[180px] h-11">
            {genre.name}
          </p>
        </button>
      ))}
    </div>
  );
};

export default GenreList;
