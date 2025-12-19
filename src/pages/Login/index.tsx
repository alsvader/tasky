import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import TaskyIcon from "../../assets/tasky-icon.webp";
import TaskyIconDark from "../../assets/tasky-icon-dark.webp";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center pt-20 px-4">
      <div className="flex h-full grow flex-col w-full max-w-md">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex items-center justify-center mb-6">
            <img
              src={theme === "light" ? TaskyIcon : TaskyIconDark}
              alt="Tasky: Simple tasks, powerful flow"
              className="w-5/6 md:w-4/5"
            />
          </div>

          <div className="w-full bg-white dark:bg-[#1a2530] rounded-xl shadow-lg p-6 md:p-8">
            <h1 className="text-slate-900 dark:text-white tracking-light text-2xl md:text-3xl font-bold leading-tight text-center">
              Welcome back!
            </h1>

            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-normal leading-normal pb-6 pt-2 text-center">
              Log in to your account to continue.
            </p>

            <div className="flex flex-col w-full gap-4">
              <div className="flex w-full flex-col">
                <label className="flex flex-col w-full">
                  <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                    Email
                  </p>
                  <div className="relative flex w-full items-center">
                    <span className="material-symbols-outlined absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none">
                      mail
                    </span>
                    <input
                      name="email"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-card-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-secondary-dark pl-10 pr-4 text-base font-normal leading-normal"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </label>
              </div>

              <div className="flex w-full flex-col">
                <label className="flex flex-col w-full">
                  <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                    Password
                  </p>
                  <div className="relative flex w-full items-center">
                    <span className="material-symbols-outlined absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none">
                      lock
                    </span>
                    <input
                      name="password"
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-border-dark bg-slate-50 dark:bg-card-dark focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-secondary-dark pl-10 pr-10 text-base font-normal leading-normal"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      aria-label="Toggle password visibility"
                      className="absolute top-3.5 right-3 text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary"
                      onClick={togglePassword}
                    >
                      <span
                        className="material-symbols-outlined"
                        data-icon="Eye"
                        data-size="24px"
                        data-weight="regular"
                      >
                        visibility
                      </span>
                    </button>
                  </div>
                </label>
              </div>

              <div className="flex justify-end w-full">
                <a
                  className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary rounded-sm"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>

              <button className="flex items-center justify-center w-full h-12 px-6 bg-primary text-white rounded-lg text-base font-bold leading-normal hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary transition-colors duration-200">
                Log In
              </button>
            </div>
            <div className="flex justify-center mt-6">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Don't have an account?{" "}
                <a
                  className="font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:ring-primary rounded-sm"
                  href="#"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
