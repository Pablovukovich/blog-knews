import { create } from "zustand";
import api from "@/lib/axios";

const useEventStore = create((set) => ({
  eventos: [],
  loading: false,
  error: null,

  deadlineEvent: async () => {
    set({ loading: true, error: null });

    try {
      const res = await api.get(
        "/deadline-events?fields[0]=paisEstado&fields[1]=estadio&fields[2]=fecha&fields[3]=dia&fields[4]=horario&fields[5]=activo&sort=fecha:desc"
      );
      const data = res.data?.data || [];

      set({ eventos: data, loading: false });
    } catch (error) {
      console.error("Error al obtener eventos:", error);
      set({ error: "Error al obtener los eventos", loading: false });
    }
  },
}));

export default useEventStore;
