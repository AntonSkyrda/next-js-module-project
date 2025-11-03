import {IGenre} from "@/models/IGenre";
import {IProductionCompany} from "@/models/IProductionCompany";
import {IProductionCountry} from "@/models/IProductionCountry";
import {ISpokenLanguage} from "@/models/ISpokenLanguage";

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}