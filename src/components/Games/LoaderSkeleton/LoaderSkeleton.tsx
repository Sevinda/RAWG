import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoaderSkeleton = () => {
  return (
    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div>
          <div>
            <Skeleton height="210px" />
          </div>
          <p>
            <Skeleton count={2} />
          </p>
        </div>
      </SkeletonTheme>
    </>
  );
};

export default LoaderSkeleton;
