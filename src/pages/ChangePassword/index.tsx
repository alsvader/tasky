import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import {
  ChangePasswordFormSchema,
  type ChangePasswordFormInputs,
} from "@/components/types";
import { TaskyIcon } from "@/components/Icons/TaskyIcon";
import { Button } from "@/components/Button";

export function ChangePassword() {
  const { session, isLoading, changePassword, signOut } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<ChangePasswordFormInputs>({
    mode: "onChange",
    resolver: zodResolver(ChangePasswordFormSchema),
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.slice());
    const errorCode = params.get("error_code");

    if (
      (errorCode && errorCode.startsWith("4")) ||
      errorCode === "otp_expired"
    ) {
      toast.error("Your password reset link has expired.");
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    if (!isLoading && !session) {
      navigate("/login");
    }
  }, [session, isLoading, navigate]);

  const resetForm = () => {
    reset();
  };

  const onSubmit: SubmitHandler<ChangePasswordFormInputs> = async (data) => {
    try {
      const { newPassword } = data;

      await changePassword({ newPassword });
      await signOut();

      toast.success("Your password has been updated.");
      resetForm();
    } catch (error) {
      console.log("error in change password", error);
      toast.error("An error occurred during password update.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center pt-20">
        <p className="text-slate-900 dark:text-white text-lg">Cargando...</p>
      </div>
    );
  }

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
            <Button disabled={!isValid} type="submit">
              Save Changes
            </Button>
            <Link
              className="text-slate-500 text-sm font-normal leading-normal text-center transition hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              to="/"
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
