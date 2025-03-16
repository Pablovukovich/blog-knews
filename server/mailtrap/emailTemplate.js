export const RESET_PASSWRORD_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecimiento de Contraseña</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #170c10;
            color: #ffffff;
            text-align: center;
            padding: 40px;
        }
        .container {
            max-width: 500px;
            margin: auto;
            background: #1e1215;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
        }
        h1 {
            color: #f79aaf;
        }
        p {
            font-size: 16px;
            color: #dddddd;
        }
        .button {
            background-color: #f79aaf;
            color: #170c10;
            padding: 12px 20px;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #aaaaaa;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Solicitud de Restablecimiento de Contraseña</h1>
        <p>Hemos recibido una solicitud para restablecer tu contraseña en <strong>Knews</strong>. Si no fuiste tú, puedes ignorar este mensaje.</p>
        <p>Para cambiar tu contraseña, haz clic en el siguiente botón:</p>
        <a href="{resetURL}" class="button">Restablecer Contraseña</a>
        <p>Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:</p>
        <p>{resetLink}</p>
        <div class="footer">
            <p>&copy; 2025 Knews. Todos los derechos reservados.</p>
        </div>
    </div>
</body>
</html>


`

export const SUCCESS_RESET_PASSWORD = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contraseña Restablecida</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; background-color: #170c10; color: white; padding: 20px;">
    <h2 style="color: #dd9faf;">¡Tu contraseña ha sido cambiada!</h2>
    <p>Hola,</p>
    <p>Queremos informarte que tu contraseña ha sido restablecida con éxito.</p>
    <p>Si no realizaste esta acción, por favor contáctanos de inmediato.</p>
    <p>Gracias por usar <strong>Knews</strong>.</p>
    <p>Saludos,</p>
    <p><strong>Knews Team</strong></p>
</body>
</html>

`

export const verifyEmail = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Correo Electrónico</title>
</head>
<body style="font-family: Arial, sans-serif; text-align: center; background-color: #170c10; color: white; padding: 20px;">
    <h2 style="color: #f79aaf;">Verifica tu dirección de correo</h2>
    <p>Hola,</p>
    <p>Gracias por registrarte en <strong>Knews</strong>. Antes de empezar, verifica tu dirección de correo electrónico haciendo clic en el botón de abajo:</p>
    <a href="{{verificationLink}}" style="background-color: #f79aaf; color: #170c10; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verificar Email</a>
    <p>Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:</p>
    <p style="color: #f79aaf;">{{verificationLink}}</p>
    <p>Este enlace expirará en 24 horas.</p>
    <p>Gracias,</p>
    <p><strong>Knews Team</strong></p>
</body>
</html>


`


export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verifica tu correo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #170c10;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .container {
            background-color: #dd9faf;
            padding: 20px;
            border-radius: 10px;
            max-width: 400px;
            margin: auto;
        }
        .header {
            font-size: 24px;
            font-weight: bold;
            color: #170c10;
        }
        .token {
            font-size: 28px;
            font-weight: bold;
            color: #f79aaf;
            background-color: #ffffff;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
            margin-top: 10px;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #170c10;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">¡Verifica tu correo electrónico!</div>
        <p>Gracias por registrarte en <strong>KNEWS</strong>. Para completar tu registro, usa el siguiente código de verificación:</p>
        <div class="token">{verificationToken}</div>
        <p>Este código expirará en <strong>10 minutos</strong>.</p>
        <p class="footer">Si no solicitaste este correo, ignóralo.</p>
    </div>
</body>
</html>


`

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido a KNEWS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #170c10;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .container {
            background-color: #dd9faf;
            padding: 20px;
            border-radius: 10px;
            max-width: 400px;
            margin: auto;
        }
        .header {
            font-size: 24px;
            font-weight: bold;
            color: #170c10;
        }
        .message {
            font-size: 18px;
            margin-top: 10px;
            color: #170c10;
        }
        .highlight {
            color: #f79aaf;
            font-weight: bold;
        }
        .user-info {
            background-color: #ffffff;
            color: #170c10;
            padding: 10px;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
            margin-top: 10px;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #170c10;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">¡Bienvenido a <span class="highlight">KNEWS</span>!</div>
        <p class="message">Hola, <span class="highlight">{username}</span>. Gracias por unirte a nuestra comunidad.</p>
        <p class="message">Tu cuenta ha sido creada con éxito.</p>
        <div class="user-info">
            ✉ Email: {email} <br>
            👤 Usuario: {username}
        </div>
        <p class="message">Ahora puedes explorar las últimas noticias y actualizaciones sobre <strong>Blackpink</strong> y mucho más.</p>
        <p class="message">Esperamos que disfrutes la experiencia.</p>
        <p class="footer">Si tienes preguntas, contáctanos. ¡Bienvenido a KNEWS!</p>
    </div>
</body>
</html>


`