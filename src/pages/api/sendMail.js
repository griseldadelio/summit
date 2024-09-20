import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, comments } = req.body;

    // Configura tu transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465, // O 587, dependiendo de tu servidor
      secure: true, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Aumenta el tiempo de espera
      connectionTimeout: 60000, // Tiempo de espera para establecer la conexión (en milisegundos)
      timeout: 60000, // Tiempo de espera para la respuesta completa del servidor
    });

    try {
      // Define los detalles del correo
      await transporter.sendMail({
        from: `"Summit GCP" <info@summitgcp.com>`, // El correo electrónico del usuario que envía el formulario
        to: process.env.RECIPIENT_EMAIL, // El correo electrónico de destino
        subject: `Nuevo mensaje de ${name}`,
        html: `
        <h1>Nuevo Mensaje de Contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p> <!-- Aquí incluyes el email del usuario -->
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Comentarios:</strong> ${comments}</p>
        
        `,
      });

      // Enviar respuesta de éxito
      res.status(200).json({ message: 'Correo enviado correctamente' });
    } catch (error) {
      console.log('Error al enviar el correo:', error); // Mostrar el error en la terminal
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    // Manejar métodos HTTP no permitidos
    res.status(405).json({ message: 'Método no permitido' });
  }
}
