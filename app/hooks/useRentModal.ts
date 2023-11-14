// "zustand" enables you to share state between different parts of your application
import { create } from "zustand";


interface RentModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),

}))


export default useRentModal;
