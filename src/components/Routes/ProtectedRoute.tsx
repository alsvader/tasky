import type { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const { session: isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login
    return <Navigate to="/login" />;
  }

  return children ? <>{children}</> : <Outlet />;
}
