import create from 'zustand'

export const useStore = create((set) => ({
  menu: false,
  toggleMenu: () => set((state) => ({ menu: !state.menu })),
}))
