import { create } from 'zustand';

interface userRentModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useUserRentModal = create<userRentModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default useUserRentModal;