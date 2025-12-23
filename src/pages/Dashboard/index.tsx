import { EmptyTasks } from "../../components/EmptyTasks";
import { TaskForm } from "../../components/TaskForm";
import { ProfileEditForm } from "../../components/ProfileEditForm";

export function Dashboard() {
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
          <details
            className="flex flex-col border-t border-t-border-light dark:border-t-border-dark py-2 group"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <div className="flex items-center gap-3">
                <p className="text-light dark:text-dark text-lg font-medium leading-normal">
                  Active
                </p>
                <div className="flex items-center justify-center rounded-full bg-primary/20 text-primary px-2.5 py-0.5 text-xs font-semibold">
                  3
                </div>
              </div>
              <div className="text-secondary-light dark:text-secondary-dark group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            {/* <EmptyTasks completed /> */}
            <div className="flex flex-col gap-2 py-4">
              <div className="group flex items-center justify-between gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4">
                  <input
                    className="form-checkbox size-5 rounded text-primary bg-transparent border-border-light dark:border-border-dark focus:ring-primary/50"
                    type="checkbox"
                  />
                  <p className="text-light dark:text-dark text-base font-normal">
                    Design the new dashboard UI
                  </p>
                </div>
                <button className="group-hover-show transition-opacity text-secondary-light dark:text-secondary-dark hover:text-red-500">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>

              <div className="group flex items-center justify-between gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4">
                  <input
                    className="form-checkbox size-5 rounded text-primary bg-transparent border-border-light dark:border-border-dark focus:ring-primary/50"
                    type="checkbox"
                  />
                  <p className="text-light dark:text-dark text-base font-normal">
                    Develop the API for task management
                  </p>
                </div>
                <button className=" group-hover-show transition-opacity text-secondary-light dark:text-secondary-dark hover:text-red-500">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>

              <div className="group flex items-center justify-between gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4">
                  <input
                    className="form-checkbox size-5 rounded text-primary bg-transparent border-border-light dark:border-border-dark focus:ring-primary/50"
                    type="checkbox"
                  />
                  <p className="text-light dark:text-dark text-base font-normal">
                    Book flight for team offsite
                  </p>
                </div>
                <button className="group-hover-show transition-opacity text-secondary-light dark:text-secondary-dark hover:text-red-500">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </details>

          <details
            className="flex flex-col border-t border-t-border-light dark:border-t-border-dark py-2 group"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
              <div className="flex items-center gap-3">
                <p className="text-light dark:text-dark text-lg font-medium leading-normal">
                  Completed
                </p>
                <div className="flex items-center justify-center rounded-full bg-success/20 text-success px-2.5 py-0.5 text-xs font-semibold">
                  1
                </div>
              </div>
              <div className="text-secondary-light dark:text-secondary-dark group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>
            {/* <EmptyTasks /> */}
            <div className="flex flex-col gap-2 pt-4">
              <div className="group flex items-center justify-between gap-4 p-4 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4">
                  <input
                    checked
                    className="form-checkbox size-5 rounded text-primary bg-transparent border-border-light dark:border-border-dark focus:ring-primary/50"
                    type="checkbox"
                  />
                  <p className="text-secondary-light dark:text-secondary-dark text-base font-normal line-through">
                    Finalize the project proposal
                  </p>
                </div>
                <button className="opacity-0 group-hover-show transition-opacity text-secondary-light dark:text-secondary-dark hover:text-red-500">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </details>
        </div>
      </div>
      <ProfileEditForm />
    </section>
  );
}
