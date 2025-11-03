import Link from "next/link";

type PaginationProps = {
    currentPage: number;
    hasNextPage: boolean;
    genreId?: string;
    searchKeyword?: string;
};

export const PaginationComponent = ({currentPage, hasNextPage, genreId = "", searchKeyword = ""}: PaginationProps) => {
    const buildHref = (page: number) => {
        const params = new URLSearchParams();
        params.set("pg", page.toString());
        if (genreId) params.set("genreId", genreId);
        if (searchKeyword) params.set("searchKeyword", searchKeyword);
        return `/?${params.toString()}`;
    };

    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage = currentPage + 1;

    return (
        <div className="w-full flex justify-center">
            <div className="inline-flex items-center gap-4">
                <Link
                    href={buildHref(prevPage)}
                    className={`
            inline-flex items-center justify-center
            px-5 py-2.5 rounded-lg
            border border-slate-300 dark:border-slate-600
            bg-white dark:bg-slate-800
            text-slate-700 dark:text-slate-200
            hover:bg-slate-100 dark:hover:bg-slate-700
            whitespace-nowrap font-medium transition
            ${currentPage <= 1 ? "opacity-50 pointer-events-none" : ""}
          `}
                >
                    ← Prev
                </Link>

                <span className="text-slate-800 dark:text-slate-200 font-semibold text-lg whitespace-nowrap">
          Page {currentPage}
        </span>

                <Link
                    href={buildHref(nextPage)}
                    className={`
            inline-flex items-center justify-center
            px-5 py-2.5 rounded-lg
            border border-slate-300 dark:border-slate-600
            bg-white dark:bg-slate-800
            text-slate-700 dark:text-slate-200
            hover:bg-slate-100 dark:hover:bg-slate-700
            whitespace-nowrap font-medium transition
            ${!hasNextPage ? "opacity-50 pointer-events-none" : ""}
          `}
                >
                    Next →
                </Link>
            </div>
        </div>
    );
};
