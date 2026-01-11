import { Outlet, useLocation } from "react-router";
import { Header } from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils/cn";

export function RootLayout() {
  const { session: isAuthenticated } = useAuth();
  const { theme } = useTheme();

  const location = useLocation();
  const isResetPassword =
    location.pathname === "/reset-password" ||
    location.pathname === "/change-password";

  return (
    <main
      className={cn(
        "w-full min-h-screen bg-background-light dark:bg-background-dark text-light dark:text-dark font-display transition-colors duration-200 ease-in-out",
        theme
      )}
    >
      {isAuthenticated && !isResetPassword && <Header />}
      <Outlet />
    </main>
  );
}
