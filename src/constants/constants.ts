export const baseUrl: string = process.env.API_BASE_URL || "https://api.themoviedb.org/3/";
export const imageBaseUrl: string = process.env.IMAGE_BASE_URL || "https://image.tmdb.org/t/p/";
export const apiKey: string = process.env.API_KEY || "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjFkYmRiMjc1Yzg2YTY5MWM0OTdmYWQxYmYwMTk3ZiIsIm5iZiI6MTc2MDEyNjIxNC41MjQ5OTk5LCJzdWIiOiI2OGU5NjUwNmUwNjNlZWVhMjRlNmFmYzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vwE2P_-VEU4FGe3w0TjQZY93gaKtkAAgcqoZz2lcgF0";
export const revalidateTime: number = Number(process.env.REVALIDATE_TIME) || 3600;