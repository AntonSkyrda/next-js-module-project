import type {FC} from "react";

type SearchComponentProps = {
    initialValue?: string;
};

export const SearchComponent: FC<SearchComponentProps> = ({initialValue}) => {
    return (
        <form
            action="/"
            method="GET"
            className="flex items-center gap-2 w-full max-w-md"
        >
            <input type="hidden" name="pg" value="1"/>

            <div className="relative flex-1">
                <input
                    type="text"
                    name="searchKeyword"
                    defaultValue={initialValue}
                    placeholder="Search by name…"
                    className="
            w-full rounded-lg border border-slate-300 dark:border-slate-600
            px-4 py-2
            bg-white dark:bg-slate-800
            text-slate-800 dark:text-slate-100
            placeholder-slate-400 dark:placeholder-slate-500
            focus:ring-2 focus:ring-blue-500 focus:outline-none
          "
                />
            </div>

            <button
                type="submit"
                className="
          bg-blue-600 hover:bg-blue-700
          text-white px-3 py-2 rounded-lg transition
        "
            >
                Search
            </button>
        </form>
    );
};
