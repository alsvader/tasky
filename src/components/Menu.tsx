import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { useSettingsModal } from "@/hooks/useSettingsModal";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/utils/cn";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const { onOpen } = useSettingsModal();
  const { signOut } = useAuth();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const onSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    toggleMenu();
    onOpen();
  };

  const onSignOut = async () => {
    try {
      await signOut();
      toast.success("See you soon!");
    } catch (error) {
      toast.error("An error occurred during sign out.");
    }
  };

  return (
    <div className="relative group" ref={menuRef}>
      <div
        aria-haspopup="menu"
        className="list-none [&::-webkit-details-marker]:hidden cursor-pointer outline-none"
        onClick={toggleMenu}
        role="button"
      >
        <div
          className="rounded-full size-11 flex items-center justify-center bg-gray-200 dark:bg-card-dark relative"
          data-alt="User profile picture, abstract placeholder"
        >
          <span className="material-symbols-outlined">account_box</span>
        </div>
      </div>
      <div
        className={cn(
          'hidden absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-xl focus:outline-none z-50 overflow-hidden"',
          {
            block: isOpen,
          }
        )}
        role="menu"
      >
        <div className="p-1">
          <button
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-text-light dark:text-text-dark rounded-lg transition-colors hover:cursor-pointer hover:bg-background-light dark:hover:bg-background-dark`}
            role="menuitem"
            onClick={onSettings}
          >
            <span className="material-symbols-outlined text-[20px] text-text-secondary-light dark:text-text-secondary-dark">
              settings
            </span>
            Settings
          </button>
          <div className="h-px bg-border-light dark:bg-border-dark my-1 mx-2" />
          <button
            className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-500 rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors hover:cursor-pointer"
            role="menuitem"
            onClick={onSignOut}
          >
            <span className="material-symbols-outlined text-[20px]">
              logout
            </span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
