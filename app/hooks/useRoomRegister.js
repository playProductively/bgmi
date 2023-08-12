import { create } from "zustand";

const useRoomRegister = create((set) => ({
  isOpen: false,
  fee: 0,
  onOpen: (rate) => set({ isOpen: true, fee: rate }),
  onClose: () => set({ isOpen: false, fee: 0 }),
}));

export default useRoomRegister;
