import Link from "next/link";
import type {FC} from "react";

type GenreBadgeProps = {
    genre: {
        id: number;
        name: string;
    };
};

export const GenreBadgeComponent: FC<GenreBadgeProps> = ({genre}) => {
    return (
        <Link href={`/public?genreId=${genre.id}`}>
      <span
          className="
          inline-block
          px-3 py-1
          text-sm font-medium
          text-blue-700 dark:text-blue-300
          bg-blue-100 dark:bg-blue-900/40
          border border-blue-200 dark:border-blue-800
          rounded-full
          hover:bg-blue-200 dark:hover:bg-blue-800
          transition-colors duration-200
          cursor-pointer select-none
        "
      >
        {genre.name}
      </span>
        </Link>
    );
};
