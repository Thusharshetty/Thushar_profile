import { create } from 'zustand';
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/index.js";


const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZindex: INITIAL_Z_INDEX + 1,

    openWindow: (windowkey, data = null) => set((state) => {
        const win = state.windows[windowkey];
        if (win) {
            win.isOpen = true;
            win.zIndex = state.nextZindex;
            win.data = data ?? win.data;
            state.nextZindex++;
        }
    }),

    closeWindow: (windowkey) => set((state) => {
        const win = state.windows[windowkey];
        if (win) {
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null;
        }
    }),

    focusWindow: (windowkey) => set((state) => {
        const win = state.windows[windowkey];
        if (win) {
            win.zIndex = state.nextZindex++;
        }
    })
})));

export default useWindowStore;
