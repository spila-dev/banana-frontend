import { create } from "zustand";

import { AuthStore } from "~/types";

import { handlers } from "./handlers";
import { initialState } from "./initialState";

export const useAuthStore = create<AuthStore>((set) => ({
  ...initialState,
  ...handlers(set),
}));
