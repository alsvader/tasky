import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./Routes";
import { ThemeProvider } from "@/context/ThemeProvider";
import { SettingsModalProvider } from "@/context/SettingsModalContext/SettingsModalProvider";

function App() {
  return (
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
  );
}

export default App;
