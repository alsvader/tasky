import { z } from "zod";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const TaskFormSchema = z.object({
  task: z.string().nonempty().min(1).default(""),
});

export type TaskFormInputs = z.infer<typeof TaskFormSchema>;
