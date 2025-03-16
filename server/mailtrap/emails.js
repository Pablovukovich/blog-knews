import { mailTrapClient, sender } from "../mailtrap/mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE, RESET_PASSWRORD_TEMPLATE,SUCCESS_RESET_PASSWORD } from "./emailTemplate.js";

export const sendVereficationEmail = async (email, verificationToken) => {
  const recipients = [
    {
      email,
    },
  ];

  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verifica tu dirección de correo electrónico",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationToken}",
        verificationToken
      ),
      category: "Verificación de Correo Electrónico",
    });

    console.log("email verificado", response);
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo enviar el correo de verificación");
  }
};

export const sendWelcomeEmail = async (email, username) => {
  const recipient = [{ email }];
  try {
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "59a6de24-cf42-43f9-8b3c-b240147ee9a5",
      template_variables: {
        company_info_name: "KNEWS",
        name: username,
      },
    });

    console.log("Correo de bienvenida enviado", response);
  } catch (error) {
    console.error(error);
    throw new Error("No se pudo enviar el correo de bienvenida");
  }
};

export const sentPasswordResetEmail = async (email, resetURL) =>{
    const recipient = [{email}]

    try{
      const response = await mailTrapClient.send({
        from: sender,
        to: recipient,
        subject: "Restablece tu contraseña",
        html: RESET_PASSWRORD_TEMPLATE.replace("{resetURL}", resetURL),
        category: "Password Reset"
      })


    }catch(error){
      console.log('error al enviar  el email de restablecimiento de contraseña', error)
      throw new Error(`Error al enviar  el email restablecimiento de contraseña: ${error}`)
    }
}

export const sendResetPasswordEmail = async (email) =>{
  const recipient = [{email}]

  try{
    const response = await mailTrapClient.send({
      from: sender,
      to: recipient,
      subject: "password reset successfuly",
      html: SUCCESS_RESET_PASSWORD,
      category: "Password Reset"
    })
  }catch(error){
    console.error(`Error al enviar el email de restablecimiento de contraseña`, error)
    throw new Error(`Error al enviar el email de restablecimiento de contraseña: ${error}`);
  }
}