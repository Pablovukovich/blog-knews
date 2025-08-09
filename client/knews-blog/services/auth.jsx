import api from "@/lib/axios";

// Registrar usuario en Strapi
export const registrarUser = async ({ username, email, password }) => {
  try {
    const response = await api.post("/auth/local/register", {
      username,
      email,
      password,
    });
    return response.data; // contiene { jwt, user }
  } catch (error) {
    throw error.response?.data?.error || { message: "Error al registrar" };
  }
};

// Iniciar sesión en Strapi
export const loginUser = async ({ identifier, password }) => {
  try {
    const response = await api.post("/auth/local", {
      identifier, // puede ser username o email
      password,
    });
    return response.data; // contiene { jwt, user }
  } catch (error) {
    throw error.response?.data?.error || { message: "Error al iniciar sesión" };
  }
};


// export const verifyEmail = async (code) => {
//     try {
//         const response = await api.post("/auth/verificar-email", { code });
//         return response.data;
//     } catch (error) {
//         throw error.response ? error.response.data : error;
//     }
// }

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
};