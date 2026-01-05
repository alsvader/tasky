import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { type Profile } from "@/components/types";

export const useProfile = (userId = "") => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchUser = async () => {
    if (profile) {
      return;
    }

    if (!userId) {
      throw new Error("User ID is required");
    }

    const { data: fetchedProfile, error } = await supabase
      .from("Profile")
      .select()
      .eq("id", userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    setProfile(fetchedProfile);
  };

  const updateProfile = async (profileUpdated: Profile) => {
    const { error } = await supabase
      .from("Profile")
      .update({
        fullname: profileUpdated.fullname,
      })
      .eq("id", profileUpdated.id);

    if (error) {
      throw new Error(error.message);
    }

    setProfile({ ...profileUpdated });
  };

  return { profile, fetchUser, updateProfile };
};
