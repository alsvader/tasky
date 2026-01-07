import { supabase } from "@/utils/supabase";
import { type Profile } from "@/components/types";

export const useProfile = (userId = "") => {
  const fetchUser = async () => {
    if (!userId) {
      return;
    }

    try {
      const { data: fetchedProfile, error } = await supabase
        .from("Profile")
        .select()
        .eq("id", userId);

      if (error) {
        throw new Error(error.message);
      }

      return fetchedProfile[0] || null;
    } catch (error) {
      console.error("Error fetching profile:", error);
      return null;
    }
  };

  const update = async (profileUpdated: Profile) => {
    const { error } = await supabase
      .from("Profile")
      .update(profileUpdated)
      .eq("id", profileUpdated.id);

    if (error) {
      throw new Error(error.message);
    }
  };

  const deleteProfileImage = async (path_image: string) => {
    const { error } = await supabase.storage
      .from("avatars")
      .remove([path_image]);

    if (error) {
      throw new Error(error.message);
    }
  };

  const updateProfileImage = async (image: File, profile: Profile) => {
    if (!image) {
      throw new Error("Image is required");
    }

    console.log("profile inside updateProfile image", profile);

    if (!userId) {
      throw new Error("User ID is required");
    }

    const fileExt = image.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const path = `${userId}/${fileName}`;

    console.log("path", path);

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(path, image, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }

    if (profile.photo_path) {
      await deleteProfileImage(profile.photo_path);
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("avatars").getPublicUrl(data.path);

    const profileUpdate = {
      ...profile,
      photo_url: publicUrl,
      photo_path: data.path,
    };

    await update(profileUpdate as Profile);

    return profileUpdate;
  };

  return { fetchUser, update, updateProfileImage };
};
