import { useTheme } from "@/hooks/useTheme";
import TaskyIconLight from "@/assets/tasky-icon.webp";
import TaskyIconDark from "@/assets/tasky-icon-dark.webp";
import { cn } from "@/utils/cn";

interface TaskyIconProps {
  className?: string;
  imageClassName?: string;
}

export function TaskyIcon({ className, imageClassName }: TaskyIconProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "flex items-center gap-4 text-light dark:text-dark",
        className
      )}
    >
      <img
        src={theme === "light" ? TaskyIconLight : TaskyIconDark}
        alt="Tasky: Simple tasks, powerful flow"
        className={cn("w-5/6 md:w-3/12", imageClassName)}
      />
    </div>
  );
}
