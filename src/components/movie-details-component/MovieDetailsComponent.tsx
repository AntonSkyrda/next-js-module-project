import type {FC} from "react";
import type {IMovieDetails} from "@/models/IMovieDetails";
import {PosterPreviewComponent} from "@/components/poster-preview-component/PosterPreviewComponent";
import {MovieInfoComponent} from "@/components/movie-info-component/MovieInfoComponent";

type MovieDetailsProps = {
    movie: IMovieDetails;
};

export const MovieDetailsComponent: FC<MovieDetailsProps> = ({movie}) => {
    return (
        <div
            className="
        grid md:grid-cols-[420px_1fr]
        gap-12
        items-start
        max-w-7xl mx-auto
        px-4 md:px-8 lg:px-12
      "
        >
            <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
                    <PosterPreviewComponent
                        imageUrl={movie.poster_path}
                        imageType="details"
                    />
                </div>
            </div>

            <div className="space-y-8">
                <MovieInfoComponent movie={movie}/>
            </div>
        </div>
    );
};
