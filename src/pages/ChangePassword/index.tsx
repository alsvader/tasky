import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {
  ChangePasswordFormSchema,
  type ChangePasswordFormInputs,
} from "@/components/types";
import { TaskyIcon } from "@/components/Icons/TaskyIcon";

export function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<ChangePasswordFormInputs>({
    mode: "onChange",
    resolver: zodResolver(ChangePasswordFormSchema),
  });

  const resetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = (data) => {
    console.log("Change Password:", data);
    toast.success("Your password has been updated.");
    resetForm();
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center px-4 pt-16 group/design-root overflow-x-hidden">
      <div className="layout-container flex w-full max-w-md flex-col items-center">
        <TaskyIcon
          className="mb-6 justify-center"
          imageClassName="w-5/6 md:w-4/5"
        />
        <div className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#1a2530] sm:p-8">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-slate-900 dark:text-white tracking-light text-2xl leading-tight text-center pb-2">
              Change Password
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal pb-6 text-center">
              Update your password to keep your account secure.
            </p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal pb-2 text-slate-900 dark:text-white">
                Current Password
              </p>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-background-light py-3 pl-11 pr-4 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-background-dark dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Enter current password"
                  type="password"
                  {...register("currentPassword", { required: true })}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                  <span className="material-symbols-outlined text-xl">
                    lock
                  </span>
                </div>
              </div>
            </label>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal pb-2 text-slate-900 dark:text-white">
                New Password
              </p>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-background-light py-3 pl-11 pr-4 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-background-dark dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Enter new password"
                  type="password"
                  {...register("newPassword", { required: true })}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                  <span className="material-symbols-outlined text-xl">key</span>
                </div>
              </div>
              {errors.newPassword && (
                <p className="mt-2 text-sm text-error">
                  {errors.newPassword.message}
                </p>
              )}
            </label>
            <label className="flex flex-col">
              <p className="text-sm font-medium leading-normal pb-2 text-slate-900 dark:text-white">
                Confirm New Password
              </p>
              <div className="relative flex w-full flex-1 items-stretch">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-slate-300 bg-background-light py-3 pl-11 pr-4 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-background-dark dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Confirm new password"
                  type="password"
                  {...register("confirmNewPassword", { required: true })}
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 dark:text-slate-500">
                  <span className="material-symbols-outlined text-xl">
                    check_circle
                  </span>
                </div>
              </div>
              {errors.confirmNewPassword && (
                <p className="mt-2 text-sm text-error">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </label>
            <button
              disabled={!isValid}
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary py-3 px-5 text-base font-bold leading-normal text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark mt-2 disabled:cursor-not-allowed disabled:bg-primary/50 duration-200 ease-in-out"
            >
              <span className="truncate">Save Changes</span>
            </button>
            <a
              className="text-slate-500 text-sm font-normal leading-normal text-center transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              href="#"
            >
              Cancel
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
