import {z} from 'zod'


export const registerSchema = z.object({
    username: z.string({
        required_error: "username required",
    }),
    email: z.string({
        required_error: "email requerido"
    }).email({
        required_error: "Email invalido"
    }),
    password: z.string({
        required_error: "Password required",
      }).min(6, {
        message: "La contraseña debe tener almenos 6 caracteres"
      }),
})

export const loginSchema = z.object({
    email: z
      .string({
        required_error: "Email es requerido",
      })
      .email({
        required_error: "Emial es invalido",
      }),
    password: z
      .string({
        required_error: "la contraseña es invalida",
      })
      .min(6, {
        message: "La contraseña debe tener almenos 6 caracteres",
      }),
  });
  