import { atom } from "recoil";

export const modal = atom<any>({
  key: "modal",
  default: false,
});
