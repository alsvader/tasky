import { useEffect, useState, type PropsWithChildren } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/utils/supabase";
import { AuthContext } from "@/context/Auth/AuthContext";
import { type LoginFormInputs, type SignupFormData } from "@/components/types";

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
        return;
      }

      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = (dataForm: LoginFormInputs) => {
    // Implement sign-in logic here
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

  return (
    <AuthContext.Provider value={{ session, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
