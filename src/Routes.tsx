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
          {/* Public routes */}
          <Route element={<PublicRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
