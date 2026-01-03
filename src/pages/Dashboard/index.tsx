import toast from "react-hot-toast";
import { TaskForm } from "@/components/TaskForm";
import { ProfileEditForm } from "@/components/ProfileEditForm";
import { TaskList } from "@/components/TaskList";
import type { TaskFormInputs, TaskFormData } from "@/components/types";
import { useTasks } from "@/hooks/useTasks";

export function Dashboard() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();

  const onAddTask = async (task: TaskFormInputs) => {
    try {
      const newTask: TaskFormData = {
        title: task.task,
        completed: false,
      };

      await addTask(newTask);
      toast.success("Task added successfully!");
    } catch (_) {
      toast.error("Something went wrong, please try again.");
    }
  };

  const onToggleTask = async (id: string) => {
    console.log("Toggle task with id:", id);

    try {
      await toggleTask(id);
      toast.success("Task toggled successfully!");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  const onDeleteTask = async (id: string) => {
    try {
      await deleteTask(id);
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  const completed = tasks.filter((task) => task.completed);
  const active = tasks.filter((task) => !task.completed);

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

        <TaskForm onAddTask={onAddTask} />

        <div className="flex flex-col">
          {/* Active Tasks */}
          <TaskList
            title="Active"
            tasks={active}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />

          {/* Completed Tasks */}
          <TaskList
            title="Completed"
            tasks={completed}
            onToggle={onToggleTask}
            emptyTitle="No completed tasks yet"
            emptySubTitle="Start with your first task and check it off when you're done."
          />
        </div>
      </div>
      <ProfileEditForm />
    </section>
  );
}
