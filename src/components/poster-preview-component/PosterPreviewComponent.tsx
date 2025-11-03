import type {FC} from "react";
import {imageBaseUrl} from "@/constants/constants";

type ImagePropsType = {
    imageUrl: string;
    imageType: "list" | "details";
};

export const PosterPreviewComponent: FC<ImagePropsType> = ({imageUrl, imageType}) => {
    const imageWidth = {
        details: "w500",
        list: "w300",
    } as const;

    const url = imageUrl
        ? `${imageBaseUrl}${imageWidth[imageType]}/${imageUrl}`
        : "https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg";

    return (
        <div
            className={`
        relative overflow-hidden rounded-xl shadow-md
        bg-slate-200 dark:bg-slate-700
        ${imageType === "list"
                ? "w-[180px] h-[270px]"
                : "w-[300px] md:w-[400px] h-auto"}
      `}
        >
            <img
                src={url}
                alt="movie-poster"
                loading="lazy"
                className="
          w-full h-full object-cover
          transition-transform duration-300 ease-in-out
          hover:scale-105
        "
            />
        </div>
    );
};
