import { RootLayout } from "./RootLayout";
import { Login } from "@pages/Login";
import { Signup } from "@pages/Signup";
import { Dashboard } from "@pages/Dashboard";
import { ThemeProvider } from "@context/ThemeProvider";
import { SettingsModalProvider } from "@context/SettingsModalContext/SettingsModalProvider";

function App() {
  return (
    <ThemeProvider>
      <SettingsModalProvider>
        <RootLayout>
          <Dashboard />
        </RootLayout>
      </SettingsModalProvider>
    </ThemeProvider>
  );
}

export default App;
