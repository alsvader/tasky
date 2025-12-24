import { z } from "zod/v3";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export const TaskFormSchema = z.object({
  task: z.string().min(1, "Task description is required"),
});

export type TaskFormInputs = z.infer<typeof TaskFormSchema>;

export const ProfileFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export type ProfileFormInputs = z.infer<typeof ProfileFormSchema>;
