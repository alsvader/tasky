import { RootLayout } from "@/components/RootLayout";
import { Login } from "@/pages/Login";
import { Signup } from "@/pages/Signup";
import { Dashboard } from "@/pages/Dashboard";
import { ResetPassword } from "@/pages/ResetPassword";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SettingsModalProvider } from "@/context/SettingsModalContext/SettingsModalProvider";

function App() {
  return (
    <ThemeProvider>
      <SettingsModalProvider>
        <RootLayout>
          <ResetPassword />
        </RootLayout>
      </SettingsModalProvider>
    </ThemeProvider>
  );
}

export default App;
