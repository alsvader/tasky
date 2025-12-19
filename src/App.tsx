import { RootLayout } from "./RootLayout";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { ThemeProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <Dashboard />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
