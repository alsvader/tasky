import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/Button";
import { type TaskFormInputs, TaskFormSchema } from "@/components/types";

export interface TaskFormProps {
  onAddTask: (task: TaskFormInputs) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TaskFormInputs>({
    resolver: zodResolver(TaskFormSchema),
  });

  const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
    onAddTask?.(data);
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-end gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col w-full flex-1">
        <p className="text-light dark:text-dark text-sm font-medium leading-normal pb-2">
          New Task
        </p>
        <input
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-light dark:text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark h-14 placeholder:text-secondary-light dark:placeholder:text-secondary-dark p-[15px] text-base font-normal leading-normal"
          placeholder="What do you need to get done?"
          {...register("task", { required: true })}
        />
      </label>
      <Button
        disabled={!isValid}
        type="submit"
        className="min-w-[84px] w-full sm:w-auto  h-14 px-5"
      >
        Add Task
      </Button>
    </form>
  );
}
