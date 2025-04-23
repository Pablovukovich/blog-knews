import api from "@/lib/axios";

//funciones para hacer las llamadas a los endpoints de backend:
// registrar usuario, login, verificar email
export const registrarUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const loginUser = async (credenciales) => {
  try {
    const response = await api.post("/auth/login", credenciales);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const verifyEmail = async (code) => {
    try {
        const response = await api.post("/auth/verificar-email", { code });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}

export const checkAuth = async () => {
    try {
        const response = await api.get("/auth/check-auth");
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}

export const logoutUser = async () => {
    try {
        const response = await api.post("/auth/logout");
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error;
    }
}