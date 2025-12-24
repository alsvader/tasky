import { useState, useRef } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSettingsModal } from "@/hooks/useSettingsModal";
import { Modal } from "@/components/Modal";
import { type ProfileFormInputs, ProfileFormSchema } from "@/components/types";

import UserIcon from "@/assets/user.png";

export function ProfileEditForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { isSettingsOpen, onClose } = useSettingsModal();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ProfileFormInputs>({
    resolver: zodResolver(ProfileFormSchema),
  });

  const onSubmit: SubmitHandler<ProfileFormInputs> = (data) => {
    console.log("Update profile:", data);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      // Handle file upload here
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const cancelImageSelection = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Modal isOpen={isSettingsOpen} onClose={onClose}>
      <Modal.Header>
        <div>
          <h3 className="text-xl font-bold text-light dark:text-dark">
            Update Profile
          </h3>
          <p className="text-sm text-secondary-light dark:text-secondary-dark mt-1">
            Manage your public profile and preferences.
          </p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-light dark:text-secondary-dark">
            Profile Picture
          </h4>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="size-20 rounded-full bg-cover bg-center ring-4 ring-background-light dark:ring-background-dark shadow-md">
                <img
                  src={imagePreview || UserIcon}
                  alt="Profile Picture"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                className="hidden"
              />
              <button
                type="button"
                onClick={handleButtonClick}
                className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-primary text-white size-7 ring-2 ring-card-light dark:ring-card-dark hover:bg-primary/90 transition-colors shadow-sm hover:cursor-pointer"
              >
                <span className="material-symbols-outlined text-xs">edit</span>
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              {imagePreview && (
                <div className="flex flex-col items-center gap-3 min-[425px]:flex-row">
                  <button className="px-4 py-2 text-sm font-medium text-light dark:text-dark bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors shadow-sm hover:cursor-pointer">
                    Upload
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-red-500 bg-transparent border border-transparent rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors hover:cursor-pointer"
                    onClick={cancelImageSelection}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-border-light dark:bg-border-dark" />
        <form
          id="profile-edit-form"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-light dark:text-secondary-dark">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-light dark:text-dark">
                First Name
              </span>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 placeholder:text-secondary-light pl-3"
                type="text"
                {...register("firstName", { required: true })}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-light dark:text-dark">
                Last Name
              </span>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 placeholder:text-secondary-light pl-3"
                type="text"
                {...register("lastName", { required: true })}
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-light dark:text-dark">
              Email Address
            </span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-secondary-light dark:text-secondary-dark text-[20px]">
                  mail
                </span>
              </div>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 pl-10 placeholder:text-secondary-light"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
          </label>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-light dark:text-dark">
              Password
            </span>
            <a
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              href="#"
            >
              Change Password
            </a>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="px-5 py-2.5 text-sm font-medium text-secondary-light dark:text-secondary-dark hover:text-light dark:hover:text-dark transition-colors hover:cursor-pointer"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          form="profile-edit-form"
          disabled={!isValid}
          type="submit"
          className="px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-primary/20 hover:cursor-pointer disabled:cursor-not-allowed disabled:bg-primary/50  duration-200 ease-in-out"
        >
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
