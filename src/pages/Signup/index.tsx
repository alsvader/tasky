export function Signup() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <header className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between whitespace-nowrap p-6 lg:px-10 lg:py-5">
          <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              ProductivityApp
            </h2>
          </div>
        </header>
        <main className="flex flex-1">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2">
            <div className="relative hidden h-full items-center justify-center bg-gray-100 dark:bg-black/20 lg:flex">
              <div className="w-full max-w-md p-8">
                <div
                  className="aspect-square w-full rounded-xl bg-cover bg-center bg-no-repeat"
                  data-alt="Abstract illustration of geometric shapes and lines in shades of blue and gray, representing productivity and organization."
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmMgjSD0y5jVscqxL0rljzM8IC5tYfSiobGznwS5dCOgCdqFGoVPv0TLxdqqbgVVtU0YS_44D9kj2R7-rU76Ogr1VY9OJtN55txMWRxks7YFhoGNnmF9tQZOqa6YLKGt4at45Tdv-aNa575Rjhq9XbPstB_q2Pc2H9XR6Ao2Eiv_sE7oOumQOYb5EkGAW2ucM_wWiHTvOWoH9hqyRbxxYfRWgx2cZ80sNBi6QgB_4PxEw5bQvirZXYOzPDmOokMo7Nv_EZZMscL_JG")',
                  }}
                ></div>
              </div>
            </div>
            <div className="flex min-h-full w-full items-center justify-center bg-background-light dark:bg-background-dark px-4 py-20 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark sm:text-4xl">
                      Get Started
                    </h1>
                    <p className="text-base font-normal leading-normal text-label-light dark:text-label-dark">
                      Start organizing your life in minutes.
                    </p>
                  </div>
                </div>
                <form action="#" className="space-y-6" method="POST">
                  <div className="flex flex-col gap-4">
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Full Name
                      </p>
                      <input
                        className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                        placeholder="Enter your full name"
                        type="text"
                        value=""
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Email Address
                      </p>
                      <input
                        className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                        placeholder="Enter your email address"
                        type="email"
                        value=""
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Password
                      </p>
                      <div className="relative flex items-center">
                        <input
                          className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 pr-10 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-border-dark dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                          placeholder="Enter your password"
                          type="password"
                          value=""
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center pr-3 text-label-light dark:text-label-dark"
                          type="button"
                        >
                          <span
                            className="material-symbols-outlined text-xl"
                            data-icon="visibility"
                          >
                            visibility
                          </span>
                        </button>
                      </div>
                    </label>
                    <label className="flex flex-col">
                      <p className="pb-2 text-sm font-medium leading-normal text-label-light dark:text-label-dark">
                        Confirm Password
                      </p>
                      <div className="relative flex items-center">
                        <input
                          className="form-input flex h-12 w-full flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-input-bg-light p-3 pr-10 text-base font-normal leading-normal text-text-light placeholder:text-label-light/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-error dark:bg-input-bg-dark dark:text-text-dark dark:placeholder:text-label-dark/70 dark:focus:border-primary"
                          placeholder="Confirm your password"
                          type="password"
                          value=""
                        />
                      </div>
                      <p className="mt-2 text-sm text-error">
                        Passwords do not match.
                      </p>
                    </label>
                  </div>
                  <button
                    className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-semibold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark hover:cursor-pointer"
                    type="submit"
                  >
                    Create Account
                  </button>
                  <div className="text-center">
                    <p className="text-sm text-label-light dark:text-label-dark">
                      Already have an account?
                      <a
                        className="font-medium text-primary hover:underline ml-1"
                        href="#"
                      >
                        Sign In
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
