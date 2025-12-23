import { EmptyTasks } from "@/components/EmptyTasks";
import { TaskItem } from "@/components/TaskItem";
import { type Task } from "@/components/types";

export interface TaskListProps {
  title: string;
  tasks: Task[];
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
  emptyTitle?: string;
  emptySubTitle?: string;
}
export function TaskList({
  title,
  tasks,
  onToggle,
  onDelete,
  emptyTitle,
  emptySubTitle,
}: TaskListProps) {
  return (
    <details
      className="flex flex-col border-t border-t-border-light dark:border-t-border-dark py-2 group"
      open
    >
      <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
        <div className="flex items-center gap-3">
          <p className="text-light dark:text-dark text-lg font-medium leading-normal">
            {title}
          </p>
          <div className="flex items-center justify-center rounded-full bg-primary/20 text-primary px-2.5 py-0.5 text-xs font-semibold">
            {tasks.length}
          </div>
        </div>
        <div className="text-secondary-light dark:text-secondary-dark group-open:rotate-180 transition-transform">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </summary>
      {tasks.length === 0 ? (
        <EmptyTasks title={emptyTitle} subTitle={emptySubTitle} />
      ) : (
        <div className="flex flex-col gap-2 py-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </details>
  );
}
