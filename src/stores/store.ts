import { create } from "zustand";

type LoadConfig = {
  ready: boolean;
};

export const useLoadStore = create<LoadConfig>((set) => ({
  ready: false,
}));
