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

export const LoginFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export type LoginFormInputs = z.infer<typeof LoginFormSchema>;

export const SignupFormSchema = z
  .object({
    fullname: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignupFormInputs = z.infer<typeof SignupFormSchema>;

export const ResetPasswordFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export type ResetPasswordFormInputs = z.infer<typeof ResetPasswordFormSchema>;
