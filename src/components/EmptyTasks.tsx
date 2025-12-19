export interface EmptyTasksProps {
  completed?: boolean;
}
export function EmptyTasks({ completed = false }: EmptyTasksProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center py-10 px-4 rounded-lg bg-card-light dark:bg-card-dark mt-4 border border-border-light dark:border-border-dark">
      <div className="text-5xl text-gray-400">
        <span className="material-symbols-outlined text-5xl!">
          assignment_add
        </span>
      </div>
      <p className="text-lg font-bold text-light dark:text-dark">
        {completed ? "Your task list is empty" : "No completed tasks yet"}
      </p>
      <p className="text-secondary-light dark:text-secondary-dark text-sm">
        {completed
          ? "Add a new task to get started."
          : "Start with your first task and check it off when you're done."}
      </p>
    </div>
  );
}
