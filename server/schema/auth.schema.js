import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
      required_error: "username required",
    })
    .min(3, {
      message: "El nombre de usuario debe tener al menos 3 caracteres",
    })
    .max(20, {
      message: "El nombre de usuario no puede exceder los 20 caracteres",
    }),
    email: z.string({
      required_error: "email requerido",
    })
    .min(1, "email requerido")
    .email({
      required_error: "Email invalido",
    }),
  password: z.string({
      required_error: "Password required",
    })
    .min(6, {
      message: "La contraseña debe tener almenos 6 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z.string({
      required_error: "Email es requerido",
    })
    .email({
      required_error: "Emial es invalido",
    }),
  password: z.string({
      required_error: "la contraseña es invalida",
    })
    .min(6, {
      message: "La contraseña debe tener almenos 6 caracteres",
    }),
});
