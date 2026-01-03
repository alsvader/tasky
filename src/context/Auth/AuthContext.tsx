import { createContext } from "react";
import type { Session, AuthResponse } from "@supabase/supabase-js";
import type { LoginFormInputs, SignupFormData } from "@/components/types";

export interface AuthContextProps {
  session: Session | null;
  signIn: (dataForm: LoginFormInputs) => void;
  signUp: (dataForm: SignupFormData) => Promise<AuthResponse["data"]>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
