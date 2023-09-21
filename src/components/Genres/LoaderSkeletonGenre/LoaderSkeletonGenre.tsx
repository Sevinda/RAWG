import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoaderSkeletonGenre = () => {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div>
          <div className="mb-3 flex gap-5">
            <Skeleton width={44} height={44} />
            <Skeleton width={177} height={44} />
          </div>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default LoaderSkeletonGenre;
