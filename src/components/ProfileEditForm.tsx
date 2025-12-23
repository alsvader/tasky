import { useSettingsModal } from "@/hooks/useSettingsModal";
import { Modal } from "@/components/Modal";

export function ProfileEditForm() {
  const { isSettingsOpen, onClose } = useSettingsModal();

  return (
    <Modal isOpen={isSettingsOpen} onClose={onClose}>
      <Modal.Header>
        <div>
          <h3 className="text-xl font-bold text-light dark:text-dark">
            Update Profile
          </h3>
          <p className="text-sm text-secondary-light dark:text-secondary-dark mt-1">
            Manage your public profile and preferences.
          </p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-light dark:text-secondary-dark">
            Profile Picture
          </h4>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div
                className="size-20 rounded-full bg-cover bg-center ring-4 ring-background-light dark:ring-background-dark shadow-md"
                style={{
                  background:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZSzl3OZfsXHm3OY53hm0kPVXGvqSHj6VYgx7chdDXVByilViVX06zipLvCVXbCLKwliIeEAXhF_94bqE0yI7JuIqhvNUqrUXv256T0j3fGqDv36k-iiJoCDCaqdg6bjf6qE3uEwoVFOyetfnAGO2Z667KucQec2L0W49x-8Pu1esXwRrNtI_6Zlulv5AB3RAS3gZcvrT0nnNlI7IsXVN3iVa72bK_N5yeeojAd_jrTuYQePsFnSH0uIts0dlLmJaKI4nh7NI1Srjo")',
                }}
              ></div>
              <button className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-primary text-white size-7 ring-2 ring-card-light dark:ring-card-dark hover:bg-primary/90 transition-colors shadow-sm hover:cursor-pointer">
                <span className="material-symbols-outlined text-xs">edit</span>
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              <div className="flex flex-col items-center gap-3 min-[425px]:flex-row">
                <button className="px-4 py-2 text-sm font-medium text-light dark:text-dark bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors shadow-sm hover:cursor-pointer">
                  Upload
                </button>
                <button className="px-4 py-2 text-sm font-medium text-red-500 bg-transparent border border-transparent rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors hover:cursor-pointer">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-border-light dark:bg-border-dark"></div>
        <form className="flex flex-col gap-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary-light dark:text-secondary-dark">
            Personal Information
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-light dark:text-dark">
                First Name
              </span>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 placeholder:text-secondary-light pl-3"
                type="text"
                value="Alex"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-light dark:text-dark">
                Last Name
              </span>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 placeholder:text-secondary-light pl-3"
                type="text"
                value="Morgan"
              />
            </label>
          </div>
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-light dark:text-dark">
              Email Address
            </span>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-secondary-light dark:text-secondary-dark text-[20px]">
                  mail
                </span>
              </div>
              <input
                className="form-input w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-light dark:text-dark focus:border-primary focus:ring-primary/50 text-sm py-2.5 pl-10 placeholder:text-secondary-light"
                type="email"
                value="alex.morgan@company.com"
              />
            </div>
          </label>
          <div className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-light dark:text-dark">
              Password
            </span>
            <a
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              href="#"
            >
              Change Password
            </a>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="px-5 py-2.5 text-sm font-medium text-secondary-light dark:text-secondary-dark hover:text-light dark:hover:text-dark transition-colors hover:cursor-pointer"
          onClick={onClose}
        >
          Cancel
        </button>
        <button className="px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/90 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-primary/20 hover:cursor-pointer">
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
