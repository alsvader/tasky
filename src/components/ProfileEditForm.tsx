import { useState, useRef } from "react";
import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSettingsModal } from "@/hooks/useSettingsModal";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import {
  type ProfileFormInputs,
  ProfileFormSchema,
  type Profile,
} from "@/components/types";

import UserIcon from "@/assets/user.png";

export function ProfileEditForm() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const { isSettingsOpen, onClose } = useSettingsModal();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { profile, session, updateProfile } = useAuth();
  const { update, updateProfileImage } = useProfile(session?.user.id);

  const avatar = imagePreview
    ? imagePreview
    : profile?.photo_url
    ? profile?.photo_url
    : UserIcon;

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<ProfileFormInputs>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      fullname: profile?.fullname,
    },
  });

  const onSubmit: SubmitHandler<ProfileFormInputs> = async (data) => {
    console.log("Update profile:", data);
    try {
      const profileUpdated = {
        ...profile,
        fullname: data.fullname,
      };
      await update(profileUpdated as Profile);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Something went wrong, please try again.");
    }
  };

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setFileSelected(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const cancelImageSelection = () => {
    setImagePreview(null);
    setFileSelected(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const uploadImage = async () => {
    try {
      if (fileSelected) {
        console.log("Selected file:", fileSelected);

        // Handle file upload here
        const profileUpdated = await updateProfileImage(
          fileSelected,
          profile as Profile
        );
        setImagePreview(null);
        setFileSelected(null);
        updateProfile({
          ...profileUpdated,
        } as Profile);
        toast.success("Profile image updated successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      console.log(error);
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
                  src={avatar}
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
                  <button
                    className="px-4 py-2 text-sm font-medium text-light dark:text-dark bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors shadow-sm hover:cursor-pointer"
                    onClick={uploadImage}
                  >
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
          <div className="grid grid-cols-1">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-light dark:text-dark">
                Full Name
              </span>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 placeholder:text-secondary-light pl-3"
                type="text"
                {...register("fullname", { required: true })}
                defaultValue={profile?.fullname}
              />
            </label>
          </div>
          {/* <label className="flex flex-col gap-1.5">
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
          </label> */}
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-light dark:text-dark">
              Password
            </span>
            <Link
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              to="/reset-password"
            >
              Change Password
            </Link>
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
        <Button
          form="profile-edit-form"
          disabled={!isValid}
          type="submit"
          className="px-5 py-2.5 text-sm shadow-sm w-fit"
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
