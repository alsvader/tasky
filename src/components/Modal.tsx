import { useEffect, type PropsWithChildren } from "react";
import { useSettingsModal } from "../hooks/useSettingsModal";
import { cn } from "../utils/cn";

export interface ModalProps
  extends PropsWithChildren,
    React.ComponentProps<"div"> {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  ...props
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-all",
        className
      )}
      role="dialog"
      {...props}
    >
      <div className="w-full max-w-lg transform overflow-hidden rounded-xl bg-card-light dark:bg-card-dark shadow-2xl ring-1 ring-border-light dark:ring-border-dark transition-all">
        {children}
      </div>
    </div>
  );
}

interface ModalHeaderProps
  extends PropsWithChildren,
    React.ComponentProps<"div"> {}

function ModalHeader({ children, className }: ModalHeaderProps) {
  const { onClose } = useSettingsModal();

  return (
    <div
      className={cn(
        "flex items-center justify-between border-b border-border-light dark:border-border-dark px-6 py-5",
        className
      )}
    >
      {children}
      <button
        className="flex items-center justify-center rounded-lg p-2 text-secondary-light dark:text-secondary-dark hover:bg-background-light dark:hover:bg-background-dark hover:text-light dark:hover:text-dark transition-colors hover:cursor-pointer"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>
    </div>
  );
}

interface ModalBodyProps
  extends PropsWithChildren,
    React.ComponentProps<"div"> {}

function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={cn("p-6 space-y-8", className)}>{children}</div>;
}

interface ModalFooterProps
  extends PropsWithChildren,
    React.ComponentProps<"div"> {}

function ModalFooter({ children, className }: ModalFooterProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-3 px-6 py-4 bg-background-light dark:bg-background-dark/50 border-t border-border-light dark:border-border-dark",
        className
      )}
    >
      {children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
