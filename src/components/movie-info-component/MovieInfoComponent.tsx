import type {FC} from "react";
import type {IMovieDetails} from "@/models/IMovieDetails";
import {GenreBadgeComponent} from "@/components/genre-badge-component/GenreBadgeComponent";

type MovieDetailsPropsType = {
    movie: IMovieDetails;
};

const toHoursMins = (mins?: number) => {
    if (!mins && mins !== 0) return "—";
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${m}m`;
};

export const MovieInfoComponent: FC<MovieDetailsPropsType> = ({movie}) => {
    const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";
    const imdbUrl = movie.imdb_id
        ? `https://www.imdb.com/title/${movie.imdb_id}/`
        : undefined;

    return (
        <section className="space-y-5">
            <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">
                    {movie.title}{" "}
                    {year !== "—" && (
                        <span className="text-slate-500 dark:text-slate-400">
              ({year})
            </span>
                    )}
                </h2>
                {movie.tagline && (
                    <p className="mt-1 text-slate-600 dark:text-slate-300 italic">
                        “{movie.tagline}”
                    </p>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
        <span className="inline-flex items-center gap-1">
          ⭐{" "}
            <strong>{movie.vote_average?.toFixed?.(1) ?? "—"}</strong>
        </span>
                <span>•</span>
                <span>{movie.vote_count ?? 0} votes</span>
                <span>•</span>
                <span>{movie.status || "—"}</span>
                {movie.runtime ? (
                    <>
                        <span>•</span>
                        <span>{toHoursMins(movie.runtime)}</span>
                    </>
                ) : null}
                {movie.original_language ? (
                    <>
                        <span>•</span>
                        <span className="uppercase">
              {movie.original_language}
            </span>
                    </>
                ) : null}
                {movie.release_date ? (
                    <>
                        <span>•</span>
                        <span>{movie.release_date}</span>
                    </>
                ) : null}
            </div>

            {movie.genres?.length ? (
                <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                        <GenreBadgeComponent key={genre.id} genre={genre}/>
                    ))}
                </div>
            ) : null}

            {movie.overview && (
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="leading-relaxed">{movie.overview}</p>
                </div>
            )}

            <div className="flex flex-wrap items-center gap-3 pt-2">
                {movie.homepage && (
                    <a
                        href={movie.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                    >
                        Official site
                    </a>
                )}
                {imdbUrl && (
                    <a
                        href={imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                    >
                        IMDb
                    </a>
                )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Production Companies
                    </h3>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
                        {movie.production_companies?.length ? (
                            movie.production_companies.map((c) => (
                                <li key={c.id}>{c.name}</li>
                            ))
                        ) : (
                            <li>—</li>
                        )}
                    </ul>
                </div>
                <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Production Countries
                    </h3>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
                        {movie.production_countries?.length ? (
                            movie.production_countries.map((c, i) => (
                                <li key={`${c.iso_3166_1}-${i}`}>{c.name}</li>
                            ))
                        ) : (
                            <li>—</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Budget
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                        {movie.budget ? `$${movie.budget.toLocaleString()}` : "—"}
                    </p>
                </div>
                <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Revenue
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                        {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "—"}
                    </p>
                </div>
            </div>
        </section>
    );
};
