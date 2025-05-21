import { create } from 'zustand';
import { persist  } from 'zustand/middleware';
import {registrarUser, loginUser, verifyEmail} from '../services/auth.jsx'
import { checkAuth as checkAuthAPI } from '../services/auth.jsx';

const useAuthStore = create(persist((set) => ({

    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,

    register: async (userData)=>{
        set({loading:true, error: null})
        try{
            const data = await registrarUser(userData)
            set({user: data.user, isAuthenticated: true, loading: false})
            return data


        }catch(error){
            set({ error: error.message, loading: false });
          throw error;
        }
    },

    login: async (credenciales) => {
        set({loading:true, error: null})
        try{
            const data = await loginUser(credenciales)
            set({user: data.user, isAuthenticated: true, loading: false})
            return data
        }catch(error){
            set({ error: error.message, loading: false });
            throw error;
        }

    },

    verifyEmail: async (code) => {
        set({loading:true, error: null})
        try{
            const data = await verifyEmail(code)
            set({user: data.user, isAuthenticated: true, loading: false})
            return data
        }catch(error){
            set({ error: error.message, loading: false });
            throw error;
        }

    },

    checkAuth: async () => {
        set({ isCheckingAuth: true, error: null });
        try {
          const data = await checkAuthAPI();
          set({ user: data.user, isAuthenticated: true, isCheckingAuth: false });
        } catch (error) {
          set({
            isAuthenticated: false,
            user: null,
            error: error.message || 'Error al autenticar',
            isCheckingAuth: false,
            isAuthenticated: false,
          });
        }
      },

    logout: () => set({ isAuthenticated: false, user: null, error: null }),   


})))

export default useAuthStore;