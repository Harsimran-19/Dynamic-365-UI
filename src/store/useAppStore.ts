import { create } from 'zustand';

type AppStore = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }), 
}));