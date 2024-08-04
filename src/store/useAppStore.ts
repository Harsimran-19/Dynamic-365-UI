// import { create } from 'zustand';

// interface AppState {
//   sidebarOpen: boolean;
//   toggleSidebar: () => void;
// }

// export const useAppStore = create<AppState>((set) => ({
//   sidebarOpen: false,
//   toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
// }));

// src/store/useAppStore.ts
import { create } from 'zustand';

type AppStore = {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void; // Add this line
};

export const useAppStore = create<AppStore>((set) => ({
  sidebarOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }), // Add this line
}));