import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskyIcon } from "@/components/Icons/TaskyIcon";
import { type SignupFormInputs, SignupFormSchema } from "@/components/types";
import { cn } from "@/utils/cn";

export function Signup() {
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    confirmPassword: false,
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SignupFormInputs>({
    mode: "onChange",
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit: SubmitHandler<SignupFormInputs> = (data) => {
    console.log("Signup:", data);
  };

  const togglePassword = (field: "password" | "confirmPassword") => {
    console.log("togglePassword", field);
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="relative flex lg:min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2">
            <div className="relative hidden h-full items-center justify-center bg-gray-100 dark:bg-black/20 lg:flex">
              <div className="w-full max-w-md p-8">
                <TaskyIcon imageClassName="w-full h-full md:w-full" />
              </div>
            </div>
            <div className="flex w-full items-center justify-center bg-background-light dark:bg-background-dark px-4 pt-10 pb-20 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <TaskyIcon
                  className="lg:hidden justify-center"
                  imageClassName="w-3/4 md:w-2/3"
                />
                <div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark sm:text-4xl">
                      Get Started
                    </h1>
                    <p className="text-base font-normal leading-normal text-label-light dark:text-label-dark">
                      Start organizing your life in minutes.
                    </p>
                  </div>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-4">
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Full Name
                      </p>
                      <input
                        className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                        placeholder="Enter your full name"
                        type="text"
                        {...register("fullname", { required: true })}
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Email Address
                      </p>
                      <input
                        className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                        placeholder="Enter your email address"
                        type="email"
                        {...register("email", { required: true })}
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Password
                      </p>
                      <div className="relative flex items-center">
                        <input
                          className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 pr-10 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                          placeholder="Enter your password"
                          type={showPasswords.password ? "text" : "password"}
                          {...register("password", { required: true })}
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-label-light dark:text-label-dark"
                          type="button"
                          onClick={() => togglePassword("password")}
                        >
                          <span
                            className="material-symbols-outlined text-xl"
                            data-icon="visibility"
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                    </label>
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Confirm Password
                      </p>
                      <div className="relative flex items-center">
                        <input
                          className={cn(
                            "form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 pr-10 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary",
                            {
                              "border-error": errors.confirmPassword,
                            }
                          )}
                          placeholder="Confirm your password"
                          type={
                            showPasswords.confirmPassword ? "text" : "password"
                          }
                          {...register("confirmPassword", {
                            required: true,
                          })}
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-label-light dark:text-label-dark"
                          type="button"
                          onClick={() => togglePassword("confirmPassword")}
                        >
                          <span
                            className="material-symbols-outlined text-xl"
                            data-icon="visibility"
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-error">
                          Passwords do not match.
                        </p>
                      )}
                    </label>
                  </div>
                  <button
                    disabled={!isValid}
                    className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-primary/50 duration-200 ease-in-out"
                    type="submit"
                  >
                    Create Account
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-label-light dark:text-label-dark">
                      Already have an account?
                      <a
                        className="font-medium text-primary hover:underline ml-1"
                        href="#"
                      >
                        Sign In
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
