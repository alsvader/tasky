import { Toaster } from "react-hot-toast";
import { RootLayout } from "@/components/RootLayout";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { Dashboard } from "@/pages/Dashboard";
import { ResetPassword } from "@/pages/ResetPassword";
import { ChangePassword } from "@/pages/ChangePassword";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SettingsModalProvider } from "@/context/SettingsModalContext/SettingsModalProvider";

function App() {
  return (
    <ThemeProvider>
      <SettingsModalProvider>
        <RootLayout>
          <Dashboard />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5500,
            }}
          />
        </RootLayout>
      </SettingsModalProvider>
    </ThemeProvider>
  );
}

export default App;
