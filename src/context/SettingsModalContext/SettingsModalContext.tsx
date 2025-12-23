import { createContext } from "react";

export interface SettingsModalContextValue {
  isSettingsOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const SettingsModalContext = createContext<
  SettingsModalContextValue | undefined
>({
  isSettingsOpen: false,
  onOpen: () => {},
  onClose: () => {},
});
