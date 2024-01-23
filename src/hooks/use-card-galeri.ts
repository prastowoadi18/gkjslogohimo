import { create } from "zustand";

export type Img = {
  id: number;
  title: string;
};

type CardModalGaleriStore = {
  imgSelected?: number;
  data?: Img[];
  isOpen: boolean;
  onOpen: (data: Img[], imgSelected?: number) => void;
  onClose: () => void;
};

export const useCardGaleri = create<CardModalGaleriStore>((set) => ({
  imgSelected: undefined,
  data: [{ id: 0, title: "" }],
  isOpen: false,
  onOpen: (data: Img[], imgSelected?: number) =>
    set({ isOpen: true, data, imgSelected }),
  onClose: () =>
    set({
      isOpen: false,
      data: [{ id: 0, title: "" }],
      imgSelected: undefined,
    }),
}));
