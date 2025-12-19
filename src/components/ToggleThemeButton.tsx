import { useTheme } from "../hooks/useTheme";

export function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
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
  );
}
