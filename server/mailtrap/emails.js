
import { VERIFICATION_EMAIL_TEMPLATE,WELCOME_EMAIL_TEMPLATE, RESET_PASSWRORD_TEMPLATE,SUCCESS_RESET_PASSWORD } from "./emailTemplate.js";
import { resend } from "./mailtrap.config.js";


export const sendVereficationEmail =  async (email, verificationToken) => {
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL, // Reemplaza con tu dirección de remitente verificada en Resend
      to: 'pablovukovich@gmail.com', // Resend espera un string o un array de strings
      subject: "Verifica tu dirección de correo electrónico",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationToken}",
        verificationToken
      ),
    });

    console.log("Correo de verificación enviado con Resend:", data);
  } catch (error) {
    console.error("Error al enviar correo de verificación con Resend:", error);
    throw new Error("No se pudo enviar el correo de verificación con Resend");
  }
};

export const sendWelcomeEmail =  async (email, username) => {
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL, // Reemplaza con tu dirección de remitente verificada en Resend
      to: 'pablovukovich@gmail.com',
      subject: `¡Bienvenido a KNEWS, ${username}!`,
      html: WELCOME_EMAIL_TEMPLATE.replace(/{username}/g, username) // Reemplaza todas las instancias de {username}
        .replace(/{email}/g, email),     // Reemplaza todas las instancias de {email}
    });

    console.log("Correo de bienvenida enviado con Resend:", data);
  } catch (error) {
    console.error("Error al enviar correo de bienvenida con Resend:", error);
    throw new Error("No se pudo enviar el correo de bienvenida con Resend");
  }
};

export const sentPasswordResetEmail = async (email, resetURL) => {
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL, // Reemplaza con tu dirección de remitente verificada en Resend
      to: email,
      subject: "Restablece tu contraseña",
      html: RESET_PASSWRORD_TEMPLATE.replace("{resetURL}", resetURL),
    });

    console.log("Correo de restablecimiento de contraseña enviado con Resend:", data);
  } catch (error) {
    console.error("Error al enviar el correo de restablecimiento de contraseña con Resend:", error);
    throw new Error(`Error al enviar el email de restablecimiento de contraseña con Resend: ${error}`);
  }
};

export const sendResetPasswordEmail =async (email) => {
  try {
    const data = await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL, // Reemplaza con tu dirección de remitente verificada en Resend
      to: email,
      subject: "Contraseña restablecida exitosamente",
      html: SUCCESS_RESET_PASSWORD,
    });

    console.log("Correo de restablecimiento de contraseña exitoso enviado con Resend:", data);
  } catch (error) {
    console.error("Error al enviar el correo de restablecimiento de contraseña exitoso con Resend:", error);
    throw new Error(`Error al enviar el email de restablecimiento de contraseña exitoso con Resend: ${error}`);
  }
};