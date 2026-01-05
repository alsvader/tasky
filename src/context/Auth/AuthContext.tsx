import { createContext } from "react";
import type { Session, AuthResponse } from "@supabase/supabase-js";
import type {
  LoginFormInputs,
  SignupFormData,
  Profile,
} from "@/components/types";

export interface AuthContextProps {
  session: Session | null;
  profile: Profile | null;
  signIn: (dataForm: LoginFormInputs) => Promise<AuthResponse["data"]>;
  signUp: (dataForm: SignupFormData) => Promise<AuthResponse["data"]>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
