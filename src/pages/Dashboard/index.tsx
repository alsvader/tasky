import { TaskForm } from "@/components/TaskForm";
import { ProfileEditForm } from "@/components/ProfileEditForm";
import { TaskList } from "@/components/TaskList";
import { DUMMY_DATA } from "./dummy-data";

export function Dashboard() {
  const completed = DUMMY_DATA.filter((task) => task.completed);
  const active = DUMMY_DATA.filter((task) => !task.completed);

  const onToggle = (id: string) => {
    console.log("Toggle task with id:", id);
  };

  const onDelete = (id: string) => {
    console.log("Delete task with id:", id);
  };

  return (
    <section className="flex flex-col max-w-[960px] m-auto">
      <div className="flex flex-col gap-8 p-4 sm:p-8 md:pt-9 md:pb-20">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="flex min-w-72 flex-col gap-2">
            <p className="text-light dark:text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
              My Tasks
            </p>
            <p className="text-secondary-light dark:text-secondary-dark text-base font-normal leading-normal">
              Stay organized and productive.
            </p>
          </div>
        </div>

        <TaskForm />

        <div className="flex flex-col">
          {/* Active Tasks */}
          <TaskList
            title="Active"
            tasks={active}
            onToggle={onToggle}
            onDelete={onDelete}
          />

          {/* Completed Tasks */}
          <TaskList
            title="Completed"
            tasks={completed}
            onToggle={onToggle}
            onDelete={onDelete}
            emptyTitle="No completed tasks yet"
            emptySubTitle="Start with your first task and check it off when you're done."
          />
        </div>
      </div>
      <ProfileEditForm />
    </section>
  );
}
