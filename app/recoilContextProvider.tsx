"use client";

import { DEFAULT_SETTINGS } from "@/types/bf-settings";
import { RecoilRoot, atom } from "recoil";
export const settingState = atom({
  key: "Settings",
  default: DEFAULT_SETTINGS,
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}