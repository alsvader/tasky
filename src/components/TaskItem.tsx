import { type Task } from "@/components/types";

interface TaskItemProps {
  task: Task;
  onToggle?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="group flex items-center justify-between gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
      <div className="flex items-center gap-4">
        <input
          className="form-checkbox size-5 rounded text-primary bg-transparent border-border-light dark:border-border-dark focus:ring-primary/50"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle?.(task.id)}
        />
        <p className="text-light dark:text-dark text-base font-normal">
          {task.title}
        </p>
      </div>
      {!task.completed && (
        <button
          className="group-hover-show transition-opacity text-secondary-light dark:text-secondary-dark hover:text-red-500"
          onClick={() => onDelete?.(task.id)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      )}
    </div>
  );
}
