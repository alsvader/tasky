import { useEffect, useState, type PropsWithChildren } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";
import { AuthContext } from "@/context/Auth/AuthContext";
import { useProfile } from "@/hooks/useProfile";
import type {
  LoginFormInputs,
  SignupFormData,
  Profile,
} from "@/components/types";

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  const { fetchUser } = useProfile(session?.user.id);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
        return;
      }

      setSession(newSession);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session && !profile) {
      fetchUser().then((fetchedProfile) => {
        setProfile(fetchedProfile);
      });
    }
  }, [session, profile, fetchUser]);

  const signIn = async (dataForm: LoginFormInputs) => {
    const { data, error } = await supabase.auth.signInWithPassword(dataForm);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const signUp = async (dataForm: SignupFormData) => {
    const { email, password, fullname } = dataForm;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullname,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  };

  const signOut = async () => {
    // Implement sign-out logic here
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  };

  const updateProfile = async (profileUpdated: Profile) => {
    setProfile(profileUpdated);
  };

  return (
    <AuthContext.Provider
      value={{ session, profile, signIn, signUp, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
