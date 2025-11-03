import type {FC} from "react";
import type {IMovie} from "@/models/IMovie";

import {PaginationComponent} from "@/components/pagination-component/PaginationComponent";
import {MoviesListCardComponent} from "@/components/movies-list-card-component/MoviesListCardComponent";

type MoviesListProps = {
    movies: IMovie[];
    currentPage: number;
    totalPages: number;
    genreId?: string;
    searchKeyword?: string;
};

export const MoviesListComponent: FC<MoviesListProps> = ({
                                                             movies,
                                                             currentPage,
                                                             totalPages,
                                                             genreId = "",
                                                             searchKeyword = ""
                                                         }) => {
    if (!movies.length) {
        return (
            <div className="text-center text-slate-600 dark:text-slate-300 py-10">
                <p className="text-lg">Films loading...</p>
            </div>
        );
    }

    const hasNextPage = currentPage < totalPages;

    return (
        <div className="flex flex-col items-center gap-10">
            <div
                className="
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          place-items-center
          w-full
          px-4
        "
            >
                {movies.map((movie) => (
                    <MoviesListCardComponent key={movie.id} movie={movie}/>
                ))}
            </div>

            <div className="flex items-center justify-center mt-8">
                <PaginationComponent
                    currentPage={currentPage}
                    hasNextPage={hasNextPage}
                    genreId={genreId}
                    searchKeyword={searchKeyword}
                />
            </div>
        </div>
    );
};
