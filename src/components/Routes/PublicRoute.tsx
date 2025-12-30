import type { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/hooks/useAuth";

export function PublicRoute({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    // Redirect to dashboard
    return <Navigate to="/" />;
  }

  return children ? <>{children}</> : <Outlet />;
}
