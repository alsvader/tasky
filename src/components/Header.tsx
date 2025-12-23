import { Menu } from "@/components/Menu";
import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { TaskyIcon } from "@/components/Icons/TaskyIcon";

export function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-4 sm:px-10 py-4 max-w-[960px] m-auto md:py-5 md:pt-8">
      <TaskyIcon />
      <div className="flex flex-1 justify-end gap-4">
        <ToggleThemeButton />
        <Menu />
      </div>
    </header>
  );
}
