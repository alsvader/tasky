import { BrowserRouter, Routes, Route } from "react-router";
import { RootLayout } from "@/components/RootLayout";
import { PageNotFound } from "@/components/PageNotFound";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { ResetPassword } from "@/pages/ResetPassword";
import { ChangePassword } from "@/pages/ChangePassword";
import { Dashboard } from "@/pages/Dashboard";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* Protected routes */}
          <Route index element={<Dashboard />} />
          <Route path="change-password" element={<ChangePassword />} />

          {/* Fallback route */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
