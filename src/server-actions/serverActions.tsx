"use server";

import {apiKey, baseUrl, revalidateTime} from "@/constants/constants";
import {IMovieResponse} from "@/models/IMovieResponse";
import {IMovieDetails} from "@/models/IMovieDetails";

const fetchFromAPI = async <T, >(
    endpoint: string,
    revalidateSeconds: number = revalidateTime,
): Promise<T | void> => {
    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            next: {revalidate: revalidateSeconds},
        });

        if (!response.ok) {
            console.error(`Fetch error: ${response.status} ${response.statusText}`);
            return;
        }

        return (await response.json()) as T;
    } catch (error) {
        console.error(`Network error: ${(error as Error).message}`);
    }
}

export const getMovies = async (
    pageNumber: string | null = "1",
    genreId: string = "",
    searchKeyword: string = "",
): Promise<IMovieResponse | void> => {
    const page = pageNumber ?? "1";
    const endpoint = searchKeyword.trim() ?
        `search/movie?page=${page}&query=${searchKeyword}` :
        `discover/movie?page=${page}&with_genres=${genreId}`;
    return await fetchFromAPI<IMovieResponse>(endpoint)
}


export const getMovieById = async (movieId: string): Promise<IMovieDetails | void> => {
    const endpoint = `movie/${movieId}`;
    return await fetchFromAPI<IMovieDetails>(endpoint)
}
