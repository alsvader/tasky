import { useTheme } from "../hooks/useTheme";
import TaskyIcon from "../assets/tasky-icon.webp";
import TaskyIconDark from "../assets/tasky-icon-dark.webp";
import { Menu } from "./Menu";

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
        <Menu />
      </div>
    </header>
  );
}
