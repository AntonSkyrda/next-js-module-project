import type {FC} from "react";

type RatingPropsType = {
    voteAverage: number;
    voteCount: number;
};

const StarIcon = ({className = ""}: { className?: string }) => (
    <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`w-5 h-5 ${className}`}
    >
        <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.69a1 1 0 00.95.69h3.878c.967 0 1.371 1.24.588 1.81l-3.137 2.278a1 1 0 00-.364 1.118l1.2 3.69c.3.921-.755 1.688-1.54 1.118L10.5 14.347a1 1 0 00-1.176 0l-3.226 2.974c-.784.57-1.838-.197-1.539-1.118l1.2-3.69a1 1 0 00-.364-1.118L2.258 9.117c-.783-.57-.38-1.81.588-1.81h3.878a1 1 0 00.95-.69l1.2-3.69z"/>
    </svg>
);

export const StarsRatingComponent: FC<RatingPropsType> = ({
                                                              voteAverage,
                                                              voteCount,
                                                          }) => {
    const rating10 = Math.max(0, Math.min(10, voteAverage ?? 0));
    const rating5HalfSteps = Math.round((rating10 / 2) * 2) / 2;
    const full = Math.floor(rating5HalfSteps);
    const hasHalf = rating5HalfSteps - full === 0.5;

    return (
        <div
            className="
        w-full max-w-full
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        rounded-lg px-3 py-2
        flex flex-col items-center
      "
        >
            <div className="flex items-center justify-center gap-1">
                {Array.from({length: 5}).map((_, i) => {
                    if (i < full) return <StarIcon key={`full-${i}`} className="text-yellow-400"/>;

                    if (i === full && hasHalf)
                        return (
                            <span
                                key={`half-${i}`}
                                className="relative inline-block w-5 h-5"
                            >
                <StarIcon className="text-slate-300"/>
                <span
                    className="absolute inset-0 overflow-hidden"
                    style={{width: "50%"}}
                >
                  <StarIcon className="text-yellow-400"/>
                </span>
              </span>
                        );

                    return <StarIcon key={`empty-${i}`} className="text-slate-300"/>;
                })}
            </div>

            <div className="mt-1 flex items-baseline justify-center gap-2 text-xs sm:text-sm">
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {rating10.toFixed(1)}
            <span className="text-slate-500">/10</span>
        </span>
                <span className="text-slate-500">
          • {voteCount.toLocaleString()} votes
        </span>
            </div>
        </div>
    );
};
