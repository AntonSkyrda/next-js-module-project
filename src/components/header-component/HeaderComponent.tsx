import Link from "next/link";
import {UserInfoComponent} from "@/components/user-info-component/UserInfoComponent";
import {SearchComponent} from "@/components/search-component/SearchComponent";

export const HeaderComponent = () => {
    return (
        <header
            className="
        w-full
        bg-white dark:bg-slate-900
        shadow-md
        sticky top-0 z-50
      "
        >
            <div
                className="
          relative
          max-w-7xl mx-auto
          flex items-center justify-between
          px-6 py-4
        "
            >
                {/* 🔹 Логотип */}
                <Link href="/">
                    <h1
                        className="
              text-2xl font-bold
              text-blue-600 dark:text-blue-400
              tracking-wide
              whitespace-nowrap
            "
                    >
                        🎬 MovieVerse
                    </h1>
                </Link>
                <div
                    className="
            absolute left-1/2 transform -translate-x-1/2
            w-full max-w-lg
          "
                >
                    <SearchComponent/>
                </div>

                {/* Навігація + користувач */}
                <div className="flex items-center gap-10">
                    <nav className="hidden md:flex items-center gap-6">
                        <Link
                            href="/"
                            className="
                text-slate-700 dark:text-slate-200
                hover:text-blue-600 dark:hover:text-blue-400
                font-medium transition
              "
                        >
                            Home
                        </Link>
                        <Link
                            href="/?genreId=28"
                            className="
                text-slate-700 dark:text-slate-200
                hover:text-blue-600 dark:hover:text-blue-400
                font-medium transition
              "
                        >
                            Action
                        </Link>

                        <Link
                            href="/?genreId=35"
                            className="
                text-slate-700 dark:text-slate-200
                hover:text-blue-600 dark:hover:text-blue-400
                font-medium transition
              "
                        >
                            Comedy
                        </Link>
                    </nav>

                    <UserInfoComponent/>
                </div>
            </div>
        </header>
    );
};
