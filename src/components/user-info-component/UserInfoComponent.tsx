export const UserInfoComponent = () => {
    return (
        <div
            className="
        flex items-center gap-3
        bg-slate-100 dark:bg-slate-800
        px-3 py-2 rounded-full
        shadow-sm
        cursor-pointer
        hover:bg-slate-200 dark:hover:bg-slate-700
        transition-colors
      "
        >
            <div
                className="
          w-10 h-10
          rounded-full
          overflow-hidden
          border-2 border-blue-500
          flex items-center justify-center
          bg-blue-100 dark:bg-blue-900
          text-blue-700 dark:text-blue-300
          font-semibold text-sm
        "
            >
                <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col text-left leading-tight">
        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">
          User Name
        </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
          User
        </span>
            </div>
        </div>
    );
};
