import { useState, type PropsWithChildren } from "react";
import { AuthContext } from "@/context/Auth/AuthContext";
import { type LoginFormInputs, type SignupFormData } from "@/components/types";

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = (dataForm: LoginFormInputs) => {
    // Implement sign-in logic here
    setIsAuthenticated(true);
  };

  const signUp = (dataForm: SignupFormData) => {
    // Implement sign-up logic here
    setIsAuthenticated(true);
  };

  const signOut = () => {
    // Implement sign-out logic here
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
