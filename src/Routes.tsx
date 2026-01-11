import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { ResetPassword } from "@/pages/ResetPassword";
import { ChangePassword } from "@/pages/ChangePassword";
import { Dashboard } from "@/pages/Dashboard";
import { RootLayout } from "@/components/RootLayout";
import { PageNotFound } from "@/components/PageNotFound";
import { PublicRoute } from "@/components/Routes/PublicRoute";
import { ProtectedRoute } from "@/components/Routes/ProtectedRoute";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Public routes, not available for authenticated users */}
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          {/* Private routes, available for authenticated and unauthenticated users */}
          <Route path="reset-password" element={<ResetPassword />} />

          {/* Private route for authenticated users */}
          <Route path="change-password" element={<ChangePassword />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
