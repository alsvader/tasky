import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./Routes";
import { AuthProvider } from "@/context/Auth/AuthProvider";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SettingsModalProvider } from "@/context/SettingsModalContext/SettingsModalProvider";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SettingsModalProvider>
          <AppRoutes />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5500,
            }}
          />
        </SettingsModalProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
