import {MoviesListComponent} from "@/components/movies-list-component/MoviesListComponent";
import type {IMovie} from "@/models/IMovie";
import {getMovies} from "@/server-actions/serverActions";

type HomePageProps = {
    searchParams: Promise<{
        pg?: string;
        genreId?: string;
        searchKeyword?: string;
    }>;
};

export default async function HomePage({searchParams}: HomePageProps) {
    const sp = await searchParams;

    const page = sp.pg ?? "1";
    const genreId = sp.genreId ?? "";
    const searchKeyword = (sp.searchKeyword ?? "").trim();

    const data = await getMovies(page, genreId, searchKeyword);

    const movies: IMovie[] = data?.results ?? [];
    const totalPages = data?.total_pages ?? 1;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6">
                    <MoviesListComponent
                        movies={movies}
                        currentPage={Number(page)}
                        totalPages={totalPages}
                        genreId={genreId}
                        searchKeyword={searchKeyword}
                    />
                </div>
            </div>
        </div>
    );
}
