import { useTheme } from "../hooks/useTheme";
import TaskyIcon from "../assets/tasky-icon.webp";
import TaskyIconDark from "../assets/tasky-icon-dark.webp";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-4 max-w-[960px] m-auto md:py-5 md:pt-8">
      <div className="flex items-center gap-4 text-light dark:text-dark">
        <img
          src={theme === "light" ? TaskyIcon : TaskyIconDark}
          alt="Tasky: Simple tasks, powerful flow"
          className="w-5/6 md:w-3/12"
        />
      </div>
      <div className="flex flex-1 justify-end gap-4">
        <div className="flex items-center justify-center">
          <button
            className="flex size-11 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-200 dark:bg-card-dark text-secondary-light dark:text-secondary-dark"
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined">
              {theme === "light" ? "dark_mode" : "light_mode"}
            </span>
          </button>
        </div>
        {/* <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full size-11 bg-gray-200 dark:bg-card-dark text-text-secondary-light dark:text-text-secondary-dark border border-border-light dark:border-border-dark">
          <span className="material-symbols-outlined text-xl">settings</span>
        </button> */}
        {/* <div
          className="rounded-full size-11 flex items-center justify-center bg-gray-200 dark:bg-card-dark relative"
          data-alt="User profile picture, abstract placeholder"
        >
          <span className="material-symbols-outlined">account_box</span>
        </div> */}
        <details className="relative group">
          <summary
            aria-haspopup="menu"
            className="list-none [&::-webkit-details-marker]:hidden cursor-pointer outline-none"
          >
            <div
              className="rounded-full size-11 flex items-center justify-center bg-gray-200 dark:bg-card-dark relative"
              data-alt="User profile picture, abstract placeholder"
            >
              <span className="material-symbols-outlined">account_box</span>
            </div>
          </summary>
          <div
            className="absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-xl focus:outline-none z-50 overflow-hidden"
            role="menu"
          >
            <div className="p-1">
              <button
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-light dark:text-text-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                role="menuitem"
              >
                <span className="material-symbols-outlined text-[20px] text-text-secondary-light dark:text-text-secondary-dark">
                  settings
                </span>
                Settings
              </button>
              <div className="h-px bg-border-light dark:bg-border-dark my-1 mx-2"></div>
              <button
                className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                role="menuitem"
              >
                <span className="material-symbols-outlined text-[20px]">
                  logout
                </span>
                Logout
              </button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
