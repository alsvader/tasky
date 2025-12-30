import { createContext } from "react";
import type { LoginFormInputs, SignupFormData } from "@/components/types";

export interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: (dataForm: LoginFormInputs) => void;
  signUp: (dataForm: SignupFormData) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
