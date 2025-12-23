import { useState, type PropsWithChildren } from "react";
import { SettingsModalContext } from "./SettingsModalContext";

export function SettingsModalProvider({ children }: PropsWithChildren) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const onOpen = () => setIsSettingsOpen(true);
  const onClose = () => setIsSettingsOpen(false);

  return (
    <SettingsModalContext.Provider value={{ isSettingsOpen, onOpen, onClose }}>
      {children}
    </SettingsModalContext.Provider>
  );
}
