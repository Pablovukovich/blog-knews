import { create } from 'zustand';
import api from "@/lib/axios";

const useSlideHomeStore = create((set) => ({
  sliders: [],
  loading: false,
  error: null,

   fetchSliders: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/api/sliders?populate=*");
      set({ sliders: res.data.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }
}));

export default useSlideHomeStore;