import type {FC} from "react";
import Link from "next/link";

import type {IMovie} from "@/models/IMovie";
import {PosterPreviewComponent} from "@/components/poster-preview-component/PosterPreviewComponent";
import {StarsRatingComponent} from "@/components/stars-rating-component/StarsRatingComponent";

type MoviePropsType = {
    movie: IMovie;
};

export const MoviesListCardComponent: FC<MoviePropsType> = ({movie}) => {
    return (
        <Link
            href={`/${movie.id}`}
            className="
        bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden
        hover:shadow-lg hover:-translate-y-1 transition-transform duration-200
        w-[200px] md:w-[220px] flex flex-col items-center text-center p-4
        no-underline
      "
        >
            <div className="mb-3 w-full">
                <PosterPreviewComponent
                    imageUrl={movie.poster_path}
                    imageType="list"
                />
            </div>

            <h2
                className="
          text-base font-semibold text-slate-800 dark:text-slate-100
          line-clamp-2 h-12
        "
            >
                {movie.title}
            </h2>

            <div className="mt-3">
                <StarsRatingComponent
                    voteAverage={movie.vote_average}
                    voteCount={movie.vote_count}
                />
            </div>
        </Link>
    );
};
