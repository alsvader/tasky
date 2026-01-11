import { createContext } from "react";
import type { Session, AuthResponse } from "@supabase/supabase-js";
import type {
  LoginFormInputs,
  SignupFormData,
  Profile,
  ChangePasswordFormData,
} from "@/components/types";

export interface AuthContextProps {
  session: Session | null;
  profile: Profile | null;
  isLoading: boolean;
  signIn: (dataForm: LoginFormInputs) => Promise<AuthResponse["data"]>;
  signUp: (dataForm: SignupFormData) => Promise<AuthResponse["data"]>;
  signOut: () => Promise<void>;
  changePassword: (dataForm: ChangePasswordFormData) => Promise<void>;
  updateProfile: (profileUpdated: Profile) => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
