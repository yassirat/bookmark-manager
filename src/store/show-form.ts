import { create } from 'zustand';

interface FormStore {
  show: boolean;
  showForm: () => void;
}

export const useShowStore = create<FormStore>((set) => ({
  show: false,
  showForm: () => set((state) => ({ show: !state.show })),
}));
