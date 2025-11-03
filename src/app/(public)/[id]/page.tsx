import {MovieDetailsComponent} from "@/components/movie-details-component/MovieDetailsComponent";
import type {IMovieDetails} from "@/models/IMovieDetails";
import {getMovieById} from "@/server-actions/serverActions";

type MoviePageProps = {
    params: { id: string };
};

export default async function MovieDetailsPage({params}: MoviePageProps) {
    const {id} = await params

    const movie = await getMovieById(id)

    if (!movie) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 px-4">
                <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-10">
                    <p className="text-center text-slate-600 dark:text-slate-300">
                        Не вдалося завантажити дані фільму 😔
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-10 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-10">
                <MovieDetailsComponent movie={movie}/>
            </div>
        </div>
    );
}
