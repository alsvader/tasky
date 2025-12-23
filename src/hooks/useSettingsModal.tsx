import { useContext } from "react";
import {
  SettingsModalContext,
  type SettingsModalContextValue,
} from "../context/SettingsModalContext/SettingsModalContext";

export function useSettingsModal() {
  const context = useContext<SettingsModalContextValue | undefined>(
    SettingsModalContext
  );

  if (!context) {
    throw new Error(
      "useSettingsModal must be used within a SettingsModalProvider"
    );
  }

  return context;
}
